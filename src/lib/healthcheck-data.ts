export const QUESTIONS = [
  {
    section: "Direction",
    text: "Do you currently have a clear plan for how AI should be used across your organisation?",
    options: [
      { label: "No plan in place", value: 0 },
      { label: "Early ideas or informal direction", value: 1 },
      { label: "Plan exists but not embedded", value: 2 },
      { label: "Clear strategic plan guiding AI use", value: 3 },
    ],
  },
  {
    section: "Direction",
    text: "Is responsibility for AI direction and decision-making clearly defined in your organisation?",
    options: [
      { label: "No ownership in place", value: 0 },
      { label: "Informal or unclear ownership", value: 1 },
      { label: "Defined but not consistently followed", value: 2 },
      { label: "Clearly owned and understood", value: 3 },
    ],
  },
  {
    section: "Direction",
    text: "To what extent do leaders share a clear and consistent view of where AI should create value in the organisation?",
    options: [
      { label: "No leadership alignment in place", value: 0 },
      { label: "Early discussions", value: 1 },
      { label: "Some alignment emerging", value: 2 },
      { label: "Clear and consistent leadership alignment", value: 3 },
    ],
  },
  {
    section: "Structure",
    text: "How clearly does the organisation understand which AI tools are currently being used across the business?",
    options: [
      { label: "No visibility in place", value: 0 },
      { label: "Limited awareness", value: 1 },
      { label: "Partially understood", value: 2 },
      { label: "Clearly understood across the business", value: 3 },
    ],
  },
  {
    section: "Structure",
    text: "How well does the organisation track and understand its spending on AI tools?",
    options: [
      { label: "No spend tracking in place", value: 0 },
      { label: "Rough awareness", value: 1 },
      { label: "Partially tracked", value: 2 },
      { label: "Fully tracked and understood", value: 3 },
    ],
  },
  {
    section: "Structure",
    text: "To what extent are there clear guidelines or policies for how AI should be used at work?",
    options: [
      { label: "No AI guidelines in place", value: 0 },
      { label: "Informal guidance", value: 1 },
      { label: "Some policies defined", value: 2 },
      { label: "Clear strategic guidance on AI use", value: 3 },
    ],
  },
  {
    section: "Structure",
    text: "To what extent is there formal review or oversight before new AI tools are adopted?",
    options: [
      { label: "No governance process in place", value: 0 },
      { label: "Occasional review", value: 1 },
      { label: "Some structured review", value: 2 },
      { label: "Clear governance before adoption", value: 3 },
    ],
  },
  {
    section: "Impact",
    text: "To what extent does the organisation measure the time saved or value created from AI use?",
    options: [
      { label: "No value measurement in place", value: 0 },
      { label: "Benefits recognised", value: 1 },
      { label: "Some value tracked", value: 2 },
      { label: "Value and ROI clearly measured", value: 3 },
    ],
  },
  {
    section: "Impact",
    text: "To what extent do teams receive structured guidance or training on how to use AI effectively?",
    options: [
      { label: "No training or guidance in place", value: 0 },
      { label: "Informal guidance", value: 1 },
      { label: "Some structured support", value: 2 },
      { label: "Clear training and enablement", value: 3 },
    ],
  },
  {
    section: "Impact",
    text: "To what extent does the organisation consider how AI could support or automate work before planning projects, hiring, workflows, or team structure?",
    options: [
      { label: "No AI consideration in planning", value: 0 },
      { label: "Occasionally discussed", value: 1 },
      { label: "Considered in some planning", value: 2 },
      { label: "Consistently considered before work begins", value: 3 },
    ],
  },
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

export type MaturityLevel = "none" | "emerging" | "established" | "strategic";

const MATURITY_ORDER: MaturityLevel[] = ["none", "emerging", "established", "strategic"];

export function getStageLabel(stage: MaturityLevel): string {
  return stage.charAt(0).toUpperCase() + stage.slice(1);
}

export function getSectionLabel(score: number, max: number): MaturityLevel {
  if (max === 12) {
    if (score <= 3) return "none";
    if (score <= 6) return "emerging";
    if (score <= 9) return "established";
    return "strategic";
  }

  if (score <= 2) return "none";
  if (score <= 5) return "emerging";
  if (score <= 7) return "established";
  return "strategic";
}

export function getSectionScores(answers: number[]) {
  const direction = answers[0] + answers[1] + answers[2];
  const structure = answers[3] + answers[4] + answers[5] + answers[6];
  const impact = answers[7] + answers[8] + answers[9];
  return { direction, structure, impact };
}

export function getStage(answers: number[]): MaturityLevel {
  const { direction, structure, impact } = getSectionScores(answers);
  const stages: MaturityLevel[] = [
    getSectionLabel(direction, 9),
    getSectionLabel(structure, 12),
    getSectionLabel(impact, 9),
  ];

  return stages.reduce((lowest, current) =>
    MATURITY_ORDER.indexOf(current) < MATURITY_ORDER.indexOf(lowest) ? current : lowest
  );
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

export const STAGE_COPY: Record<MaturityLevel, { headline: string; summary: string; whatThisMeans: string; nextStep: string; cta: string }> = {
  none: {
    headline: "Your organisation has little AI maturity in place today",
    summary: "AI is likely being used in isolated or inconsistent ways, without enough direction, structure, or visibility to create reliable value across the organisation.",
    whatThisMeans: "AI activity may already be happening, but it is likely uncoordinated and driven by individual initiative rather than a clear business plan. Without leadership alignment, governance, or visibility, efforts can become fragmented, leading to duplicated work, inconsistent outcomes, and limited confidence in results.",
    nextStep: "The priority now is to create visibility over how AI is currently being used and introduce clearer ownership, priorities, and guardrails. This will help establish a stable foundation and reduce wasted time, effort, and spend.",
    cta: "A 15-minute AI Roadmap Debrief will help you identify the first actions that create structure, clarity, and a stronger baseline for adoption.",
  },
  emerging: {
    headline: "Your organisation is building emerging AI maturity",
    summary: "There is meaningful progress in some areas, but at least one pillar is still early enough to hold back consistent and scalable results.",
    whatThisMeans: "AI is beginning to take shape, but progress is uneven across direction, structure, and impact. While there may already be pockets of success, these are not yet being consistently translated into scalable outcomes. Without clear alignment, ownership, and shared ways of working, even strong use cases can remain isolated, leading to duplicated effort and inconsistent ROI.",
    nextStep: "The next step is to strengthen the lowest-scoring pillar so progress becomes more balanced and easier to scale. Focusing here will remove the biggest constraint currently limiting momentum and make it easier to build consistent results across the organisation.",
    cta: "A 15-minute AI Roadmap Debrief will help you pinpoint the pillar holding back progress and identify the highest-impact next steps.",
  },
  established: {
    headline: "Your organisation has established AI maturity",
    summary: "The core building blocks for AI are in place, with clearer direction, structure, and signs of measurable value across the business.",
    whatThisMeans: "AI is becoming more embedded in how the organisation operates, with stronger alignment, governance, and adoption. The main challenge at this stage is consistency - ensuring capability, workflow integration, and value measurement develop at the same pace as growing investment and interest.",
    nextStep: "The priority now is to strengthen the weakest pillar so AI can move from established practice to a fully strategic capability. This means improving consistency, sharpening priorities, and ensuring value is clearly visible and repeatable.",
    cta: "A 15-minute AI Roadmap Debrief will help identify the next steps that will move your organisation into a more strategic and scalable position.",
  },
  strategic: {
    headline: "AI is operating as a strategic capability in your organisation",
    summary: "AI is supported by strong direction, clear structure, and visible business impact across the organisation.",
    whatThisMeans: "AI is influencing how work gets done, how decisions are made, and where value is created. Leadership alignment, governance, and adoption are well developed, meaning the organisation is now focused less on starting and more on optimising performance and advantage.",
    nextStep: "The focus now is translating this maturity into sustained commercial advantage. This means sharpening prioritisation, strengthening capability, and refining the operating model to ensure AI continues to drive long-term performance.",
    cta: "A 15-minute AI Roadmap Debrief will help surface the highest-value opportunities to extend your advantage further.",
  },
};

export const WEAKEST_SECTION_COPY: Record<string, string> = {
  Direction: "Leadership alignment and clarity of direction appear to be the biggest opportunity. Where direction is not clearly defined or consistently communicated, teams often move at different speeds and focus on different priorities. Strengthening direction creates alignment, improves focus, and typically unlocks the fastest progress across the organisation.",
  Structure: "Governance and visibility appear to be the biggest opportunity. As AI adoption grows, organisations benefit from clearer oversight of tools, spend, and usage. Strengthening structure reduces risk, improves coordination, and enables more consistent and scalable adoption.",
  Impact: "Turning AI activity into measurable impact appears to be the biggest opportunity. While progress may be visible, inconsistent measurement and enablement can limit scale. Strengthening impact ensures value is clearly understood, prioritised, and used to guide future investment.",
};

export const SECTION_DESCRIPTORS: Record<string, Record<string, string>> = {
  Direction: {
    none: "AI direction and leadership alignment are still largely undefined.",
    emerging: "Some direction is forming, but it is not yet clearly defined or shared.",
    established: "Leadership direction is clear, with growing alignment across the organisation.",
    strategic: "AI direction is clearly defined, aligned to business priorities, and widely understood.",
  },
  Structure: {
    none: "There is very limited visibility or governance around AI usage.",
    emerging: "Some oversight is emerging, but gaps in governance and visibility remain.",
    established: "Governance and visibility are in place, supporting more consistent usage.",
    strategic: "AI governance, oversight, and operating structure are highly mature and scalable.",
  },
  Impact: {
    none: "There is little visibility of measurable value from AI usage.",
    emerging: "Some value is appearing, but measurement and enablement are inconsistent.",
    established: "AI is delivering measurable value across multiple areas.",
    strategic: "AI is consistently driving measurable impact across workflows and outcomes.",
  },
};
