import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LabHeroSection } from "@/components/lab/LabHeroSection";
import { LabAboutSection } from "@/components/lab/LabAboutSection";
import { LabServicesSection } from "@/components/lab/LabServicesSection";
import { LabProcessSection } from "@/components/lab/LabProcessSection";
import { LabWhyChooseSection } from "@/components/lab/LabWhyChooseSection";
import { LabCTASection } from "@/components/lab/LabCTASection";

const LabInstruments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LabHeroSection />
        <LabAboutSection />
        <LabServicesSection />
        <LabProcessSection />
        <LabWhyChooseSection />
        <LabCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LabInstruments;
