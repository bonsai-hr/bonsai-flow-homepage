export const QUESTIONS = [
  { section: "Direction", text: "Do you currently have a clear plan for how AI should be used across your organisation?" },
  { section: "Direction", text: "Who owns AI direction and decision-making in the business?" },
  { section: "Direction", text: "Do leaders have a shared understanding of where AI should create value?" },
  { section: "Structure", text: "Do you know which AI tools are currently being used across the organisation?" },
  { section: "Structure", text: "Would you know your total AI tool spend today?" },
  { section: "Structure", text: "Are there guidelines or policies in place for how AI should be used at work?" },
  { section: "Structure", text: "Is there any review or oversight before new AI tools are adopted?" },
  { section: "Impact", text: "Are you measuring the time saved or value created from AI use?" },
  { section: "Impact", text: "Are teams receiving guidance or training on how to use AI effectively?" },
  { section: "Impact", text: "Is AI considered when planning hiring, workflows, or team structure?" },
];

export const ANSWER_OPTIONS = [
  { label: "Not in place", value: 0 },
  { label: "Emerging", value: 1 },
  { label: "Partially established", value: 2 },
  { label: "Clearly established", value: 3 },
];

export const COMPANY_SIZES = ["1–49", "50–149", "150–299", "300–749", "750+"];

export const INDUSTRIES = [
  "Technology / SaaS",
  "Consumer / Retail",
  "Financial Services / Fintech",
  "Healthcare / Healthtech",
  "Media / Creative",
  "Professional Services",
  "Manufacturing / Operations",
  "Other",
];

export type Stage = "Exploring" | "Experimenting" | "Structuring" | "Scaling";

export function getStage(score: number): Stage {
  if (score <= 8) return "Exploring";
  if (score <= 16) return "Experimenting";
  if (score <= 23) return "Structuring";
  return "Scaling";
}

export function getSectionLabel(score: number, max: number): string {
  const pct = score / max;
  if (pct <= 0.33) return "Developing";
  if (pct <= 0.66) return "Taking shape";
  return "Established";
}

export function getSectionScores(answers: number[]) {
  const direction = answers[0] + answers[1] + answers[2];
  const structure = answers[3] + answers[4] + answers[5] + answers[6];
  const impact = answers[7] + answers[8] + answers[9];
  return { direction, structure, impact };
}

export function getWeakestSection(answers: number[]): "Direction" | "Structure" | "Impact" {
  const { direction, structure, impact } = getSectionScores(answers);
  const dirPct = direction / 9;
  const strPct = structure / 12;
  const impPct = impact / 9;
  const min = Math.min(dirPct, strPct, impPct);
  if (min === dirPct) return "Direction";
  if (min === strPct) return "Structure";
  return "Impact";
}

export const STAGE_COPY: Record<Stage, { headline: string; summary: string; whatThisMeans: string; nextStep: string; cta: string }> = {
  Exploring: {
    headline: "Your organisation is currently exploring AI",
    summary: "AI is likely being used in pockets across the business, but without enough direction or structure to consistently create value.",
    whatThisMeans: "Teams may be experimenting independently, leaders may not yet share a clear view of where AI should create impact, and oversight around tools, spend, or governance is probably still limited.",
    nextStep: "The priority now is gaining visibility over current AI usage and establishing clearer leadership direction so experimentation turns into intentional progress.",
    cta: "A 15-minute AI Roadmap Debrief can help identify your first priority areas and prevent fragmented adoption.",
  },
  Experimenting: {
    headline: "Your organisation is experimenting with AI",
    summary: "AI adoption has started to emerge, but it still looks more like activity than strategy.",
    whatThisMeans: "Some tools may already be delivering value in parts of the business, but governance, visibility, and measurable outcomes are still developing.",
    nextStep: "The opportunity now is to connect experimentation with clearer priorities, governance, and leadership alignment so AI begins to deliver more consistent results.",
    cta: "A 15-minute AI Roadmap Debrief can help you identify where structure will create the biggest return.",
  },
  Structuring: {
    headline: "Your organisation is beginning to structure its AI use",
    summary: "AI is becoming more intentional within your organisation, with clearer signs of leadership awareness and operational thinking.",
    whatThisMeans: "You may already be moving beyond isolated experimentation, but gaps can still appear around consistency, governance, capability building, or measurement.",
    nextStep: "The next step is strengthening the connection between AI initiatives and measurable business impact while ensuring the organisation can scale adoption safely.",
    cta: "A 15-minute AI Roadmap Debrief can help identify the next priorities that move AI from promising to embedded.",
  },
  Scaling: {
    headline: "AI is becoming a strategic capability in your organisation",
    summary: "AI appears to be integrated more deliberately into how the organisation operates and thinks about the future.",
    whatThisMeans: "Leadership alignment, governance, and adoption are likely stronger, and AI is beginning to influence how work gets done rather than simply supporting isolated tasks.",
    nextStep: "The focus now is ensuring momentum translates into measurable advantage through better prioritisation, capability development, and long-term operating model decisions.",
    cta: "A 15-minute AI Roadmap Debrief can help surface the highest-value opportunities for scaling further.",
  },
};

export const WEAKEST_SECTION_COPY: Record<string, string> = {
  Direction: "Leadership alignment and clarity of direction appear to be the biggest opportunity. Organisations often see the fastest progress when ownership, priorities, and expected outcomes from AI are clearly defined.",
  Structure: "Governance and visibility appear to be the biggest opportunity. As AI adoption grows, organisations benefit from clearer oversight of tools, spend, and safe usage practices.",
  Impact: "The biggest opportunity appears to be turning AI activity into measurable impact. This often involves capability building, clearer workflow integration, and better visibility of value created.",
};

export const SECTION_DESCRIPTORS: Record<string, Record<string, string>> = {
  Direction: {
    Developing: "Leadership alignment and AI priorities are still forming.",
    "Taking shape": "Some clarity exists around AI direction, but it's not yet fully shared.",
    Established: "There's strong alignment on where AI should create value.",
  },
  Structure: {
    Developing: "Visibility and governance around AI tools are still limited.",
    "Taking shape": "Some oversight is emerging, but gaps remain.",
    Established: "Governance and tool visibility are well established.",
  },
  Impact: {
    Developing: "AI's contribution to measurable outcomes is still early.",
    "Taking shape": "Some teams are seeing results, but measurement is inconsistent.",
    Established: "AI is actively creating measurable value across the organisation.",
  },
};
