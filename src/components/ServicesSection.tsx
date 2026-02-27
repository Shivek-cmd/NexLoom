import { motion } from "framer-motion";
import { ArrowRight, Code2, Cloud, Bot, Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceCategories } from "@/data/services";

const icons = [Code2, Cloud, Bot, Link2];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4"
          >
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            End-to-End Technology Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Four pillars of expertise to build, scale, and automate your technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {serviceCategories.map((cat, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/services/${cat.slug}`}>
                  <div className="glass-card rounded-2xl h-full border border-border/50 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 overflow-hidden">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 -mt-12 relative z-10">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">
                        {cat.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {cat.intro.slice(0, 150)}...
                      </p>
                      <ul className="space-y-1.5 mb-6">
                        {cat.subservices.slice(0, 4).map((sub) => (
                          <li key={sub.id} className="text-muted-foreground text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {sub.title}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                        {cat.ctaLabel} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
