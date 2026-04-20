import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MassHeroSection } from "@/components/mass/MassHeroSection";
import { MassAboutSection } from "@/components/mass/MassAboutSection";
import { MassServicesSection } from "@/components/mass/MassServicesSection";
import { MassProcessSection } from "@/components/mass/MassProcessSection";
import { MassWhyChooseSection } from "@/components/mass/MassWhyChooseSection";
import { MassCTASection } from "@/components/mass/MassCTASection";

const MassWeighing = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <MassHeroSection />
        <MassAboutSection />
        <MassServicesSection />
        <MassProcessSection />
        <MassWhyChooseSection />
        <MassCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default MassWeighing;
