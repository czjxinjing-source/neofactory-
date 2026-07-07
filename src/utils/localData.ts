import { modules } from "../data/modules";
import { Question } from "../data/questions";
import { AreaStat, TestRecord, UserProgress, WrongRecord } from "../data/userProgress";
import { clearProgress, loadProgress, saveProgress, updateProgress } from "./storage";
import { formatAnswerText, QuizAnswer } from "./quiz";

export type PendingAnswer = {
  question: Question;
  selectedIndex: QuizAnswer;
  correct: boolean;
};

export type CompleteTestInput = {
  moduleId: string;
  moduleName: string;
  levelId: string;
  answers: PendingAnswer[];
  durationSeconds: number;
  repairAttempt?: boolean;
};

export type TestSettlement = {
  progress: UserProgress;
  record: TestRecord;
  achievementsUnlocked: string[];
  repairCompleted: boolean;
};

const dedupeWrongRecords = (records: WrongRecord[]) => {
  const seen = new Set<string>();
  return records.filter((record) => {
    const key = `${record.questionId ?? record.question}-${record.moduleId ?? record.moduleName}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const getAchievements = (next: UserProgress, record: TestRecord, maxStreak: number, repairCompleted: boolean) => {
  const unlocked: string[] = [];
  if (next.testRecords.length === 1) unlocked.push("第一次完成测试");
  if (record.moduleId === "drawing" && record.correct >= 8) unlocked.push("工程制图入门");
  if (maxStreak >= 5) unlocked.push("连续答对 5 题");
  if (record.correct === record.total) unlocked.push("一次测试满分");
  if (repairCompleted) unlocked.push("修好第一次工厂故障");
  return unlocked.filter((item) => !next.achievements.includes(item));
};

const getMaxStreak = (answers: PendingAnswer[]) => {
  let max = 0;
  let current = 0;
  for (const answer of answers) {
    current = answer.correct ? current + 1 : 0;
    max = Math.max(max, current);
  }
  return max;
};

export const getUserProfile = () => loadProgress();

export const saveUserProfile = (progress: UserProgress) => {
  saveProgress(progress);
  return progress;
};

export const getWrongBook = () => loadProgress().wrongRecords;

export const addWrongQuestion = (record: WrongRecord) =>
  updateProgress((progress) => ({
    ...progress,
    wrongRecords: dedupeWrongRecords([record, ...progress.wrongRecords]).slice(0, 120),
  }));

export const addTestRecord = (record: TestRecord) =>
  updateProgress((progress) => ({
    ...progress,
    testRecords: [record, ...progress.testRecords].slice(0, 80),
  }));

export const updateExperience = (xp: number) =>
  updateProgress((progress) => ({
    ...progress,
    xp: Math.max(0, progress.xp + xp),
  }));

export const clearUserData = () => {
  clearProgress();
  return loadProgress();
};

export const clearWrongBook = () =>
  updateProgress((progress) => ({
    ...progress,
    wrongRecords: [],
    masteredWrongIds: [],
  }));

export const markWrongMastered = (id: string) =>
  updateProgress((progress) => ({
    ...progress,
    masteredWrongIds: progress.masteredWrongIds.includes(id) ? progress.masteredWrongIds : [...progress.masteredWrongIds, id],
    wrongRecords: progress.wrongRecords.map((record) => (record.id === id ? { ...record, mastered: true } : record)),
  }));

export const ensureRepairEvent = (progress: UserProgress) => {
  if (progress.repairEvent?.status === "active") return progress;
  const todayKey = new Date().toISOString().slice(0, 13);
  const index = Math.abs([...todayKey].reduce((sum, char) => sum + char.charCodeAt(0), 0)) % modules.length;
  const module = modules[index];
  const next: UserProgress = {
    ...progress,
    repairEvent: {
      moduleId: module.id,
      status: "active",
      message: `${module.name} 出现异常，需要完成一次诊断挑战。`,
      startedAt: new Date().toISOString(),
    },
  };
  saveProgress(next);
  return next;
};

export const completeTest = (input: CompleteTestInput): TestSettlement => {
  const progress = loadProgress();
  const total = input.answers.length;
  const correct = input.answers.filter((item) => item.correct).length;
  const wrong = total - correct;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const repairCompleted = Boolean(
    input.repairAttempt &&
      progress.repairEvent?.status === "active" &&
      progress.repairEvent.moduleId === input.moduleId &&
      total >= 12,
  );
  const baseXp = 5;
  const correctBonus = Math.floor(correct / 3);
  const wrongPenalty = Math.min(wrong, 4);
  const xpEarned = Math.max(
    1,
    baseXp + correctBonus + (accuracy >= 80 ? 2 : 0) + (correct === total ? 5 : 0) + (repairCompleted ? 3 : 0) - wrongPenalty,
  );
  const record: TestRecord = {
    id: `test-${Date.now()}`,
    date: new Date().toISOString(),
    moduleId: input.moduleId,
    moduleName: input.moduleName,
    score: correct,
    total,
    correct,
    wrong,
    accuracy,
    durationSeconds: input.durationSeconds,
    xpEarned,
    repairBonus: repairCompleted,
  };
  const wrongRecords: WrongRecord[] = input.answers
    .filter((answer) => !answer.correct)
    .map((answer) => ({
      id: `${answer.question.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      questionId: answer.question.id,
      moduleId: input.moduleId,
      moduleName: input.moduleName,
      question: answer.question.text,
      userAnswer: formatAnswerText(answer.question, answer.selectedIndex),
      correctAnswer: formatAnswerText(answer.question, answer.question.answerIndex),
      explanation: answer.question.explanation,
      knowledgePoints: answer.question.knowledgePoints ?? (answer.question.knowledgePoint ? [answer.question.knowledgePoint] : undefined),
      createdAt: new Date().toISOString(),
      mastered: false,
    }));
  const previousArea: AreaStat = progress.areaStats[input.moduleId] ?? { tests: 0, total: 0, correct: 0, wrong: 0 };
  const knowledge = { ...(progress.engineeringStats?.knowledge ?? {}) };
  if (input.moduleId === "drawing") {
    for (const answer of input.answers) {
      for (const point of answer.question.knowledgePoints ?? []) {
        const current = knowledge[point] ?? { attempts: 0, correct: 0 };
        knowledge[point] = {
          attempts: current.attempts + 1,
          correct: current.correct + (answer.correct ? 1 : 0),
        };
      }
    }
  }
  let next: UserProgress = {
    ...progress,
    xp: progress.xp + xpEarned,
    completedLevels: progress.completedLevels.includes(input.levelId)
      ? progress.completedLevels
      : [...progress.completedLevels, input.levelId],
    unlockedItems: input.moduleId === "drawing" && !progress.unlockedItems.includes("caliper")
      ? [...progress.unlockedItems, "caliper"]
      : progress.unlockedItems,
    testRecords: [record, ...progress.testRecords].slice(0, 80),
    wrongRecords: dedupeWrongRecords([...wrongRecords, ...progress.wrongRecords]).slice(0, 120),
    areaStats: {
      ...progress.areaStats,
      [input.moduleId]: {
        tests: previousArea.tests + 1,
        total: previousArea.total + total,
        correct: previousArea.correct + correct,
        wrong: previousArea.wrong + wrong,
      },
    },
    engineeringStats:
      input.moduleId === "drawing"
        ? {
            attempts: (progress.engineeringStats?.attempts ?? 0) + total,
            correct: (progress.engineeringStats?.correct ?? 0) + correct,
            knowledge,
          }
        : progress.engineeringStats,
    repairEvent: repairCompleted
      ? {
          moduleId: input.moduleId,
          status: "completed",
          message: `${input.moduleName} 已恢复正常，本次维修完成。`,
          startedAt: progress.repairEvent?.startedAt ?? new Date().toISOString(),
          completedAt: new Date().toISOString(),
        }
      : progress.repairEvent,
    recentLogs: [
      `${input.moduleName} 完成本轮诊断：${correct}/${total}，获得 ${xpEarned} XP`,
      ...(repairCompleted ? [`${input.moduleName} 维修完成，额外获得 3 XP`] : []),
      ...progress.recentLogs,
    ].slice(0, 8),
  };
  const achievementsUnlocked = getAchievements(next, record, getMaxStreak(input.answers), repairCompleted);
  next = {
    ...next,
    achievements: [...next.achievements, ...achievementsUnlocked],
  };
  saveProgress(next);
  return { progress: next, record, achievementsUnlocked, repairCompleted };
};
