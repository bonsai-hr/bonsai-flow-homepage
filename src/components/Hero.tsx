import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-primary/20">

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
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We help HR teams reclaim time, become more strategic, and drive both efficiency and growth.
            </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button asChild size="lg" className="text-base px-8 py-6 group">
              <a href="https://calendar.app.google/miQu1P6JmvSVB6p96" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 py-6">
              <a href="mailto:hello@bonsai-hr.co.uk">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl font-bold text-primary pt-8">
            The Kind of HR That Makes You Money.
          </p>
          
        </div>
      </div>

    </section>
  );
};

export default Hero;
