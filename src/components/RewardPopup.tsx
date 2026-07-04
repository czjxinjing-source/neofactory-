import { motion } from "framer-motion";
import { Sparkles, Trophy } from "lucide-react";

type RewardPopupProps = {
  reward: number;
  onClose: () => void;
};

export const RewardPopup = ({ reward, onClose }: RewardPopupProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-sky-300/55 p-4 backdrop-blur-sm">
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="w-full max-w-md rounded-[30px] border-4 border-sky-900/20 bg-white p-6 text-center shadow-cartoon"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] border-4 border-orange-700/25 bg-amber-300 text-orange-800 shadow-soft">
        <Trophy className="h-8 w-8" />
      </div>
      <h2 className="mt-5 text-2xl font-black text-sky-950">任务完成</h2>
      <p className="mt-2 font-medium text-slate-700">设备修复进度已同步，训练记录已保存。</p>
      <div className="mt-5 flex items-center justify-center gap-2 rounded-[20px] border-4 border-violet-700/15 bg-violet-100 py-3 font-black text-violet-700">
        <Sparkles className="h-5 w-5" />
        获得 {reward} XP
      </div>
      <button
        onClick={onClose}
        className="cartoon-button mt-6 w-full px-4 py-3 font-black transition"
      >
        返回控制台
      </button>
    </motion.div>
  </div>
);
