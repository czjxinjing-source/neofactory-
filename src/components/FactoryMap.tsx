import { modules } from "../data/modules";

type FactoryMapProps = {
  onEnter: (moduleId: string) => void;
  onRepair?: (moduleId: string) => void;
  repairModuleId?: string;
  showRepairHighlight?: boolean;
};

export const FactoryMap = ({ onEnter, onRepair, repairModuleId, showRepairHighlight = false }: FactoryMapProps) => (
  <section className="relative min-h-[320px] overflow-hidden rounded-[28px] border-4 border-sky-900/15 bg-gradient-to-b from-sky-100 to-lime-200 p-5 shadow-cartoon">
    <div className="absolute bottom-10 left-[-10%] h-24 w-[120%] rotate-[-3deg] rounded-full bg-yellow-200/80" />
    <div className="absolute bottom-24 left-[-10%] h-20 w-[120%] rotate-[4deg] rounded-full bg-emerald-300/75" />
    <div className="relative grid grid-cols-2 gap-3 md:grid-cols-4">
      {modules.map((item, index) => {
        const Icon = item.icon;
        const isRepair = showRepairHighlight && item.id === repairModuleId;
        return (
          <button
            key={item.id}
            onClick={() => (isRepair && onRepair ? onRepair(item.id) : onEnter(item.id))}
            className={`group relative min-h-28 rounded-[22px] border-4 p-3 text-left shadow-soft transition hover:-translate-y-1 ${
              isRepair ? "border-rose-400 bg-rose-50 hover:bg-rose-100" : "border-sky-900/15 bg-white/86 hover:bg-amber-100"
            }`}
          >
            {isRepair && (
              <span className="absolute -right-2 -top-3 flex h-9 w-9 animate-pulse items-center justify-center rounded-full border-4 border-white bg-rose-500 text-lg font-black text-white shadow-soft">
                !
              </span>
            )}
            <div className="mb-3 flex items-center justify-between">
              <span className={`flex h-9 w-9 items-center justify-center rounded-2xl border-2 border-sky-900/15 ${isRepair ? "bg-rose-200" : "bg-cyan-200"}`}>
                <Icon className={`h-5 w-5 ${isRepair ? "text-rose-700" : "text-sky-800"}`} />
              </span>
              <span className={`rounded-full px-2 py-1 text-[10px] font-black ${isRepair ? "bg-rose-500 text-white" : "bg-orange-200 text-orange-700"}`}>
                {isRepair ? "需要维修" : `MAP ${String(index + 1).padStart(2, "0")}`}
              </span>
            </div>
            <div className="text-sm font-black text-sky-950">{item.name}</div>
            <div className="mt-1 text-xs font-bold text-slate-600">{item.subtitle}</div>
            <div className="mt-3 h-2 rounded-full bg-white shadow-inner">
              <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" style={{ width: `${item.progress}%` }} />
            </div>
          </button>
        );
      })}
    </div>
  </section>
);
