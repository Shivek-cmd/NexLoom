import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Target, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HeroBanner } from "@/components/HeroBanner";

const values = [
  { icon: Zap, title: "Technical Excellence", desc: "We build with modern architecture, best practices, and a relentless focus on quality, performance, and scalability." },
  { icon: Users, title: "Partnership Mindset", desc: "We integrate with your team, understand your business goals, and deliver solutions that create measurable impact." },
  { icon: Target, title: "Results-Driven", desc: "Every project is measured by business outcomes—faster delivery, lower costs, better performance." },
  { icon: Award, title: "Continuous Innovation", desc: "We invest in R&D and stay ahead of technology trends to bring you the most effective solutions." },
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

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nexloom exists to bridge the gap between business ambition and technical execution. We believe every company deserves access to world-class engineering talent and modern technology solutions—regardless of their size or stage.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We partner with startups, scale-ups, and enterprises across four core domains: Engineering & Product Development, Cloud & DevOps, AI & Automation, and Integrations & Growth Infrastructure. Our teams don't just write code—they solve business problems with technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
          <Button asChild variant="hero" size="lg"><Link to="/book-a-call">Book a Call <ArrowRight className="w-5 h-5" /></Link></Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
