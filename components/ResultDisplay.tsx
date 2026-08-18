"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Download, Box } from "lucide-react";
import FloorPlanSVG from "./FloorPlanSVG";
import { FormValues } from "./GeneratorForm";

export default function ResultDisplay({ values }: { values: FormValues }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  function handleDownload() {
    const svgEl = wrapperRef.current?.querySelector("svg");
    if (!svgEl) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgEl);
    const blob = new Blob([source], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "مخطط-البيت.svg";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl px-4 pb-16 md:px-6"
    >
      <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-xl">
        <div ref={wrapperRef} className="relative aspect-square w-full bg-white p-4">
          <FloorPlanSVG
            width={parseFloat(values.width)}
            length={parseFloat(values.length)}
            rooms={parseInt(values.rooms, 10)}
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-100 p-5 md:flex-row">
          <button
            onClick={handleDownload}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] px-5 py-3 text-sm font-bold text-white hover:bg-[#0B1F3A]/90"
          >
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
        مخطط تقريبي مبني على الأبعاد المدخلة — راجعه مع مهندس معماري مرخّص قبل البناء
      </p>
    </motion.div>
  );
}
