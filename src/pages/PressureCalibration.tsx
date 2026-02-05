import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PressureHeroSection } from "@/components/pressure/PressureHeroSection";
import { PressureAboutSection } from "@/components/pressure/PressureAboutSection";
import { PressureServicesSection } from "@/components/pressure/PressureServicesSection";
import { PressureWhyChooseSection } from "@/components/pressure/PressureWhyChooseSection";
import { PressureCTASection } from "@/components/pressure/PressureCTASection";

const PressureCalibration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PressureHeroSection />
        <PressureAboutSection />
        <PressureServicesSection />
        <PressureWhyChooseSection />
        <PressureCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PressureCalibration;
