import logoCharcoal from "@/assets/logo-charcoal.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logoCharcoal} alt="Bonsai HR" className="h-10 w-auto" />
            <span className="text-lg font-semibold text-foreground">Bonsai HR</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Bonsai HR Ltd. All rights reserved.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            The Kind of HR That Makes You Money.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
