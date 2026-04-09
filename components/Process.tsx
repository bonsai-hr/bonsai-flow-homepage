import { motion } from "framer-motion";
import { Search, Map, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    icon: Search,
    description:
      "Start with the AI Readiness & Risk Assessment. We uncover how AI is currently being used, where risks or blind spots exist, and how roadmap-ready your organisation really is.",
  },
  {
    number: "02",
    title: "Design",
    icon: Map,
    description:
      "We design your AI roadmap, aligning direction, governance, tool visibility, ROI modelling, and workforce impact into one structured plan.",
  },
  {
    number: "03",
    title: "Deploy",
    icon: Rocket,
    description:
      "If needed, we support rollout by embedding governance, adoption process, and ROI measurement so AI becomes intentional, controlled, and commercially aligned.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground mb-4">
            How It Works
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            A clear, three-step process for making AI adoption intentional, governed and commercially aligned.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-bold text-primary tracking-widest font-body">
                  {step.number}
                </span>
                <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <step.icon size={20} className="text-primary" />
                </div>
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-3">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center text-sm text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed"
        >
          94% of organisations have moved beyond AI experimentation, yet only 14% say AI is
          deeply integrated into how they operate. Most companies are already experimenting
          with AI — however the advantage belongs to organisations who structure it.
        </motion.p>
      </div>
    </section>
  );
};

export default Process;
