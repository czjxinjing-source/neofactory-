import { Activity, Cpu, Gauge, PackageCheck } from "lucide-react";

export const SmartFactoryIllustration = () => (
  <section className="relative mt-5 min-h-[330px] overflow-hidden rounded-[30px] border-4 border-sky-900/15 bg-gradient-to-b from-cyan-100 via-sky-50 to-emerald-100 p-5 shadow-cartoon">
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-r from-emerald-300 via-lime-200 to-amber-200" />
    <div className="absolute bottom-20 left-[-8%] h-16 w-[116%] -rotate-3 rounded-full bg-cyan-300/45" />
    <div className="absolute right-6 top-5 grid gap-2">
      <span className="flex items-center gap-2 rounded-full border-2 border-sky-900/10 bg-white/80 px-3 py-1 text-xs font-black text-sky-900 shadow-soft">
        <Activity className="h-4 w-4 text-emerald-600" />
        LINE ONLINE
      </span>
      <span className="flex items-center gap-2 rounded-full border-2 border-sky-900/10 bg-white/80 px-3 py-1 text-xs font-black text-sky-900 shadow-soft">
        <Gauge className="h-4 w-4 text-orange-600" />
        OEE 86%
      </span>
    </div>

    <div className="absolute left-7 top-7 rounded-[22px] border-4 border-sky-900/10 bg-white/75 p-3 shadow-soft">
      <div className="flex items-center gap-2 text-xs font-black text-sky-900">
        <Cpu className="h-4 w-4 text-cyan-700" />
        智能工厂看板
      </div>
      <div className="mt-3 grid gap-2">
        <div className="h-2 w-28 rounded-full bg-cyan-300" />
        <div className="h-2 w-20 rounded-full bg-emerald-300" />
        <div className="h-2 w-24 rounded-full bg-amber-300" />
      </div>
    </div>

    <svg viewBox="0 0 760 320" className="absolute inset-x-0 bottom-0 mx-auto h-[310px] w-full max-w-[780px]" role="img" aria-label="智能工厂插画">
      <defs>
        <linearGradient id="factory-wall" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d9f99d" />
        </linearGradient>
        <linearGradient id="factory-roof" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>

      <ellipse cx="382" cy="288" rx="330" ry="24" fill="#0f172a" opacity="0.12" />

      <path d="M88 140 L186 94 L284 140 L382 92 L480 140 L612 140 L612 274 L88 274 Z" fill="url(#factory-wall)" stroke="#0f4a6e" strokeWidth="8" strokeLinejoin="round" />
      <path d="M88 140 L186 94 L284 140 L382 92 L480 140 L612 140" fill="none" stroke="url(#factory-roof)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="120" y="162" width="70" height="52" rx="10" fill="#bae6fd" stroke="#0f4a6e" strokeWidth="6" />
      <rect x="218" y="162" width="70" height="52" rx="10" fill="#bfdbfe" stroke="#0f4a6e" strokeWidth="6" />
      <rect x="428" y="162" width="70" height="52" rx="10" fill="#bbf7d0" stroke="#0f4a6e" strokeWidth="6" />
      <rect x="526" y="162" width="58" height="112" rx="12" fill="#fed7aa" stroke="#0f4a6e" strokeWidth="6" />
      <path d="M548 182 h16 M548 206 h16 M548 230 h16" stroke="#0f4a6e" strokeWidth="5" strokeLinecap="round" />

      <rect x="322" y="174" width="70" height="100" rx="12" fill="#cffafe" stroke="#0f4a6e" strokeWidth="6" />
      <circle cx="357" cy="216" r="20" fill="#67e8f9" stroke="#0f4a6e" strokeWidth="6" />
      <path d="M357 196 v40 M337 216 h40" stroke="#0f4a6e" strokeWidth="5" strokeLinecap="round" />

      <rect x="116" y="64" width="38" height="72" rx="10" fill="#fef3c7" stroke="#0f4a6e" strokeWidth="7" />
      <rect x="536" y="56" width="40" height="82" rx="10" fill="#fef3c7" stroke="#0f4a6e" strokeWidth="7" />
      <path d="M132 42 c-24 -18 20 -30 -8 -48" stroke="#a7f3d0" strokeWidth="12" strokeLinecap="round" opacity="0.9" />
      <path d="M558 32 c-28 -18 18 -34 -12 -54" stroke="#a7f3d0" strokeWidth="12" strokeLinecap="round" opacity="0.9" />

      <rect x="132" y="248" width="488" height="38" rx="19" fill="#334155" stroke="#0f172a" strokeWidth="6" />
      <path d="M168 267 h410" stroke="#94a3b8" strokeWidth="7" strokeLinecap="round" strokeDasharray="24 20" />
      <rect x="238" y="224" width="46" height="34" rx="8" fill="#fbbf24" stroke="#92400e" strokeWidth="5" />
      <rect x="464" y="222" width="52" height="36" rx="8" fill="#86efac" stroke="#166534" strokeWidth="5" />

      <path d="M650 260 L676 194 L704 204 L684 260 Z" fill="#c4b5fd" stroke="#3b0764" strokeWidth="6" strokeLinejoin="round" />
      <circle cx="676" cy="194" r="17" fill="#ddd6fe" stroke="#3b0764" strokeWidth="6" />
      <path d="M688 190 L728 148" stroke="#3b0764" strokeWidth="12" strokeLinecap="round" />
      <circle cx="733" cy="143" r="17" fill="#fef3c7" stroke="#3b0764" strokeWidth="6" />
      <path d="M733 143 l18 -20 M733 143 l24 4" stroke="#3b0764" strokeWidth="6" strokeLinecap="round" />
    </svg>

    <div className="absolute bottom-5 left-6 right-6 flex flex-wrap items-center justify-between gap-3 rounded-[22px] border-4 border-sky-900/10 bg-white/82 p-3 shadow-soft">
      <div>
        <div className="text-sm font-black text-sky-950">工造星球智能产线</div>
        <div className="text-xs font-bold text-slate-600">设备联机 · 传送检测 · 工单追踪</div>
      </div>
      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-200 px-3 py-1 text-xs font-black text-emerald-800">
        <PackageCheck className="h-4 w-4" />
        运行正常
      </span>
    </div>
  </section>
);
