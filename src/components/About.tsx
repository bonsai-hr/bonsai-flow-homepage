const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle organic divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50"></div>
      
      {/* Background nature accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.08]">
        <div className="absolute top-20 right-12 animate-float-delayed">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
            <circle cx="75" cy="75" r="60" fill="hsl(120 20% 60%)" opacity="0.3"/>
            <circle cx="75" cy="75" r="40" fill="hsl(270 30% 70%)" opacity="0.2"/>
          </svg>
        </div>

        {/* Drifting leaves throughout section */}
        <div className="absolute top-1/4 left-12 animate-drift-1">
          <svg width="50" height="60" viewBox="0 0 50 60" fill="none">
            <ellipse cx="25" cy="30" rx="15" ry="24" fill="hsl(120 20% 60%)" opacity="0.6" transform="rotate(-20 25 30)"/>
          </svg>
        </div>

        <div className="absolute top-1/2 right-20 animate-drift-3">
          <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
            <ellipse cx="20" cy="25" rx="12" ry="20" fill="hsl(270 30% 70%)" opacity="0.5" transform="rotate(25 20 25)"/>
          </svg>
        </div>

        <div className="absolute bottom-1/4 left-1/3 animate-drift-2">
          <svg width="45" height="55" viewBox="0 0 45 55" fill="none">
            <ellipse cx="22" cy="27" rx="13" ry="22" fill="hsl(15 90% 78%)" opacity="0.4" transform="rotate(-12 22 27)"/>
          </svg>
        </div>

        <div className="absolute top-3/4 right-1/4 animate-drift-4">
          <svg width="35" height="45" viewBox="0 0 35 45" fill="none">
            <ellipse cx="17" cy="22" rx="11" ry="18" fill="hsl(120 20% 60%)" opacity="0.6" transform="rotate(18 17 22)"/>
          </svg>
        </div>

        <div className="absolute top-0 left-1/5 animate-fall-slow">
          <svg width="26" height="32" viewBox="0 0 26 32" fill="none">
            <ellipse cx="13" cy="16" rx="9" ry="13" fill="hsl(15 90% 78%)" opacity="0.45" transform="rotate(-10 13 16)"/>
          </svg>
        </div>

        <div className="absolute top-0 right-1/3 animate-fall-medium">
          <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
            <ellipse cx="12" cy="15" rx="8" ry="12" fill="hsl(120 20% 60%)" opacity="0.5" transform="rotate(14 12 15)"/>
          </svg>
        </div>

        <div className="absolute top-1/3 left-16 animate-drift-1">
          <svg width="38" height="48" viewBox="0 0 38 48" fill="none">
            <ellipse cx="19" cy="24" rx="12" ry="19" fill="hsl(270 30% 70%)" opacity="0.55" transform="rotate(-16 19 24)"/>
          </svg>
        </div>

        <div className="absolute bottom-1/3 right-16 animate-drift-3">
          <svg width="42" height="52" viewBox="0 0 42 52" fill="none">
            <ellipse cx="21" cy="26" rx="13" ry="21" fill="hsl(120 20% 60%)" opacity="0.5" transform="rotate(20 21 26)"/>
          </svg>
        </div>
      </div>

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
