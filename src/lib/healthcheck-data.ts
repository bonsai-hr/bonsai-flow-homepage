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
    summary: "At least one core pillar is still at a very early stage, which limits how confidently AI can create value across the organisation.",
    whatThisMeans: "AI may be appearing in isolated pockets, but direction, structure, or measurable impact is not yet strong enough to support consistent progress.",
    nextStep: "The priority now is to strengthen the weakest pillar first so AI adoption has a stable foundation to build on.",
    cta: "A 15-minute AI Roadmap Debrief can help identify the first actions that will create the strongest baseline.",
  },
  emerging: {
    headline: "Your organisation is building emerging AI maturity",
    summary: "There is meaningful progress in some areas, but at least one pillar is still early enough to hold back overall maturity.",
    whatThisMeans: "AI is beginning to take shape, but weaker direction, structure, or impact measurement may still be preventing more consistent results.",
    nextStep: "The next step is to raise the lowest-scoring pillar so progress becomes more balanced and easier to scale.",
    cta: "A 15-minute AI Roadmap Debrief can help pinpoint the pillar that will unlock the most momentum next.",
  },
  established: {
    headline: "Your organisation has established AI maturity",
    summary: "The core building blocks for AI are in place across the business, although one pillar still has room to strengthen before AI becomes fully strategic.",
    whatThisMeans: "Leadership direction, operating structure, and business impact are reasonably developed, with remaining gains likely coming from improving consistency in the lowest pillar.",
    nextStep: "The focus now is to strengthen that weaker pillar so AI can move from established practice to strategic capability.",
    cta: "A 15-minute AI Roadmap Debrief can help identify what will move your organisation into a more strategic position.",
  },
  strategic: {
    headline: "AI is operating as a strategic capability in your organisation",
    summary: "All three pillars show strong maturity, indicating AI is supported by direction, structure, and clear business impact.",
    whatThisMeans: "The organisation appears to have aligned leadership, supporting governance, and evidence that AI is influencing how work gets done and where value is created.",
    nextStep: "The priority now is sustaining this maturity through continued capability building, prioritisation, and operating model refinement.",
    cta: "A 15-minute AI Roadmap Debrief can help surface the highest-value opportunities for the next stage of advantage.",
  },
};

export const WEAKEST_SECTION_COPY: Record<string, string> = {
  Direction: "Leadership alignment and clarity of direction appear to be the biggest opportunity. Organisations often see the fastest progress when ownership, priorities, and expected outcomes from AI are clearly defined.",
  Structure: "Governance and visibility appear to be the biggest opportunity. As AI adoption grows, organisations benefit from clearer oversight of tools, spend, and safe usage practices.",
  Impact: "The biggest opportunity appears to be turning AI activity into measurable impact. This often involves capability building, clearer workflow integration, and better visibility of value created.",
};

export const SECTION_DESCRIPTORS: Record<string, Record<string, string>> = {
  Direction: {
    none: "Leadership alignment and AI priorities are largely undefined.",
    emerging: "Some direction is forming, but it is not yet shared consistently.",
    established: "Leadership direction is reasonably clear and aligned.",
    strategic: "AI direction is clear, shared, and tied to strategic value.",
  },
  Structure: {
    none: "Visibility and governance around AI tools are still very limited.",
    emerging: "Some oversight is emerging, but important gaps remain.",
    established: "Governance and tool visibility are meaningfully in place.",
    strategic: "AI governance, oversight, and adoption structure are highly mature.",
  },
  Impact: {
    none: "AI's contribution to measurable outcomes is still minimal.",
    emerging: "Some value is appearing, but measurement and enablement are inconsistent.",
    established: "AI is creating measurable value in multiple areas.",
    strategic: "AI is clearly shaping workflows, decisions, and business outcomes.",
  },
};
