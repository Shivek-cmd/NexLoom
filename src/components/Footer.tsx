import { Zap, Linkedin, Twitter, Github, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { label: "AI Development", href: "#services" },
    { label: "Full-Stack Development", href: "#services" },
    { label: "DevOps & Cloud", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@synaptiqcore.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-16 lg:py-20" style={{ background: "var(--gradient-dark)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                Synaptiq<span className="text-accent"> Core</span>
              </span>
            </a>
            <p className="text-primary-foreground/60 mb-6 max-w-sm">
              Empowering businesses with AI-driven solutions, custom software, 
              and expert consulting to accelerate growth and innovation.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary-foreground/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Synaptiq Core. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-primary-foreground/50 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
