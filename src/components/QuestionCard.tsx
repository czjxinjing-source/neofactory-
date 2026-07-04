import { CheckCircle2, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Question } from "../data/questions";
import { formatAnswerText, isCorrectAnswer, isTextAnswerQuestion, QuizAnswer } from "../utils/quiz";

type QuestionCardProps = {
  question: Question;
  selectedIndex: QuizAnswer | null;
  submitted: boolean;
  onSelect: (index: number) => void;
  onFillAnswer?: (value: string) => void;
};

const difficultyLabel = {
  easy: "基础",
  medium: "中等",
  medium_hard: "中等偏上",
  hard: "较难",
};

const typeLabel: Record<string, string> = {
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

const isPicked = (selectedIndex: QuizAnswer | null, index: number) =>
  Array.isArray(selectedIndex) ? selectedIndex.includes(index) : selectedIndex === index;

const isCorrect = (answerIndex: number | number[], index: number) =>
  Array.isArray(answerIndex) ? answerIndex.includes(index) : answerIndex === index;

const answerPlaceholder = (type?: string) => {
  if (type === "code_order" || type === "process_order") return "请输入顺序，例如 3-5-2-1-4";
  if (type === "short_code") return "请输入程序段，例如 G00 X20 Y20 Z5";
  if (type === "code_fill") return "按空格依次填写，例如 G90 G00 M03";
  return "请输入答案";
};

export const QuestionCard = ({ question, selectedIndex, submitted, onSelect, onFillAnswer }: QuestionCardProps) => {
  const [imageOpen, setImageOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const imageSrc = question.imageUrl ?? question.image ?? undefined;
  useEffect(() => {
    setImageOpen(false);
    setImageFailed(false);
  }, [question.id]);
  const selectedLetters = Array.isArray(selectedIndex)
    ? selectedIndex.map((index) => String.fromCharCode(65 + index))
    : typeof selectedIndex === "number"
      ? [String.fromCharCode(65 + selectedIndex)]
      : [];
  const submittedCorrect = selectedIndex !== null && isCorrectAnswer(question, selectedIndex);
  const textAnswerQuestion = isTextAnswerQuestion(question);

  return (
  <section className="rounded-[28px] border-4 border-sky-900/15 bg-white/88 p-5 shadow-cartoon">
    <div className="mb-4 flex flex-wrap gap-2">
      <span className="inline-flex rounded-full bg-amber-200 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-orange-700">Repair Challenge</span>
      {question.type && <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-black text-sky-800">{typeLabel[question.type] ?? question.type}</span>}
      {question.difficulty && <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-black text-violet-800">{difficultyLabel[question.difficulty]}</span>}
    </div>
    <h2 className="text-xl font-black leading-8 text-sky-950">{question.text}</h2>
    {question.promptCode && (
      <pre className="mt-4 overflow-auto rounded-[18px] border-4 border-sky-900/10 bg-slate-950 p-4 text-sm font-bold leading-6 text-cyan-50 shadow-soft">
        <code>{question.promptCode}</code>
      </pre>
    )}
    {(question.imageFocus || question.relatedDrawingFeature) && (
      <div className="mt-4 rounded-[18px] border-2 border-sky-900/10 bg-sky-50 p-3 text-sm font-bold text-slate-700">
        {question.imageFocus && <div>观察区域：{question.imageFocus}</div>}
        {question.relatedDrawingFeature && <div className="mt-1">考察要素：{question.relatedDrawingFeature}</div>}
      </div>
    )}
    {imageSrc && !imageFailed && (
      <button
        onClick={() => setImageOpen(true)}
        className="mt-5 block w-full overflow-hidden rounded-[22px] border-4 border-sky-900/10 bg-white p-3 text-left shadow-soft transition hover:-translate-y-0.5"
      >
        <img
          src={imageSrc}
          alt={question.imageAlt ?? "工程图题目配图"}
          onError={() => setImageFailed(true)}
          className="max-h-[420px] w-full object-contain"
        />
        <span className="mt-2 block text-center text-xs font-bold text-slate-500">点击放大查看题目图</span>
        {question.imageDescription && <span className="mt-2 block text-sm font-bold leading-6 text-slate-600">{question.imageDescription}</span>}
      </button>
    )}
    {imageSrc && imageFailed && (
      <div className="mt-5 rounded-[22px] border-4 border-amber-300 bg-amber-50 p-4 text-sm font-bold leading-6 text-orange-800">
        题目配图暂时无法加载，请先根据题干和文字说明作答。图片路径：{imageSrc}
      </div>
    )}
    {textAnswerQuestion ? (
      <div className="mt-6">
        <input
          value={typeof selectedIndex === "string" ? selectedIndex : ""}
          onChange={(event) => onFillAnswer?.(event.target.value)}
          disabled={submitted}
          placeholder={answerPlaceholder(question.type)}
          className="w-full rounded-[20px] border-4 border-sky-900/10 bg-sky-50 px-4 py-3 font-mono text-sm font-bold text-sky-950 outline-none transition focus:border-amber-300 disabled:opacity-70"
        />
      </div>
    ) : (
      <div className="mt-6 grid gap-3">
        {question.options.map((option, index) => {
        const picked = isPicked(selectedIndex, index);
        const correct = isCorrect(question.answerIndex, index);
        const showState = submitted && (picked || correct);
        return (
          <button
            key={option}
            onClick={() => onSelect(index)}
            disabled={submitted}
            className={`flex items-center justify-between rounded-[20px] border-4 px-4 py-3 text-left text-sm font-bold transition ${
              showState && correct
                ? "border-emerald-500/50 bg-emerald-200 text-emerald-900"
                : showState && picked
                  ? "border-rose-500/50 bg-rose-200 text-rose-900"
                  : "border-sky-900/10 bg-sky-50 text-slate-700 hover:-translate-y-0.5 hover:bg-amber-100"
            }`}
          >
            <span>
              <span className="mr-3 text-orange-600">{String.fromCharCode(65 + index)}.</span>
              {option}
            </span>
            {submitted && correct && <CheckCircle2 className="h-5 w-5 shrink-0" />}
            {submitted && picked && !correct && <XCircle className="h-5 w-5 shrink-0" />}
          </button>
        );
        })}
      </div>
    )}
    {submitted && selectedIndex !== null && (
      <div className="mt-5 rounded-[22px] border-4 border-sky-900/10 bg-amber-50 p-4">
        <div className={`font-black ${submittedCorrect ? "text-emerald-700" : "text-rose-700"}`}>
          {submittedCorrect
            ? "校准成功，回答正确。"
            : "诊断偏差，回答错误。"}
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-[16px] bg-white/75 p-3 text-sm font-bold text-slate-700">
            用户答案：{formatAnswerText(question, selectedIndex)}
          </div>
          <div className="rounded-[16px] bg-emerald-50 p-3 text-sm font-bold text-emerald-800">
            正确答案：{formatAnswerText(question, question.answerIndex)}
          </div>
        </div>
        {question.analysis ? (
          <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700">
            <section>
              <div className="font-black text-sky-950">正确原因</div>
              <p>{question.analysis.correctReason}</p>
            </section>
            <section>
              <div className="font-black text-sky-950">错误选项分析</div>
              <div className="mt-1 grid gap-2">
                {Object.entries(question.analysis.wrongReasons).map(([key, value]) => (
                  <p key={key}>
                    <span className="font-black text-orange-700">{key}：</span>
                    {value}
                  </p>
                ))}
              </div>
            </section>
            <section>
              <div className="font-black text-sky-950">常见误区</div>
              <p>{question.analysis.commonMistake}</p>
            </section>
            <section>
              <div className="font-black text-sky-950">学习要点</div>
              <p>{question.analysis.learningPoint}</p>
            </section>
          </div>
        ) : (
          <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700">
            <section>
              <div className="font-black text-sky-950">为什么这样判断</div>
              <p className="whitespace-pre-line">{question.explanation}</p>
            </section>
            <section>
              <div className="font-black text-sky-950">实际学习中要注意</div>
              <p>先确认题目条件、图纸标注或程序指令，再对应到知识点判断；不要只凭单个词或经验直接选答案。</p>
            </section>
          </div>
        )}
        {selectedLetters
          .filter((letter) => question.mistakeTeaching?.[letter])
          .map((letter) => {
            const item = question.mistakeTeaching?.[letter];
            if (!item) return null;
            return (
              <div key={letter} className="mt-4 rounded-[18px] border-2 border-rose-200 bg-rose-50 p-3 text-sm leading-6 text-slate-700">
                <div className="font-black text-rose-700">错因教学：选项 {letter}</div>
                <p><span className="font-bold">为什么容易选：</span>{item.whyThisOptionLooksRight}</p>
                <p><span className="font-bold">实际错在哪里：</span>{item.whyItIsActuallyWrong}</p>
                <p><span className="font-bold">以后怎么判断：</span>{item.howToAvoid}</p>
              </div>
            );
          })}
        {question.knowledgePoints && question.knowledgePoints.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {question.knowledgePoints.map((point) => (
              <span key={point} className="rounded-full bg-sky-100 px-3 py-1 text-xs font-black text-sky-800">
                {point}
              </span>
            ))}
          </div>
        )}
      </div>
    )}
    {imageOpen && imageSrc && !imageFailed && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" onClick={() => setImageOpen(false)}>
        <div className="max-h-[92vh] w-full max-w-6xl overflow-auto rounded-[28px] border-4 border-sky-900/20 bg-white p-4 shadow-cartoon">
          <img src={imageSrc} alt={question.imageAlt ?? "工程图题目配图"} className="mx-auto w-full object-contain" />
          <div className="mt-3 text-center text-sm font-bold text-slate-600">点击空白处关闭</div>
        </div>
      </div>
    )}
  </section>
  );
};
