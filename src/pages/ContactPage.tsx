import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-12 lg:pt-32 lg:pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with Nexloom.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { icon: MapPin, title: "Visit Us", lines: ["Nexloom Headquarters", "San Francisco, CA 94105"] },
              { icon: Mail, title: "Email Us", lines: ["hello@nexloom.com", "support@nexloom.com"] },
              { icon: Phone, title: "Call Us", lines: ["+1 (555) 123-4567", "Mon-Fri, 9am-6pm PST"] },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 rounded-2xl border border-border/50 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{item.title}</h3>
                {item.lines.map((l) => <p key={l} className="text-muted-foreground text-sm">{l}</p>)}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Prefer to Schedule a Call?</h2>
            <p className="text-muted-foreground mb-6">Book a time that works for you.</p>
            <Button asChild variant="hero" size="lg">
              <Link to="/book-a-call">Book a Call <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
