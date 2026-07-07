import { Eye, FastForward, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { LearningModule } from "../data/modules";
import { Question } from "../data/questions";
import { UserProgress } from "../data/userProgress";
import { isCorrectAnswer, QuizAnswer } from "../utils/quiz";
import { pickNextQuestion, getCncPoolStatus, getQuestionsForModule, stablePracticeModules } from "../utils/questionPools";
import { recordPracticeAction } from "../utils/learningRecords";
import { QuestionCard } from "./QuestionCard";

type PracticeModeProps = {
  module: LearningModule;
  userProgress: UserProgress;
  onProgressChange: (progress: UserProgress) => void;
};

export const PracticeMode = ({ module, userProgress, onProgressChange }: PracticeModeProps) => {
  const pool = useMemo(() => getQuestionsForModule(module.id), [module.id]);
  const cncStatus = module.id === "cnc" ? getCncPoolStatus() : null;
  const enabled = stablePracticeModules.includes(module.id) && (module.id !== "cnc" || cncStatus?.stable);
  const [recentIds, setRecentIds] = useState<string[]>([]);
  const [question, setQuestion] = useState<Question | undefined>(() => (enabled ? pickNextQuestion(pool, []) : undefined));
  const [selectedIndex, setSelectedIndex] = useState<QuizAnswer | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const stat = userProgress.practiceStats[module.id];

  const nextQuestion = () => {
    if (!enabled || pool.length === 0) return;
    const nextRecent = question ? [...recentIds, question.id].slice(-12) : recentIds;
    const next = pickNextQuestion(pool, nextRecent);
    setRecentIds(nextRecent);
    setQuestion(next);
    setSelectedIndex(null);
    setSubmitted(false);
    setRevealed(false);
  };

  const commit = (answer: QuizAnswer) => {
    if (!question || submitted || revealed) return;
    const correct = isCorrectAnswer(question, answer);
    onProgressChange(recordPracticeAction({
      moduleId: module.id,
      moduleName: module.name,
      question,
      selectedIndex: answer,
      action: correct ? "correct" : "wrong",
    }));
    setSubmitted(true);
  };

  const handleSelect = (index: number) => {
    if (!question || submitted || revealed) return;
    if (question.isMultiple) {
      setSelectedIndex((current) => {
        const selected = Array.isArray(current) ? current : [];
        return selected.includes(index) ? selected.filter((item) => item !== index) : [...selected, index];
      });
      return;
    }
    setSelectedIndex(index);
    commit(index);
  };

  const handleText = (value: string) => setSelectedIndex(value);

  const handleSubmit = () => {
    if (selectedIndex === null || (typeof selectedIndex === "string" && !selectedIndex.trim())) return;
    commit(selectedIndex);
  };

  const handleReveal = () => {
    if (!question || submitted || revealed) return;
    setSelectedIndex(question.answerIndex);
    setRevealed(true);
    setSubmitted(true);
    onProgressChange(recordPracticeAction({ moduleId: module.id, moduleName: module.name, question, action: "revealed" }));
  };

  const handleSkip = () => {
    if (question) {
      onProgressChange(recordPracticeAction({ moduleId: module.id, moduleName: module.name, question, action: "skipped" }));
    }
    nextQuestion();
  };

  if (!enabled) {
    return (
      <section className="cartoon-card p-6 text-center">
        <h2 className="text-2xl font-black text-sky-950">
          {module.id === "cnc" ? "数控区训练题库正在建设中" : "该区域训练题库正在建设中"}
        </h2>
        <p className="mt-3 text-sm font-bold leading-6 text-slate-600">
          {module.id === "cnc"
            ? `当前数控题库检测：${cncStatus?.usableCount ?? 0}/${cncStatus?.rawCount ?? 0} 道可用。题库稳定后会自动接入。`
            : "本次先开放制造工艺区、工程制图区和稳定数控题库，避免把不完整题目混入训练。"}
        </p>
      </section>
    );
  }

  if (!question) {
    return (
      <section className="cartoon-card p-6 text-center">
        <h2 className="text-2xl font-black text-sky-950">这个区域的题库还在装配中</h2>
      </section>
    );
  }

  return (
    <section className="grid gap-5 lg:grid-cols-[1fr_300px]">
      <div>
        <div className="mb-4 cartoon-card p-5">
          <p className="text-sm font-black text-orange-600">自由训练区</p>
          <h2 className="mt-1 text-2xl font-black text-sky-950">{module.name}随机练习</h2>
          <p className="mt-2 text-sm font-bold text-slate-600">不限时间、不限题数。看答案和跳过会记录为待掌握。</p>
        </div>
        <QuestionCard question={question} selectedIndex={selectedIndex} submitted={submitted} onSelect={handleSelect} onFillAnswer={handleText} contextLabel="自由训练" />
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          <button onClick={handleSubmit} disabled={submitted || selectedIndex === null} className="cartoon-button px-4 py-3 font-black disabled:cursor-not-allowed disabled:opacity-40">
            提交
          </button>
          <button onClick={handleReveal} disabled={submitted} className="inline-flex items-center justify-center gap-2 rounded-[18px] border-4 border-sky-900/10 bg-white px-4 py-3 font-black text-sky-900 shadow-soft disabled:opacity-40">
            <Eye className="h-4 w-4" />
            看答案
          </button>
          <button onClick={handleSkip} className="inline-flex items-center justify-center gap-2 rounded-[18px] border-4 border-sky-900/10 bg-amber-100 px-4 py-3 font-black text-orange-900 shadow-soft">
            <FastForward className="h-4 w-4" />
            跳过
          </button>
          <button onClick={nextQuestion} className="inline-flex items-center justify-center gap-2 rounded-[18px] border-4 border-sky-900/10 bg-emerald-100 px-4 py-3 font-black text-emerald-900 shadow-soft">
            <RotateCcw className="h-4 w-4" />
            下一题
          </button>
        </div>
      </div>
      <aside className="cartoon-card p-5">
        <h3 className="text-lg font-black text-sky-950">训练记录</h3>
        <div className="mt-4 grid gap-3 text-sm font-bold text-slate-700">
          <div className="rounded-[16px] bg-sky-100 p-3">已答：{stat?.attempted ?? 0}</div>
          <div className="rounded-[16px] bg-emerald-100 p-3">答对：{stat?.correct ?? 0}</div>
          <div className="rounded-[16px] bg-rose-100 p-3">答错：{stat?.wrong ?? 0}</div>
          <div className="rounded-[16px] bg-amber-100 p-3">跳过：{stat?.skipped ?? 0}</div>
          <div className="rounded-[16px] bg-violet-100 p-3">看答案：{stat?.revealed ?? 0}</div>
          <div className="rounded-[16px] bg-white/75 p-3">题库可用：{pool.length} 道</div>
        </div>
      </aside>
    </section>
  );
};
