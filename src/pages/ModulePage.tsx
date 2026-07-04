import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, BookOpenCheck, Cpu, Factory, GraduationCap, Wrench } from "lucide-react";
import { LevelCard } from "../components/LevelCard";
import { PracticeMode } from "../components/PracticeMode";
import { ProgressBar } from "../components/ProgressBar";
import { ReadingCardSwiper } from "../components/ReadingCardSwiper";
import { RepairChallengeMode } from "../components/RepairChallengeMode";
import { levels } from "../data/levels";
import { LearningModule } from "../data/modules";
import { UserProgress } from "../data/userProgress";
import { getModuleProgress } from "../utils/progress";

type ModulePageProps = {
  module: LearningModule;
  userProgress: UserProgress;
  onBack: () => void;
  onStartLevel: (levelId: string) => void;
  onProgressChange: (progress: UserProgress) => void;
  initialMode?: ModuleMode;
};

type ModuleMode = "reading" | "practice" | "repair" | "levels";

export const ModulePage = ({ module, userProgress, onBack, onStartLevel, onProgressChange, initialMode = "reading" }: ModulePageProps) => {
  const [mode, setMode] = useState<ModuleMode>(initialMode);
  const Icon = module.icon;
  const moduleLevels = levels.filter((level) => level.moduleId === module.id);
  const progress = getModuleProgress(module.progress, module.id, userProgress);
  const modeItems: { id: ModuleMode; label: string; icon: typeof BookOpenCheck }[] = [
    { id: "reading", label: "资料阅读", icon: BookOpenCheck },
    { id: "practice", label: "自由训练", icon: GraduationCap },
    { id: "repair", label: "实际维修", icon: Wrench },
    { id: "levels", label: "关卡任务", icon: Factory },
  ];

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode, module.id]);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-cyan-100 hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        返回总控台
      </button>
      <section className="rounded-lg border border-cyan-300/20 bg-white/[0.07] p-6 shadow-glow backdrop-blur-xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-cyan-300/35 bg-cyan-300/10 text-cyan-100">
              <Icon className="h-7 w-7" />
            </span>
            <div>
              <p className="text-sm text-cyan-200/80">{module.subtitle}</p>
              <h1 className="mt-1 text-3xl font-semibold text-white">{module.name}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{module.description}</p>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/45 p-4 md:min-w-72">
            <div className="mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <Factory className="h-4 w-4 text-cyan-200" />
                设备状态
              </span>
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-xs text-cyan-100">
                {module.status}
              </span>
            </div>
            <ProgressBar value={progress} label="当前模块进度" tone={module.color as "cyan" | "blue" | "violet"} />
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <Cpu className="h-4 w-4 text-violet-200" />
              诊断终端已连接
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-3 md:grid-cols-4">
        {modeItems.map((item) => {
          const ItemIcon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setMode(item.id)}
              className={`flex items-center justify-center gap-2 rounded-[18px] border-4 px-4 py-3 text-sm font-black shadow-soft transition ${
                mode === item.id
                  ? "border-orange-700/30 bg-amber-200 text-orange-900"
                  : "border-sky-900/10 bg-white/85 text-sky-900 hover:bg-sky-50"
              }`}
            >
              <ItemIcon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </section>

      {mode === "reading" && <ReadingCardSwiper module={module} userProgress={userProgress} onProgressChange={onProgressChange} />}
      {mode === "practice" && <PracticeMode module={module} userProgress={userProgress} onProgressChange={onProgressChange} />}
      {mode === "repair" && <RepairChallengeMode module={module} onProgressChange={onProgressChange} />}
      {mode === "levels" && (
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">关卡任务</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {moduleLevels.map((level) => (
              <LevelCard
                key={level.id}
                level={level}
                completed={userProgress.completedLevels.includes(level.id)}
                onStart={onStartLevel}
              />
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
};
