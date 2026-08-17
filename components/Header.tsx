import { Home } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B1F3A]">
            <Home className="h-5 w-5 text-[#C9A24B]" />
          </div>
          <span className="text-lg font-bold text-[#0B1F3A]">مخطط</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#how" className="hover:text-[#0B1F3A]">كيف يعمل</a>
          <a href="#pricing" className="hover:text-[#0B1F3A]">الأسعار</a>
        </nav>

        <a
          href="#generate"
          className="rounded-lg bg-[#0B1F3A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0B1F3A]/90"
        >
          ابدأ الآن
        </a>
      </div>
    </header>
  );
}
