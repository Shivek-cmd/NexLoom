import { motion } from "framer-motion";
import { 
  Bot, Code2, Cloud, Smartphone, Globe, 
  Palette, TestTube, Lightbulb, Users 
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Development",
    description: "End-to-end AI engineers for model building, automation, and analytics on demand.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Skilled frontend + backend teams to build, scale, and maintain robust applications.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Embedded DevOps support for CI/CD, infra-automation, cloud migration, and monitoring.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Expert iOS, Android, and cross-platform developers to accelerate mobile delivery.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance web engineers for responsive, SEO-friendly, and scalable builds.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "On-demand designers for wireframes, user flows, design systems, and product revamps.",
  },
  {
    icon: TestTube,
    title: "QA & Testing",
    description: "Manual + automated testing teams to ensure reliability, performance, and bug-free releases.",
  },
  {
    icon: Lightbulb,
    title: "Tech Consulting",
    description: "Remote architecture, strategy, and system review specialists guiding critical decisions.",
  },
  {
    icon: Users,
    title: "Dedicated Offshore",
    description: "Tailored, scalable engineering squads aligned to your tech stack, timezone, and KPIs.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
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
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Our Specialized Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Specialized teams. Faster delivery. Lower cost. Higher efficiency.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-card p-6 rounded-xl border border-border/50 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
