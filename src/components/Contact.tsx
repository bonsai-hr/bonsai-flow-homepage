import { ArrowRight, Calendar, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary/20 relative overflow-hidden">
      {/* Subtle organic divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.12]">
        {/* Organic bonsai cluster - bottom right */}
        <div className="absolute bottom-20 right-10 animate-float">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <path d="M100 120 Q80 80, 100 60 Q120 80, 100 120Z" fill="hsl(120 20% 60%)" opacity="0.4"/>
            <path d="M120 100 Q140 80, 150 100 Q140 120, 120 100Z" fill="hsl(270 30% 70%)" opacity="0.3"/>
            <path d="M80 90 Q60 70, 70 50 Q90 70, 80 90Z" fill="hsl(120 20% 60%)" opacity="0.35"/>
            <path d="M100 120 L100 160" stroke="hsl(180 60% 30%)" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        
        {/* Gentle leaf shapes - top left */}
        <div className="absolute top-20 left-20 animate-float-delayed">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
            <ellipse cx="75" cy="60" rx="25" ry="15" fill="hsl(120 20% 60%)" opacity="0.3" transform="rotate(-20 75 60)"/>
            <ellipse cx="60" cy="90" rx="20" ry="12" fill="hsl(270 30% 70%)" opacity="0.25" transform="rotate(30 60 90)"/>
          </svg>
        </div>

        {/* Drifting leaves */}
        <div className="absolute top-1/3 left-1/4 animate-drift-1">
          <svg width="45" height="55" viewBox="0 0 45 55" fill="none">
            <ellipse cx="22" cy="27" rx="14" ry="22" fill="hsl(120 20% 60%)" opacity="0.6" transform="rotate(-18 22 27)"/>
          </svg>
        </div>

        <div className="absolute top-2/3 right-1/3 animate-drift-2">
          <svg width="38" height="48" viewBox="0 0 38 48" fill="none">
            <ellipse cx="19" cy="24" rx="12" ry="19" fill="hsl(270 30% 70%)" opacity="0.5" transform="rotate(22 19 24)"/>
          </svg>
        </div>

        <div className="absolute bottom-1/3 left-1/2 animate-drift-3">
          <svg width="42" height="52" viewBox="0 0 42 52" fill="none">
            <ellipse cx="21" cy="26" rx="13" ry="21" fill="hsl(15 90% 78%)" opacity="0.5" transform="rotate(-15 21 26)"/>
          </svg>
        </div>

        <div className="absolute top-1/2 right-20 animate-drift-4">
          <svg width="35" height="45" viewBox="0 0 35 45" fill="none">
            <ellipse cx="17" cy="22" rx="11" ry="18" fill="hsl(120 20% 60%)" opacity="0.6" transform="rotate(15 17 22)"/>
          </svg>
        </div>

        {/* Falling leaves */}
        <div className="absolute top-0 left-1/3 animate-fall-slow">
          <svg width="28" height="35" viewBox="0 0 28 35" fill="none">
            <ellipse cx="14" cy="17" rx="9" ry="14" fill="hsl(120 20% 60%)" opacity="0.5" transform="rotate(-12 14 17)"/>
          </svg>
        </div>

        <div className="absolute top-0 right-2/5 animate-fall-medium">
          <svg width="30" height="38" viewBox="0 0 30 38" fill="none">
            <ellipse cx="15" cy="19" rx="10" ry="15" fill="hsl(270 30% 70%)" opacity="0.5" transform="rotate(18 15 19)"/>
          </svg>
        </div>

        <div className="absolute top-0 left-2/5 animate-fall-slow">
          <svg width="25" height="32" viewBox="0 0 25 32" fill="none">
            <ellipse cx="12" cy="16" rx="8" ry="13" fill="hsl(15 90% 78%)" opacity="0.45" transform="rotate(-9 12 16)"/>
          </svg>
        </div>

        <div className="absolute top-0 right-1/5 animate-fall-medium">
          <svg width="27" height="34" viewBox="0 0 27 34" fill="none">
            <ellipse cx="13" cy="17" rx="9" ry="14" fill="hsl(120 20% 60%)" opacity="0.5" transform="rotate(11 13 17)"/>
          </svg>
        </div>

        <div className="absolute top-1/4 left-10 animate-drift-2">
          <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
            <ellipse cx="20" cy="25" rx="12" ry="20" fill="hsl(270 30% 70%)" opacity="0.5" transform="rotate(-14 20 25)"/>
          </svg>
        </div>

        <div className="absolute bottom-1/4 right-12 animate-drift-4">
          <svg width="36" height="46" viewBox="0 0 36 46" fill="none">
            <ellipse cx="18" cy="23" rx="11" ry="19" fill="hsl(15 90% 78%)" opacity="0.55" transform="rotate(16 18 23)"/>
          </svg>
        </div>

        <div className="absolute top-0 left-1/5 animate-fall-slow">
          <svg width="26" height="33" viewBox="0 0 26 33" fill="none">
            <ellipse cx="13" cy="16" rx="8" ry="13" fill="hsl(270 30% 70%)" opacity="0.48" transform="rotate(-13 13 16)"/>
          </svg>
        </div>

        <div className="absolute top-0 right-3/5 animate-fall-medium">
          <svg width="24" height="31" viewBox="0 0 24 31" fill="none">
            <ellipse cx="12" cy="15" rx="8" ry="13" fill="hsl(120 20% 60%)" opacity="0.52" transform="rotate(14 12 15)"/>
          </svg>
        </div>

        <div className="absolute top-1/6 left-1/6 animate-drift-1">
          <svg width="33" height="43" viewBox="0 0 33 43" fill="none">
            <ellipse cx="16" cy="21" rx="10" ry="17" fill="hsl(15 90% 78%)" opacity="0.54" transform="rotate(-17 16 21)"/>
          </svg>
        </div>

        <div className="absolute top-1/5 right-1/6 animate-drift-3">
          <svg width="37" height="47" viewBox="0 0 37 47" fill="none">
            <ellipse cx="18" cy="23" rx="11" ry="19" fill="hsl(270 30% 70%)" opacity="0.56" transform="rotate(20 18 23)"/>
          </svg>
        </div>

        <div className="absolute top-2/5 left-16 animate-drift-2">
          <svg width="34" height="44" viewBox="0 0 34 44" fill="none">
            <ellipse cx="17" cy="22" rx="11" ry="18" fill="hsl(120 20% 60%)" opacity="0.58" transform="rotate(-16 17 22)"/>
          </svg>
        </div>

        <div className="absolute top-3/5 right-16 animate-drift-4">
          <svg width="39" height="49" viewBox="0 0 39 49" fill="none">
            <ellipse cx="19" cy="24" rx="12" ry="20" fill="hsl(15 90% 78%)" opacity="0.53" transform="rotate(18 19 24)"/>
          </svg>
        </div>

        <div className="absolute bottom-1/5 left-1/5 animate-drift-1">
          <svg width="31" height="41" viewBox="0 0 31 41" fill="none">
            <ellipse cx="15" cy="20" rx="9" ry="16" fill="hsl(270 30% 70%)" opacity="0.55" transform="rotate(-20 15 20)"/>
          </svg>
        </div>

        <div className="absolute bottom-1/6 right-1/4 animate-drift-3">
          <svg width="35" height="45" viewBox="0 0 35 45" fill="none">
            <ellipse cx="17" cy="22" rx="10" ry="18" fill="hsl(120 20% 60%)" opacity="0.57" transform="rotate(16 17 22)"/>
          </svg>
        </div>

        <div className="absolute top-0 left-3/5 animate-fall-slow">
          <svg width="29" height="36" viewBox="0 0 29 36" fill="none">
            <ellipse cx="14" cy="18" rx="9" ry="14" fill="hsl(15 90% 78%)" opacity="0.5" transform="rotate(-10 14 18)"/>
          </svg>
        </div>

        <div className="absolute top-0 right-1/6 animate-fall-medium">
          <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
            <ellipse cx="11" cy="14" rx="7" ry="11" fill="hsl(270 30% 70%)" opacity="0.49" transform="rotate(12 11 14)"/>
          </svg>
        </div>

        <div className="absolute top-1/2 left-8 animate-drift-2">
          <svg width="32" height="42" viewBox="0 0 32 42" fill="none">
            <ellipse cx="16" cy="21" rx="10" ry="17" fill="hsl(120 20% 60%)" opacity="0.56" transform="rotate(-19 16 21)"/>
          </svg>
        </div>

        <div className="absolute top-1/2 right-8 animate-drift-4">
          <svg width="38" height="48" viewBox="0 0 38 48" fill="none">
            <ellipse cx="19" cy="24" rx="12" ry="19" fill="hsl(15 90% 78%)" opacity="0.54" transform="rotate(21 19 24)"/>
          </svg>
        </div>

        <div className="absolute bottom-2/5 left-1/3 animate-drift-1">
          <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
            <ellipse cx="15" cy="20" rx="9" ry="16" fill="hsl(270 30% 70%)" opacity="0.52" transform="rotate(-15 15 20)"/>
          </svg>
        </div>

        <div className="absolute bottom-2/5 right-1/3 animate-drift-3">
          <svg width="41" height="51" viewBox="0 0 41 51" fill="none">
            <ellipse cx="20" cy="25" rx="12" ry="20" fill="hsl(120 20% 60%)" opacity="0.58" transform="rotate(17 20 25)"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-tight">
              Cut Admin. Free Time.<br />
                Grow <span className="text-gradient">Profit</span>.
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Let’s have a conversation about where your HR team is now and where you would like them to be. No pressure, no headache — just an honest chat about working better, smarter, faster.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
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
                hello@bonsaihr.co.uk
              </a>
            </Button>
          </div>

          <div
            className="pt-12 border-t border-border animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-sm text-foreground/60 mb-4">Connect with us</p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Future Placeholder */}
          <div
            className="pt-12 opacity-50 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-sm text-foreground/50 italic">
              Testimonials and case studies coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
