"use client";

import { motion } from "framer-motion";
import { Download, Box } from "lucide-react";
import { GenerationResult } from "@/lib/mockApi";

export default function ResultDisplay({
  result,
}: {
  result: GenerationResult;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl px-4 pb-16 md:px-6"
    >
      <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-xl">
        <div className="relative aspect-square w-full bg-slate-50">
          <img
            src={result.imageUrl}
            alt="المخطط المعماري الناتج"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-100 p-5 md:flex-row">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] px-5 py-3 text-sm font-bold text-white hover:bg-[#0B1F3A]/90">
            <Download className="h-4 w-4" />
            تحميل المخطط
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#C9A24B] px-5 py-3 text-sm font-bold text-[#0B1F3A] hover:bg-[#C9A24B]/10">
            <Box className="h-4 w-4 text-[#C9A24B]" />
            توليد نسخة 3D (مدفوع)
          </button>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-slate-400">
        هذا المخطط تخيّلي فني — استخدمه كإلهام، ثم راجعه مع مهندس معماري مرخّص للحصول على مقاييس دقيقة
      </p>
    </motion.div>
  );
}
