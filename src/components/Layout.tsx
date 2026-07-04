import { ReactNode } from "react";
import { NavBar, Page } from "./NavBar";

type LayoutProps = {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: ReactNode;
};

export const Layout = ({ currentPage, onNavigate, children }: LayoutProps) => (
  <div className="cartoon-skin min-h-screen overflow-hidden text-slate-100">
    <div className="pointer-events-none fixed inset-0 bg-factory-grid bg-[length:42px_42px] opacity-50" />
    <div className="pointer-events-none fixed -left-20 bottom-0 h-48 w-80 rounded-t-full bg-lime-400/60 blur-xl" />
    <div className="pointer-events-none fixed right-[-80px] bottom-10 h-56 w-96 rounded-t-full bg-emerald-400/50 blur-xl" />
    <NavBar currentPage={currentPage} onNavigate={onNavigate} />
    <main className="relative z-10 mx-auto max-w-7xl px-4 py-6 md:py-8">{children}</main>
  </div>
);
