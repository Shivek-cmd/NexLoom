import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Code2, Cloud, Smartphone } from "lucide-react";

const caseStudies = [
  {
    icon: Bot,
    title: "AI Development",
    description: "AI-powered automation helps businesses eliminate manual tasks, streamline workflows, and accelerate productivity. From lead scoring to content creation and automated reporting, intelligent systems free teams from repetitive work.",
    color: "from-primary to-accent",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building a scalable SaaS from scratch requires strong architecture and modern frameworks. Our end-to-end development approach delivers secure authentication, billing, dashboards, analytics, and more.",
    color: "from-accent to-primary",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Engineering",
    description: "Legacy systems hold businesses back. With modern cloud migration, containers, automated deployments, monitoring, and cost optimization, companies achieve faster releases and improved performance.",
    color: "from-primary to-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps enable businesses to reach more customers and deliver seamless experiences. With real-time tracking, secure payments, and push notifications, companies increase engagement and retention.",
    color: "from-accent to-primary",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-background">
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
            Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Proven Results Across Industries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Real companies are scaling faster, reducing costs, and boosting performance 
            with our AI-powered automation and development solutions.
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-card p-8 rounded-2xl h-full border border-border/50 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <study.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  {study.title}
                  <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Link */}
                <a 
                  href="https://cal.com/amit-happypeopleai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
