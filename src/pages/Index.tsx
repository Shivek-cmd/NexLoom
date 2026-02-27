import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ValuesSection } from "@/components/ValuesSection";
import { StatsSection } from "@/components/StatsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ValuesSection />
        <StatsSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
