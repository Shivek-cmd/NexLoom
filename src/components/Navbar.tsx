import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { serviceCategories } from "@/data/services";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();
  const navigate = useNavigate();

  const openMega = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  useEffect(() => () => clearTimeout(megaTimeout.current), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-primary-foreground font-black text-lg">N</span>
            </div>
            <span className="font-display font-bold text-xl text-secondary-foreground">
              Nex<span className="gradient-text">loom</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services with Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
              ref={megaRef}
            >
              <button className="px-4 py-2 text-secondary-foreground/80 hover:text-accent font-medium transition-colors duration-200 flex items-center gap-1">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 text-secondary-foreground/80 hover:text-accent font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button asChild variant="hero" size="default">
              <Link to="/book-a-call">Book a Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary-foreground/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-secondary-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-secondary-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Dropdown */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block mega-dropdown"
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-4 gap-12">
                {serviceCategories.map((cat) => (
                  <div key={cat.slug}>
                    <h3 className="text-accent font-bold text-sm uppercase tracking-wider mb-5">
                      {cat.title}
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {cat.subservices.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            to={`/services/${cat.slug}#${sub.id}`}
                            onClick={() => setMegaOpen(false)}
                            className="text-secondary-foreground/60 hover:text-accent hover:bg-accent/10 text-sm transition-all duration-200 block py-1.5 px-3 rounded-lg hover:translate-x-1 transform"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/services/${cat.slug}`}
                      onClick={() => setMegaOpen(false)}
                      className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:gap-2 transition-all duration-200 px-3"
                    >
                      {cat.ctaLabel} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-secondary border-b border-border/30 max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {/* Mobile Services Accordion - Only parent categories */}
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-secondary-foreground hover:text-accent hover:bg-accent/10 rounded-lg font-medium transition-colors"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    {serviceCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/services/${cat.slug}`}
                        className="block px-4 py-3 text-secondary-foreground/70 hover:text-accent hover:bg-accent/10 rounded-lg text-sm font-medium transition-all"
                        onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block px-4 py-3 text-secondary-foreground hover:text-accent hover:bg-accent/10 rounded-lg font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button asChild variant="hero" className="w-full">
                  <Link to="/book-a-call" onClick={() => setMobileMenuOpen(false)}>
                    Book a Call
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
