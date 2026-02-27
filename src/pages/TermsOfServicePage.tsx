import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner image="/images/hero-contact.jpg">
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
          Terms of Service
        </h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          The terms and conditions governing your use of our services.
        </p>
      </HeroBanner>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using the services provided by Nexloom ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">2. Services</h2>
              <p>Nexloom provides engineering, cloud, AI, and growth solutions for businesses. The specific scope, deliverables, and timeline for any engagement will be defined in a separate statement of work or service agreement between you and Nexloom.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">3. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and software, is the property of Nexloom and is protected by intellectual property laws. Unless otherwise agreed in a service agreement, deliverables created for clients become the client's property upon full payment.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">4. Payment Terms</h2>
              <p>Payment terms will be outlined in individual service agreements. Unless otherwise specified, invoices are due within 30 days of issuance. Late payments may incur additional fees as specified in the applicable agreement.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">5. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Nexloom shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">6. Confidentiality</h2>
              <p>Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of engagement. This obligation survives the termination of any service agreement.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">7. Termination</h2>
              <p>Either party may terminate a service engagement with 30 days' written notice, unless otherwise specified in the applicable agreement. Upon termination, all outstanding fees for work completed become immediately due.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">8. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through good-faith negotiation, and if necessary, binding arbitration.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">9. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Changes will be effective upon posting to this page. Your continued use of our services after changes are posted constitutes acceptance of the updated terms.</p>
            </div>

            <p className="text-foreground/50 text-sm pt-4 border-t border-border">Last updated: February 2026</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
