import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border/50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Bonsai" className="h-7 w-7 rounded-full" />
          <span className="font-heading text-base text-foreground">Bonsai</span>
        </div>
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} Bonsai. All rights reserved.
        </p>
        <a
          href="https://www.linkedin.com/company/bonsai-hr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors font-body"
        >
          Connect with us on LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
