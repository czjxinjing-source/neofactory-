import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookMarked, CheckCircle2, ListTree, ShieldAlert, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { LearningModule } from "../data/modules";
import { getReadingCardsByModule, ReadingCard, ReadingCategory } from "../data/readingCards";
import { UserProgress } from "../data/userProgress";
import { markReadingCard, saveReadingIndex } from "../utils/learningRecords";

type ReadingCardSwiperProps = {
  module: LearningModule;
  userProgress: UserProgress;
  onProgressChange: (progress: UserProgress) => void;
};

const categoryTone: Record<ReadingCategory, string> = {
  基础概念: "bg-cyan-100 text-cyan-800",
  核心知识: "bg-blue-100 text-blue-800",
  实际应用: "bg-emerald-100 text-emerald-800",
  常见故障: "bg-rose-100 text-rose-800",
  判断方法: "bg-violet-100 text-violet-800",
  操作流程: "bg-amber-100 text-orange-800",
  易错点: "bg-orange-100 text-orange-800",
  安全注意: "bg-red-100 text-red-800",
  术语解释: "bg-slate-100 text-slate-800",
  小结复习: "bg-lime-100 text-lime-800",
};

const clampIndex = (value: number, max: number) => Math.min(Math.max(value, 0), Math.max(0, max - 1));

