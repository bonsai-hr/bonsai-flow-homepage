import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-primary/20">
      {/* Floating Nature Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Minimalist bonsai branch - top left */}
        <div className="absolute top-32 left-10 opacity-[0.15] animate-float">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path d="M20 80 Q40 60, 60 70 Q50 50, 70 40 Q60 30, 80 20" 
                  stroke="hsl(180 60% 30%)" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <circle cx="65" cy="65" r="12" fill="hsl(120 20% 60%)" opacity="0.6"/>
            <circle cx="75" cy="35" r="8" fill="hsl(120 20% 60%)" opacity="0.5"/>
            <circle cx="50" cy="50" r="6" fill="hsl(120 20% 60%)" opacity="0.4"/>
          </svg>
        </div>
        
        {/* Organic leaf shape - top right */}
        <div className="absolute top-20 right-16 opacity-[0.12] animate-float-delayed">
          <svg width="100" height="140" viewBox="0 0 100 140" fill="none">
            <path d="M50 10 Q70 50, 60 90 Q50 120, 40 90 Q30 50, 50 10Z" 
                  fill="hsl(270 30% 70%)" opacity="0.7"/>
            <path d="M50 10 L50 120" stroke="hsl(180 60% 30%)" strokeWidth="1.5" opacity="0.5"/>
          </svg>
        </div>

        {/* Flowing organic line - bottom left */}
        <div className="absolute bottom-40 left-20 opacity-[0.1] animate-float">
          <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
            <path d="M0 50 Q50 20, 100 40 Q150 60, 200 30" 
                  stroke="hsl(120 20% 60%)" strokeWidth="3" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        
        {/* Small leaves cluster - bottom right */}
        <div className="absolute bottom-32 right-24 opacity-[0.15] animate-float-delayed">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <ellipse cx="30" cy="40" rx="15" ry="8" fill="hsl(120 20% 60%)" opacity="0.6" transform="rotate(-30 30 40)"/>
            <ellipse cx="50" cy="35" rx="12" ry="7" fill="hsl(120 20% 60%)" opacity="0.5" transform="rotate(20 50 35)"/>
            <ellipse cx="40" cy="55" rx="14" ry="8" fill="hsl(120 20% 60%)" opacity="0.4" transform="rotate(-10 40 55)"/>
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
          <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-3xl mx-auto">
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
