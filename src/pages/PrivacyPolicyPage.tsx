import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner image="/images/hero-contact.jpg">
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Your privacy matters to us. Here's how we handle your data.
        </p>
      </HeroBanner>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly, such as your name, email address, and any other details you share when contacting us, booking a call, or using our services. We also automatically collect certain technical data including IP addresses, browser type, and usage patterns through cookies and analytics tools.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Analyze usage trends to enhance user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">3. Data Sharing</h2>
              <p>We do not sell your personal information. We may share data with trusted third-party service providers who assist us in operating our business, such as hosting providers, analytics services, and communication tools. All third parties are contractually obligated to protect your data.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, please contact us at <a href="mailto:hello@nexloom.com" className="text-accent hover:underline">hello@nexloom.com</a>.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">6. Cookies</h2>
              <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can manage cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised effective date.</p>
            </div>

            <p className="text-foreground/50 text-sm pt-4 border-t border-border">Last updated: February 2026</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
