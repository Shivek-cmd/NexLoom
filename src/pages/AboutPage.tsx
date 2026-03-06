import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Users, Target, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HeroBanner } from "@/components/HeroBanner";

const values = [
  { icon: Zap, title: "Technical Excellence", desc: "We build with clean architecture, strong testing, and pragmatic standards so your team ships faster with fewer regressions." },
  { icon: Users, title: "Partnership Mindset", desc: "We work as part of your team, stay transparent on tradeoffs, and take ownership through delivery, so you get fewer surprises." },
  { icon: Target, title: "Results-Driven", desc: "We define success up front and track delivery, reliability, and cost, so progress stays visible and measurable." },
  { icon: RefreshCw, title: "Continuous Improvement", desc: "We run retros, refine delivery systems, and automate repeat work, so each release gets easier, not harder." },
];

const howWeWork = [
  "Senior ownership from discovery through production.",
  "Small teams, clear milestones, weekly demos.",
  "Security, reliability, and cost built in from day one.",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner image="/images/hero-about.jpg">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
          About <span className="gradient-text">Nexloom</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 text-lg max-w-3xl mx-auto">
          We are a technology company that helps ambitious businesses build, scale, and automate through expert engineering, cloud infrastructure, AI solutions, and growth systems.
        </motion.p>
      </HeroBanner>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nexloom exists to bridge the gap between business ambition and technical execution. We believe every company deserves access to world-class engineering talent and modern technology solutions—regardless of their size or stage.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We partner with startups, scale-ups, and enterprises across four core domains: Engineering & Product, Cloud & DevOps, AI & Automation, and Integrations & Data. Our teams don't just write code—they solve business problems with technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">How We Work</h2>
            <ul className="space-y-5 mb-10">
              {howWeWork.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg"
            >
              Trusted by teams shipping customer-facing platforms.{" "}
              <a
                href="https://cal.com/stevefowler/30m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Ask for relevant examples
              </a>
              .
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 rounded-2xl border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--gradient-dark)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Ready to Work Together?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Let's discuss how Nexloom can become your technology partner.</p>
          <Button asChild variant="hero" size="lg"><a href="https://cal.com/stevefowler/30m" target="_blank" rel="noopener noreferrer">Book a Call <ArrowRight className="w-5 h-5" /></a></Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
