"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import GeneratorForm, { FormValues } from "@/components/GeneratorForm";
import LoadingState from "@/components/LoadingState";
import ResultDisplay from "@/components/ResultDisplay";
import { generateFloorPlan, GenerationResult } from "@/lib/mockApi";

type Status = "idle" | "loading" | "done";

export default function Home() {
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<GenerationResult | null>(null);

  async function handleGenerate(values: FormValues) {
    setStatus("loading");
    const res = await generateFloorPlan(values);
    setResult(res);
    setStatus("done");
  }

  return (
    <main>
      <Hero />
      <GeneratorForm onGenerate={handleGenerate} />

      <AnimatePresence mode="wait">
        {status === "loading" && <LoadingState key="loading" />}
        {status === "done" && result && (
          <ResultDisplay key="result" result={result} />
        )}
      </AnimatePresence>
    </main>
  );
}
