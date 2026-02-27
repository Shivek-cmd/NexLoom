import { motion } from "framer-motion";
import { Lightbulb, Users, Target } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Technical Excellence",
    description: "We build with modern architecture, best practices, and a relentless focus on code quality, performance, and scalability.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "We integrate with your team, understand your business goals, and deliver solutions that create measurable impact.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every project is measured by business outcomes—faster delivery, lower costs, better performance, and sustainable growth.",
  },
];

export const ValuesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4"
          >
            Our Values
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
          >
            What Drives Nexloom
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card p-8 rounded-2xl h-full transition-all duration-300 hover:-translate-y-2 border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
