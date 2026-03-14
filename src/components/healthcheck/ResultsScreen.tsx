import { motion } from "framer-motion";
import {
  getStage,
  getSectionScores,
  getSectionLabel,
  getWeakestSection,
  STAGE_COPY,
  WEAKEST_SECTION_COPY,
  SECTION_DESCRIPTORS,
} from "@/lib/healthcheck-data";
import { Compass, Shield, TrendingUp, ArrowRight } from "lucide-react";

interface ResultsScreenProps {
  answers: number[];
  onDebriefClick: () => void;
}

const sectionIcons = { Direction: Compass, Structure: Shield, Impact: TrendingUp };

const ResultsScreen = ({ answers, onDebriefClick }: ResultsScreenProps) => {
  const totalScore = answers.reduce((a, b) => a + b, 0);
  const stage = getStage(totalScore);
  const copy = STAGE_COPY[stage];
  const { direction, structure, impact } = getSectionScores(answers);
  const weakest = getWeakestSection(answers);

  const sections = [
    { name: "Direction" as const, score: direction, max: 9 },
    { name: "Structure" as const, score: structure, max: 12 },
    { name: "Impact" as const, score: impact, max: 9 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[680px] mx-auto space-y-6"
    >
      {/* Header card */}
      <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12">
        <p className="font-heading text-sm font-semibold tracking-wide uppercase text-accent mb-4">
          Your AI Health Check Result
        </p>
        <div className="flex items-baseline gap-3 mb-4">
          <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">{totalScore}</span>
          <span className="font-body text-base text-muted-foreground">/ 30</span>
          <span className="ml-auto inline-block bg-accent/15 text-accent font-heading text-sm font-semibold px-4 py-1.5 rounded-full">
            {stage}
          </span>
        </div>
        <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
          {copy.headline}
        </h2>
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          {copy.summary}
        </p>
      </div>

      {/* Section cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {sections.map((sec) => {
          const label = getSectionLabel(sec.score, sec.max);
          const Icon = sectionIcons[sec.name];
          const pct = Math.round((sec.score / sec.max) * 100);
          return (
            <div
              key={sec.name}
              className="bg-card rounded-2xl shadow-sm border border-border p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className="h-4 w-4 text-accent" />
                <p className="font-heading text-sm font-semibold text-foreground">{sec.name}</p>
              </div>
              <p className="font-heading text-lg font-bold text-foreground mb-1">{label}</p>
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden mb-3">
                <div className="h-full bg-accent rounded-full" style={{ width: `${pct}%` }} />
              </div>
              <div className="flex items-center justify-between w-full mt-2.5 mb-3">
                {["Developing", "Taking shape", "Established"].map((stage, i, arr) => (
                  <span key={stage} className="flex items-center gap-1">
                    <span
                      className={`font-heading text-[10px] tracking-wide ${
                        stage === label
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground/40"
                      }`}
                    >
                      {stage}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-muted-foreground/25 text-[10px]">→</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="font-body text-xs text-muted-foreground">
                {SECTION_DESCRIPTORS[sec.name][label]}
              </p>
            </div>
          );
        })}
      </div>

      {/* What this means */}
      <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-10">
        <h3 className="font-heading text-lg font-bold text-foreground mb-3">What this means</h3>
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          {copy.whatThisMeans}
        </p>
      </div>

      {/* Biggest opportunity */}
      <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-10">
        <h3 className="font-heading text-lg font-bold text-foreground mb-3">
          Biggest opportunity area: {weakest}
        </h3>
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          {WEAKEST_SECTION_COPY[weakest]}
        </p>
      </div>

      {/* Next step */}
      <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-10">
        <h3 className="font-heading text-lg font-bold text-foreground mb-3">What to focus on next</h3>
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          {copy.nextStep}
        </p>
      </div>

      {/* CTA */}
      <div className="bg-primary rounded-2xl p-8 md:p-10 text-center">
        <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
          Talk through your result
        </h3>
        <p className="font-body text-sm text-primary-foreground/80 mb-6 max-w-md mx-auto leading-relaxed">
          {copy.cta}
        </p>
        <a
          href="https://calendar.app.google/JVtmrqHdC1CN1NzZ9"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onDebriefClick}
          className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-heading font-semibold text-sm px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
        >
          Book your 15-min AI Roadmap Debrief
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default ResultsScreen;
