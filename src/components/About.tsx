const About = () => {
  return (
   <section
  id="about"
  className="relative overflow-hidden scroll-mt-24 md:scroll-mt-32 pt-16 md:pt-20 pb-14 md:pb-16"
>
      {/* Background layer (BEHIND floaters) */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-background" />

      {/* Content layer (ABOVE floaters) */}
      <div className="relative z-20">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                About <span className="text-gradient">Bonsai </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto rounded-full" />
            </div>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
              <p
                className="animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Our focus is on helping scaling businesses bring structure to how AI is used. We help cut down reactive experimentation and create clarity, giving teams the direction and control they need to turn AI into measurable value.

              </p>

              <p
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Most organisations are already adopting AI tools across departments, but adoption often grows faster than governance, ownership or ROI tracking.
              </p>

              <p
                className="animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                We bring that structure through practical AI roadmaps, defining where AI should be used, how it should be governed and how its impact should be measured, so leadership teams can move from scattered activity to strategic advantage.
              </p>
            </div>

            <div
              className="pt-8 text-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <blockquote className="text-2xl md:text-3xl font-semibold text-foreground italic">
                At Bonsai, we believe that AI will reshape how organisations operate, and the real advantage belongs to those who structure it properly.
              </blockquote>
            </div>

            {/* Divider positioned AFTER content */}
            <div className="mt-10 md:mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
