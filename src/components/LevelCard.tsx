import { motion } from "framer-motion";
import { Play, Timer, Trophy } from "lucide-react";
import { Level } from "../data/levels";

type LevelCardProps = {
  level: Level;
  completed: boolean;
  onStart: (levelId: string) => void;
};

export const LevelCard = ({ level, completed, onStart }: LevelCardProps) => (
  <motion.article
    whileHover={{ y: -5, rotate: 0.4 }}
    className="rounded-[26px] border-4 border-sky-900/15 bg-white/88 p-5 shadow-cartoon"
  >
    <div className="mb-4 flex items-start justify-between gap-3">
      <div>
        <h3 className="font-black text-sky-950">{level.name}</h3>
        <p className="mt-1 text-xs font-bold text-orange-600">难度：{level.difficulty}</p>
      </div>
      <span className={`rounded-full border-2 px-2.5 py-1 text-xs font-black ${completed ? "border-emerald-700/25 bg-emerald-200 text-emerald-800" : "border-sky-700/25 bg-cyan-200 text-sky-900"}`}>
        {completed ? "已完成" : "待挑战"}
      </span>
    </div>
    <div className="grid gap-3 text-sm font-bold text-slate-700">
      <span className="flex items-center gap-2">
        <Timer className="h-4 w-4 text-cyan-700" />
        推荐 {level.time}
      </span>
      <span className="flex items-center gap-2">
        <Trophy className="h-4 w-4 text-violet-600" />
        奖励 {level.reward} XP
      </span>
    </div>
    <button
      onClick={() => onStart(level.id)}
      className="cartoon-button mt-5 flex w-full items-center justify-center gap-2 px-4 py-2.5 text-sm font-black transition"
    >
      <Play className="h-4 w-4" />
      开始任务
    </button>
  </motion.article>
);
