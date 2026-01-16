import { motion } from "framer-motion";
import { Lightbulb, Users, Target } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead with cutting-edge automation, AI-driven workflows, and next-generation CRM systems that keep your business competitive.",
  },
  {
    icon: Users,
    title: "Client Success",
    description: "Your wins are our wins. We partner closely to build systems that improve revenue, efficiency, and customer experience—backed by real data.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Every workflow, funnel, and automation is engineered with precision, tested thoroughly, and optimized for performance and scalability.",
  },
];

export const ValuesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            What Drives Our Success
          </motion.h2>
        </div>

        {/* Values Cards */}
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
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
