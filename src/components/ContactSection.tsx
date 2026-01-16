import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, ArrowRight, Calendar } from "lucide-react";

const contactMethods = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Synaptiq Core Headquarters", "San Francisco, CA 94105", "United States"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@synaptiqcore.com", "support@synaptiqcore.com"],
    action: {
      label: "Send Email",
      href: "mailto:hello@synaptiqcore.com",
    },
  },
  {
    icon: Phone,
    title: "Chat or Call",
    details: ["+1 (555) 123-4567", "Mon-Fri, 9am-6pm PST"],
    action: {
      label: "Call Now",
      href: "tel:+15551234567",
    },
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: "var(--gradient-glow)" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Let's Build the Systems That{" "}
            <span className="gradient-text">Grow Your Business</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
          >
            Choose the way that works best for you
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild variant="hero" size="xl">
              <a 
                href="https://cal.com/amit-happypeopleai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="glass-card p-8 rounded-2xl border border-border/50 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <method.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {method.title}
                </h3>

                {/* Details */}
                <div className="space-y-1 mb-5">
                  {method.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>

                {/* Action */}
                {method.action && (
                  <Button asChild variant="outline" size="sm">
                    <a href={method.action.href}>
                      {method.action.label}
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
