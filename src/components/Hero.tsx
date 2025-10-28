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

        {/* Drifting leaves - varied positions and sizes */}
        <div className="absolute top-1/4 left-1/4 animate-drift-1">
          <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
            <ellipse cx="20" cy="25" rx="12" ry="20" fill="hsl(120 20% 60%)" opacity="0.7" transform="rotate(-15 20 25)"/>
          </svg>
        </div>

        <div className="absolute top-1/3 right-1/3 animate-drift-2">
          <svg width="35" height="45" viewBox="0 0 35 45" fill="none">
            <ellipse cx="17" cy="22" rx="10" ry="18" fill="hsl(270 30% 70%)" opacity="0.6" transform="rotate(20 17 22)"/>
          </svg>
        </div>

        <div className="absolute bottom-1/3 left-1/3 animate-drift-3">
          <svg width="45" height="55" viewBox="0 0 45 55" fill="none">
            <ellipse cx="22" cy="27" rx="14" ry="22" fill="hsl(15 90% 78%)" opacity="0.5" transform="rotate(-25 22 27)"/>
          </svg>
        </div>

        <div className="absolute top-2/3 right-1/4 animate-drift-4">
          <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
            <ellipse cx="15" cy="20" rx="9" ry="16" fill="hsl(120 20% 60%)" opacity="0.6" transform="rotate(12 15 20)"/>
          </svg>
        </div>

        {/* Falling leaves from top */}
        <div className="absolute top-0 left-1/5 animate-fall-slow">
          <svg width="25" height="30" viewBox="0 0 25 30" fill="none">
            <ellipse cx="12" cy="15" rx="8" ry="12" fill="hsl(120 20% 60%)" opacity="0.5" transform="rotate(-10 12 15)"/>
          </svg>
        </div>

        <div className="absolute top-0 right-1/5 animate-fall-medium">
          <svg width="28" height="35" viewBox="0 0 28 35" fill="none">
            <ellipse cx="14" cy="17" rx="9" ry="14" fill="hsl(270 30% 70%)" opacity="0.5" transform="rotate(15 14 17)"/>
          </svg>
        </div>

        <div className="absolute top-0 left-2/5 animate-fall-slow">
          <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
            <ellipse cx="11" cy="14" rx="7" ry="11" fill="hsl(15 90% 78%)" opacity="0.4" transform="rotate(-8 11 14)"/>
          </svg>
        </div>

        <div className="absolute top-0 right-2/5 animate-fall-medium">
          <svg width="26" height="32" viewBox="0 0 26 32" fill="none">
            <ellipse cx="13" cy="16" rx="8" ry="13" fill="hsl(120 20% 60%)" opacity="0.45" transform="rotate(12 13 16)"/>
          </svg>
        </div>

        <div className="absolute top-0 left-3/5 animate-fall-slow">
          <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
            <ellipse cx="12" cy="15" rx="8" ry="12" fill="hsl(270 30% 70%)" opacity="0.5" transform="rotate(-15 12 15)"/>
          </svg>
        </div>

        <div className="absolute top-0 right-3/5 animate-fall-medium">
          <svg width="23" height="29" viewBox="0 0 23 29" fill="none">
            <ellipse cx="11" cy="14" rx="7" ry="12" fill="hsl(15 90% 78%)" opacity="0.48" transform="rotate(10 11 14)"/>
          </svg>
        </div>

        <div className="absolute top-0 left-1/6 animate-fall-slow">
          <svg width="27" height="33" viewBox="0 0 27 33" fill="none">
            <ellipse cx="13" cy="16" rx="8" ry="13" fill="hsl(120 20% 60%)" opacity="0.52" transform="rotate(-14 13 16)"/>
          </svg>
        </div>

        <div className="absolute top-0 right-1/6 animate-fall-medium">
          <svg width="21" height="27" viewBox="0 0 21 27" fill="none">
            <ellipse cx="10" cy="13" rx="7" ry="11" fill="hsl(270 30% 70%)" opacity="0.46" transform="rotate(16 10 13)"/>
          </svg>
        </div>

        {/* More scattered drifting leaves */}
        <div className="absolute top-1/6 left-1/5 animate-drift-2">
          <svg width="32" height="42" viewBox="0 0 32 42" fill="none">
            <ellipse cx="16" cy="21" rx="10" ry="17" fill="hsl(120 20% 60%)" opacity="0.6" transform="rotate(-22 16 21)"/>
          </svg>
        </div>

        <div className="absolute top-1/5 right-1/6 animate-drift-4">
          <svg width="38" height="48" viewBox="0 0 38 48" fill="none">
            <ellipse cx="19" cy="24" rx="12" ry="19" fill="hsl(15 90% 78%)" opacity="0.55" transform="rotate(18 19 24)"/>
          </svg>
        </div>

        <div className="absolute top-2/5 left-1/6 animate-drift-1">
          <svg width="34" height="44" viewBox="0 0 34 44" fill="none">
            <ellipse cx="17" cy="22" rx="11" ry="18" fill="hsl(270 30% 70%)" opacity="0.58" transform="rotate(-19 17 22)"/>
          </svg>
        </div>

        <div className="absolute top-3/5 right-1/5 animate-drift-3">
          <svg width="36" height="46" viewBox="0 0 36 46" fill="none">
            <ellipse cx="18" cy="23" rx="11" ry="19" fill="hsl(120 20% 60%)" opacity="0.62" transform="rotate(21 18 23)"/>
          </svg>
        </div>

        <div className="absolute bottom-1/5 left-1/4 animate-drift-2">
          <svg width="33" height="43" viewBox="0 0 33 43" fill="none">
            <ellipse cx="16" cy="21" rx="10" ry="17" fill="hsl(15 90% 78%)" opacity="0.5" transform="rotate(-16 16 21)"/>
          </svg>
        </div>

        <div className="absolute bottom-1/4 right-1/3 animate-drift-4">
          <svg width="37" height="47" viewBox="0 0 37 47" fill="none">
            <ellipse cx="18" cy="23" rx="11" ry="19" fill="hsl(270 30% 70%)" opacity="0.54" transform="rotate(13 18 23)"/>
          </svg>
        </div>

        <div className="absolute top-1/2 left-10 animate-drift-1">
          <svg width="31" height="41" viewBox="0 0 31 41" fill="none">
            <ellipse cx="15" cy="20" rx="9" ry="16" fill="hsl(120 20% 60%)" opacity="0.56" transform="rotate(-20 15 20)"/>
          </svg>
        </div>

        <div className="absolute top-1/2 right-10 animate-drift-3">
          <svg width="39" height="49" viewBox="0 0 39 49" fill="none">
            <ellipse cx="19" cy="24" rx="12" ry="20" fill="hsl(15 90% 78%)" opacity="0.52" transform="rotate(17 19 24)"/>
          </svg>
        </div>

        <div className="absolute bottom-1/6 left-12 animate-drift-2">
          <svg width="35" height="45" viewBox="0 0 35 45" fill="none">
            <ellipse cx="17" cy="22" rx="10" ry="18" fill="hsl(270 30% 70%)" opacity="0.57" transform="rotate(-12 17 22)"/>
          </svg>
        </div>

        <div className="absolute bottom-1/6 right-16 animate-drift-4">
          <svg width="29" height="39" viewBox="0 0 29 39" fill="none">
            <ellipse cx="14" cy="19" rx="9" ry="16" fill="hsl(120 20% 60%)" opacity="0.53" transform="rotate(19 14 19)"/>
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
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We help HR teams reclaim time, become more strategic, and drive both efficiency and growth.
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
          <p className="text-lg md:text-xl font-bold text-primary pt-8">
            The Kind of HR That Makes You Money.
          </p>
          
        </div>
      </div>

    </section>
  );
};

export default Hero;
