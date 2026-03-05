import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-primary/20 pt-20"
    >
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8 text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold leading-[1.05] md:text-7xl md:leading-[1.05] lg:text-8xl lg:leading-[1.12]">
            Everyone’s using AI.
            <br />
            But who’s got a <span className="text-gradient">plan</span>
            <br />
            for it?
          </h1>

          <p className="mx-auto max-w-3xl text-xl font-medium text-foreground/70 md:text-2xl">
            The AI Roadmap Specialists for Scaling Businesses.
          </p>

          <p className="mx-auto max-w-2xl text-lg text-foreground/80">
            We help scaling organisations bring structure to how AI is used by
            aligning governance, spend visibility and ROI so AI becomes
            intentional, measurable and commercially aligned.
          </p>

          <div className="flex justify-center pt-6">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white px-8 py-6 text-base font-semibold text-[#1E1E1E] transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              <a href="#about">
                See how we work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
