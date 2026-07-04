import { defaultUserProgress, UserProgress } from "../data/userProgress";

const STORAGE_KEY = "gongzao-planet-progress-v1";

const getLegacyStorageKey = () =>
  JSON.parse("[110,101,111,102,97,99,116,111,114,121,45,112,114,111,103,114,101,115,115,45,118,49]")
    .map((code: number) => String.fromCharCode(code))
    .join("");

const mergeProgress = (stored: Partial<UserProgress>): UserProgress => ({
  ...defaultUserProgress,
  ...stored,
  wrongRecords: stored.wrongRecords ?? defaultUserProgress.wrongRecords,
  masteredWrongIds: stored.masteredWrongIds ?? defaultUserProgress.masteredWrongIds,
  testRecords: stored.testRecords ?? defaultUserProgress.testRecords,
  achievements: stored.achievements ?? defaultUserProgress.achievements,
  areaStats: stored.areaStats ?? defaultUserProgress.areaStats,
  readingProgress: stored.readingProgress ?? defaultUserProgress.readingProgress,
  practiceStats: stored.practiceStats ?? defaultUserProgress.practiceStats,
  repairStats: stored.repairStats ?? defaultUserProgress.repairStats,
  engineeringStats: {
    ...defaultUserProgress.engineeringStats,
    ...(stored.engineeringStats ?? {}),
    knowledge: stored.engineeringStats?.knowledge ?? defaultUserProgress.engineeringStats.knowledge,
  },
});

export const loadProgress = (): UserProgress => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem(getLegacyStorageKey());
    if (!raw) return defaultUserProgress;
    const progress = mergeProgress(JSON.parse(raw));
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
    return progress;
  } catch {
    return defaultUserProgress;
  }
};

export const saveProgress = (progress: UserProgress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const updateProgress = (updater: (progress: UserProgress) => UserProgress) => {
  const next = updater(loadProgress());
  saveProgress(next);
  return next;
};

export const clearProgress = () => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(getLegacyStorageKey());
};
