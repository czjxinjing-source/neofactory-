import { motion } from "framer-motion";
import { CheckCircle2, FileWarning, RotateCcw } from "lucide-react";
import { useState } from "react";
import { modules } from "../data/modules";
import { UserProgress } from "../data/userProgress";
import { markWrongMastered } from "../utils/localData";

type WrongBookPageProps = {
  userProgress: UserProgress;
  onProgressChange: (progress: UserProgress) => void;
};

export const WrongBookPage = ({ userProgress, onProgressChange }: WrongBookPageProps) => {
  const [filter, setFilter] = useState("全部");
  const filtered = userProgress.wrongRecords.filter((record) => filter === "全部" || record.moduleId === filter);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-sky-950">维修日志</h1>
        <p className="mt-2 text-sm font-bold text-slate-600">完整测试中的错误诊断会记录在这里，做对后可以标记为已掌握。</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {["全部", ...modules.map((item) => item.id)].map((id) => (
          <button key={id} onClick={() => setFilter(id)} className={`rounded-full px-3 py-2 text-xs font-black shadow-soft ${filter === id ? "bg-amber-300 text-orange-800" : "bg-white text-sky-900"}`}>
            {id === "全部" ? "全部" : modules.find((item) => item.id === id)?.name}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <section className="flex min-h-80 flex-col items-center justify-center rounded-[28px] border-4 border-sky-900/10 bg-white/80 p-8 text-center shadow-cartoon">
          <FileWarning className="h-14 w-14 text-cyan-600" />
          <h2 className="mt-5 text-xl font-black text-sky-950">暂无错题，继续挑战关卡吧</h2>
          <p className="mt-2 text-sm font-bold text-slate-600">完成一整轮测试后，错误题目会生成维修日志。</p>
        </section>
      ) : (
        <div className="grid gap-4">
          {filtered.map((record) => (
            <article key={record.id} className={`rounded-[24px] border-4 p-5 shadow-soft ${record.mastered ? "border-emerald-300 bg-emerald-50" : "border-amber-300 bg-amber-50"}`}>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-orange-700">{record.moduleName}</span>
                {record.mastered && <span className="rounded-full bg-emerald-200 px-3 py-1 text-xs font-black text-emerald-800">已掌握</span>}
              </div>
              <h3 className="font-black text-sky-950">{record.question}</h3>
              {record.userAnswer && <p className="mt-3 text-sm font-bold text-rose-700">当时选择：{record.userAnswer}</p>}
              <p className="mt-2 text-sm font-bold text-emerald-800">正确答案：{record.correctAnswer}</p>
              <p className="mt-2 text-sm font-medium leading-6 text-slate-700">{record.explanation}</p>
              {record.knowledgePoints && record.knowledgePoints.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {record.knowledgePoints.map((point) => (
                    <span key={point} className="rounded-full bg-white px-3 py-1 text-xs font-black text-sky-800">
                      {point}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="inline-flex items-center gap-2 rounded-[16px] bg-white px-4 py-2 text-sm font-black text-orange-700 shadow-soft hover:bg-amber-100">
                  <RotateCcw className="h-4 w-4" />
                  重新练习
                </button>
                <button
                  onClick={() => onProgressChange(markWrongMastered(record.id))}
                  disabled={record.mastered}
                  className="inline-flex items-center gap-2 rounded-[16px] bg-emerald-200 px-4 py-2 text-sm font-black text-emerald-800 shadow-soft hover:bg-emerald-100 disabled:opacity-60"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  标记已掌握
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </motion.div>
  );
};
