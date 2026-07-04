import { Lock, Sparkles } from "lucide-react";
import { EncyclopediaItem } from "../data/encyclopedia";

type EncyclopediaCardProps = {
  item: EncyclopediaItem;
  unlocked: boolean;
};

export const EncyclopediaCard = ({ item, unlocked }: EncyclopediaCardProps) => (
  <article
    className={`rounded-lg border p-5 backdrop-blur-xl transition ${
      unlocked
        ? "border-cyan-300/25 bg-cyan-300/[0.08] shadow-glow"
        : "border-white/10 bg-white/[0.04] grayscale"
    }`}
  >
    <div className="mb-4 flex items-center justify-between">
      <span className={`flex h-11 w-11 items-center justify-center rounded-lg border ${unlocked ? "border-cyan-300/35 bg-cyan-300/15 text-cyan-100" : "border-white/10 bg-slate-900 text-slate-500"}`}>
        {unlocked ? <Sparkles className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
      </span>
      <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
        {unlocked ? "已解锁" : "未解锁"}
      </span>
    </div>
    <h3 className={unlocked ? "font-semibold text-white" : "font-semibold text-slate-500"}>{item.name}</h3>
    <p className="mt-1 text-xs text-cyan-200/70">{item.type}</p>
    <p className="mt-4 min-h-12 text-sm leading-6 text-slate-300">{unlocked ? item.description : "完成相关关卡后解锁设备资料。"}</p>
    {unlocked && item.knowledgePoints && (
      <div className="mt-4 flex flex-wrap gap-1.5">
        {item.knowledgePoints.slice(0, 5).map((point) => (
          <span key={point} className="rounded-full border border-cyan-200/15 bg-cyan-200/10 px-2 py-0.5 text-[11px] font-semibold text-cyan-100">
            {point}
          </span>
        ))}
      </div>
    )}
  </article>
);
