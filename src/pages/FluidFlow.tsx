import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FluidHeroSection } from "@/components/fluidflow/FluidHeroSection";
import { FluidAboutSection } from "@/components/fluidflow/FluidAboutSection";
import { FluidServicesSection } from "@/components/fluidflow/FluidServicesSection";
import { FluidProcessSection } from "@/components/fluidflow/FluidProcessSection";
import { FluidWhyChooseSection } from "@/components/fluidflow/FluidWhyChooseSection";
import { FluidCTASection } from "@/components/fluidflow/FluidCTASection";

const FluidFlow = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FluidHeroSection />
        <FluidAboutSection />
        <FluidServicesSection />
        <FluidProcessSection />
        <FluidWhyChooseSection />
        <FluidCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FluidFlow;
