const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      {/* Background layer (BEHIND floaters) */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-background" />

      {/* Content layer (ABOVE floaters) */}
      <div className="relative z-20">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                About <span className="text-gradient">Bonsai HR</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Our focus is on enabling AI in HR teams. By cutting down BAU chaos, modernising 
                how people work, and freeing up their time, we help People Teams become 
                more productive, and commercially focused.
              </p>

              <p className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Most HR teams spend way too much of their time doing low impact administrative tasks, 
                limiting their value to businesses, when they could be driving revenue and 
                helping them reach their strategic objectives.
              </p>

              <p className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                We free up that space by through AI enablement, and with that freed up time, 
                we help teams fill it with the type of work that allows HR to thrive
              </p>
            </div>

            <div
              className="pt-8 text-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <blockquote className="text-2xl md:text-3xl font-semibold text-foreground italic">
                "The future of HR depends on how fast we can drop our admin, and start focusing on acheiving business goals."
              </blockquote>
            </div>

            {/* Divider positioned AFTER content */}
            <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
