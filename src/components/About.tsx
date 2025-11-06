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
                Our focus is on enabling HR teams to improve how they work. We
                help cut down BAU chaos and free up the time, helping People
                Teams become more productive and commercially focused for their
                organisations.
              </p>

              <p
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Most HR teams spend way too much of their time doing low impact
                administrative tasks, limiting their value, their impact, and
                their development.
              </p>

              <p
                className="animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                We free up that space through AI enablement, doing the necessary
                specialist work that makes room for an AI agent to take over the
                low-impact, repetitive side of HR work, and with that freed up
                time, we guide HR teams to fill it with strategic, proactive
                work.
              </p>
            </div>

            <div
              className="pt-8 text-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <blockquote className="text-2xl md:text-3xl font-semibold text-foreground italic">
                "The future of HR depends on how fast we can drop our admin, and
                start focusing on acheiving business goals."
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
