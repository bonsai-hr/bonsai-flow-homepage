import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-foreground mb-6"
        >
          Everyone's using AI.{" "}
          <br className="hidden sm:block" />
          But who's got a{" "}
          <span className="bg-gradient-to-r from-accent via-primary to-primary/60 bg-clip-text text-transparent">
            plan
          </span>{" "}
          for it?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-body text-lg font-medium text-muted-foreground mb-4"
        >
          The AI Roadmap Specialists for Scaling Businesses.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-body text-base text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We help scaling organisations bring structure to how AI is used by aligning
          governance, spend visibility and ROI so AI becomes intentional, measurable
          and commercially aligned.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity group"
          >
            Find Out More
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 font-heading text-lg sm:text-xl text-primary italic"
        >
          Turn AI Chaos into a Roadmap for Success.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
