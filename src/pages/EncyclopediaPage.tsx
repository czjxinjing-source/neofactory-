import { motion } from "framer-motion";
import { EncyclopediaCard } from "../components/EncyclopediaCard";
import { encyclopedia } from "../data/encyclopedia";
import { UserProgress } from "../data/userProgress";

type EncyclopediaPageProps = {
  userProgress: UserProgress;
};

export const EncyclopediaPage = ({ userProgress }: EncyclopediaPageProps) => (
  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
    <div>
      <h1 className="text-3xl font-semibold text-white">设备零件图鉴</h1>
      <p className="mt-2 text-sm text-slate-400">完成关卡后逐步解锁智能工厂设备资料。</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {encyclopedia.map((item) => (
        <EncyclopediaCard
          key={item.id}
          item={item}
          unlocked={item.unlocked || userProgress.unlockedItems.includes(item.id)}
        />
      ))}
    </div>
  </motion.div>
);
