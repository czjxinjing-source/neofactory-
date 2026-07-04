import { Question } from "../data/questions";

export type PracticeFilters = {
  knowledgePoint?: string;
  difficulty?: string;
  partType?: string;
  drawingPartTypeById?: Record<string, string>;
};

export type PracticeSetResult = {
  questions: Question[];
  stats: {
    total: number;
    uniqueQuestionCount: number;
    uniqueDrawingCount: number;
    drawingUsage: Record<string, number>;
    knowledgePointDistribution: Record<string, number>;
    typeDistribution: Record<string, number>;
    answerDistribution: Record<string, number>;
    noImageQuestionCount: number;
  };
  warnings: string[];
};

const shuffle = <T,>(items: T[]) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const getPrimaryKnowledge = (question: Question) => question.knowledgePoints?.[0] ?? "未分类";
const getAnswerKey = (question: Question) => {
  if (Array.isArray(question.answerIndex)) return question.answerIndex.map((index) => "ABCD"[index]).join("+");
  return "ABCD"[question.answerIndex] ?? "未知";
};

const canAppend = (
  selected: Question[],
  candidate: Question,
  drawingUsage: Record<string, number>,
  maxPerDrawing: number,
  maxSameKnowledgePointStreak: number,
  maxSameTypeStreak: number,
  maxSameAnswerStreak: number,
  noImageCount: number,
) => {
  const drawingId = candidate.drawingId ?? "NO_IMAGE";
  if (selected.some((item) => item.id === candidate.id)) return false;
  if (drawingId === "NO_IMAGE" && noImageCount >= 3) return false;
  if (drawingId !== "NO_IMAGE" && (drawingUsage[drawingId] ?? 0) >= maxPerDrawing) return false;
  const previous = selected[selected.length - 1];
  if (previous?.drawingId && previous.drawingId === candidate.drawingId) return false;
  const recentAnswers = selected.slice(-maxSameAnswerStreak);
  if (
    recentAnswers.length >= maxSameAnswerStreak &&
    recentAnswers.every((item) => getAnswerKey(item) === getAnswerKey(candidate))
  ) {
    return false;
  }

  const recentKnowledge = selected.slice(-maxSameKnowledgePointStreak);
  if (
    recentKnowledge.length >= maxSameKnowledgePointStreak &&
    recentKnowledge.every((item) => getPrimaryKnowledge(item) === getPrimaryKnowledge(candidate))
  ) {
    return false;
  }

  const recentTypes = selected.slice(-maxSameTypeStreak);
  if (
    recentTypes.length >= maxSameTypeStreak &&
    recentTypes.every((item) => item.type === candidate.type)
  ) {
    return false;
  }
  return true;
};

const buildStats = (selected: Question[]) => {
  const drawingUsage: Record<string, number> = {};
  const knowledgePointDistribution: Record<string, number> = {};
  const typeDistribution: Record<string, number> = {};
  const answerDistribution: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  let noImageQuestionCount = 0;

  for (const question of selected) {
    const drawingId = question.drawingId ?? "NO_IMAGE";
    if (drawingId === "NO_IMAGE") noImageQuestionCount += 1;
    else drawingUsage[drawingId] = (drawingUsage[drawingId] ?? 0) + 1;
    for (const point of question.knowledgePoints ?? ["未分类"]) {
      knowledgePointDistribution[point] = (knowledgePointDistribution[point] ?? 0) + 1;
    }
    const type = question.type ?? "single_choice";
    typeDistribution[type] = (typeDistribution[type] ?? 0) + 1;
    const answer = getAnswerKey(question);
    answerDistribution[answer] = (answerDistribution[answer] ?? 0) + 1;
  }

  return {
    total: selected.length,
    uniqueQuestionCount: new Set(selected.map((item) => item.id)).size,
    uniqueDrawingCount: Object.keys(drawingUsage).length,
    drawingUsage,
    knowledgePointDistribution,
    typeDistribution,
    answerDistribution,
    noImageQuestionCount,
  };
};

const pickBalancedCandidate = (
  bucket: Question[],
  selected: Question[],
  drawingUsage: Record<string, number>,
  answerUsage: Record<string, number>,
  maxPerDrawing: number,
  maxSameKnowledgePointStreak: number,
  maxSameTypeStreak: number,
  maxSameAnswerStreak: number,
  noImageCount: number,
) => {
  const candidates = bucket.filter((candidate) =>
    canAppend(selected, candidate, drawingUsage, maxPerDrawing, maxSameKnowledgePointStreak, maxSameTypeStreak, maxSameAnswerStreak, noImageCount),
  );
  candidates.sort((a, b) => {
    const answerDiff = (answerUsage[getAnswerKey(a)] ?? 0) - (answerUsage[getAnswerKey(b)] ?? 0);
    if (answerDiff !== 0) return answerDiff;
    const knowledgeDiff =
      selected.filter((item) => getPrimaryKnowledge(item) === getPrimaryKnowledge(a)).length -
      selected.filter((item) => getPrimaryKnowledge(item) === getPrimaryKnowledge(b)).length;
    return knowledgeDiff;
  });
  return candidates[0];
};

