import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ElectroHeroSection } from "@/components/electrotech/ElectroHeroSection";
import { ElectroAboutSection } from "@/components/electrotech/ElectroAboutSection";
import { ElectroServicesSection } from "@/components/electrotech/ElectroServicesSection";
import { ElectroWhyChooseSection } from "@/components/electrotech/ElectroWhyChooseSection";
import { ElectroCTASection } from "@/components/electrotech/ElectroCTASection";

const ElectroTech = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ElectroHeroSection />
        <ElectroAboutSection />
        <ElectroServicesSection />
        <ElectroWhyChooseSection />
        <ElectroCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ElectroTech;
