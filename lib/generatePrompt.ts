import { FormValues } from "@/components/GeneratorForm";

export function buildArchitecturalPrompt(values: FormValues): string {
  const { width, length, rooms } = values;

  const hiddenRules = `
Focus on internal central open space (Courtyard/Lightwell).
No external side windows — privacy-focused Middle Eastern residential layout.
Include basic spaces: Kitchen, Guest Reception Room (استقبال), ${rooms} Bedrooms, Bathrooms.
Ensure logical flow of rooms around the central lightwell.
Top-down 2D architectural floor plan, clean lines, labeled rooms, to-scale.
`.trim();

  return `
Generate a 2D architectural floor plan for a plot ${width}m x ${length}m.
${hiddenRules}
`.trim();
}
