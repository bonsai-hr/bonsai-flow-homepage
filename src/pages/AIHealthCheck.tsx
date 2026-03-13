import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, BarChart3, ShieldCheck, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxXS8UmQBC6VcAo9iryBA3q_naLjZ1eJJLveBhg_jnMnPhG2fYsNMsScCwfZXmCgnV8/exec";

function createSubmissionId() {
  return `bonsai_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}
const BOOKING_URL = "https://calendar.app.google/JVtmrqHdC1CN1NzZ9";

const answerOptions = [
  { label: "Not in place", score: 0 },
  { label: "Emerging", score: 1 },
  { label: "Partially established", score: 2 },
  { label: "Clearly established", score: 3 },
];

const companySizes = ["1–49", "50–149", "150–299", "300–749", "750+"];
const industries = [
  "Technology / SaaS",
  "Consumer / Retail",
  "Financial Services / Fintech",
  "Healthcare / Healthtech",
  "Media / Creative",
  "Professional Services",
  "Manufacturing / Operations",
  "Other",
];

const questions = [
  {
    id: "q1",
    section: "Direction",
    text: "Do you currently have a clear plan for how AI should be used across your organisation?",
  },
  {
    id: "q2",
    section: "Direction",
    text: "Who owns AI direction and decision-making in the business?",
  },
  {
    id: "q3",
    section: "Direction",
    text: "Do leaders have a shared understanding of where AI should create value?",
  },
  {
    id: "q4",
    section: "Structure",
    text: "Do you know which AI tools are currently being used across the organisation?",
  },
  {
    id: "q5",
    section: "Structure",
    text: "Would you know your total AI tool spend today?",
  },
  {
    id: "q6",
    section: "Structure",
    text: "Are there guidelines or policies in place for how AI should be used at work?",
  },
  {
    id: "q7",
    section: "Structure",
    text: "Is there any review or oversight before new AI tools are adopted?",
  },
  {
    id: "q8",
    section: "Impact",
    text: "Are you measuring the time saved or value created from AI use?",
  },
  {
    id: "q9",
    section: "Impact",
    text: "Are teams receiving guidance or training on how to use AI effectively?",
  },
  {
    id: "q10",
    section: "Impact",
    text: "Is AI considered when planning hiring, workflows, or team structure?",
  },
];

const resultCopy = {
  Exploring: {
    headline: "Your organisation is currently exploring AI",
    summary:
      "AI is likely being used in pockets across the business, but without enough direction or structure to consistently create value.",
    whatThisMeans:
      "Teams may be experimenting independently, leaders may not yet share a clear view of where AI should create impact, and oversight around tools, spend, or governance is probably still limited.",
    nextStep:
      "The priority now is gaining visibility over current AI usage and establishing clearer leadership direction so experimentation turns into intentional progress.",
    cta: "A 15-minute AI Roadmap Debrief can help identify your first priority areas and prevent fragmented adoption.",
  },
  Experimenting: {
    headline: "Your organisation is experimenting with AI",
    summary:
      "AI adoption has started to emerge, but it still looks more like activity than strategy.",
    whatThisMeans:
      "Some tools may already be delivering value in parts of the business, but governance, visibility, and measurable outcomes are still developing.",
    nextStep:
      "The opportunity now is to connect experimentation with clearer priorities, governance, and leadership alignment so AI begins to deliver more consistent results.",
    cta: "A 15-minute AI Roadmap Debrief can help you identify where structure will create the biggest return.",
  },
  Structuring: {
    headline: "Your organisation is beginning to structure its AI use",
    summary:
      "AI is becoming more intentional within your organisation, with clearer signs of leadership awareness and operational thinking.",
    whatThisMeans:
      "You may already be moving beyond isolated experimentation, but gaps can still appear around consistency, governance, capability building, or measurement.",
    nextStep:
      "The next step is strengthening the connection between AI initiatives and measurable business impact while ensuring the organisation can scale adoption safely.",
    cta: "A 15-minute AI Roadmap Debrief can help identify the next priorities that move AI from promising to embedded.",
  },
  Scaling: {
    headline: "AI is becoming a strategic capability in your organisation",
    summary:
      "AI appears to be integrated more deliberately into how the organisation operates and thinks about the future.",
    whatThisMeans:
      "Leadership alignment, governance, and adoption are likely stronger, and AI is beginning to influence how work gets done rather than simply supporting isolated tasks.",
    nextStep:
      "The focus now is ensuring momentum translates into measurable advantage through better prioritisation, capability development, and long-term operating model decisions.",
    cta: "A 15-minute AI Roadmap Debrief can help surface the highest-value opportunities for scaling further.",
  },
};

const sectionInsightCopy = {
  Direction:
    "Leadership alignment and clarity of direction appear to be the biggest opportunity. Organisations often see the fastest progress when ownership, priorities, and expected outcomes from AI are clearly defined.",
  Structure:
    "Governance and visibility appear to be the biggest opportunity. As AI adoption grows, organisations benefit from clearer oversight of tools, spend, and safe usage practices.",
  Impact:
    "The biggest opportunity appears to be turning AI activity into measurable impact. This often involves capability building, clearer workflow integration, and better visibility of value created.",
};

function getStage(total) {
  if (total <= 8) return "Exploring";
  if (total <= 16) return "Experimenting";
  if (total <= 23) return "Structuring";
  return "Scaling";
}

function getSectionLabel(score, max) {
  const pct = (score / max) * 100;
  if (pct <= 33) return "Developing";
  if (pct <= 66) return "Taking shape";
  return "Established";
}

function snapshotMeta(section) {
  if (section === "Direction") return { icon: Target, description: "Strategy & leadership" };
  if (section === "Structure") return { icon: ShieldCheck, description: "Governance & control" };
  return { icon: BarChart3, description: "ROI & capability" };
}

async function postToWebhook(payload) {
  await fetch(WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
}

export default function AIHealthCheckPage() {
  const [step, setStep] = useState("intro");
  const [submissionId] = useState(() => createSubmissionId());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    companySize: "",
    industry: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [debriefClicked, setDebriefClicked] = useState(false);

  const totalScore = useMemo(
    () => Object.values(answers).reduce((sum, value) => sum + Number(value || 0), 0),
    [answers]
  );

  const scoreBreakdown = useMemo(() => {
    const directionScore = ["q1", "q2", "q3"].reduce((sum, id) => sum + Number(answers[id] || 0), 0);
    const structureScore = ["q4", "q5", "q6", "q7"].reduce((sum, id) => sum + Number(answers[id] || 0), 0);
    const impactScore = ["q8", "q9", "q10"].reduce((sum, id) => sum + Number(answers[id] || 0), 0);

    const sections = [
      { name: "Direction", score: directionScore, max: 9, label: getSectionLabel(directionScore, 9) },
      { name: "Structure", score: structureScore, max: 12, label: getSectionLabel(structureScore, 12) },
      { name: "Impact", score: impactScore, max: 9, label: getSectionLabel(impactScore, 9) },
    ];

    const lowestSection = [...sections].sort((a, b) => a.score - b.score)[0]?.name || "Direction";

    return {
      directionScore,
      directionLabel: getSectionLabel(directionScore, 9),
      structureScore,
      structureLabel: getSectionLabel(structureScore, 12),
      impactScore,
      impactLabel: getSectionLabel(impactScore, 9),
      lowestSection,
      sections,
    };
  }, [answers]);

  const stage = getStage(totalScore);
  const copy = resultCopy[stage];
  const progressValue = ((currentQuestion + 1) / questions.length) * 100;
  const selectedAnswer = answers[questions[currentQuestion]?.id];

  const canShowNext = selectedAnswer !== undefined && selectedAnswer !== null;
  const current = questions[currentQuestion];

  const formValid =
    leadForm.name.trim() &&
    leadForm.email.trim() &&
    leadForm.company.trim() &&
    leadForm.role.trim() &&
    leadForm.companySize &&
    leadForm.industry;

  const handleAnswer = (score) => {
    setAnswers((prev) => ({ ...prev, [current.id]: score }));
    if (currentQuestion < questions.length - 1) {
      window.setTimeout(() => setCurrentQuestion((prev) => prev + 1), 180);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) setCurrentQuestion((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!canShowNext) return;
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setStep("lead");
    }
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!formValid) return;

    setSubmitting(true);
    setSubmissionError("");

    const payload = {
      submissionId,
      timestamp: new Date().toISOString(),
      name: leadForm.name,
      email: leadForm.email,
      company: leadForm.company,
      role: leadForm.role,
      companySize: leadForm.companySize,
      industry: leadForm.industry,
      totalScore,
      stage,
      directionScore: scoreBreakdown.directionScore,
      directionLabel: scoreBreakdown.directionLabel,
      structureScore: scoreBreakdown.structureScore,
      structureLabel: scoreBreakdown.structureLabel,
      impactScore: scoreBreakdown.impactScore,
      impactLabel: scoreBreakdown.impactLabel,
      lowestSection: scoreBreakdown.lowestSection,
      q1: answers.q1,
      q2: answers.q2,
      q3: answers.q3,
      q4: answers.q4,
      q5: answers.q5,
      q6: answers.q6,
      q7: answers.q7,
      q8: answers.q8,
      q9: answers.q9,
      q10: answers.q10,
      debriefClicked: "No",
      sourcePage: "/ai-health-check",
      resultSummary: copy.summary,
    };

    try {
      await postToWebhook(payload);
      setStep("loading");
      window.setTimeout(() => {
        setSubmitting(false);
        setStep("results");
      }, 900);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
      setSubmissionError("Something went wrong while saving your result. Please try again.");
    }
  };

  const handleBookDebrief = async () => {
    setDebriefClicked(true);
    try {
      await postToWebhook({
        submissionId,
        timestamp: new Date().toISOString(),
        name: leadForm.name,
        email: leadForm.email,
        company: leadForm.company,
        role: leadForm.role,
        companySize: leadForm.companySize,
        industry: leadForm.industry,
        totalScore,
        stage,
        directionScore: scoreBreakdown.directionScore,
        directionLabel: scoreBreakdown.directionLabel,
        structureScore: scoreBreakdown.structureScore,
        structureLabel: scoreBreakdown.structureLabel,
        impactScore: scoreBreakdown.impactScore,
        impactLabel: scoreBreakdown.impactLabel,
        lowestSection: scoreBreakdown.lowestSection,
        q1: answers.q1,
        q2: answers.q2,
        q3: answers.q3,
        q4: answers.q4,
        q5: answers.q5,
        q6: answers.q6,
        q7: answers.q7,
        q8: answers.q8,
        q9: answers.q9,
        q10: answers.q10,
        debriefClicked: "Yes",
        sourcePage: "/ai-health-check",
        resultSummary: copy.summary,
      });
    } catch (error) {
      console.error(error);
    } finally {
      window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          {step === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <Card className="rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="space-y-8 p-8 md:p-12">
                  <div className="space-y-4 text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Bonsai AI Health Check</p>
                    <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                      Understand how structured your organisation’s AI adoption really is.
                    </h1>
                    <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                      Answer 10 quick questions to see where your organisation stands, where the biggest gaps sit, and what companies at your stage typically focus on next.
                    </p>
                    <p className="text-sm font-medium text-slate-500">Takes around 4 minutes.</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      "Your organisation’s AI maturity stage",
                      "Where the biggest gaps currently sit",
                      "What to focus on next",
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      className="rounded-full px-8 py-6 text-base"
                      onClick={() => setStep("quiz")}
                    >
                      Start the health check
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === "quiz" && current && (
            <motion.div
              key={`question-${current.id}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="space-y-8 p-6 md:p-10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
                      <span>Question {currentQuestion + 1} of {questions.length}</span>
                      <span>Takes around 4 minutes</span>
                    </div>
                    <Progress value={progressValue} className="h-2" />
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">{current.section}</p>
                    <h2 className="text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">
                      {current.text}
                    </h2>
                  </div>

                  <div className="grid gap-3">
                    {answerOptions.map((option) => {
                      const isSelected = selectedAnswer === option.score;
                      return (
                        <button
                          key={option.label}
                          type="button"
                          onClick={() => handleAnswer(option.score)}
                          className={`rounded-2xl border px-5 py-4 text-left text-base transition ${
                            isSelected
                              ? "border-slate-900 bg-slate-900 text-white"
                              : "border-slate-200 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50"
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="rounded-full"
                      onClick={handleBack}
                      disabled={currentQuestion === 0}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>

                    <Button
                      type="button"
                      className="rounded-full"
                      onClick={handleNext}
                      disabled={!canShowNext}
                    >
                      {currentQuestion === questions.length - 1 ? "Continue" : "Next"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === "lead" && (
            <motion.div
              key="lead"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <Card className="rounded-3xl border-slate-200 shadow-sm">
                <CardHeader className="p-6 pb-0 md:p-10 md:pb-0">
                  <CardTitle className="text-3xl font-semibold tracking-tight text-slate-900">
                    See your AI Health Check result
                  </CardTitle>
                  <p className="pt-2 text-base leading-7 text-slate-600">
                    Share a few details to view your result and recommendations.
                  </p>
                </CardHeader>
                <CardContent className="p-6 md:p-10">
                  <form className="space-y-6" onSubmit={handleLeadSubmit}>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full name</Label>
                        <Input id="name" value={leadForm.name} onChange={(e) => setLeadForm((prev) => ({ ...prev, name: e.target.value }))} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work email</Label>
                        <Input id="email" type="email" value={leadForm.email} onChange={(e) => setLeadForm((prev) => ({ ...prev, email: e.target.value }))} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" value={leadForm.company} onChange={(e) => setLeadForm((prev) => ({ ...prev, company: e.target.value }))} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Input id="role" value={leadForm.role} onChange={(e) => setLeadForm((prev) => ({ ...prev, role: e.target.value }))} />
                      </div>
                      <div className="space-y-2">
                        <Label>Company size</Label>
                        <Select value={leadForm.companySize} onValueChange={(value) => setLeadForm((prev) => ({ ...prev, companySize: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            {companySizes.map((size) => (
                              <SelectItem key={size} value={size}>{size}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Industry</Label>
                        <Select value={leadForm.industry} onValueChange={(value) => setLeadForm((prev) => ({ ...prev, industry: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {submissionError && <p className="text-sm text-red-600">{submissionError}</p>}

                    <div className="flex items-center justify-between gap-4">
                      <Button type="button" variant="outline" className="rounded-full" onClick={() => setStep("quiz")}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button type="submit" className="rounded-full px-6" disabled={!formValid || submitting}>
                        {submitting ? "Saving..." : "View my result"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <Card className="rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="flex min-h-[340px] flex-col items-center justify-center gap-4 p-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                    <CheckCircle2 className="h-7 w-7 text-slate-700" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">Generating your AI Health Check result…</h2>
                  <p className="max-w-lg text-base leading-7 text-slate-600">
                    We’re turning your answers into a clear view of where your organisation stands and what to focus on next.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <Card className="rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="space-y-8 p-6 md:p-10">
                  <div className="space-y-3 text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Your AI Health Check Result</p>
                    <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">{stage}</h1>
                    <p className="text-lg font-medium text-slate-600">{totalScore} / 30</p>
                  </div>

                  <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-2xl font-semibold text-slate-900">{copy.headline}</h2>
                    <p className="text-base leading-7 text-slate-600">{copy.summary}</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {scoreBreakdown.sections.map((section) => {
                      const meta = snapshotMeta(section.name);
                      const Icon = meta.icon;
                      return (
                        <div key={section.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                          <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                              <Icon className="h-5 w-5 text-slate-700" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">{section.name}</p>
                              <p className="text-sm text-slate-500">{meta.description}</p>
                            </div>
                          </div>
                          <p className="text-lg font-semibold text-slate-900">{section.label}</p>
                          <p className="text-sm text-slate-500">{section.score} / {section.max}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-6 rounded-2xl border border-slate-200 p-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900">What this means</h3>
                      <p className="text-base leading-7 text-slate-600">{copy.whatThisMeans}</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900">Where the biggest opportunity appears to be</h3>
                      <p className="text-base leading-7 text-slate-600">{sectionInsightCopy[scoreBreakdown.lowestSection]}</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900">What to focus on next</h3>
                      <p className="text-base leading-7 text-slate-600">{copy.nextStep}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="space-y-5 p-6 text-center md:p-10">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-slate-900">Talk through your result</h3>
                    <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">{copy.cta}</p>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <Button size="lg" className="rounded-full px-8 py-6 text-base" onClick={handleBookDebrief}>
                      Book your 15-min AI Roadmap Debrief
                    </Button>
                    <p className="text-sm text-slate-500">
                      {debriefClicked ? "Opening your booking page…" : "A short debrief will help identify your biggest opportunities and next priorities."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
