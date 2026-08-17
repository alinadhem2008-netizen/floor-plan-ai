"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Ruler, Sparkles, ExternalLink } from "lucide-react";

export type FormValues = {
  width: string;
  length: string;
  rooms: string;
};

export default function GeneratorForm() {
  const [values, setValues] = useState<FormValues>({
    width: "",
    length: "",
    rooms: "3",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!values.width || !values.length) return;

    const description = `منزل بمساحة أرض ${values.width} متر عرض × ${values.length} متر طول، ${values.rooms} غرف نوم، مع منور مركزي (فناء داخلي) للإضاءة والتهوية بدون شبابيك جانبية، غرفة استقبال، مطبخ، حمامات`;

    navigator.clipboard.writeText(description).catch(() => {});

    window.open("https://www.maket.ai/ai-floor-plan-generator", "_blank");
  }

  return (
    <section id="generate" className="mx-auto -mt-10 max-w-2xl px-4 md:px-6">
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl md:p-8"
      >
        <div className="mb-6 flex items-center gap-2 text-[#0B1F3A]">
          <Ruler className="h-5 w-5" />
          <h2 className="text-lg font-bold">أدخل أبعاد الأرض</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="العرض (متر)">
            <input
              type="number"
              min="1"
              step="0.5"
              placeholder="مثال: 10"
              value={values.width}
              onChange={(e) =>
                setValues({ ...values, width: e.target.value })
              }
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-1 focus:ring-[#0B1F3A]"
              required
            />
          </Field>

          <Field label="الطول (متر)">
            <input
              type="number"
              min="1"
              step="0.5"
              placeholder="مثال: 15"
              value={values.length}
              onChange={(e) =>
                setValues({ ...values, length: e.target.value })
              }
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-1 focus:ring-[#0B1F3A]"
              required
            />
          </Field>

          <div className="md:col-span-2">
            <Field label="عدد الغرف (اختياري)">
              <select
                value={values.rooms}
                onChange={(e) =>
                  setValues({ ...values, rooms: e.target.value })
                }
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#0B1F3A] focus:outline-none focus:ring-1 focus:ring-[#0B1F3A]"
              >
                <option value="2">غرفتين نوم</option>
                <option value="3">3 غرف نوم</option>
                <option value="4">4 غرف نوم</option>
                <option value="5">5 غرف نوم فأكثر</option>
              </select>
            </Field>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] px-6 py-4 text-base font-bold text-white transition hover:bg-[#0B1F3A]/90"
        >
          <Sparkles className="h-5 w-5 text-[#C9A24B]" />
          توليد المخطط عبر Maket.ai
          <ExternalLink className="h-4 w-4" />
        </button>

        <p className="mt-3 text-center text-xs text-slate-400">
          راح ننسخ وصف مشروعك تلقائياً — الصقه بمربع البحث بموقع Maket.ai
        </p>
      </motion.form>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-600">
        {label}
      </span>
      {children}
    </label>
  );
}
