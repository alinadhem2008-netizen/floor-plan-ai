import { FormValues } from "@/components/GeneratorForm";
import { buildArchitecturalPrompt } from "./generatePrompt";

export type GenerationResult = {
  imageUrl: string;
  prompt: string;
};

// محاكاة استدعاء API حقيقي (Stable Diffusion / OpenAI Images)
export async function generateFloorPlan(
  values: FormValues
): Promise<GenerationResult> {
  const prompt = buildArchitecturalPrompt(values);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    imageUrl: "https://placehold.co/800x800/F1F5F9/0B1F3A?text=Floor+Plan",
    prompt,
  };
}
