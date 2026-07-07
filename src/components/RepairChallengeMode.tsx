import { AlertTriangle, CheckCircle2, LogOut, RotateCcw, Trophy } from "lucide-react";
import { useMemo, useState } from "react";
import { LearningModule } from "../data/modules";
import { Question } from "../data/questions";
import { UserProgress } from "../data/userProgress";
import { isCorrectAnswer, QuizAnswer } from "../utils/quiz";
import { getQuestionsForModule, pickNextQuestion } from "../utils/questionPools";
import { settleRepairChallenge } from "../utils/learningRecords";
import { QuestionCard } from "./QuestionCard";
import { ProgressBar } from "./ProgressBar";

type RepairChallengeModeProps = {
  module: LearningModule;
  onProgressChange: (progress: UserProgress) => void;
};

type RepairAnswer = {
  question: Question;
  selectedIndex: QuizAnswer;
  correct: boolean;
};

type Result = {
  success: boolean;
  accuracy: number;
  gained: number;
  lost: number;
  xpDelta: number;
  correct: number;
  wrong: number;
  total: number;
};

const challengeCount = 8;

export const RepairChallengeMode = ({ module, onProgressChange }: RepairChallengeModeProps) => {
  const pool = useMemo(() => getQuestionsForModule(module.id), [module.id]);
  const [seed, setSeed] = useState(() => Date.now());
  const challengeQuestions = useMemo(() => {
    const selected: Question[] = [];
    const recent: string[] = [];
    while (selected.length < Math.min(challengeCount, pool.length)) {
      const next = pickNextQuestion(pool, recent);
      if (!next || selected.some((item) => item.id === next.id)) break;
      selected.push(next);
      recent.push(next.id);
    }
    return selected;
  }, [pool, seed]);
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<QuizAnswer | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<RepairAnswer[]>([]);
  const [streak, setStreak] = useState(0);
  const [result, setResult] = useState<Result | null>(null);
  const question = challengeQuestions[index];
  const progress = challengeQuestions.length > 0 ? Math.round((answers.length / challengeQuestions.length) * 100) : 0;

  const reset = () => {
    setSeed(Date.now());
    setIndex(0);
    setSelectedIndex(null);
    setSubmitted(false);
    setAnswers([]);
    setStreak(0);
    setResult(null);
  };

  const finish = (finalAnswers: RepairAnswer[], abandoned = false) => {
    const settlement = settleRepairChallenge({ moduleId: module.id, moduleName: module.name, answers: finalAnswers, abandoned });
    onProgressChange(settlement.progress);
    setResult(settlement);
  };

  const commit = (answer: QuizAnswer) => {
    if (!question || submitted) return;
    const correct = isCorrectAnswer(question, answer);
    setStreak((value) => (correct ? value + 1 : 0));
    const nextAnswers = [...answers, { question, selectedIndex: answer, correct }];
    setAnswers(nextAnswers);
    setSubmitted(true);
  };

  const handleSelect = (choice: number) => {
    if (!question || submitted) return;
    if (question.isMultiple) {
      setSelectedIndex((current) => {
        const selected = Array.isArray(current) ? current : [];
        return selected.includes(choice) ? selected.filter((item) => item !== choice) : [...selected, choice];
      });
      return;
    }
    setSelectedIndex(choice);
    commit(choice);
  };

  const submit = () => {
    if (selectedIndex === null || (typeof selectedIndex === "string" && !selectedIndex.trim())) return;
    commit(selectedIndex);
  };

  const next = () => {
    if (index >= challengeQuestions.length - 1) {
      finish(answers);
      return;
    }
    setIndex((value) => value + 1);
    setSelectedIndex(null);
    setSubmitted(false);
  };

  const abandon = () => {
    if (!window.confirm("当前维修任务未完成，退出会扣除经验，确定退出吗？")) return;
    finish(answers, true);
  };

  if (pool.length < 4) {
    return (
      <section className="cartoon-card p-6 text-center">
        <h2 className="text-2xl font-black text-sky-950">该区域维修题库正在建设中</h2>
        <p className="mt-3 text-sm font-bold text-slate-600">当前可用题目不足，先去资料阅读区学习，避免挑战白屏。</p>
      </section>
    );
  }

  if (result) {
    return (
      <section className="cartoon-card p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-black ${result.success ? "bg-emerald-200 text-emerald-800" : "bg-rose-200 text-rose-800"}`}>
              {result.success ? <CheckCircle2 className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
              {result.success ? "维修成功" : "维修失败"}
            </div>
            <h2 className="mt-4 text-3xl font-black text-sky-950">{module.name}维修结算</h2>
            <p className="mt-2 text-sm font-bold text-slate-600">正确率 {result.accuracy}%，经验变化 {result.xpDelta >= 0 ? "+" : ""}{result.xpDelta} XP。</p>
          </div>
          <div className="rounded-[24px] border-4 border-sky-900/10 bg-amber-100 p-5 text-center shadow-soft">
            <Trophy className="mx-auto h-6 w-6 text-orange-700" />
            <div className="mt-2 text-sm font-black text-orange-700">获得 / 扣除</div>
            <div className="mt-1 text-2xl font-black text-sky-950">+{result.gained} / -{result.lost}</div>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-[20px] bg-sky-100 p-4 text-center font-black text-sky-950">总题 {result.total}</div>
          <div className="rounded-[20px] bg-emerald-100 p-4 text-center font-black text-emerald-800">正确 {result.correct}</div>
          <div className="rounded-[20px] bg-rose-100 p-4 text-center font-black text-rose-800">错误 {result.wrong}</div>
          <div className="rounded-[20px] bg-violet-100 p-4 text-center font-black text-violet-800">正确率 {result.accuracy}%</div>
        </div>
        <button onClick={reset} className="cartoon-button mt-6 inline-flex items-center gap-2 px-5 py-3 font-black">
          <RotateCcw className="h-4 w-4" />
          再次挑战
        </button>
      </section>
    );
  }

  if (!question) {
    return (
      <section className="cartoon-card p-6 text-center">
        <h2 className="text-2xl font-black text-sky-950">本轮维修题目未能装载</h2>
        <p className="mt-3 text-sm font-bold text-slate-600">请重新开始挑战，系统会重新抽取该区域题目。</p>
        <button onClick={reset} className="cartoon-button mt-5 inline-flex px-5 py-3 font-black">
          重新抽题
        </button>
      </section>
    );
  }

  return (
    <section className="grid gap-5 lg:grid-cols-[1fr_300px]">
      <div>
        <div className="mb-4 cartoon-card p-5">
          <p className="text-sm font-black text-rose-600">实际维修区</p>
          <h2 className="mt-1 text-2xl font-black text-sky-950">{module.name}维修挑战</h2>
          <p className="mt-2 text-sm font-bold text-slate-600">答对加经验，答错扣经验；未完成退出会扣 6 XP。</p>
        </div>
        <QuestionCard question={question} selectedIndex={selectedIndex} submitted={submitted} onSelect={handleSelect} onFillAnswer={(value) => setSelectedIndex(value)} contextLabel="维修挑战" />
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <button onClick={submit} disabled={submitted || selectedIndex === null} className="cartoon-button px-4 py-3 font-black disabled:cursor-not-allowed disabled:opacity-40">
            提交
          </button>
          <button onClick={next} disabled={!submitted} className="rounded-[18px] border-4 border-sky-900/10 bg-emerald-100 px-4 py-3 font-black text-emerald-900 shadow-soft disabled:opacity-40">
            {index >= challengeQuestions.length - 1 ? "完成维修" : "下一题"}
          </button>
          <button onClick={abandon} className="inline-flex items-center justify-center gap-2 rounded-[18px] border-4 border-rose-900/10 bg-rose-100 px-4 py-3 font-black text-rose-800 shadow-soft">
            <LogOut className="h-4 w-4" />
            退出维修
          </button>
        </div>
      </div>
      <aside className="cartoon-card p-5">
        <h3 className="text-lg font-black text-sky-950">维修状态</h3>
        <div className="mt-4 grid gap-3 text-sm font-bold text-slate-700">
          <div className="rounded-[16px] bg-sky-100 p-3">题号：{index + 1}/{challengeQuestions.length}</div>
          <div className="rounded-[16px] bg-emerald-100 p-3">已答：{answers.length}</div>
          <div className="rounded-[16px] bg-violet-100 p-3">连续答对：{streak}</div>
          {streak === 0 && answers.length >= 2 && answers.slice(-2).every((item) => !item.correct) && (
            <div className="rounded-[16px] bg-amber-100 p-3 text-orange-800">连续失误，建议维修后回资料阅读区复习。</div>
          )}
          <ProgressBar value={progress} label="维修进度" tone="cyan" />
        </div>
      </aside>
    </section>
  );
};
