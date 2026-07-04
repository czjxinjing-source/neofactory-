import { motion } from "framer-motion";
import { BookOpenCheck, Medal, ShieldCheck, Trash2, Upload, Zap } from "lucide-react";
import { ChangeEvent, useMemo, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { encyclopedia } from "../data/encyclopedia";
import { modules } from "../data/modules";
import { getReadingCardsByModule } from "../data/readingCards";
import { UserProgress } from "../data/userProgress";
import { clearUserData, clearWrongBook, saveUserProfile } from "../utils/localData";
import { getLevelInfo, getModuleProgress } from "../utils/progress";

type ProfilePageProps = {
  userProgress: UserProgress;
  onProgressChange: (progress: UserProgress) => void;
};

const formatDate = (iso: string) => new Date(iso).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });

export const ProfilePage = ({ userProgress, onProgressChange }: ProfilePageProps) => {
  const [nickname, setNickname] = useState(userProgress.nickname);
  const level = getLevelInfo(userProgress.xp);
  const unlockedCount = encyclopedia.filter((item) => item.unlocked || userProgress.unlockedItems.includes(item.id)).length;
  const totalTests = userProgress.testRecords.length;
  const totalAnswers = userProgress.testRecords.reduce((sum, item) => sum + item.total, 0);
  const totalCorrect = userProgress.testRecords.reduce((sum, item) => sum + item.correct, 0);
  const totalWrong = userProgress.testRecords.reduce((sum, item) => sum + item.wrong, 0);
  const accuracy = totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0;
  const areaRank = useMemo(() => {
    const rows = Object.entries(userProgress.areaStats).map(([moduleId, stat]) => ({
      module: modules.find((item) => item.id === moduleId)?.name ?? moduleId,
      accuracy: stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0,
      total: stat.total,
    })).filter((item) => item.total > 0);
    return {
      best: [...rows].sort((a, b) => b.accuracy - a.accuracy)[0]?.module ?? "暂无",
      weak: [...rows].sort((a, b) => a.accuracy - b.accuracy)[0]?.module ?? "暂无",
    };
  }, [userProgress.areaStats]);
  const readingSummary = modules.map((module) => {
    const total = getReadingCardsByModule(module.id).length;
    const current = userProgress.readingProgress[module.id];
    const read = new Set(current?.readCardIds ?? []).size;
    return { module, total, read, percent: total > 0 ? Math.round((read / total) * 100) : 0 };
  });
  const practiceSummary = Object.entries(userProgress.practiceStats).map(([moduleId, stat]) => ({
    module: modules.find((item) => item.id === moduleId)?.name ?? moduleId,
    stat,
  }));
  const repairSummary = Object.entries(userProgress.repairStats).map(([moduleId, stat]) => ({
    module: modules.find((item) => item.id === moduleId)?.name ?? moduleId,
    stat,
  }));

  const handleAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const next = saveUserProfile({ ...userProgress, avatar: String(reader.result) });
      onProgressChange(next);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveNickname = () => {
    const next = saveUserProfile({ ...userProgress, nickname: nickname.trim() || "工造探索者" });
    onProgressChange(next);
  };

  const handleClearWrong = () => {
    if (!window.confirm("确定清空错题本吗？这个操作不能撤销。")) return;
    onProgressChange(clearWrongBook());
  };

  const handleClearAll = () => {
    if (!window.confirm("确定清空所有本地学习数据吗？头像、经验、测试记录都会清除。")) return;
    onProgressChange(clearUserData());
  };

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="cartoon-card p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-20 w-20 overflow-hidden rounded-[24px] border-4 border-sky-900/15 bg-cyan-100 shadow-soft">
              {userProgress.avatar ? <img src={userProgress.avatar} alt="头像" className="h-full w-full object-cover" /> : <img src="/assets/app-icon.svg" alt="工造星球图标" className="h-full w-full object-cover" />}
            </span>
            <div>
              <p className="text-sm font-black text-orange-600">工造星球档案卡</p>
              <h1 className="text-3xl font-black text-sky-950">{userProgress.nickname} · Lv.{level.level}</h1>
              <p className="mt-1 text-sm font-bold text-slate-600">{userProgress.role}，距离下一级还差 {level.toNext} XP</p>
            </div>
          </div>
          <div className="min-w-72">
            <ProgressBar value={level.percent} label={`${level.currentXp}/${level.nextXp} XP`} tone="violet" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-[24px] border-4 border-sky-900/10 bg-cyan-100 p-5 shadow-soft">
          <Zap className="h-5 w-5 text-cyan-700" />
          <div className="mt-3 text-2xl font-black text-sky-950">{userProgress.xp}</div>
          <div className="text-sm font-bold text-slate-600">当前经验</div>
        </div>
        <div className="rounded-[24px] border-4 border-sky-900/10 bg-amber-100 p-5 shadow-soft">
          <ShieldCheck className="h-5 w-5 text-orange-600" />
          <div className="mt-3 text-2xl font-black text-sky-950">{totalTests}</div>
          <div className="text-sm font-bold text-slate-600">完成测试</div>
        </div>
        <div className="rounded-[24px] border-4 border-sky-900/10 bg-emerald-100 p-5 shadow-soft">
          <Medal className="h-5 w-5 text-emerald-700" />
          <div className="mt-3 text-2xl font-black text-sky-950">{accuracy}%</div>
          <div className="text-sm font-bold text-slate-600">平均正确率</div>
        </div>
        <div className="rounded-[24px] border-4 border-sky-900/10 bg-violet-100 p-5 shadow-soft">
          <BookOpenCheck className="h-5 w-5 text-violet-600" />
          <div className="mt-3 text-2xl font-black text-sky-950">{unlockedCount}</div>
          <div className="text-sm font-bold text-slate-600">已解锁图鉴</div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <div className="cartoon-card p-5">
          <h2 className="mb-5 text-xl font-black text-sky-950">模块进度</h2>
          <div className="grid gap-4">
            {modules.map((module) => (
              <ProgressBar key={module.id} value={getModuleProgress(module.progress, module.id, userProgress)} label={module.name} tone={module.color as "cyan" | "blue" | "violet"} />
            ))}
          </div>
        </div>
        <div className="cartoon-card p-5">
          <h2 className="mb-4 text-xl font-black text-sky-950">学习统计</h2>
          <div className="space-y-3 text-sm font-bold text-slate-700">
            <div className="rounded-[18px] bg-white/70 p-3">总答题数：{totalAnswers}</div>
            <div className="rounded-[18px] bg-white/70 p-3">总正确 / 错误：{totalCorrect} / {totalWrong}</div>
            <div className="rounded-[18px] bg-white/70 p-3">最近成绩：{userProgress.testRecords[0] ? `${userProgress.testRecords[0].score}/${userProgress.testRecords[0].total}` : "暂无"}</div>
            <div className="rounded-[18px] bg-white/70 p-3">最擅长区域：{areaRank.best}</div>
            <div className="rounded-[18px] bg-white/70 p-3">最薄弱区域：{areaRank.weak}</div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        <div className="cartoon-card p-5">
          <h2 className="mb-4 text-xl font-black text-sky-950">资料阅读记录</h2>
          <div className="max-h-80 space-y-3 overflow-auto pr-1">
            {readingSummary.map(({ module, total, read, percent }) => (
              <div key={module.id} className="rounded-[18px] bg-white/75 p-3">
                <div className="flex justify-between text-sm font-black text-sky-950">
                  <span>{module.name}</span>
                  <span>{read}/{total}</span>
                </div>
                <ProgressBar value={percent} label={`${percent}%`} tone={module.color as "cyan" | "blue" | "violet"} />
              </div>
            ))}
          </div>
        </div>
        <div className="cartoon-card p-5">
          <h2 className="mb-4 text-xl font-black text-sky-950">自由训练记录</h2>
          <div className="max-h-80 space-y-3 overflow-auto pr-1">
            {practiceSummary.length === 0 ? <p className="text-sm font-bold text-slate-600">还没有自由训练记录。</p> : practiceSummary.map(({ module, stat }) => (
              <div key={module} className="rounded-[18px] bg-white/75 p-3 text-sm font-bold leading-6 text-slate-700">
                <div className="font-black text-sky-950">{module}</div>
                已答 {stat.attempted} · 对 {stat.correct} · 错 {stat.wrong} · 跳过 {stat.skipped} · 看答案 {stat.revealed}
              </div>
            ))}
          </div>
        </div>
        <div className="cartoon-card p-5">
          <h2 className="mb-4 text-xl font-black text-sky-950">实际维修记录</h2>
          <div className="max-h-80 space-y-3 overflow-auto pr-1">
            {repairSummary.length === 0 ? <p className="text-sm font-bold text-slate-600">还没有实际维修记录。</p> : repairSummary.map(({ module, stat }) => (
              <div key={module} className="rounded-[18px] bg-white/75 p-3 text-sm font-bold leading-6 text-slate-700">
                <div className="font-black text-sky-950">{module}</div>
                成功 {stat.success} · 失败 {stat.failed} · 退出 {stat.abandoned} · +{stat.xpGained} / -{stat.xpLost} XP
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <div className="cartoon-card p-5">
          <h2 className="mb-4 text-xl font-black text-sky-950">测试记录</h2>
          <div className="max-h-80 space-y-3 overflow-auto pr-1">
            {userProgress.testRecords.length === 0 ? <p className="text-sm font-bold text-slate-600">还没有完整测试记录。</p> : userProgress.testRecords.map((record) => (
              <div key={record.id} className="rounded-[18px] bg-white/75 p-3 text-sm font-bold text-slate-700">
                {formatDate(record.date)} · {record.moduleName} · {record.score}/{record.total} · +{record.xpEarned} XP
              </div>
            ))}
          </div>
        </div>
        <div className="cartoon-card p-5">
          <h2 className="mb-4 text-xl font-black text-sky-950">成就徽章</h2>
          <div className="flex flex-wrap gap-2">
            {["第一次完成测试", "工程制图入门", "连续答对 5 题", "一次测试满分", "修好第一次工厂故障"].map((item) => (
              <span key={item} className={`rounded-full px-3 py-2 text-xs font-black ${userProgress.achievements.includes(item) ? "bg-amber-300 text-orange-800 shadow-soft" : "bg-slate-200 text-slate-500"}`}>
                {item}
              </span>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-[18px] border-4 border-sky-900/10 bg-white px-4 py-3 text-sm font-black text-sky-900 shadow-soft hover:bg-sky-50">
              <Upload className="h-4 w-4" />
              上传头像
              <input type="file" accept="image/*" className="hidden" onChange={handleAvatar} />
            </label>
            <div className="flex gap-2">
              <input value={nickname} onChange={(event) => setNickname(event.target.value)} className="min-w-0 flex-1 rounded-[18px] border-4 border-sky-900/10 bg-white px-4 py-2 font-bold text-sky-950 outline-none" />
              <button onClick={handleSaveNickname} className="cartoon-button px-4 py-2 font-black">保存</button>
            </div>
            <button onClick={handleClearWrong} className="w-full rounded-[18px] bg-amber-200 px-4 py-3 text-sm font-black text-orange-800 shadow-soft hover:bg-amber-100">清空错题本</button>
            <button onClick={handleClearAll} className="flex w-full items-center justify-center gap-2 rounded-[18px] bg-rose-200 px-4 py-3 text-sm font-black text-rose-800 shadow-soft hover:bg-rose-100">
              <Trash2 className="h-4 w-4" />
              清空本地数据
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
