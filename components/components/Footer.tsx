export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-[#0B1F3A] text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">© 2026 مخطط — جميع الحقوق محفوظة</p>
          <p className="text-xs text-slate-400">
            المخططات الناتجة استرشادية وتتطلب مراجعة مهندس معماري مرخّص
          </p>
        </div>
      </div>
    </footer>
  );
}
