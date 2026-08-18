"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import GeneratorForm, { FormValues } from "@/components/GeneratorForm";
import LoadingState from "@/components/LoadingState";
import ResultDisplay from "@/components/ResultDisplay";

type Status = "idle" | "loading" | "done";

export default function Home() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState<FormValues | null>(null);

  function handleGenerate(v: FormValues) {
    setStatus("loading");
    setTimeout(() => {
      setValues(v);
      setStatus("done");
    }, 900);
  }

  return (
    <main>
      <Hero />
      <GeneratorForm onGenerate={handleGenerate} />

      <AnimatePresence mode="wait">
        {status === "loading" && <LoadingState key="loading" />}
        {status === "done" && values && (
          <ResultDisplay key="result" values={values} />
        )}
      </AnimatePresence>
    </main>
  );
}
