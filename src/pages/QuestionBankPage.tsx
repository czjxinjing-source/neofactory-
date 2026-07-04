import { motion } from "framer-motion";
import { BarChart3, BookOpen, FileImage, Layers3, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { engineeringDrawingImages } from "../data/engineeringDrawingImages";
import { engineeringDrawingQuestions, getEngineeringAnswerDistribution } from "../data/engineeringDrawingQuestions";
import { levels } from "../data/levels";
import { modules } from "../data/modules";
import { Question, questions } from "../data/questions";
import { isTextAnswerQuestion } from "../utils/quiz";

const answerLabel = (answer: string | string[]) => (Array.isArray(answer) ? answer.join("+") : answer);

const optionLabel = (index: number) => String.fromCharCode(65 + index);

const questionAnswerLabel = (question: Question) =>
  isTextAnswerQuestion(question)
    ? question.fillAnswers?.join(" / ") ?? question.answerText ?? "未设置"
    : Array.isArray(question.answerIndex)
    ? question.answerIndex.map((index) => optionLabel(index)).join("+")
    : optionLabel(question.answerIndex);

const difficultyLabel: Record<string, string> = {
  easy: "简单",
  medium: "中等",
  medium_hard: "中等偏上",
  hard: "较难",
};

const questionTypeLabel: Record<string, string> = {
  single_choice: "单选题",
  multiple_choice: "多选题",
  true_false: "判断题",
  image_error_finding: "看图找错",
  short_answer: "综合分析",
  comprehensive_analysis: "综合分析",
  code_read: "程序阅读",
  code_fill: "程序补全",
  code_debug: "程序纠错",
  code_order: "程序排序",
  process_order: "流程排序",
  short_code: "短程序",
  single: "单选题",
  multiple: "多选题",
  judge: "判断题",
  fill: "填空题",
  单选题: "单选题",
  多选题: "多选题",
  判断题: "判断题",
  填空题: "填空题",
  读数题: "读数题",
  场景分析题: "场景分析",
  故障判断题: "故障判断",
  简单计算题: "简单计算",
};

const getModuleQuestions = (moduleId: string) => questions.filter((question) => question.levelId.startsWith(`${moduleId}-`));

export const QuestionBankPage = () => {
  const [selectedModuleId, setSelectedModuleId] = useState(modules[0]?.id ?? "mechanics");
  const [selectedQuestionId, setSelectedQuestionId] = useState("");
  const [selectedDrawingId, setSelectedDrawingId] = useState(engineeringDrawingImages[0]?.id ?? "");
  const distribution = getEngineeringAnswerDistribution();
  const selectedModule = modules.find((item) => item.id === selectedModuleId) ?? modules[0];
  const selectedLevelIds = levels.filter((item) => item.moduleId === selectedModuleId).map((item) => item.id);
  const moduleQuestions = useMemo(() => getModuleQuestions(selectedModuleId), [selectedModuleId]);
  const selectedQuestion = moduleQuestions.find((item) => item.id === selectedQuestionId) ?? moduleQuestions[0];
  const selectedDrawing = engineeringDrawingImages.find((item) => item.id === selectedDrawingId) ?? engineeringDrawingImages[0];
  const drawingQuestions = useMemo(
    () => engineeringDrawingQuestions.filter((item) => item.drawingId === selectedDrawing?.id),
    [selectedDrawing?.id],
  );
  const moduleStats = modules.map((module) => {
    const bank = getModuleQuestions(module.id);
    return {
      module,
      count: bank.length,
      imageCount: bank.filter((question) => question.imageUrl).length,
      levelCount: levels.filter((level) => level.moduleId === module.id).length,
    };
  });
  const typeStats = Object.entries(
    moduleQuestions.reduce<Record<string, number>>((result, question) => {
      const label = questionTypeLabel[question.type ?? ""] ?? question.type ?? "普通题";
      result[label] = (result[label] ?? 0) + 1;
      return result;
    }, {}),
  );

  const handleSelectModule = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    const first = getModuleQuestions(moduleId)[0];
    setSelectedQuestionId(first?.id ?? "");
  };

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="cartoon-card p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black text-orange-600">开发检查台</p>
            <h1 className="mt-1 text-3xl font-black text-sky-950">八区题库管理</h1>
            <p className="mt-2 text-sm font-bold text-slate-600">按训练区域查看题库数量、题目详情、答案、解析和配图绑定。</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-[18px] bg-cyan-100 px-4 py-3 text-center shadow-soft">
              <div className="text-2xl font-black text-sky-950">{questions.length}</div>
              <div className="text-xs font-black text-slate-600">总题目</div>
            </div>
            <div className="rounded-[18px] bg-amber-100 px-4 py-3 text-center shadow-soft">
              <div className="text-2xl font-black text-sky-950">{modules.length}</div>
              <div className="text-xs font-black text-slate-600">训练区域</div>
            </div>
            <div className="rounded-[18px] bg-emerald-100 px-4 py-3 text-center shadow-soft">
              <div className="text-2xl font-black text-sky-950">{moduleQuestions.length}</div>
              <div className="text-xs font-black text-slate-600">当前区域</div>
            </div>
            <div className="rounded-[18px] bg-violet-100 px-4 py-3 text-center shadow-soft">
              <div className="text-2xl font-black text-sky-950">{engineeringDrawingImages.length}</div>
              <div className="text-xs font-black text-slate-600">工程图</div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {moduleStats.map(({ module, count, imageCount, levelCount }) => {
          const active = module.id === selectedModuleId;
          const Icon = module.icon;
          return (
            <button
              key={module.id}
              onClick={() => handleSelectModule(module.id)}
              className={`rounded-[22px] border-4 p-4 text-left shadow-soft transition hover:-translate-y-1 ${
                active ? "border-amber-300 bg-amber-50" : "border-sky-900/10 bg-white/88"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-[16px] bg-sky-100 p-2 text-sky-800">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-base font-black text-sky-950">{module.name}</span>
                </div>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-800">{count} 题</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-bold text-slate-600">
                <span className="rounded-[14px] bg-white/75 px-3 py-2">{levelCount} 个关卡</span>
                <span className="rounded-[14px] bg-white/75 px-3 py-2">{imageCount} 道配图题</span>
              </div>
            </button>
          );
        })}
      </section>

      <section className="grid gap-5 lg:grid-cols-[340px_1fr]">
        <div className="cartoon-card p-5">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-sky-950">
            <BarChart3 className="h-5 w-5 text-orange-600" />
            {selectedModule.name}统计
          </h2>
          <div className="grid gap-3">
            <div className="rounded-[18px] bg-white/75 p-3 text-sm font-bold text-slate-700">
              关卡：{selectedLevelIds.join("、") || "暂无"}
            </div>
            {typeStats.length > 0 ? (
              typeStats.map(([type, count]) => (
                <div key={type} className="rounded-[18px] bg-white/75 p-3">
                  <div className="flex items-center justify-between text-sm font-black text-sky-950">
                    <span>{type}</span>
                    <span>{count} 道</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-sky-100">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-amber-300" style={{ width: `${Math.round((count / Math.max(1, moduleQuestions.length)) * 100)}%` }} />
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-[18px] bg-rose-100 p-3 text-sm font-black text-rose-700">这个区域还没有题目。</div>
            )}
          </div>
        </div>

        <div className="cartoon-card p-5">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-sky-950">
            <Layers3 className="h-5 w-5 text-sky-700" />
            {selectedModule.name}题目列表
          </h2>
          <div className="max-h-[620px] grid gap-3 overflow-auto pr-1">
            {moduleQuestions.map((question) => (
              <button
                key={question.id}
                onClick={() => setSelectedQuestionId(question.id)}
                className={`rounded-[18px] border-4 p-3 text-left shadow-soft ${
                  selectedQuestion?.id === question.id ? "border-amber-300 bg-amber-50" : "border-sky-900/10 bg-white/80 hover:bg-sky-50"
                }`}
              >
                <div className="text-xs font-black text-orange-700">
                  {question.id} · 答案 {questionAnswerLabel(question)} · {difficultyLabel[question.difficulty ?? ""] ?? "未标难度"} · {questionTypeLabel[question.type ?? ""] ?? question.type ?? "普通题"}
                </div>
                <div className="mt-2 text-sm font-black leading-5 text-sky-950">{question.text}</div>
                {question.knowledgePoints && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {question.knowledgePoints.slice(0, 4).map((point) => (
                      <span key={point} className="rounded-full bg-violet-100 px-2 py-1 text-[10px] font-black text-violet-800">{point}</span>
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedQuestion && (
        <section className="cartoon-card p-5">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-sky-950">
            <BookOpen className="h-5 w-5 text-violet-700" />
            题目详情
          </h2>
          <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
            <div className="rounded-[18px] border-4 border-sky-900/10 bg-white p-4 shadow-soft">
              {selectedQuestion.imageUrl ? (
                <img src={selectedQuestion.imageUrl} alt={selectedQuestion.imageAlt ?? "题目配图"} className="h-64 w-full object-contain" />
              ) : (
                <div className="flex h-64 items-center justify-center rounded-[14px] bg-sky-50 text-sm font-black text-slate-500">文字题 / 无配图</div>
              )}
            </div>
            <div className="space-y-3">
              <div className="rounded-[18px] bg-white/75 p-3 text-sm font-bold text-slate-700">
                题目 ID：{selectedQuestion.id} · 所属区域：{selectedModule.name} · 关卡：{selectedQuestion.levelId} · 类型：{questionTypeLabel[selectedQuestion.type ?? ""] ?? selectedQuestion.type ?? "普通题"}
              </div>
              <h3 className="text-lg font-black leading-7 text-sky-950">{selectedQuestion.text}</h3>
              {selectedQuestion.promptCode && (
                <pre className="overflow-auto rounded-[18px] bg-slate-950 p-4 text-sm font-bold leading-6 text-cyan-50">
                  <code>{selectedQuestion.promptCode}</code>
                </pre>
              )}
              <div className="grid gap-2 md:grid-cols-2">
                {selectedQuestion.options.map((option, index) => {
                  const correct = Array.isArray(selectedQuestion.answerIndex)
                    ? selectedQuestion.answerIndex.includes(index)
                    : selectedQuestion.answerIndex === index;
                  return (
                    <div key={`${selectedQuestion.id}-${index}`} className={`rounded-[16px] p-3 text-sm font-bold ${correct ? "bg-emerald-100 text-emerald-900" : "bg-white/75 text-slate-700"}`}>
                      {optionLabel(index)}. {option}
                    </div>
                  );
                })}
              </div>
              <div className="rounded-[18px] bg-amber-100 p-3 text-sm font-black text-orange-800">正确答案：{questionAnswerLabel(selectedQuestion)}</div>
              <p className="whitespace-pre-line rounded-[18px] bg-white/75 p-3 text-sm font-bold leading-6 text-slate-700">解析：{selectedQuestion.explanation}</p>
              {selectedQuestion.knowledgePoints && (
                <div className="flex flex-wrap gap-2">
                  {selectedQuestion.knowledgePoints.map((tag) => (
                    <span key={tag} className="rounded-full bg-violet-100 px-3 py-1 text-xs font-black text-violet-800">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {selectedModuleId === "drawing" && (
        <>
          <section className="grid gap-5 lg:grid-cols-[340px_1fr]">
            <div className="cartoon-card p-5">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-sky-950">
                <BarChart3 className="h-5 w-5 text-orange-600" />
                工程图答案分布
              </h2>
              <div className="grid gap-3">
                {["A", "B", "C", "D"].map((key) => {
                  const value = distribution[key] ?? 0;
                  const percent = engineeringDrawingQuestions.length > 0 ? Math.round((value / engineeringDrawingQuestions.length) * 100) : 0;
                  return (
                    <div key={key} className="rounded-[18px] bg-white/75 p-3">
                      <div className="flex items-center justify-between text-sm font-black text-sky-950">
                        <span>{key} 正确答案</span>
                        <span>{value} 道</span>
                      </div>
                      <div className="mt-2 h-3 overflow-hidden rounded-full bg-sky-100">
                        <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-amber-300" style={{ width: `${percent}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="cartoon-card p-5">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-sky-950">
                <FileImage className="h-5 w-5 text-sky-700" />
                工程图库
              </h2>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {engineeringDrawingImages.map((drawing) => (
                  <button
                    key={drawing.id}
                    onClick={() => setSelectedDrawingId(drawing.id)}
                    className={`rounded-[22px] border-4 bg-white p-3 text-left shadow-soft transition hover:-translate-y-1 ${selectedDrawing?.id === drawing.id ? "border-amber-300" : "border-sky-900/10"}`}
                  >
                    <img src={drawing.src} alt={drawing.title} className="h-32 w-full rounded-[14px] border border-slate-200 object-contain" />
                    <div className="mt-3 text-sm font-black text-sky-950">{drawing.id} · {drawing.title}</div>
                    <div className="mt-1 text-xs font-bold text-slate-600">{drawing.partType} · {drawing.questionIds.length} 题</div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      <span className={`rounded-full px-2 py-1 text-[10px] font-black ${drawing.hasIntentionalError ? "bg-rose-200 text-rose-800" : "bg-emerald-200 text-emerald-800"}`}>
                        {drawing.hasIntentionalError ? "故意错误图" : "规范训练图"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {selectedDrawing && (
            <section className="grid gap-5 lg:grid-cols-[1fr_420px]">
              <div className="cartoon-card p-5">
                <h2 className="mb-4 text-xl font-black text-sky-950">{selectedDrawing.id} 图片详情</h2>
                <img src={selectedDrawing.src} alt={selectedDrawing.title} className="max-h-[560px] w-full rounded-[18px] border-4 border-sky-900/10 bg-white object-contain shadow-soft" />
                <div className="mt-4 grid gap-3 text-sm font-bold text-slate-700 md:grid-cols-2">
                  <div className="rounded-[18px] bg-white/75 p-3">图片名称：{selectedDrawing.title}</div>
                  <div className="rounded-[18px] bg-white/75 p-3">零件类型：{selectedDrawing.partType}</div>
                  <div className="rounded-[18px] bg-white/75 p-3">绑定题目：{selectedDrawing.questionIds.length} 道</div>
                  <div className="rounded-[18px] bg-white/75 p-3">状态：{selectedDrawing.hasIntentionalError ? "故意设置错误" : "正确图"}</div>
                </div>
                <p className="mt-3 rounded-[18px] bg-white/75 p-3 text-sm font-bold leading-6 text-slate-700">{selectedDrawing.description}</p>
              </div>

              <div className="cartoon-card p-5">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-sky-950">
                  <Search className="h-5 w-5 text-orange-600" />
                  本图绑定题目
                </h2>
                <div className="max-h-[620px] space-y-3 overflow-auto pr-1">
                  {drawingQuestions.map((question) => (
                    <div key={question.id} className="rounded-[18px] border-4 border-sky-900/10 bg-white/80 p-3 text-left shadow-soft">
                      <div className="text-xs font-black text-orange-700">{question.id} · 正确答案 {answerLabel(question.answer)} · {question.difficulty}</div>
                      <div className="mt-2 text-sm font-black leading-5 text-sky-950">{question.question}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </motion.div>
  );
};
