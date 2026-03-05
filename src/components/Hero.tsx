import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-primary/20">

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.15] md:leading-[1.15] lg:leading-[1.2]">
            Everyone’s using AI.
            <br />
           But who’s got a{" "}
            <span className="text-gradient">plan</span>
            <br />
            for it?
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-foreground/70 font-medium max-w-3xl mx-auto">
            The AI Roadmap Specialists for Scaling Businesses.
          </p>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We help scaling organisations bring structure to how AI is used by aligning governance, spend visibility and ROI so AI becomes intentional, measurable and commercially aligned.
            </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-6">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-[#1E1E1E] font-semibold text-base px-8 py-6 hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <a href="#about">
                Find Out More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>


          {/* Tagline */}
          <p className="text-lg md:text-xl font-bold text-primary pt-8">
            Turn AI Chaos into a Roadmap for Success.
          </p>
          
        </div>
      </div>

    </section>
  );
};

export default Hero;
