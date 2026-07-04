import { Question } from "../data/questions";
import { UserProgress, WrongRecord } from "../data/userProgress";

export type QuizAnswer = number | number[] | string;

const normalizeFillAnswer = (value: string) =>
  value
    .trim()
    .replace(/\s+/g, "")
    .replace(/[，、；;]/g, "-")
    .replace(/[—–－_]+/g, "-")
    .replace(/[（）]/g, (mark) => (mark === "（" ? "(" : ")"))
    .replace(/毫米/g, "mm")
    .replace(/伏/g, "v")
    .toLowerCase()
    .replace(/(?<=\d)(mm|v|a|ma|mpa|bar|hz|s|ms)$/g, "");

const normalizeCncAnswer = (value: string) =>
  normalizeFillAnswer(value)
    .replace(/[，、;；]+/g, "-")
    .replace(/[—–－_]+/g, "-")
    .replace(/m0([3589])/g, "m$1")
    .replace(/g0([0123])/g, "g$1")
    .replace(/\.0(?=\D|$)/g, "");

const normalizeAnswer = (question: Question, value: string) =>
  question.category === "数控加工区" || question.area === "数控加工区" ? normalizeCncAnswer(value) : normalizeFillAnswer(value);

export const isTextAnswerQuestion = (question: Question) =>
  question.type === "填空题" ||
  question.type === "code_fill" ||
  question.type === "short_code" ||
  question.type === "code_order" ||
  question.type === "process_order" ||
  (question.options?.length ?? 0) === 0;

export const isCorrectAnswer = (question: Question, selectedIndex: QuizAnswer) => {
  if (isTextAnswerQuestion(question)) {
    if (typeof selectedIndex !== "string") return false;
    const actual = normalizeAnswer(question, selectedIndex);
    const answers = question.fillAnswers ?? question.acceptableAnswers ?? (question.answerText ? [question.answerText] : []);
    return answers.some((answer) => normalizeAnswer(question, answer) === actual);
  }
  if (Array.isArray(question.answerIndex)) {
    if (!Array.isArray(selectedIndex)) return false;
    const expected = [...question.answerIndex].sort().join(",");
    const actual = [...selectedIndex].sort().join(",");
    return expected === actual;
  }
  return question.answerIndex === selectedIndex;
};

export const formatAnswerText = (question: Question, answer: QuizAnswer | number | number[]) => {
  if (typeof answer === "string") return answer || "未填写";
  if (isTextAnswerQuestion(question)) return question.fillAnswers?.join(" / ") ?? question.answerText ?? "未设置";
  if (Array.isArray(answer)) return answer.map((index) => question.options[index]).join("；");
  return question.options[answer] ?? "未选择";
};

export const createWrongRecord = (
  question: Question,
  moduleName: string,
): WrongRecord => ({
  id: `${question.id}-${Date.now()}`,
  moduleName,
  question: question.text,
  correctAnswer: formatAnswerText(question, question.answerIndex),
  explanation: question.explanation,
  knowledgePoints: question.knowledgePoints ?? (question.knowledgePoint ? [question.knowledgePoint] : undefined),
});

export const applyLevelReward = (
  progress: UserProgress,
  levelId: string,
  reward: number,
  unlockedItemId?: string,
) => ({
  ...progress,
  xp: progress.completedLevels.includes(levelId) ? progress.xp : progress.xp + reward,
  completedLevels: progress.completedLevels.includes(levelId)
    ? progress.completedLevels
    : [...progress.completedLevels, levelId],
  unlockedItems:
    unlockedItemId && !progress.unlockedItems.includes(unlockedItemId)
      ? [...progress.unlockedItems, unlockedItemId]
      : progress.unlockedItems,
  recentLogs: [`完成关卡：${levelId}，获得 ${reward} XP`, ...progress.recentLogs].slice(0, 6),
});
