import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
            Are You Ready to Make an AI Plan?
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Most scaling businesses aren't short on AI usage. They're short on direction,
            visibility, and measurable outcomes. Before investing more time, tools or budget,
            know exactly where you stand and what comes next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://bonsai-hr.com/ai-health-check"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity group"
            >
              Take the AI Health Check
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://calendar.app.google/fZs7mYXt5qjbQy7f8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-foreground text-foreground px-7 py-3.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Speak to Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
