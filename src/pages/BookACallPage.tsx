import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BookACallPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-12 lg:pt-32 lg:pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Free Consultation</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Book a Discovery Call
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Schedule a free 30-minute call with our team. We'll discuss your challenges, goals, and how Nexloom can help.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Calendar Embed */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-card mb-12">
            <iframe
              src="https://cal.com/amit-happypeopleai"
              style={{ width: "100%", height: "700px", border: "none" }}
              title="Book a Call with Nexloom"
              loading="lazy"
            />
          </motion.div>

          {/* What to expect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "No Commitment", desc: "This is a free consultation. Ask questions, share your vision, explore possibilities." },
              { title: "Expert Guidance", desc: "Speak directly with our technical team. Get actionable insights for your project." },
              { title: "Clear Next Steps", desc: "Walk away with a clear understanding of timeline, scope, and investment." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 rounded-xl border border-border/50 text-center">
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookACallPage;
