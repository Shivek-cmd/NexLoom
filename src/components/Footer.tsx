import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { label: "Engineering & Product", href: "/services/engineering-product" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops" },
    { label: "AI & Automation", href: "/services/ai-automation" },
    { label: "Integrations & Growth", href: "/services/integrations-growth" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Book a Call", href: "/book-a-call" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@nexloom.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-16 lg:py-20" style={{ background: "var(--gradient-dark)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-black text-lg">N</span>
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                Nex<span className="text-accent">loom</span>
              </span>
            </Link>
            <p className="text-primary-foreground/60 mb-6 max-w-sm">
              Engineering, Cloud, AI, and Growth solutions for ambitious companies ready to scale.
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

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Nexloom. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">Terms</a>
              <a href="#" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">Privacy</a>
              <a href="#" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
