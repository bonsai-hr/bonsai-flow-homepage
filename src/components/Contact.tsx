import { ArrowRight, Calendar, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <div className="absolute bottom-20 right-10 w-32 h-32 animate-float">
          <svg viewBox="0 0 100 100" className="fill-primary">
            <path d="M50 10 Q65 35, 85 45 Q65 55, 50 80 Q35 55, 15 45 Q35 35, 50 10Z" />
          </svg>
        </div>
        <div className="absolute top-20 left-20 w-24 h-24 animate-float-delayed">
          <svg viewBox="0 0 100 100" className="fill-accent">
            <path d="M50 10 Q60 30, 80 40 Q60 50, 50 70 Q40 50, 20 40 Q40 30, 50 10Z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Ready to make your HR team the kind that{" "}
              <span className="text-gradient">makes money</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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
            <p className="text-sm text-muted-foreground mb-4">Connect with us</p>
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
            <p className="text-sm text-muted-foreground italic">
              Testimonials and case studies coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
