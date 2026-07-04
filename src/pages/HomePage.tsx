import { motion } from "framer-motion";
import { BookOpenCheck, ClipboardCheck, Factory, GraduationCap, ShieldCheck, Wrench, Zap } from "lucide-react";
import { FactoryMap } from "../components/FactoryMap";
import { ProgressBar } from "../components/ProgressBar";
import { SmartFactoryIllustration } from "../components/SmartFactoryIllustration";
import { modules } from "../data/modules";
import { UserProgress } from "../data/userProgress";
import { CoreMode } from "./ModeLandingPage";
import { getFactoryRepairRate, getLevelInfo } from "../utils/progress";

type HomePageProps = {
  userProgress: UserProgress;
  onQuickPractice: (moduleId: string) => void;
  onUrgentRepair: (moduleId: string) => void;
  onOpenMode: (mode: CoreMode) => void;
  onOpenAreaMode: (mode: CoreMode, moduleId: string) => void;
};

export const HomePage = ({ userProgress, onQuickPractice, onUrgentRepair, onOpenMode, onOpenAreaMode }: HomePageProps) => {
  const level = getLevelInfo(userProgress.xp);
  const repairRate = getFactoryRepairRate(userProgress);
  const repairModule = modules.find((item) => item.id === userProgress.repairEvent?.moduleId) ?? modules[1];
  const repairActive = userProgress.repairEvent?.status === "active";
  const totalReadingCards = Object.values(userProgress.readingProgress).reduce((sum, item) => sum + new Set(item.readCardIds).size, 0);
  const practiceTotals = Object.values(userProgress.practiceStats).reduce(
    (sum, item) => ({
      attempted: sum.attempted + item.attempted,
      wrong: sum.wrong + item.wrong,
      skipped: sum.skipped + item.skipped,
    }),
    { attempted: 0, wrong: 0, skipped: 0 },
  );
  const recentTraining = userProgress.recentLogs.slice(0, 4);
  const featureCards = [
    {
      mode: "reading" as CoreMode,
      icon: BookOpenCheck,
      title: "资料阅读区",
      subtitle: "系统学习八大智能制造知识模块",
      description: "通过卡片阅读方式学习机械基础、工程制图、制造工艺、数控加工等内容。",
      button: "进入阅读",
      tone: "from-cyan-100 to-emerald-100",
      stat: `已读 ${totalReadingCards} 张卡片`,
    },
    {
      mode: "practice" as CoreMode,
      icon: GraduationCap,
      title: "训练练习区",
      subtitle: "按区域抽题训练，巩固知识点",
      description: "从八个专业区域题库中抽题练习，支持查看解析、记录错题和结算经验。",
      button: "进入训练",
      tone: "from-amber-100 to-orange-100",
      stat: `已练 ${practiceTotals.attempted} 题`,
    },
    {
      mode: "repair" as CoreMode,
      icon: Wrench,
      title: "实际维修区",
      subtitle: "完成故障诊断任务，获得经验奖励",
      description: "模拟工厂设备异常维修任务，中途退出会扣经验，完成任务才能维修成功。",
      button: "进入维修",
      tone: "from-violet-100 to-rose-100",
      stat: repairActive ? `${repairModule.name} 待维修` : "今日设备稳定",
    },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="cartoon-card p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-orange-700/25 bg-amber-200 px-3 py-1 text-xs font-black text-orange-700">
                PLANET ONLINE
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <span className="flex h-20 w-20 shrink-0 overflow-hidden rounded-[26px] border-4 border-sky-900/15 bg-white shadow-soft">
                  <img src="/assets/app-icon.svg" alt="工造星球图标" className="h-full w-full object-cover" />
                </span>
                <div>
                  <h1 className="text-4xl font-black tracking-wide text-sky-950 md:text-6xl">工造星球</h1>
                  <p className="mt-2 text-xl font-extrabold text-orange-600">机械与智能制造学习空间</p>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-slate-700">
                进入工厂星球，阅读资料解锁知识卡，刷题升级技能，完成维修任务让产线重新点亮。
              </p>
            </div>
            <div className="rounded-[24px] border-4 border-sky-900/15 bg-sky-100 p-4 shadow-soft">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-sky-700" />
                <div>
                  <div className="text-sm font-bold text-slate-600">当前身份</div>
                  <div className="text-xl font-black text-sky-950">
                    {userProgress.role} Lv.{level.level}
                  </div>
                </div>
              </div>
              <div className="mt-5 min-w-56">
                <ProgressBar value={level.percent} label={`${level.currentXp}/${level.nextXp} XP`} tone="violet" />
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-[22px] border-4 border-sky-900/10 bg-cyan-100 p-4 shadow-soft">
              <Factory className="h-5 w-5 text-cyan-700" />
              <div className="mt-3 text-2xl font-black text-sky-950">{repairRate}%</div>
              <div className="text-sm font-bold text-slate-600">工厂修复率</div>
            </div>
            <div className="rounded-[22px] border-4 border-sky-900/10 bg-amber-100 p-4 shadow-soft">
              <Zap className="h-5 w-5 text-orange-600" />
              <div className="mt-3 text-2xl font-black text-sky-950">{userProgress.xp}</div>
              <div className="text-sm font-bold text-slate-600">累计经验</div>
            </div>
            <div className="rounded-[22px] border-4 border-sky-900/10 bg-violet-100 p-4 shadow-soft">
              <ClipboardCheck className="h-5 w-5 text-violet-600" />
              <div className="mt-3 text-2xl font-black text-sky-950">{userProgress.completedLevels.length}</div>
              <div className="text-sm font-bold text-slate-600">完整测试次数</div>
            </div>
          </div>
          <div className="mt-6 rounded-[24px] border-4 border-sky-900/10 bg-white/70 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-black text-sky-950">今日任务</h2>
                <p className="mt-1 text-sm font-bold text-orange-600">
                  {repairActive ? `${repairModule.name} 需要维修` : userProgress.repairEvent?.message ?? "等待新的故障扫描"}
                </p>
              </div>
              <span className="rounded-full border-2 border-orange-700/25 bg-orange-200 px-3 py-1 text-xs font-black text-orange-700">
                {repairActive ? "高优先级" : "已恢复"}
              </span>
            </div>
            <div className="mt-5 space-y-4">
              <ProgressBar value={repairActive ? 18 : 100} label={repairActive ? "维修准备" : "维修反馈"} tone="cyan" />
              <p className="text-sm font-medium leading-6 text-slate-700">
                {repairActive
                  ? `${repairModule.subtitle} 发出异常报警，请进入实际维修区完成诊断任务。`
                  : userProgress.repairEvent?.message ?? "工厂目前稳定运行。"}
              </p>
              <button onClick={() => onOpenMode("repair")} className="cartoon-button w-full px-4 py-3 font-black transition">
                {repairActive ? "进入维修诊断" : "查看维修区"}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-black text-sky-950">训练区小地图</h2>
              <p className="mt-1 text-sm font-bold text-slate-600">普通区域快速训练，红色警报区域进入紧急维修。</p>
            </div>
          </div>
          <FactoryMap
            onEnter={onQuickPractice}
            onRepair={onUrgentRepair}
            repairModuleId={repairActive ? repairModule.id : undefined}
            showRepairHighlight={repairActive}
          />
          <SmartFactoryIllustration />
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-black text-sky-950">智能制造学习区域</h2>
            <p className="mt-1 text-sm font-bold text-slate-600">选择资料阅读、训练练习或实际维修，进入对应功能区。</p>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.mode} className={`rounded-[30px] border-4 border-sky-900/15 bg-gradient-to-br ${card.tone} p-6 shadow-cartoon`}>
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-[20px] border-4 border-sky-900/15 bg-white/75 text-sky-900 shadow-soft">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="rounded-full bg-white/75 px-3 py-1 text-xs font-black text-slate-700 shadow-soft">{card.stat}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black text-sky-950">{card.title}</h3>
                <p className="mt-2 text-sm font-black text-orange-700">{card.subtitle}</p>
                <p className="mt-4 min-h-20 text-sm font-medium leading-7 text-slate-700">{card.description}</p>
                <button onClick={() => onOpenMode(card.mode)} className="cartoon-button mt-5 w-full px-4 py-3 font-black">
                  {card.button}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-3xl font-black text-sky-950">八大专业区域导航</h2>
          <p className="mt-1 text-sm font-bold text-slate-600">每个区域都可以直接进入资料阅读、训练练习或实际维修的独立页面。</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {modules.map((module) => {
            const Icon = module.icon;
            const isRepair = repairActive && module.id === repairModule.id;
            return (
              <article key={module.id} className={`rounded-[26px] border-4 p-5 shadow-cartoon ${isRepair ? "border-rose-300 bg-rose-50" : "border-sky-900/15 bg-white/88"}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-[18px] border-4 border-sky-900/15 shadow-soft ${isRepair ? "bg-rose-200 text-rose-800" : "bg-cyan-200 text-sky-900"}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-black text-sky-950">{module.name}</h3>
                      <p className="text-xs font-bold text-orange-600">{module.subtitle}</p>
                    </div>
                  </div>
                  {isRepair && <span className="rounded-full bg-rose-500 px-2 py-1 text-xs font-black text-white">故障</span>}
                </div>
                <p className="mt-4 min-h-12 text-sm font-medium leading-6 text-slate-700">{module.description}</p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <button onClick={() => onOpenAreaMode("reading", module.id)} className="rounded-[14px] bg-cyan-100 px-2 py-2 text-xs font-black text-cyan-800 shadow-soft hover:bg-cyan-200">
                    阅读
                  </button>
                  <button onClick={() => onOpenAreaMode("practice", module.id)} className="rounded-[14px] bg-amber-100 px-2 py-2 text-xs font-black text-orange-800 shadow-soft hover:bg-amber-200">
                    训练
                  </button>
                  <button onClick={() => onOpenAreaMode("repair", module.id)} className="rounded-[14px] bg-rose-100 px-2 py-2 text-xs font-black text-rose-800 shadow-soft hover:bg-rose-200">
                    维修
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="cartoon-card p-5">
          <h2 className="text-xl font-black text-sky-950">今日学习统计</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-[18px] bg-cyan-100 p-4 text-sm font-bold text-slate-700">阅读卡片：{totalReadingCards}</div>
            <div className="rounded-[18px] bg-amber-100 p-4 text-sm font-bold text-slate-700">训练题数：{practiceTotals.attempted}</div>
            <div className="rounded-[18px] bg-rose-100 p-4 text-sm font-bold text-slate-700">待复习：{userProgress.wrongRecords.length}</div>
          </div>
        </div>
        <div className="cartoon-card p-5">
          <h2 className="text-xl font-black text-sky-950">最近训练记录</h2>
          <div className="mt-4 grid gap-3">
            {recentTraining.length === 0 ? (
              <p className="text-sm font-bold text-slate-600">还没有训练记录。</p>
            ) : (
              recentTraining.map((log, index) => (
                <div key={`${log}-${index}`} className="rounded-[18px] bg-white/75 p-3 text-sm font-bold text-slate-700">
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
