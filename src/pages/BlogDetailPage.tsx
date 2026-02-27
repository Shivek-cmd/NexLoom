import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogs";

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((b) => b.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center"><h1 className="text-3xl font-bold">Post not found</h1></div>
        <Footer />
      </div>
    );
  }

  const paragraphs = post.content.split('\n\n').filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-12 lg:pt-40" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="block text-accent font-semibold text-sm uppercase tracking-wider mb-3">{post.category}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {post.title}
          </motion.h1>
          <div className="flex items-center gap-4 text-primary-foreground/60 text-sm">
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
            <span>{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((p, i) => {
              if (p.startsWith('## ')) {
                return <h2 key={i} className="font-display text-2xl font-bold text-foreground mt-10 mb-4">{p.replace('## ', '')}</h2>;
              }
              if (p.startsWith('**') && p.endsWith('**')) {
                return <h3 key={i} className="font-display text-xl font-bold text-foreground mt-8 mb-3">{p.replace(/\*\*/g, '')}</h3>;
              }
              if (p.startsWith('**')) {
                const parts = p.split('**: ');
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">{parts[0].replace('**', '')}:</strong> {parts[1]}
                  </p>
                );
              }
              return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>;
            })}
          </div>

          <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: "var(--gradient-dark)" }}>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">Need Expert Help?</h3>
            <p className="text-primary-foreground/70 mb-6">Nexloom can help implement these strategies for your business.</p>
            <Button asChild variant="hero" size="lg">
              <Link to="/book-a-call">Book a Call <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
