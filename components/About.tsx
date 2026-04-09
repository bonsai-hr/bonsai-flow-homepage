import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground mb-8 text-center">
            About Bonsai
          </h2>

          <div className="space-y-6 text-base text-muted-foreground leading-relaxed font-body">
            <p>
              Our focus is on helping scaling businesses bring structure to how AI is used.
              We help cut down reactive experimentation and create clarity, giving teams the
              direction and control they need to turn AI into measurable value.
            </p>
            <p>
              Most organisations are already adopting AI tools across departments, but adoption
              often grows faster than governance, ownership or ROI tracking.
            </p>
            <p>
              We bring that structure through practical AI roadmaps, defining where AI should
              be used, how it should be governed and how its impact should be measured, so
              leadership teams can move from scattered activity to strategic advantage.
            </p>
          </div>

          <blockquote className="mt-10 border-l-4 border-primary pl-6 italic text-foreground/80 font-heading text-lg sm:text-xl leading-relaxed">
            At Bonsai, we believe that AI will reshape how organisations operate, and the real
            advantage belongs to those who structure it properly.
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
