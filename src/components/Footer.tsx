import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient-primary mb-2">Sai Chandana</h3>
            <p className="text-muted-foreground">Backend Developer | Problem Solver | Innovation Enthusiast</p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/chandana23F5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-background border border-border rounded-full hover:border-primary hover:glow-primary transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sai-chandana-kommajosyula-507128240" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-background border border-border rounded-full hover:border-primary hover:glow-primary transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:kavchandru1998p@gmail.com"
              className="p-3 bg-background border border-border rounded-full hover:border-primary hover:glow-primary transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-secondary animate-pulse" /> by Sai Chandana © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
