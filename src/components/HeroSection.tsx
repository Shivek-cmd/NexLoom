import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
];

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background image carousel */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentImage}
          src={heroImages[currentImage]}
          alt=""
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </AnimatePresence>
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-secondary/80 via-secondary/75 to-secondary/85" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gradient-border-pill inline-flex items-center gap-2 px-4 py-2 rounded-full text-primary mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Engineering · Cloud · AI · Growth</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            We Build the Software <span className="gradient-text">That Scales</span> Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10"
          >
            From full-stack engineering and cloud infrastructure to AI agents and growth systems—Nexloom delivers
            end-to-end technology solutions for ambitious companies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild variant="hero" size="lg">
              <Link to="/book-a-call" className="group">
                Book a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/case-studies">
                <Play className="w-5 h-5" />
                View Case Studies
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-primary-foreground/10"
          >
            <p className="text-primary-foreground/50 text-sm mb-6">Trusted by forward-thinking companies worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["TechCorp", "InnovateLab", "DataFlow", "CloudScale", "NextGen"].map((company) => (
                <span key={company} className="text-primary-foreground/70 font-semibold text-lg">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentImage ? "bg-primary w-6" : "bg-primary-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
