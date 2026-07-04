import { motion } from "framer-motion";
import { ArrowRight, RadioTower } from "lucide-react";
import { LearningModule } from "../data/modules";
import { UserProgress } from "../data/userProgress";
import { getModuleProgress } from "../utils/progress";
import { ProgressBar } from "./ProgressBar";

type ModuleCardProps = {
  module: LearningModule;
  userProgress: UserProgress;
  onEnter: (moduleId: string) => void;
};

const statusClass = {
  待修复: "border-orange-700/25 bg-orange-200 text-orange-800",
  维修中: "border-sky-700/25 bg-cyan-200 text-sky-900",
  已修复: "border-emerald-700/25 bg-emerald-200 text-emerald-800",
};

export const ModuleCard = ({ module, userProgress, onEnter }: ModuleCardProps) => {
  const Icon = module.icon;
  const progress = getModuleProgress(module.progress, module.id, userProgress);

  return (
    <motion.article
      whileHover={{ y: -6, rotate: -0.5, scale: 1.015 }}
      className="group relative overflow-hidden rounded-[28px] border-4 border-sky-900/15 bg-white/88 p-5 shadow-cartoon"
    >
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-200/70" />
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-[20px] border-4 border-sky-900/15 bg-gradient-to-b from-cyan-200 to-sky-300 text-sky-900 shadow-soft">
            <Icon className="h-7 w-7" />
          </span>
          <div>
            <h3 className="font-black text-sky-950">{module.name}</h3>
            <p className="text-xs font-bold text-orange-600">{module.subtitle}</p>
          </div>
        </div>
        <span className={`rounded-full border-2 px-2.5 py-1 text-xs font-black ${statusClass[module.status]}`}>
          {module.status}
        </span>
      </div>
      <p className="min-h-12 text-sm font-medium leading-6 text-slate-700">{module.description}</p>
      <div className="mt-5">
        <ProgressBar value={progress} label="学习进度" tone={module.color as "cyan" | "blue" | "violet"} />
      </div>
      <button
        onClick={() => onEnter(module.id)}
        className="cartoon-button mt-5 flex w-full items-center justify-center gap-2 px-4 py-2.5 text-sm font-black transition"
      >
        <RadioTower className="h-4 w-4" />
        进入区域
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </button>
    </motion.article>
  );
};
