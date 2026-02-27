import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogs";

const BlogListPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Nexloom Blog
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Insights on engineering, cloud, AI, and growth infrastructure from the Nexloom team.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={`/blog/${post.slug}`} className="block group h-full">
                  <div className="glass-card p-6 rounded-2xl border border-border/50 h-full transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 flex flex-col">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                    <h2 className="font-display text-lg font-bold text-foreground mt-2 mb-2">{post.title}</h2>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight className="w-4 h-4" /></span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--gradient-dark)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Want to Work With Us?</h2>
          <p className="text-primary-foreground/70 mb-8">Let's build something exceptional together.</p>
          <Button asChild variant="hero" size="lg"><Link to="/book-a-call">Book a Call</Link></Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogListPage;
