import { useState, useCallback, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import IntroScreen from "@/components/healthcheck/IntroScreen";
import QuizScreen from "@/components/healthcheck/QuizScreen";
import LeadCaptureScreen, { type LeadData } from "@/components/healthcheck/LeadCaptureScreen";
import LoadingScreen from "@/components/healthcheck/LoadingScreen";
import ResultsScreen from "@/components/healthcheck/ResultsScreen";
import {
  getStage,
  getSectionScores,
  getSectionLabel,
  getStageLabel,
  getWeakestSection,
  STAGE_COPY,
} from "@/lib/healthcheck-data";

type Step = "intro" | "quiz" | "lead" | "loading" | "results";

const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbxXS8UmQBC6VcAo9iryBA3q_naLjZ1eJJLveBhg_jnMnPhG2fYsNMsScCwfZXmCgnV8/exec";

const AIHealthCheck = () => {
  const [step, setStep] = useState<Step>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(10).fill(null));
  const submissionIdRef = useRef(crypto.randomUUID());

  const handleAnswer = useCallback(
    (qi: number, value: number) => {
      setAnswers((prev) => {
        const next = [...prev];
        next[qi] = value;
        return next;
      });
      // Auto-advance after brief pause
      setTimeout(() => {
        if (qi < 9) {
          setCurrentQ(qi + 1);
        } else {
          setStep("lead");
        }
      }, 400);
    },
    []
  );

  const handleBack = useCallback(() => {
    if (currentQ > 0) setCurrentQ((q) => q - 1);
  }, [currentQ]);

  const handleLeadBack = useCallback(() => {
    setCurrentQ(9);
    setStep("quiz");
  }, []);

  const buildPayload = (lead: LeadData, debriefClicked: string) => {
    const a = answers as number[];
    const totalScore = a.reduce((s, v) => s + v, 0);
    const finalMaturity = getStage(a);
    const { direction, structure, impact } = getSectionScores(a);

    return {
      submissionId: submissionIdRef.current,
      timestamp: new Date().toISOString(),
      name: lead.name,
      email: lead.email,
      company: lead.company,
      role: lead.role,
      companySize: lead.companySize,
      industry: lead.industry,
      totalScore,
      stage: getStageLabel(finalMaturity),
      finalMaturity,
      directionScore: direction,
      directionLabel: getSectionLabel(direction, 9),
      structureScore: structure,
      structureLabel: getSectionLabel(structure, 12),
      impactScore: impact,
      impactLabel: getSectionLabel(impact, 9),
      lowestSection: getWeakestSection(a),
      q1: a[0], q2: a[1], q3: a[2], q4: a[3], q5: a[4],
      q6: a[5], q7: a[6], q8: a[7], q9: a[8], q10: a[9],
      debriefClicked,
      sourcePage: "/ai-health-check",
      resultSummary: STAGE_COPY[finalMaturity].summary,
    };
  };

  const leadDataRef = useRef<LeadData | null>(null);

  const handleLeadSubmit = useCallback(
    async (lead: LeadData) => {
      leadDataRef.current = lead;
      setStep("loading");

      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildPayload(lead, "No")),
        });
      } catch {
        // silent — don't block user
      }

      setTimeout(() => setStep("results"), 2500);
    },
    [answers]
  );

  const handleDebriefClick = useCallback(() => {
    if (!leadDataRef.current) return;
    try {
      fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload(leadDataRef.current, "Yes")),
      });
    } catch {
      // silent
    }
  }, [answers]);

  return (
    <div className="min-h-screen bg-primary/20 font-body">
      <div className="px-4 py-12 md:py-20">
        <AnimatePresence mode="wait">
          {step === "intro" && (
            <IntroScreen key="intro" onStart={() => setStep("quiz")} />
          )}
          {step === "quiz" && (
            <QuizScreen
              key="quiz"
              currentQ={currentQ}
              answers={answers}
              onAnswer={handleAnswer}
              onBack={handleBack}
            />
          )}
          {step === "lead" && (
            <LeadCaptureScreen
              key="lead"
              onSubmit={handleLeadSubmit}
              onBack={handleLeadBack}
            />
          )}
          {step === "loading" && <LoadingScreen key="loading" />}
          {step === "results" && (
            <ResultsScreen
              key="results"
              answers={answers as number[]}
              onDebriefClick={handleDebriefClick}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIHealthCheck;