export function generatePracticeSet({
  questions,
  count = 12,
  filters = {},
  maxPerDrawing = 2,
  minUniqueDrawings = 8,
  maxSameKnowledgePointStreak = 3,
  maxSameTypeStreak = 4,
  maxSameAnswerStreak = 2,
}: {
  questions: Question[];
  count?: number;
  filters?: PracticeFilters;
  maxPerDrawing?: number;
  minUniqueDrawings?: number;
  avoidSameDrawingAdjacent?: boolean;
  maxSameKnowledgePointStreak?: number;
  maxSameTypeStreak?: number;
  maxSameAnswerStreak?: number;
}): PracticeSetResult {
  const warnings: string[] = [];
  const filtered = questions
    .filter((question) => question.levelId.startsWith("drawing-"))
    .filter((question) => !filters.knowledgePoint || filters.knowledgePoint === "全部" || question.knowledgePoints?.includes(filters.knowledgePoint))
    .filter((question) => !filters.difficulty || filters.difficulty === "全部" || question.difficulty === filters.difficulty)
    .filter((question) => {
      if (!filters.partType || filters.partType === "全部") return true;
      if (!question.drawingId) return false;
      return filters.drawingPartTypeById?.[question.drawingId] === filters.partType;
    });

  if (filtered.length < count) {
    warnings.push(`当前筛选条件下只有 ${filtered.length} 道题，已返回可用题目，不进行重复硬凑。`);
  }

  const imageDrawings = new Set(filtered.filter((item) => item.drawingId).map((item) => item.drawingId));
  if (imageDrawings.size < minUniqueDrawings && filtered.length >= count) {
    warnings.push(`当前筛选条件下只有 ${imageDrawings.size} 张不同工程图，无法满足至少 ${minUniqueDrawings} 张不同图纸的要求。`);
  }

  const byDrawing = new Map<string, Question[]>();
  for (const question of shuffle(filtered)) {
    const key = question.drawingId ?? "NO_IMAGE";
    byDrawing.set(key, [...(byDrawing.get(key) ?? []), question]);
  }

  const selected: Question[] = [];
  const drawingUsage: Record<string, number> = {};
  const answerUsage: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  let noImageCount = 0;
  let drawingOrder = shuffle([...byDrawing.keys()].filter((key) => key !== "NO_IMAGE"));
  let pass = 1;

  while (selected.length < Math.min(count, filtered.length)) {
    let added = false;
    if (drawingOrder.length === 0) drawingOrder = shuffle([...byDrawing.keys()].filter((key) => key !== "NO_IMAGE"));

    for (const drawingId of [...drawingOrder]) {
      if ((drawingUsage[drawingId] ?? 0) >= pass) continue;
      const bucket = byDrawing.get(drawingId) ?? [];
      const candidate = pickBalancedCandidate(
        bucket,
        selected,
        drawingUsage,
        answerUsage,
        maxPerDrawing,
        maxSameKnowledgePointStreak,
        maxSameTypeStreak,
        maxSameAnswerStreak,
        noImageCount,
      );
      const candidateIndex = candidate ? bucket.findIndex((item) => item.id === candidate.id) : -1;
      if (candidateIndex >= 0) {
        const [picked] = bucket.splice(candidateIndex, 1);
        selected.push(picked);
        drawingUsage[drawingId] = (drawingUsage[drawingId] ?? 0) + 1;
        const answer = getAnswerKey(picked);
        answerUsage[answer] = (answerUsage[answer] ?? 0) + 1;
        drawingOrder = drawingOrder.filter((id) => id !== drawingId);
        added = true;
        break;
      }
    }

    if (!added) {
      if (pass < maxPerDrawing) {
        pass += 1;
        drawingOrder = shuffle([...byDrawing.keys()].filter((key) => key !== "NO_IMAGE"));
        continue;
      }
      const fallback = shuffle(filtered).find((candidate) =>
        canAppend(selected, candidate, drawingUsage, maxPerDrawing, maxSameKnowledgePointStreak, maxSameTypeStreak, maxSameAnswerStreak, noImageCount),
      );
      if (!fallback) break;
      selected.push(fallback);
      if (fallback.drawingId) drawingUsage[fallback.drawingId] = (drawingUsage[fallback.drawingId] ?? 0) + 1;
      else noImageCount += 1;
      const answer = getAnswerKey(fallback);
      answerUsage[answer] = (answerUsage[answer] ?? 0) + 1;
    }
  }

  const stats = buildStats(selected);
  if (stats.uniqueDrawingCount < minUniqueDrawings && selected.length >= count) {
    warnings.push(`本轮仅使用 ${stats.uniqueDrawingCount} 张不同工程图，低于目标 ${minUniqueDrawings} 张。`);
  }
  const maxRepeat = Math.max(0, ...Object.values(stats.drawingUsage));
  if (maxRepeat > maxPerDrawing) {
    warnings.push(`本轮有工程图出现 ${maxRepeat} 次，超过上限 ${maxPerDrawing} 次。`);
  }
  const singleAnswers = ["A", "B", "C", "D"].map((key) => stats.answerDistribution[key] ?? 0);
  if (Math.max(...singleAnswers) - Math.min(...singleAnswers) > 2) {
    warnings.push(`本轮答案分布不够均匀：A${stats.answerDistribution.A ?? 0} / B${stats.answerDistribution.B ?? 0} / C${stats.answerDistribution.C ?? 0} / D${stats.answerDistribution.D ?? 0}。`);
  }

  return { questions: selected, stats, warnings };
}
