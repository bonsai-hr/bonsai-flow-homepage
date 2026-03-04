import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  
  const tiers = [
    {
      name: "🌱 AI Health Check",
      headcount: "4 minutes • Immediate results",
      description: "A quick diagnostic to uncover:",
      features: [
        "Whether AI adoption is intentional or organic",
        "Where governance / data risk may sit",
        "Whether AI tool spend is visible and controlled",
        "If ROI and productivity gains are being measured",
      ],
      cta: "Take the Assessment"
    },
    {
      name: "🌿 AI Roadmap Debrief",
      headcount: "15 minutes • Optional follow-up",
      description: "A short call to help you:",
      features: [
        "Sense-check your assessment results",
        "Clarify the most important priorities",
        "Understand what a roadmap could look like",
        "Decide whether deeper support would be valuable",
      ],
      cta: "Speak to Us"
    }
  ];


  return (
    <section id="pricing" className="py-24 md:py-32 bg-primary/20 relative z-10 overflow-hidden">
      {/* Subtle organic divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Get <span className="text-gradient">Started</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Take the AI Health Check to see how roadmap-ready your organisation is and what to prioritise next.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
            {tiers.map((tier, index) => (
              <Card
                key={tier.name}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in-up ${
                  tier.featured
                    ? "border-2 border-primary shadow-lg scale-105 md:scale-110"
                    : "border hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    Popular
                  </div>
                )}
                <CardHeader className="space-y-4 pb-8">
                  <CardTitle className="text-3xl font-bold">{tier.name}</CardTitle>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold text-primary">{tier.headcount}</p>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full"
                    variant={tier.featured ? "default" : "outline"}
                    size="lg"
                  >
                    <a href="#contact">{tier.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-foreground/70">
              We recommend starting with the assessment to understand where you stand and what the right next step looks like.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
