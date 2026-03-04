import { ArrowRight, Calendar, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 overflow-hidden bg-primary/20 py-24 md:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12 text-center">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-center text-4xl font-extrabold leading-normal md:text-5xl">
              AI Is Already Active in Your Organisation.
              <br />
              The Question Is Whether It Has a <span className="text-gradient">Plan</span>.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70 md:text-xl">
              Most scaling businesses aren’t short on AI usage. They’re short on direction, visibility, and measurable outcomes. Before investing
              more time, tools or budget, know exactly where you stand and what comes next.
            </p>
          </div>

          <div className="animate-fade-in-up flex w-full flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" variant="outline" className="w-full px-8 py-6 text-base sm:w-auto">
              <a href="https://calendar.app.google/miQu1P6JmvSVB6p96" target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2 h-5 w-5" />
                Speak to Us
              </a>
            </Button>

            <Button asChild size="lg" className="group w-full px-8 py-6 text-base sm:w-auto">
              <a href="https://calendar.app.google/fZs7mYXt5qjbQy7f8" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="animate-fade-in-up border-t border-border pt-12" style={{ animationDelay: "0.3s" }}>
            <p className="mb-4 text-sm text-foreground/60">Connect with us</p>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
