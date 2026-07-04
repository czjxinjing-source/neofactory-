import { modules } from "../data/modules";
import { UserProgress } from "../data/userProgress";

const levelThresholds = [0, 30, 70, 120, 190, 280, 390, 520, 670, 840];

export const xpForLevel = (level: number) => {
  const currentTotal = levelThresholds[level - 1] ?? levelThresholds[levelThresholds.length - 1] + (level - levelThresholds.length) * 200;
  const nextTotal = levelThresholds[level] ?? currentTotal + 200 + level * 20;
  return nextTotal - currentTotal;
};

export const getLevelInfo = (xp: number) => {
  let level = 1;
  while (xp >= (levelThresholds[level] ?? levelThresholds[levelThresholds.length - 1] + (level - levelThresholds.length + 1) * 200)) {
    level += 1;
  }
  const currentTotal = levelThresholds[level - 1] ?? 0;
  const nextTotal = levelThresholds[level] ?? currentTotal + xpForLevel(level);
  const currentXp = Math.max(0, xp - currentTotal);
  const nextXp = nextTotal - currentTotal;
  return {
    level,
    currentXp,
    nextXp,
    toNext: Math.max(0, nextTotal - xp),
    percent: Math.min(100, Math.round((currentXp / nextXp) * 100)),
  };
};

export const getFactoryRepairRate = (progress: UserProgress) => {
  const completedImpact = progress.completedLevels.length * 6;
  const base = modules.reduce((sum, item) => sum + item.progress, 0) / modules.length;
  return Math.min(100, Math.round(base + completedImpact));
};

export const getModuleProgress = (moduleProgress: number, moduleId: string, progress: UserProgress) => {
  const completedInModule = progress.completedLevels.filter((id) => id.startsWith(moduleId)).length;
  return Math.min(100, moduleProgress + completedInModule * 18);
};
