import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  
  const tiers = [
    {
      name: "🌱 Seedling",
      headcount: "up to 150 employees",
      description: "For growing companies ready to modernise their HR foundations.",
      features: [
        "Choose 1–3 steps (Optimise, Automate, Elevate)",
        "Initial HR audit & gap analysis",
        "Improve clarity across documents & processes",
        "Optional AI agent setup",
        "Elevate workshop for HR teams",
        "Project duration: 1–3 months"
      ],
      cta: "Contact Us"
    },
    {
      name: "🌿 Sapling",
      headcount: "150–500 employees",
      description: "For established teams ready to grow into strategic powerhouses.",
      features: [
        "Choose 2–3 steps (Optimise, Automate, Elevate)",
        "HR maturity audit & roadmap",
        "Improve and streamline existing processes",
        "Tailored AI agent implementation & training",
        "Elevate workshops for HR teams",
        "Project duration: 3–6 months"
      ],
      cta: "Contact Us"
    }
  ];


  return (
    <section id="pricing" className="py-24 md:py-32 bg-primary/20 relative overflow-hidden">
      {/* Subtle organic divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
      
      {/* Background nature accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.08]">
        <div className="absolute top-16 left-12 animate-float">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
            <path d="M70 20 L70 100" stroke="hsl(180 60% 30%)" strokeWidth="2"/>
            <circle cx="50" cy="50" r="18" fill="hsl(120 20% 60%)" opacity="0.4"/>
            <circle cx="90" cy="70" r="15" fill="hsl(270 30% 70%)" opacity="0.3"/>
          </svg>
        </div>
        <div className="absolute bottom-24 right-16 animate-float-delayed">
          <svg width="100" height="160" viewBox="0 0 100 160" fill="none">
            <path d="M50 20 Q30 60, 40 100 Q50 130, 60 100 Q70 60, 50 20Z" 
                  fill="hsl(180 60% 30%)" opacity="0.15"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Our <span className="text-gradient">Growth</span> Plans
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Our packages are based on company size.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
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
              All packages can be customized to your specific needs.{" "}
              <a href="#contact" className="text-secondary hover:underline font-medium transition-colors">
                Let's discuss what works for you.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