const CardBody = ({ card }: { card: ReadingCard }) => (
  <div className="grid gap-4">
    <div>
      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${categoryTone[card.category]}`}>
        {card.category}
      </span>
      <h3 className="mt-4 text-2xl font-black leading-8 text-sky-950">{card.title}</h3>
      <p className="mt-3 text-sm font-bold leading-7 text-slate-700">{card.summary}</p>
    </div>
    <div className="grid gap-3 md:grid-cols-2">
      <div className="rounded-[20px] border-4 border-sky-900/10 bg-sky-50 p-4">
        <div className="text-sm font-black text-sky-900">现场怎么用</div>
        <p className="mt-2 text-sm font-medium leading-6 text-slate-700">{card.application}</p>
      </div>
      <div className="rounded-[20px] border-4 border-orange-900/10 bg-amber-50 p-4">
        <div className="text-sm font-black text-orange-800">易错提醒</div>
        <p className="mt-2 text-sm font-medium leading-6 text-slate-700">{card.commonMistake}</p>
      </div>
    </div>
    {card.safetyTip && (
      <div className="flex gap-3 rounded-[20px] border-4 border-rose-900/10 bg-rose-50 p-4 text-sm font-bold leading-6 text-rose-800">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0" />
        {card.safetyTip}
      </div>
    )}
    <div className="flex flex-wrap gap-2">
      {card.terms.map((term) => (
        <span key={term} className="rounded-full bg-white px-3 py-1 text-xs font-black text-slate-600 shadow-soft">
          {term}
        </span>
      ))}
    </div>
    <div className="rounded-[20px] border-4 border-violet-900/10 bg-violet-50 p-4">
      <div className="flex items-center gap-2 text-sm font-black text-violet-800">
        <Sparkles className="h-4 w-4" />
        小自测
      </div>
      <p className="mt-2 text-sm font-bold text-slate-700">{card.miniQuiz.question}</p>
      <p className="mt-2 text-xs font-bold leading-5 text-slate-500">参考：{card.miniQuiz.answer}</p>
    </div>
  </div>
);

export const ReadingCardSwiper = ({ module, userProgress, onProgressChange }: ReadingCardSwiperProps) => {
  const cards = useMemo(() => getReadingCardsByModule(module.id), [module.id]);
  const saved = userProgress.readingProgress[module.id];
  const [index, setIndex] = useState(() => clampIndex(saved?.currentIndex ?? 0, cards.length));
  const [direction, setDirection] = useState(1);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const current = cards[index];
  const readIds = saved?.readCardIds ?? [];
  const readCount = new Set(readIds).size;
  const percent = cards.length > 0 ? Math.round((readCount / cards.length) * 100) : 0;

  useEffect(() => {
    setIndex(clampIndex(userProgress.readingProgress[module.id]?.currentIndex ?? 0, cards.length));
  }, [cards.length, module.id, userProgress.readingProgress]);

  useEffect(() => {
    if (!current) return;
    const next = markReadingCard(module.id, index, current.id);
    onProgressChange(next);
  }, [current?.id, index, module.id]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const go = (step: number) => {
    if (cards.length === 0) return;
    setDirection(step);
    setIndex((value) => {
      const nextIndex = clampIndex(value + step, cards.length);
      onProgressChange(saveReadingIndex(module.id, nextIndex));
      return nextIndex;
    });
  };

  const jumpTo = (nextIndex: number) => {
    setDirection(nextIndex >= index ? 1 : -1);
    const safeIndex = clampIndex(nextIndex, cards.length);
    setIndex(safeIndex);
    onProgressChange(saveReadingIndex(module.id, safeIndex));
    setCatalogOpen(false);
  };

  if (!current) {
    return (
      <section className="cartoon-card p-6 text-center">
        <h2 className="text-xl font-black text-sky-950">这个区域的资料正在整理中</h2>
      </section>
    );
  }

  const grouped = cards.reduce<Record<string, ReadingCard[]>>((result, card) => {
    result[card.category] = [...(result[card.category] ?? []), card];
    return result;
  }, {});

  return (
    <section className="space-y-4">
      <div className="cartoon-card p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black text-orange-600">工程师知识卡</p>
            <h2 className="mt-1 text-2xl font-black text-sky-950">{module.name}资料阅读</h2>
            <p className="mt-2 text-sm font-bold text-slate-600">
              第 {index + 1} / {cards.length} 张 · 已读 {readCount} / {cards.length} · 完成 {percent}%
            </p>
          </div>
          <button onClick={() => setCatalogOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-[18px] border-4 border-sky-900/10 bg-white px-4 py-3 text-sm font-black text-sky-900 shadow-soft hover:bg-sky-50">
            <ListTree className="h-4 w-4" />
            目录
          </button>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-sky-100">
          <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300" style={{ width: `${percent}%` }} />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[30px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.article
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 80 : -80, rotate: direction > 0 ? 2 : -2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -80 : 80, rotate: direction > 0 ? -2 : 2 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) go(1);
              if (info.offset.x > 80) go(-1);
            }}
            className="min-h-[520px] rounded-[30px] border-4 border-sky-900/15 bg-gradient-to-br from-white via-cyan-50 to-amber-50 p-6 shadow-cartoon md:p-8"
          >
            <CardBody card={current} />
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <button onClick={() => go(-1)} disabled={index === 0} className="inline-flex items-center justify-center gap-2 rounded-[18px] border-4 border-sky-900/10 bg-white px-4 py-3 font-black text-sky-900 shadow-soft disabled:cursor-not-allowed disabled:opacity-40">
          <ArrowLeft className="h-4 w-4" />
          上一张
        </button>
        <button onClick={() => go(1)} disabled={index >= cards.length - 1} className="cartoon-button inline-flex items-center justify-center gap-2 px-4 py-3 font-black disabled:cursor-not-allowed disabled:opacity-40">
          下一张
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {catalogOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-slate-950/65 p-4 backdrop-blur-sm">
          <div className="mx-auto max-w-5xl rounded-[28px] border-4 border-sky-900/15 bg-white p-5 shadow-cartoon">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-800">
                  <BookMarked className="h-4 w-4" />
                  已读 {readCount} / {cards.length}
                </div>
                <h3 className="mt-3 text-2xl font-black text-sky-950">{module.name}目录</h3>
              </div>
              <button onClick={() => setCatalogOpen(false)} className="rounded-full bg-slate-100 p-3 text-slate-700 hover:bg-slate-200">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(grouped).map(([category, items]) => (
                <section key={category} className="rounded-[22px] border-4 border-sky-900/10 bg-sky-50/70 p-4">
                  <h4 className="mb-3 text-sm font-black text-sky-950">{category}</h4>
                  <div className="grid gap-2">
                    {items.map((card) => {
                      const cardIndex = cards.findIndex((item) => item.id === card.id);
                      const read = readIds.includes(card.id);
                      const active = card.id === current.id;
                      return (
                        <button key={card.id} onClick={() => jumpTo(cardIndex)} className={`flex items-center justify-between rounded-[14px] px-3 py-2 text-left text-xs font-bold transition ${active ? "bg-amber-200 text-orange-900" : "bg-white text-slate-700 hover:bg-amber-50"}`}>
                          <span>{card.title}</span>
                          {read && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />}
                        </button>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
