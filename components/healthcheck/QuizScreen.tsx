import { motion, AnimatePresence } from "framer-motion";
import { QUESTIONS, ANSWER_OPTIONS } from "@/lib/healthcheck-data";
import { ChevronLeft } from "lucide-react";
import { useCallback, useRef } from "react";

interface QuizScreenProps {
  currentQ: number;
  answers: (number | null)[];
  onAnswer: (questionIndex: number, value: number) => void;
  onBack: () => void;
}

const QuizScreen = ({ currentQ, answers, onAnswer, onBack }: QuizScreenProps) => {
  const q = QUESTIONS[currentQ];
  const progress = ((currentQ + 1) / 10) * 100;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelect = useCallback(
    (value: number) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      onAnswer(currentQ, value);
    },
    [currentQ, onAnswer]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-[680px] mx-auto"
    >
      <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <p className="font-body text-sm text-muted-foreground">
              Question {currentQ + 1} of 10
            </p>
            <p className="font-body text-sm font-medium text-accent">
              {q.section}
            </p>
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-8 leading-tight">
              {q.text}
            </h2>

            <div className="flex flex-col gap-3">
              {ANSWER_OPTIONS.map((opt) => {
                const isSelected = answers[currentQ] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 font-body text-sm font-medium transition-all duration-150 ${
                      isSelected
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border bg-card text-foreground hover:border-accent/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Back */}
        {currentQ > 0 && (
          <button
            onClick={onBack}
            className="mt-6 inline-flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default QuizScreen;
