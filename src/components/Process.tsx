import { CheckCircle2, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Process = () => {
  const steps = [
    { 
      number: "01",
      title: "Diagnose",
      icon: Zap,
      description:
        "Start with the AI Readiness & Risk Assessment. We uncover how AI is currently being used, where risks or blind spots exist, and how roadmap-ready your organisation really is.",
      color: "text-primary",
    },
    {
      number: "02",
      title: "Design",
      icon: CheckCircle2,
      description:
        "We design your AI roadmap, aligning direction, governance, tool visibility, ROI modelling, and workforce impact into one structured plan.",
      color: "text-secondary",
    },
    {
      number: "03",
      title: "Deploy",
      icon: TrendingUp,
      description:
        "If needed, we support rollout by embedding governance, adoption process, and ROI measurement so AI becomes intentional, controlled, and commercially aligned.",
      color: "text-accent",
    },
  ];

  return (
    <section
  id="process"
  className="relative overflow-hidden scroll-mt-24 md:scroll-mt-32 pt-8 md:pt-12 pb-24 md:pb-32"
>
      {/* Background layer (BEHIND floaters) */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-background" />

      {/* Content layer (ABOVE floaters) */}
      <div className="relative z-20">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4 text-center animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                How It Works — The Bonsai Roadmap{" "}
                <span className="text-gradient">Process</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                A clear, three-step process for making AI adoption intentional, governed and commercially aligned.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <Card
                  key={step.number}
                  className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8 space-y-6">
                    {/* Step Number */}
                    <div className="text-6xl font-bold text-muted/20 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`${step.color} w-16 h-16 relative z-10`}>
                      <step.icon className="w-full h-full" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground relative z-10">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div
              className="text-center pt-8 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-lg text-muted-foreground italic">
                94% of organisations have moved beyond AI experimentation, yet only 14% say AI is deeply integrated into how they operate.
Most companies are already experimenting with AI, however the advantage belongs to those who structure it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
