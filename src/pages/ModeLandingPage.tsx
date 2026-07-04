import { motion } from "framer-motion";
import { ArrowLeft, BookOpenCheck, GraduationCap, Wrench } from "lucide-react";
import { modules } from "../data/modules";
import { UserProgress } from "../data/userProgress";
import { getModuleProgress } from "../utils/progress";
import { ProgressBar } from "../components/ProgressBar";

export type CoreMode = "reading" | "practice" | "repair";

type ModeLandingPageProps = {
  mode: CoreMode;
  userProgress: UserProgress;
  onBack: () => void;
  onSelectModule: (moduleId: string) => void;
};

const modeInfo = {
  reading: {
    icon: BookOpenCheck,
    eyebrow: "资料阅读区",
    title: "选择一个专业区域开始阅读",
    description: "八大智能制造知识模块都已整理为卡片式资料，适合先学概念、再看应用、最后复习易错点。",
    button: "进入阅读",
  },
  practice: {
    icon: GraduationCap,
    eyebrow: "训练练习区",
    title: "选择一个专业区域开始刷题",
    description: "按区域抽题训练，支持查看解析、跳过、记录错题和待掌握内容。",
    button: "进入训练",
  },
  repair: {
    icon: Wrench,
    eyebrow: "实际维修区",
    title: "选择一个区域执行维修挑战",
    description: "模拟工厂设备异常诊断，答对加经验、答错扣经验，中途退出会扣经验。",
    button: "进入维修",
  },
};

export const ModeLandingPage = ({ mode, userProgress, onBack, onSelectModule }: ModeLandingPageProps) => {
  const info = modeInfo[mode];
  const HeaderIcon = info.icon;

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-950">
        <ArrowLeft className="h-4 w-4" />
        返回首页
      </button>

      <section className="cartoon-card p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-200 px-3 py-1 text-xs font-black text-orange-800">
              <HeaderIcon className="h-4 w-4" />
              {info.eyebrow}
            </div>
            <h1 className="mt-4 text-3xl font-black text-sky-950">{info.title}</h1>
            <p className="mt-3 max-w-3xl text-sm font-bold leading-7 text-slate-600">{info.description}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {modules.map((module) => {
          const Icon = module.icon;
          const progress = getModuleProgress(module.progress, module.id, userProgress);
          return (
            <article key={module.id} className="group rounded-[26px] border-4 border-sky-900/15 bg-white/88 p-5 shadow-cartoon transition hover:-translate-y-1">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-[18px] border-4 border-sky-900/15 bg-cyan-200 text-sky-900 shadow-soft">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-black text-sky-950">{module.name}</h2>
                  <p className="text-xs font-bold text-orange-600">{module.subtitle}</p>
                </div>
              </div>
              <p className="min-h-12 text-sm font-medium leading-6 text-slate-700">{module.description}</p>
              <div className="mt-4">
                <ProgressBar value={progress} label="学习进度" tone={module.color as "cyan" | "blue" | "violet"} />
              </div>
              <button onClick={() => onSelectModule(module.id)} className="cartoon-button mt-5 w-full px-4 py-3 text-sm font-black">
                {info.button}
              </button>
            </article>
          );
        })}
      </section>
    </motion.div>
  );
};
