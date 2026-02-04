import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MechHeroSection } from "@/components/mechanical/MechHeroSection";
import { MechAboutSection } from "@/components/mechanical/MechAboutSection";
import { MechCapabilitiesSection } from "@/components/mechanical/MechCapabilitiesSection";
import { MechInstrumentsSection } from "@/components/mechanical/MechInstrumentsSection";
import { MechOnSiteSection } from "@/components/mechanical/MechOnSiteSection";
import { MechWhyChooseSection } from "@/components/mechanical/MechWhyChooseSection";
import { MechCTASection } from "@/components/mechanical/MechCTASection";

const MechanicalCalibration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <MechHeroSection />
        <MechAboutSection />
        <MechCapabilitiesSection />
        <MechInstrumentsSection />
        <MechOnSiteSection />
        <MechWhyChooseSection />
        <MechCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default MechanicalCalibration;
