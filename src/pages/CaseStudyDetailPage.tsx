import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/caseStudies";

const CaseStudyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((cs) => cs.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center"><h1 className="text-3xl font-bold">Not found</h1></div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-10 lg:pt-32" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="block text-accent font-semibold text-sm uppercase tracking-wider mb-3">{study.category}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-2xl lg:text-4xl font-bold text-primary-foreground max-w-4xl">
            {study.title}
          </motion.h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{study.problem}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{study.solution}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {study.results.map((r) => (
                  <div key={r} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border/50">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-sm">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: "var(--gradient-dark)" }}>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">Have a Similar Challenge?</h3>
            <p className="text-primary-foreground/70 mb-6">Let's discuss how Nexloom can deliver results for your business.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="hero" size="lg"><Link to="/book-a-call">Book a Call <ArrowRight className="w-5 h-5" /></Link></Button>
              <Button asChild variant="heroOutline" size="lg"><Link to={`/services/${study.categorySlug}`}>Explore {study.category} Services</Link></Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudyDetailPage;
