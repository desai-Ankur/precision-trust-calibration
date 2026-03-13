import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactInfoSection } from "@/components/contact/ContactInfoSection";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { ContactMapSection } from "@/components/contact/ContactMapSection";
import { ContactCTASection } from "@/components/contact/ContactCTASection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <ContactHeroSection />
        <ContactInfoSection />
        <ContactFormSection />
        <ContactMapSection />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
