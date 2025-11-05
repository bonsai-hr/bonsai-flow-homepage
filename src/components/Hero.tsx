import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-primary/20">

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Say bye to admin 
            <br />
            and say{" "} <span className="text-gradient">hello</span> 
             <br />
            to Bonsai.
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-3xl mx-auto">
            The AI enablement specialists for HR teams.
          </p>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We help HR teams reclaim time by reducing their admin through AI enablement, allowing them to become more efficient and impactful.
            </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-6">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-primary font-semibold text-base px-8 py-6 hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <a href="#about">
                Find Out More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
