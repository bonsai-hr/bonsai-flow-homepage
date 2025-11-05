import { ArrowRight, Calendar, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary/20 relative z-10 overflow-hidden">
      {/* Subtle organic divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-normal">
              Cut Admin. Free Time.<br />
                Grow <span className="text-gradient">Profit</span>.
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              What does your HR team look like right now and what would you like to see them accomplish? Let's have an honest conversation. No pressure, just a better understanding of how they're getting on.
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
              <a href="mailto:calendar.app.google/miQu1P6JmvSVB6p96">
                <Mail className="mr-2 h-5 w-5" />
                hello@bonsai-hr.co.uk
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
                  href="https://www.linkedin.com/company/bonsai-hr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* removed placeholder */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

