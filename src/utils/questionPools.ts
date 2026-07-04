import { Question, questions } from "../data/questions";

export const stablePracticeModules = ["mechanics", "drawing", "tolerance", "process", "cnc", "electric", "sensor", "line"];

export const isQuestionUsable = (question: Question) => {
  if (!question.id || !question.text || !question.explanation) return false;
  const options = question.options ?? [];
  const textQuestion =
    options.length === 0 ||
    question.type === "填空题" ||
    question.type === "code_fill" ||
    question.type === "short_code" ||
    question.type === "code_order" ||
    question.type === "process_order";
  if (textQuestion) return Boolean(question.answerText || question.fillAnswers?.length || question.acceptableAnswers?.length);
  return options.length >= 2 && question.answerIndex !== undefined && question.answerIndex !== -1;
};

export const getQuestionsForModule = (moduleId: string) =>
  questions.filter((question) => question.levelId.startsWith(`${moduleId}-`) && isQuestionUsable(question));

export const getCncPoolStatus = () => {
  const raw = questions.filter((question) => question.levelId.startsWith("cnc-"));
  const usable = raw.filter(isQuestionUsable);
  const stable = raw.length >= 12 && usable.length === raw.length;
  return { rawCount: raw.length, usableCount: usable.length, stable };
};

export const pickNextQuestion = (pool: Question[], recentIds: string[]) => {
  const candidates = pool.filter((question) => !recentIds.slice(-8).includes(question.id));
  const source = candidates.length > 0 ? candidates : pool;
  return source[Math.floor(Math.random() * source.length)];
};
