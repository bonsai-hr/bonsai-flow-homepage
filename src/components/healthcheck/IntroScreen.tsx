import { motion } from "framer-motion";
import { Target, Search, ArrowRight, Compass } from "lucide-react";

interface IntroScreenProps {
  onStart: () => void;
}

const valueCards = [
  { icon: Compass, text: "Your organisation's AI maturity stage" },
  { icon: Search, text: "Where the biggest gaps currently sit" },
  { icon: Target, text: "What to focus on next" },
];

const IntroScreen = ({ onStart }: IntroScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-[680px] mx-auto"
    >
      <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12">
        <p className="font-heading text-sm font-semibold tracking-wide uppercase text-accent mb-4">
          Bonsai AI Health Check
        </p>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
          Understand how structured your organisation's AI adoption really is.
        </h1>
        <p className="font-body text-base text-muted-foreground leading-relaxed mb-2">
          Answer 10 quick questions to see where your organisation stands, where the biggest gaps sit, and what companies at your stage typically focus on next.
        </p>
        <p className="font-body text-sm text-muted-foreground mb-8">
          Takes around 4 minutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {valueCards.map((card, i) => (
            <div
              key={i}
              className="bg-accent/10 rounded-xl p-4 flex flex-col items-start gap-2"
            >
              <card.icon className="h-5 w-5 text-accent" />
              <p className="font-body text-sm font-medium text-foreground">{card.text}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onStart}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-sm px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
        >
          Start the health check
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
