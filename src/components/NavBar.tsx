import { BookOpenCheck, Database, Factory, Gauge, Home, Menu, UserRound, X } from "lucide-react";
import { useState } from "react";

export type Page = "home" | "modules" | "encyclopedia" | "wrongbook" | "profile" | "questionbank";

type NavBarProps = {
  currentPage: Page;
  onNavigate: (page: Page) => void;
};

const navItems = [
  { id: "home", label: "首页", icon: Home },
  { id: "modules", label: "学习模块", icon: Factory },
  { id: "encyclopedia", label: "图鉴", icon: BookOpenCheck },
  { id: "questionbank", label: "题库管理", icon: Database },
  { id: "wrongbook", label: "错题本", icon: Gauge },
  { id: "profile", label: "个人中心", icon: UserRound },
] as const;

export const NavBar = ({ currentPage, onNavigate }: NavBarProps) => {
  const [open, setOpen] = useState(false);

  const renderItem = (item: (typeof navItems)[number]) => {
    const Icon = item.icon;
    const active = currentPage === item.id;
    return (
      <button
        key={item.id}
        onClick={() => {
          onNavigate(item.id);
          setOpen(false);
        }}
        className={`flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-bold transition ${
          active
            ? "border-2 border-sky-900/20 bg-amber-300 text-sky-950 shadow-soft"
            : "text-sky-900 hover:bg-sky-100 hover:text-sky-950"
        }`}
      >
        <Icon className="h-4 w-4" />
        {item.label}
      </button>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b-4 border-sky-900/10 bg-white/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <button className="flex items-center gap-3" onClick={() => onNavigate("home")}>
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border-4 border-sky-900/20 bg-white shadow-soft">
            <img src="/assets/app-icon.svg" alt="工造星球图标" className="h-full w-full object-cover" />
          </span>
          <span>
            <span className="block text-lg font-black tracking-wide text-sky-950">工造星球</span>
            <span className="block text-xs font-semibold text-orange-600">机械与智能制造学习空间</span>
          </span>
        </button>
        <nav className="hidden items-center gap-2 md:flex">{navItems.map(renderItem)}</nav>
        <button
          className="rounded-2xl border-2 border-sky-900/20 bg-sky-100 p-2 text-sky-900 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="打开导航"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && <div className="grid gap-2 px-4 pb-4 md:hidden">{navItems.map(renderItem)}</div>}
    </header>
  );
};
