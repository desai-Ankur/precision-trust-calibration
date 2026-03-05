import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThermalHeroSection } from "@/components/thermal/ThermalHeroSection";
import { ThermalAboutSection } from "@/components/thermal/ThermalAboutSection";
import { ThermalServicesSection } from "@/components/thermal/ThermalServicesSection";
import { ThermalProcessSection } from "@/components/thermal/ThermalProcessSection";
import { ThermalWhyChooseSection } from "@/components/thermal/ThermalWhyChooseSection";
import { ThermalCTASection } from "@/components/thermal/ThermalCTASection";

const ThermalCalibration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ThermalHeroSection />
        <ThermalAboutSection />
        <ThermalServicesSection />
        <ThermalProcessSection />
        <ThermalWhyChooseSection />
        <ThermalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ThermalCalibration;
