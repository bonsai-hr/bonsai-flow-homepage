import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Nature Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 opacity-10 animate-float">
          <svg viewBox="0 0 100 100" className="fill-accent">
            <path d="M50 10 Q60 30, 80 40 Q60 50, 50 70 Q40 50, 20 40 Q40 30, 50 10Z" />
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 opacity-10 animate-float-delayed">
          <svg viewBox="0 0 100 100" className="fill-secondary">
            <path d="M50 10 Q65 35, 85 45 Q65 55, 50 80 Q35 55, 15 45 Q35 35, 50 10Z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Traditional HR is buried in{" "}
            <span className="text-gradient">admin</span>.
            <br />
            We dig it out.
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto">
            The AI enablement specialists for HR teams.
          </p>

          {/* One-liner */}
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            We help businesses save and make money by turning HR teams into strategic powerhouses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button asChild size="lg" className="text-base px-8 py-6 group">
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 py-6">
              <a href="mailto:hello@bonsaihr.co.uk">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
          </div>

          {/* Tagline */}
          <p className="text-sm md:text-base font-semibold text-primary pt-8">
            The Kind of HR That Makes You Money.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
