import { FormValues } from "@/components/GeneratorForm";
import { buildArchitecturalPrompt } from "./generatePrompt";

export type GenerationResult = {
  imageUrl: string;
  prompt: string;
};

export async function generateFloorPlan(
  values: FormValues
): Promise<GenerationResult> {
  const prompt = buildArchitecturalPrompt(values);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    imageUrl: "https://picsum.photos/800/800",
    prompt,
  };
}
