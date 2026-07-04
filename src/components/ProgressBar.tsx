type ProgressBarProps = {
  value: number;
  label?: string;
  tone?: "cyan" | "blue" | "violet";
};

const toneClass = {
  cyan: "from-cyan-300 to-teal-400",
  blue: "from-sky-400 to-blue-500",
  violet: "from-fuchsia-400 to-violet-500",
};

export const ProgressBar = ({ value, label, tone = "cyan" }: ProgressBarProps) => (
  <div className="space-y-2">
    {label && (
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span>{label}</span>
        <span>{Math.round(value)}%</span>
      </div>
    )}
    <div className="h-3.5 overflow-hidden rounded-full border-2 border-slate-700/20 bg-white/80 shadow-inner">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${toneClass[tone]} transition-all duration-500`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  </div>
);
