import { CheckCircle2, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Optimise",
      icon: CheckCircle2,
      description:
        "Close information gaps, update documents, and simplify processes. We make your HR foundation solid and efficient.",
      color: "text-primary",
    },
    {
      number: "02",
      title: "Automate",
      icon: Zap,
      description:
        "Implement an AI agent like Harriet to reduce admin and employee query time. Let technology handle the repetitive stuff.",
      color: "text-secondary",
    },
    {
      number: "03",
      title: "Elevate",
      icon: TrendingUp,
      description:
        "Train HR teams to think strategically, proactively, and commercially. Transform them into business partners who drive results.",
      color: "text-accent",
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-4 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              How It Works — <span className="text-gradient">The Bonsai Process</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Three simple steps to transform your HR team from admin-heavy to strategically powerful.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
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

          <div className="text-center pt-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-lg text-muted-foreground italic">
              Choose one, two, or all three steps. We adapt to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
