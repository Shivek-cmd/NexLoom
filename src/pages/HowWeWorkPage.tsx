import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Search, Code2, Rocket, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: MessageSquare, title: "Discovery Call", desc: "We start with a free consultation to understand your business, challenges, and goals. No commitment required." },
  { icon: Search, title: "Assessment & Proposal", desc: "Our team evaluates your needs, defines scope, and delivers a clear proposal with timeline, deliverables, and pricing." },
  { icon: Code2, title: "Build & Iterate", desc: "We execute in agile sprints with regular demos and feedback loops. You stay involved and in control throughout." },
  { icon: Rocket, title: "Launch & Scale", desc: "We deploy your solution, ensure everything runs smoothly, and help you scale as your business grows." },
  { icon: Headphones, title: "Ongoing Support", desc: "Post-launch support, monitoring, and optimization. We're your long-term technology partner." },
];

const HowWeWorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl lg:text-6xl font-bold text-primary-foreground mb-4">
            How We Work
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            A proven process designed for clarity, speed, and results.
          </motion.p>
        </div>
      </section>

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
          <p className="text-primary-foreground/70 mb-8">Begin with a free discovery call. No commitment required.</p>
          <Button asChild variant="hero" size="lg"><Link to="/book-a-call">Book a Call <ArrowRight className="w-5 h-5" /></Link></Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowWeWorkPage;
