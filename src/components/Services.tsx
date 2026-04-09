import { motion } from "framer-motion";
import { Sprout, TreePine, CheckCircle2 } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground mb-4">
            Get Started
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Take the AI Health Check to see how roadmap-ready your organisation is and what to prioritise next.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Health Check */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-11 w-11 rounded-xl bg-accent/15 flex items-center justify-center">
                <Sprout size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground">AI Health Check</h3>
                <p className="text-xs text-muted-foreground font-body">4 minutes · Immediate results</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-body mb-4">A quick diagnostic to uncover:</p>
            <ul className="space-y-2.5 mb-6 flex-1">
              {[
                "Whether AI adoption is intentional or organic",
                "Where governance / data risk may sit",
                "Whether AI tool spend is visible and controlled",
                "If ROI and productivity gains are being measured",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://bonsai-hr.com/ai-health-check"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium text-center hover:opacity-90 transition-opacity"
            >
              Take the AI Health Check
            </a>
          </motion.div>

          {/* Roadmap Debrief */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-11 w-11 rounded-xl bg-primary/15 flex items-center justify-center">
                <TreePine size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground">AI Roadmap Debrief</h3>
                <p className="text-xs text-muted-foreground font-body">15 minutes · Optional follow-up</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-body mb-4">A short call to help you:</p>
            <ul className="space-y-2.5 mb-6 flex-1">
              {[
                "Sense-check your assessment results",
                "Clarify the most important priorities",
                "Understand what a roadmap could look like",
                "Decide whether deeper support would be valuable",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://calendar.app.google/fZs7mYXt5qjbQy7f8"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-foreground text-foreground px-6 py-3 text-sm font-medium text-center hover:bg-foreground hover:text-background transition-colors"
            >
              Book a Debrief Call
            </a>
          </motion.div>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground font-body max-w-2xl mx-auto">
          We recommend starting with the assessment to understand where you stand and what the right next step looks like.
        </p>
      </div>
    </section>
  );
};

export default Services;
