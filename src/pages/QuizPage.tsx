import { motion } from "framer-motion";
import { ArrowLeft, ClipboardList, Gauge, Home, Radio, RotateCcw, Trophy, Wrench, Zap } from "lucide-react";
import { useMemo, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { QuestionCard } from "../components/QuestionCard";
import { Level } from "../data/levels";
import { engineeringDrawingImages } from "../data/engineeringDrawingImages";
import { LearningModule } from "../data/modules";
import { Question, questions } from "../data/questions";
import { TestRecord, UserProgress } from "../data/userProgress";
import { generatePracticeSet, PracticeSetResult } from "../utils/engineeringDrawingRandomizer";
import { completeTest, PendingAnswer } from "../utils/localData";
import { isCorrectAnswer, isTextAnswerQuestion, QuizAnswer } from "../utils/quiz";

type QuizPageProps = {
  level: Level;
  module: LearningModule;
  userProgress: UserProgress;
  repairAttempt?: boolean;
  onProgressChange: (progress: UserProgress) => void;
  onBack: () => void;
  onHome?: () => void;
};

type ResultState = {
  record: TestRecord;
  achievements: string[];
  repairCompleted: boolean;
};

const formatDuration = (seconds: number) => {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}分${String(sec).padStart(2, "0")}秒`;
};

const seededValue = (value: string) => {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const shuffleQuestions = (items: Question[], seed: string) =>
  [...items].sort((left, right) => seededValue(`${seed}-${left.id}`) - seededValue(`${seed}-${right.id}`));

export const QuizPage = ({ level, module, userProgress, repairAttempt = false, onProgressChange, onBack, onHome }: QuizPageProps) => {
  const [roundSeed, setRoundSeed] = useState(() => Date.now());
  const [knowledgeFilter, setKnowledgeFilter] = useState("全部");
  const [difficultyFilter, setDifficultyFilter] = useState("全部");
  const [partTypeFilter, setPartTypeFilter] = useState("全部");
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<QuizAnswer | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [answers, setAnswers] = useState<PendingAnswer[]>([]);
  const [result, setResult] = useState<ResultState | null>(null);

  const drawingPartTypeById = useMemo(
    () => Object.fromEntries(engineeringDrawingImages.map((item) => [item.id, item.partType])),
    [],
  );
  const practiceSet = useMemo<PracticeSetResult | null>(() => {
    if (module.id !== "drawing") return null;
    return generatePracticeSet({
      questions,
      count: 12,
      filters: {
        knowledgePoint: knowledgeFilter,
        difficulty: difficultyFilter,
        partType: partTypeFilter,
        drawingPartTypeById,
      },
    });
  }, [difficultyFilter, drawingPartTypeById, knowledgeFilter, module.id, partTypeFilter, roundSeed]);
  const levelQuestions = useMemo<Question[]>(() => {
    if (practiceSet) return practiceSet.questions;
    const pool = questions.filter((question) => question.levelId === level.id);
    const fallback = questions.filter((question) => question.levelId.startsWith(`${module.id}-`));
    return shuffleQuestions(pool.length > 0 ? pool : fallback, `${level.id}-${module.id}-${roundSeed}`).slice(0, 12);
  }, [level.id, module.id, practiceSet, roundSeed]);
  const question = levelQuestions[Math.min(questionIndex, Math.max(0, levelQuestions.length - 1))];
  const answeredCount = answers.length;
  const repairProgress = levelQuestions.length > 0 ? Math.round((answeredCount / levelQuestions.length) * 100) : 0;
  const isDrawing = module.id === "drawing";
  const activeRepair = repairAttempt && userProgress.repairEvent?.status === "active" && userProgress.repairEvent.moduleId === module.id;
  const knowledgeOptions = ["全部", "尺寸标注", "三视图", "剖视图", "公差配合", "几何公差", "表面粗糙度", "装配图", "线型"];
  const difficultyOptions = [
    { value: "全部", label: "全部难度" },
    { value: "easy", label: "基础" },
    { value: "medium", label: "中等" },
    { value: "medium_hard", label: "中等偏上" },
    { value: "hard", label: "较难" },
  ];
  const partTypeOptions = ["全部", ...Array.from(new Set(engineeringDrawingImages.map((item) => item.partType)))];

  const resetPractice = (nextKnowledge = knowledgeFilter, nextDifficulty = difficultyFilter, nextPartType = partTypeFilter) => {
    setKnowledgeFilter(nextKnowledge);
    setDifficultyFilter(nextDifficulty);
    setPartTypeFilter(nextPartType);
    setRoundSeed((value) => value + 1);
    setStartedAt(Date.now());
    setQuestionIndex(0);
    setSelectedIndex(null);
    setSubmitted(false);
    setStreak(0);
    setAnswers([]);
    setResult(null);
  };

  const commitCurrentAnswer = (answer: QuizAnswer) => {
    const correct = isCorrectAnswer(question, answer);
    setStreak((value) => (correct ? value + 1 : 0));
    const nextAnswer = { question, selectedIndex: answer, correct };
    setAnswers((current) => [...current, nextAnswer]);
    return nextAnswer;
  };

  const handleSelect = (index: number) => {
    if (submitted || result) return;
    if (question.isMultiple) {
      setSelectedIndex((current) => {
        const selected = Array.isArray(current) ? current : [];
        return selected.includes(index) ? selected.filter((item) => item !== index) : [...selected, index];
      });
      return;
    }
    setSelectedIndex(index);
    setSubmitted(true);
    commitCurrentAnswer(index);
  };

  const handleFillAnswer = (value: string) => {
    if (submitted || result) return;
    setSelectedIndex(value);
  };

  const finishTest = (finalAnswers: PendingAnswer[]) => {
    const settlement = completeTest({
      moduleId: module.id,
      moduleName: module.name,
      levelId: level.id,
      answers: finalAnswers,
      durationSeconds: Math.max(1, Math.round((Date.now() - startedAt) / 1000)),
      repairAttempt: activeRepair,
    });
    onProgressChange(settlement.progress);
    setResult({
      record: settlement.record,
      achievements: settlement.achievementsUnlocked,
      repairCompleted: settlement.repairCompleted,
    });
  };

  const handleNext = () => {
    if (isTextAnswerQuestion(question) && !submitted) {
      if (typeof selectedIndex !== "string" || selectedIndex.trim().length === 0) return;
      setSubmitted(true);
      commitCurrentAnswer(selectedIndex);
      return;
    }
    if (question.isMultiple && !submitted) {
      if (!Array.isArray(selectedIndex) || selectedIndex.length === 0) return;
      setSubmitted(true);
      commitCurrentAnswer(selectedIndex);
      return;
    }
    if (questionIndex < levelQuestions.length - 1) {
      setQuestionIndex((value) => value + 1);
      setSelectedIndex(null);
      setSubmitted(false);
      return;
    }
    finishTest(answers);
  };

  if (!question) {
    return (
      <section className="cartoon-card p-8 text-center">
        <h1 className="text-2xl font-black text-sky-950">这个区域的题库还在装配中</h1>
        <button onClick={onBack} className="cartoon-button mt-5 px-5 py-3 font-black">返回模块</button>
      </section>
    );
  }

  if (result) {
    const wrong = result.record.wrong;
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <section className="cartoon-card p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-200 px-3 py-1 text-xs font-black text-emerald-800">
                <ClipboardList className="h-4 w-4" />
                维修报告单
              </div>
              <h1 className="mt-4 text-3xl font-black text-sky-950">{module.name} 诊断完成</h1>
              <p className="mt-2 text-sm font-bold text-slate-600">
                完成 {result.record.total} 题，正确率 {result.record.accuracy}%。
              </p>
            </div>
            <div className="rounded-[24px] border-4 border-sky-900/10 bg-amber-100 p-5 text-center shadow-soft">
              <div className="text-sm font-black text-orange-700">获得经验</div>
              <div className="mt-1 text-4xl font-black text-sky-950">+{result.record.xpEarned}</div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-[22px] bg-cyan-100 p-4 text-center font-black text-sky-950">得分 {result.record.score}/{result.record.total}</div>
            <div className="rounded-[22px] bg-emerald-100 p-4 text-center font-black text-emerald-800">正确 {result.record.correct}</div>
            <div className="rounded-[22px] bg-rose-100 p-4 text-center font-black text-rose-700">错误 {wrong}</div>
            <div className="rounded-[22px] bg-violet-100 p-4 text-center font-black text-violet-800">用时 {formatDuration(result.record.durationSeconds)}</div>
          </div>
          <div className="mt-5 rounded-[22px] border-4 border-sky-900/10 bg-white/75 p-4 text-sm font-bold leading-6 text-slate-700">
            {result.repairCompleted ? "本次工厂维修事件已完成，额外获得 3 XP。" : activeRepair ? "本轮完成后未匹配到有效维修事件。" : "这是普通练习测试，没有维修额外奖励。"}
            {result.achievements.length > 0 ? ` 新成就：${result.achievements.join("、")}。` : ""}
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <button onClick={() => resetPractice()} className="cartoon-button flex items-center justify-center gap-2 px-4 py-3 font-black">
              <RotateCcw className="h-4 w-4" />
              再来一次
            </button>
            <button onClick={onBack} className="rounded-[18px] border-4 border-sky-900/10 bg-white px-4 py-3 font-black text-sky-900 shadow-soft hover:bg-sky-50">
              查看本模块
            </button>
            <button onClick={onHome ?? onBack} className="rounded-[18px] border-4 border-sky-900/10 bg-emerald-200 px-4 py-3 font-black text-emerald-900 shadow-soft hover:bg-emerald-100">
              <span className="inline-flex items-center justify-center gap-2"><Home className="h-4 w-4" />返回工厂</span>
            </button>
          </div>
        </section>
      </motion.div>
    );
  }

  const engineeringAccuracy =
    (userProgress.engineeringStats?.attempts ?? 0) > 0
      ? Math.round(((userProgress.engineeringStats?.correct ?? 0) / (userProgress.engineeringStats?.attempts ?? 1)) * 100)
      : 0;

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-950">
        <ArrowLeft className="h-4 w-4" />
        返回模块
      </button>
      <section className="grid gap-5 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="mb-4 cartoon-card p-5">
            <p className="text-sm font-black text-orange-600">{activeRepair ? "工厂维修事件" : module.name}</p>
            <h1 className="mt-1 text-2xl font-black text-sky-950">{level.name} · {levelQuestions.length} 题诊断</h1>
            <p className="mt-2 text-xs font-bold text-slate-600">完整完成本轮诊断后才会记录成绩、经验和错题。</p>
          </div>
          {isDrawing && (
            <div className="mb-4 rounded-[24px] border-4 border-sky-900/10 bg-white/88 p-4 shadow-soft">
              <div className="mb-3 text-sm font-black text-sky-950">工程制图专项筛选</div>
              <div className="flex flex-wrap gap-2">
                {knowledgeOptions.map((item) => (
                  <button key={item} onClick={() => resetPractice(item, difficultyFilter, partTypeFilter)} className={`rounded-full px-3 py-1.5 text-xs font-black transition ${knowledgeFilter === item ? "bg-amber-300 text-orange-800 shadow-soft" : "bg-sky-100 text-sky-800 hover:bg-sky-200"}`}>
                    {item}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {difficultyOptions.map((item) => (
                  <button key={item.value} onClick={() => resetPractice(knowledgeFilter, item.value, partTypeFilter)} className={`rounded-full px-3 py-1.5 text-xs font-black transition ${difficultyFilter === item.value ? "bg-violet-200 text-violet-800 shadow-soft" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {partTypeOptions.map((item) => (
                  <button key={item} onClick={() => resetPractice(knowledgeFilter, difficultyFilter, item)} className={`rounded-full px-3 py-1.5 text-xs font-black transition ${partTypeFilter === item ? "bg-emerald-200 text-emerald-800 shadow-soft" : "bg-white text-slate-700 hover:bg-emerald-50"}`}>
                    {item}
                  </button>
                ))}
              </div>
              <div className="mt-3 text-xs font-bold text-slate-600">
                本轮题目：{practiceSet?.stats.total ?? levelQuestions.length} 道；不同工程图：{practiceSet?.stats.uniqueDrawingCount ?? 0} 张；同图最多出现 2 次。
              </div>
            </div>
          )}
          <QuestionCard question={question} selectedIndex={selectedIndex} submitted={submitted} onSelect={handleSelect} onFillAnswer={handleFillAnswer} contextLabel={activeRepair ? "工厂维修事件" : "关卡诊断"} />
          <button
            onClick={handleNext}
            disabled={selectedIndex === null || (Array.isArray(selectedIndex) && selectedIndex.length === 0) || (typeof selectedIndex === "string" && selectedIndex.trim().length === 0)}
            className="cartoon-button mt-5 w-full px-4 py-3 font-black transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            {(question.isMultiple || isTextAnswerQuestion(question)) && !submitted ? "提交答案" : questionIndex < levelQuestions.length - 1 ? "下一题" : "提交维修报告"}
          </button>
        </div>
        <aside className="cartoon-card p-5">
          <h2 className="text-lg font-black text-sky-950">任务状态面板</h2>
          <div className="mt-5 grid gap-4">
            <div className="flex items-center justify-between rounded-[18px] bg-sky-100 p-3 text-sm font-bold">
              <span className="flex items-center gap-2 text-slate-700"><Radio className="h-4 w-4 text-cyan-600" />当前关卡</span>
              <span className="text-sky-950">{level.difficulty}</span>
            </div>
            <div className="flex items-center justify-between rounded-[18px] bg-blue-100 p-3 text-sm font-bold">
              <span className="flex items-center gap-2 text-slate-700"><Gauge className="h-4 w-4 text-blue-600" />当前题号</span>
              <span className="text-sky-950">{questionIndex + 1}/{levelQuestions.length}</span>
            </div>
            {activeRepair && (
              <div className="rounded-[18px] bg-rose-100 p-3 text-sm font-black text-rose-700">
                <span className="inline-flex items-center gap-2"><Wrench className="h-4 w-4" />维修模式：完成整轮才算修复</span>
              </div>
            )}
            {isDrawing && (
              <div className="rounded-[18px] bg-white/75 p-3 text-sm">
                <div className="font-black text-sky-950">本轮抽题统计</div>
                <div className="mt-2 text-xs font-bold leading-5 text-slate-600">
                  不同题目：{practiceSet?.stats.uniqueQuestionCount ?? 0}<br />
                  不同工程图：{practiceSet?.stats.uniqueDrawingCount ?? 0}<br />
                  累计答题 {userProgress.engineeringStats?.attempts ?? 0} 道，正确率 {engineeringAccuracy}%。
                </div>
              </div>
            )}
            <div className="flex items-center justify-between rounded-[18px] bg-amber-100 p-3 text-sm font-bold">
              <span className="flex items-center gap-2 text-slate-700"><Trophy className="h-4 w-4 text-orange-600" />基础经验</span>
              <span className="text-sky-950">+5 XP</span>
            </div>
            <div className="flex items-center justify-between rounded-[18px] bg-violet-100 p-3 text-sm font-bold">
              <span className="flex items-center gap-2 text-slate-700"><Zap className="h-4 w-4 text-violet-600" />连胜次数</span>
              <span className="text-sky-950">{streak}</span>
            </div>
            <ProgressBar value={repairProgress} label="设备修复进度" tone="cyan" />
          </div>
        </aside>
      </section>
    </motion.div>
  );
};
