import { motion } from "framer-motion";
import { HardHat, Wrench } from "lucide-react";

export const CartoonFactoryHero = () => (
  <div className="relative min-h-[280px] overflow-hidden rounded-[28px] border-4 border-sky-900/20 bg-gradient-to-b from-sky-200 via-sky-100 to-emerald-100 p-5 shadow-cartoon">
    <div className="absolute left-8 top-8 h-10 w-24 rounded-full bg-white/85 shadow-soft" />
    <div className="absolute right-16 top-12 h-8 w-20 rounded-full bg-white/80 shadow-soft" />
    <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-lime-400 to-lime-300" />
    <div className="absolute bottom-20 left-0 h-10 w-full bg-[repeating-linear-gradient(90deg,#8b5a2b_0_18px,#a96b32_18px_36px)] shadow-soft" />

    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-20 left-8 h-28 w-24"
    >
      <div className="absolute left-5 top-0 flex h-12 w-14 items-center justify-center rounded-[18px] border-4 border-orange-800 bg-amber-300">
        <HardHat className="h-7 w-7 text-orange-800" />
      </div>
      <div className="absolute left-3 top-10 h-16 w-16 rounded-[22px] border-4 border-blue-900 bg-blue-500" />
      <div className="absolute left-7 top-12 h-6 w-10 rounded-full bg-rose-100" />
      <div className="absolute left-9 top-14 h-2 w-2 rounded-full bg-slate-900" />
      <div className="absolute left-14 top-14 h-2 w-2 rounded-full bg-slate-900" />
      <div className="absolute right-0 top-16 rotate-12 rounded-full border-4 border-orange-800 bg-orange-300 p-2">
        <Wrench className="h-5 w-5 text-slate-800" />
      </div>
    </motion.div>

    <div className="absolute bottom-20 right-5 flex items-end gap-3">
      <div className="h-24 w-20 rounded-t-[22px] border-4 border-slate-700 bg-orange-300 shadow-soft">
        <div className="mx-auto mt-4 h-8 w-10 rounded-lg bg-sky-300" />
      </div>
      <div className="h-32 w-24 rounded-t-[24px] border-4 border-slate-700 bg-cyan-300 shadow-soft">
        <div className="mx-auto mt-5 h-10 w-12 rounded-lg bg-blue-500" />
      </div>
      <div className="relative h-40 w-20 rounded-t-[22px] border-4 border-slate-700 bg-violet-300 shadow-soft">
        <div className="absolute -top-9 left-6 h-10 w-7 rounded-t-full border-4 border-slate-700 bg-slate-500" />
        <motion.div
          animate={{ y: [0, -12, 0], opacity: [0.55, 0.25, 0.55] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="absolute -top-16 left-4 h-10 w-12 rounded-full bg-white/80 blur-sm"
        />
      </div>
    </div>

    <div className="absolute bottom-5 right-8 flex gap-2">
      {[0, 1, 2, 3].map((item) => (
        <motion.span
          key={item}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 5 + item, repeat: Infinity, ease: "linear" }}
          className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-slate-700 bg-amber-300 text-sm font-black text-slate-800"
        >
          ⚙
        </motion.span>
      ))}
    </div>
  </div>
);
