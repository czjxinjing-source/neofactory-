export type WrongRecord = {
  id: string;
  questionId?: string;
  moduleId?: string;
  moduleName: string;
  question: string;
  userAnswer?: string;
  correctAnswer: string;
  explanation: string;
  knowledgePoints?: string[];
  createdAt?: string;
  mastered?: boolean;
};

export type TestRecord = {
  id: string;
  date: string;
  moduleId: string;
  moduleName: string;
  score: number;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
  durationSeconds: number;
  xpEarned: number;
  repairBonus: boolean;
};

export type AreaStat = {
  tests: number;
  total: number;
  correct: number;
  wrong: number;
};

export type ReadingProgress = {
  currentIndex: number;
  readCardIds: string[];
};

export type PracticeStat = {
  attempted: number;
  correct: number;
  wrong: number;
  skipped: number;
  revealed: number;
};

export type RepairStat = {
  attempts: number;
  success: number;
  failed: number;
  abandoned: number;
  xpGained: number;
  xpLost: number;
  weakPoints: Record<string, number>;
};

export type RepairEvent = {
  moduleId: string;
  status: "active" | "completed";
  message: string;
  startedAt: string;
  completedAt?: string;
};

export type UserProgress = {
  nickname: string;
  avatar?: string;
  role: string;
  xp: number;
  completedLevels: string[];
  unlockedItems: string[];
  wrongRecords: WrongRecord[];
  masteredWrongIds: string[];
  testRecords: TestRecord[];
  achievements: string[];
  repairEvent?: RepairEvent;
  areaStats: Record<string, AreaStat>;
  readingProgress: Record<string, ReadingProgress>;
  practiceStats: Record<string, PracticeStat>;
  repairStats: Record<string, RepairStat>;
  recentLogs: string[];
  engineeringStats: {
    attempts: number;
    correct: number;
    knowledge: Record<string, { attempts: number; correct: number }>;
  };
};

export const defaultUserProgress: UserProgress = {
  nickname: "工造探索者",
  role: "机械学徒",
  xp: 0,
  completedLevels: [],
  unlockedItems: ["gear", "bearing", "plc"],
  wrongRecords: [],
  masteredWrongIds: [],
  testRecords: [],
  achievements: [],
  repairEvent: undefined,
  areaStats: {},
  readingProgress: {},
  practiceStats: {},
  repairStats: {},
  recentLogs: ["登陆工造星球控制台", "扫描工厂设备状态", "等待新的维修事件"],
  engineeringStats: {
    attempts: 0,
    correct: 0,
    knowledge: {},
  },
};
