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

        {/* Additional drifting leaves */}
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

        {/* Slow falling leaves */}
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
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight">
              Ready to make your HR team the kind that{" "}
              <span className="text-gradient">makes money</span>?
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Let's have a conversation about where your HR team is now and where it could be.
              No pressure, no jargon — just an honest chat about making work better.
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
