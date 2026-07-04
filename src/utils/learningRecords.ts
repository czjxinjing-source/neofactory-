import { Question } from "../data/questions";
import { PracticeStat, RepairStat, UserProgress, WrongRecord } from "../data/userProgress";
import { formatAnswerText, QuizAnswer } from "./quiz";
import { loadProgress, saveProgress, updateProgress } from "./storage";

const dedupe = <T extends { id: string }>(items: T[]) => {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
};

const defaultPracticeStat: PracticeStat = {
  attempted: 0,
  correct: 0,
  wrong: 0,
  skipped: 0,
  revealed: 0,
};

const defaultRepairStat: RepairStat = {
  attempts: 0,
  success: 0,
  failed: 0,
  abandoned: 0,
  xpGained: 0,
  xpLost: 0,
  weakPoints: {},
};

export const markReadingCard = (moduleId: string, currentIndex: number, cardId: string) =>
  updateProgress((progress) => {
    const current = progress.readingProgress[moduleId] ?? { currentIndex: 0, readCardIds: [] };
    return {
      ...progress,
      readingProgress: {
        ...progress.readingProgress,
        [moduleId]: {
          currentIndex,
          readCardIds: current.readCardIds.includes(cardId) ? current.readCardIds : [...current.readCardIds, cardId],
        },
      },
    };
  });

export const saveReadingIndex = (moduleId: string, currentIndex: number) =>
  updateProgress((progress) => {
    const current = progress.readingProgress[moduleId] ?? { currentIndex: 0, readCardIds: [] };
    return {
      ...progress,
      readingProgress: {
        ...progress.readingProgress,
        [moduleId]: { ...current, currentIndex },
      },
    };
  });

const wrongRecordFromQuestion = (
  question: Question,
  moduleId: string,
  moduleName: string,
  selectedIndex: QuizAnswer,
  reason: "答错" | "跳过" | "看答案",
): WrongRecord => ({
  id: `${reason}-${moduleId}-${question.id}`,
  questionId: question.id,
  moduleId,
  moduleName,
  question: question.text,
  userAnswer: reason === "答错" ? formatAnswerText(question, selectedIndex) : reason,
  correctAnswer: formatAnswerText(question, question.answerIndex),
  explanation: question.explanation,
  knowledgePoints: question.knowledgePoints ?? (question.knowledgePoint ? [question.knowledgePoint] : undefined),
  createdAt: new Date().toISOString(),
  mastered: false,
});

export const recordPracticeAction = (input: {
  moduleId: string;
  moduleName: string;
  question?: Question;
  selectedIndex?: QuizAnswer;
  action: "correct" | "wrong" | "skipped" | "revealed";
}) =>
  updateProgress((progress) => {
    const current = progress.practiceStats[input.moduleId] ?? defaultPracticeStat;
    const nextStat: PracticeStat = {
      attempted: current.attempted + (input.action === "correct" || input.action === "wrong" ? 1 : 0),
      correct: current.correct + (input.action === "correct" ? 1 : 0),
      wrong: current.wrong + (input.action === "wrong" ? 1 : 0),
      skipped: current.skipped + (input.action === "skipped" ? 1 : 0),
      revealed: current.revealed + (input.action === "revealed" ? 1 : 0),
    };
    const shouldRecord = Boolean(input.question && (input.action === "wrong" || input.action === "skipped" || input.action === "revealed"));
    const wrongRecords = shouldRecord
      ? dedupe([
          wrongRecordFromQuestion(
            input.question as Question,
            input.moduleId,
            input.moduleName,
            input.selectedIndex ?? -1,
            input.action === "wrong" ? "答错" : input.action === "skipped" ? "跳过" : "看答案",
          ),
          ...progress.wrongRecords,
        ]).slice(0, 160)
      : progress.wrongRecords;
    return {
      ...progress,
      practiceStats: {
        ...progress.practiceStats,
        [input.moduleId]: nextStat,
      },
      wrongRecords,
      recentLogs: [`${input.moduleName}自由训练：${input.action}`, ...progress.recentLogs].slice(0, 8),
    };
  });

export const settleRepairChallenge = (input: {
  moduleId: string;
  moduleName: string;
  answers: { question: Question; selectedIndex: QuizAnswer; correct: boolean }[];
  abandoned?: boolean;
}) => {
  const progress = loadProgress();
  const total = input.answers.length;
  const correct = input.answers.filter((item) => item.correct).length;
  const wrong = total - correct;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const success = !input.abandoned && total > 0 && accuracy >= 70;
  const streakBonus = input.answers.reduce(
    (state, answer) => {
      const streak = answer.correct ? state.streak + 1 : 0;
      return { streak, bonus: state.bonus + (streak > 0 && streak % 3 === 0 ? 1 : 0) };
    },
    { streak: 0, bonus: 0 },
  ).bonus;
  const gained = input.abandoned ? 0 : correct * 2 + streakBonus + (success ? 5 : 0);
  const lost = input.abandoned ? 6 : wrong * 2 + (success ? 0 : 3);
  const xpDelta = gained - lost;
  const current = progress.repairStats[input.moduleId] ?? defaultRepairStat;
  const weakPoints = { ...current.weakPoints };
  for (const answer of input.answers.filter((item) => !item.correct)) {
    for (const point of answer.question.knowledgePoints ?? [answer.question.knowledgePoint ?? "未分类"]) {
      weakPoints[point] = (weakPoints[point] ?? 0) + 1;
    }
  }
  const wrongRecords = dedupe([
    ...input.answers
      .filter((item) => !item.correct)
      .map((item) => wrongRecordFromQuestion(item.question, input.moduleId, input.moduleName, item.selectedIndex, "答错")),
    ...progress.wrongRecords,
  ]).slice(0, 160);
  const next: UserProgress = {
    ...progress,
    xp: Math.max(0, progress.xp + xpDelta),
    wrongRecords,
    repairStats: {
      ...progress.repairStats,
      [input.moduleId]: {
        attempts: current.attempts + 1,
        success: current.success + (success ? 1 : 0),
        failed: current.failed + (!success && !input.abandoned ? 1 : 0),
        abandoned: current.abandoned + (input.abandoned ? 1 : 0),
        xpGained: current.xpGained + gained,
        xpLost: current.xpLost + lost,
        weakPoints,
      },
    },
    recentLogs: [
      input.abandoned
        ? `${input.moduleName}维修任务中途退出，扣除 ${lost} XP`
        : `${input.moduleName}维修${success ? "成功" : "失败"}：${correct}/${total}，经验${xpDelta >= 0 ? "+" : ""}${xpDelta}`,
      ...progress.recentLogs,
    ].slice(0, 8),
  };
  saveProgress(next);
  return { progress: next, success, accuracy, gained, lost, xpDelta, correct, wrong, total };
};
