import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, ClipboardList, Code2, Rocket, Headphones } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HeroBanner } from "@/components/HeroBanner";

const steps = [
  { icon: MessageSquare, title: "Project Fit Call", desc: "We align on goals, constraints, timeline, and success metrics. You leave with a clear next step." },
  { icon: ClipboardList, title: "Scope & Plan", desc: "We produce a short delivery plan with milestones, risks, and a fixed set of deliverables for the first phase." },
  { icon: Code2, title: "Build & Prove", desc: "We ship in small increments with weekly demos. We track progress in working software, not slides." },
  { icon: Rocket, title: "Launch & Scale", desc: "We deploy your solution, ensure everything runs smoothly, and help you scale as your business grows." },
  { icon: Headphones, title: "Ongoing Support", desc: "Post-launch support, monitoring, and optimization. We're your long-term technology partner." },
];

const HowWeWorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner image="/images/hero-howwework.jpg">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
          How We Work
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Senior-led delivery with clear scope, weekly demos, and production-grade launches.
        </motion.p>
      </HeroBanner>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-6 mb-12 last:mb-0"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-bold text-sm">Step {i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--gradient-dark)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Ready to Start?</h2>
          <p className="text-primary-foreground/70 mb-8">Begin with a free project fit call.</p>
          <Button asChild variant="hero" size="lg"><a href="https://cal.com/stevefowler/30m" target="_blank" rel="noopener noreferrer">Book a Call <ArrowRight className="w-5 h-5" /></a></Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowWeWorkPage;
