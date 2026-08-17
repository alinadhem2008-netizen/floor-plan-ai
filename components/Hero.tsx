"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sun, LayoutGrid } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0B1F3A] to-[#132A4D] px-4 pb-16 pt-16 text-center text-white md:px-6 md:pt-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl"
      >
        صمم خريطة بيتك بضغطة زر
        <span className="block text-[#C9A24B]">مع الحفاظ على خصوصيتك</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mt-5 max-w-xl text-slate-300"
      >
        مخططات معمارية تعتمد على المنور المركزي — إضاءة وتهوية طبيعية بدون
        أي شباك جانبي يكشف الجيران
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        <FeatureBadge icon={ShieldCheck} text="خصوصية كاملة بدون شبابيك جانبية" />
        <FeatureBadge icon={Sun} text="إضاءة وتهوية طبيعية عبر المنور" />
        <FeatureBadge icon={LayoutGrid} text="توزيع منطقي للغرف حول الفناء" />
      </motion.div>
    </section>
  );
}

function FeatureBadge({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-200">
      <Icon className="h-4 w-4 shrink-0 text-[#C9A24B]" />
      <span>{text}</span>
    </div>
  );
}
