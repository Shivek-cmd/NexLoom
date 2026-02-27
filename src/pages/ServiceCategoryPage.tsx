import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { serviceCategories } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blogs";

const ServiceCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const category = serviceCategories.find((c) => c.slug === slug);

  // Handle scroll-to and highlight on hash change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          setHighlightedId(id);
          setTimeout(() => setHighlightedId(null), 3000);
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-3xl font-bold text-foreground">Service not found</h1>
          <Link to="/" className="text-primary mt-4 inline-block">Go Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedCaseStudies = caseStudies.filter((cs) => cs.categorySlug === slug);
  const relatedBlogs = blogPosts.filter((b) =>
    b.relatedServices.some((rs) => category.subservices.some((s) => s.id === rs))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 hero-glow animate-pulse-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4"
          >
            Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto"
          >
            {category.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 text-lg max-w-3xl mx-auto mb-8"
          >
            {category.intro}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Button asChild variant="hero" size="lg">
              <Link to="/book-a-call" className="group">
                <Calendar className="w-5 h-5" />
                Book a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Subservices - Alternating Layout */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {category.subservices.map((sub, index) => (
            <motion.div
              key={sub.id}
              id={sub.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 mb-20 lg:mb-28 last:mb-0 p-8 rounded-2xl transition-all duration-500 ${
                highlightedId === sub.id ? 'service-highlight border-2 border-primary/50' : 'border-2 border-transparent'
              }`}
            >
              {/* Visual placeholder */}
              <div className="w-full lg:w-5/12 flex-shrink-0">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 flex items-center justify-center overflow-hidden group">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <span className="text-primary-foreground font-black text-3xl">{index + 1}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-7/12">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {sub.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {sub.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="hero" size="default">
                    <Link to="/book-a-call">Book a Call</Link>
                  </Button>
                  {relatedCaseStudies.length > 0 && (
                    <Button asChild variant="outline" size="default">
                      <Link to={`/case-studies/${relatedCaseStudies[0].slug}`}>View Case Study</Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Related Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedCaseStudies.map((cs) => (
                <Link key={cs.slug} to={`/case-studies/${cs.slug}`} className="glass-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-display font-bold text-foreground mb-2">{cs.title}</h3>
                  <p className="text-muted-foreground text-sm">{cs.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedBlogs.slice(0, 3).map((blog) => (
                <Link key={blog.slug} to={`/blog/${blog.slug}`} className="glass-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <span className="text-xs text-primary font-semibold uppercase">{blog.category}</span>
                  <h3 className="font-display font-bold text-foreground mt-1 mb-2">{blog.title}</h3>
                  <p className="text-muted-foreground text-sm">{blog.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20" style={{ background: "var(--gradient-dark)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Let's discuss how Nexloom can help with your {category.title.toLowerCase()} needs.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/book-a-call" className="group">
              Book a Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceCategoryPage;
