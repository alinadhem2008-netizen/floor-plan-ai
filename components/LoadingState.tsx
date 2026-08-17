"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const steps = [
  "يحلل أبعاد الأرض...",
  "يحدد موقع المنور المركزي...",
  "يوزّع الغرف حسب قواعد الخصوصية...",
  "يرسم المخطط النهائي...",
];

export default function LoadingState() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 750);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-16 text-center"
    >
      <Loader2 className="h-10 w-10 animate-spin text-[#0B1F3A]" />
      <p className="text-sm font-semibold text-[#0B1F3A]">
        الذكاء الاصطناعي يحلل القواعد المعمارية...
      </p>
      <motion.p
        key={stepIndex}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs text-slate-500"
      >
        {steps[stepIndex]}
      </motion.p>
    </motion.div>
  );
}
