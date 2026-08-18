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
  const encodedPrompt = encodeURIComponent(prompt);
  const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=800&height=800&nologo=true&model=flux`;

  return {
    imageUrl,
    prompt,
  };
}
