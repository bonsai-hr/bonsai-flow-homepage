const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              About <span className="text-gradient">Bonsai HR</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
            <p className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We're a new breed of HR consultancy built for the AI era. Our job is to help People
              teams cut down BAU chaos, modernise how they work, and finally have time for the
              things that actually move the business forward.
            </p>

            <p className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              We believe HR teams should be working in the thick of the action, driving revenue —
              not buried in low-impact projects.
            </p>

            <p className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              We turn reactive, operational, and admin-heavy HR teams into commercial, proactive,
              and strategic powerhouses. That's what we do. That's all we do.
            </p>
          </div>

          <div className="pt-8 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground italic">
              "HR teams should be revenue drivers, not cost centres."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
