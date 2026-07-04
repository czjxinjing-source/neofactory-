import { motion } from "framer-motion";
import { ArrowLeft, BookOpenCheck, GraduationCap, Wrench } from "lucide-react";
import { PracticeMode } from "../components/PracticeMode";
import { ReadingCardSwiper } from "../components/ReadingCardSwiper";
import { RepairChallengeMode } from "../components/RepairChallengeMode";
import { LearningModule } from "../data/modules";
import { UserProgress } from "../data/userProgress";
import { CoreMode } from "./ModeLandingPage";

type FunctionPageProps = {
  mode: CoreMode;
  module: LearningModule;
  userProgress: UserProgress;
  onBack: () => void;
  onHome: () => void;
  onProgressChange: (progress: UserProgress) => void;
};

const modeInfo = {
  reading: {
    icon: BookOpenCheck,
    label: "资料阅读区",
    titleSuffix: "资料阅读",
    description: "独立阅读页面，支持目录、上一张、下一张、滑动切换和阅读进度记录。",
  },
  practice: {
    icon: GraduationCap,
    label: "训练练习区",
    titleSuffix: "训练练习",
    description: "独立训练页面，题目、图片、代码输入和解析都有完整展示空间。",
  },
  repair: {
    icon: Wrench,
    label: "实际维修区",
    titleSuffix: "实际维修",
    description: "独立维修挑战页面，完成故障诊断任务后结算经验，中途退出会扣经验。",
  },
};

export const FunctionPage = ({ mode, module, userProgress, onBack, onHome, onProgressChange }: FunctionPageProps) => {
  const info = modeInfo[mode];
  const HeaderIcon = info.icon;

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 pb-10">
      <section className="cartoon-card p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-200 px-3 py-1 text-xs font-black text-orange-800">
              <HeaderIcon className="h-4 w-4" />
              {info.label}
            </div>
            <h1 className="mt-4 text-3xl font-black text-sky-950">
              {module.name} · {info.titleSuffix}
            </h1>
            <p className="mt-2 max-w-3xl text-sm font-bold leading-7 text-slate-600">{info.description}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <button onClick={onBack} className="rounded-[18px] border-4 border-sky-900/10 bg-white px-4 py-3 text-sm font-black text-sky-900 shadow-soft hover:bg-sky-50">
              <span className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                返回上一级
              </span>
            </button>
            <button onClick={onHome} className="cartoon-button px-4 py-3 text-sm font-black">
              返回首页
            </button>
          </div>
        </div>
      </section>

      {mode === "reading" && (
        <ReadingCardSwiper module={module} userProgress={userProgress} onProgressChange={onProgressChange} />
      )}
      {mode === "practice" && (
        <PracticeMode module={module} userProgress={userProgress} onProgressChange={onProgressChange} />
      )}
      {mode === "repair" && <RepairChallengeMode module={module} onProgressChange={onProgressChange} />}
    </motion.div>
  );
};
