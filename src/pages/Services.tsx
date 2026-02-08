import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { WhyIQCLSection } from "@/components/services/WhyIQCLSection";
import { DepartmentsSection } from "@/components/services/DepartmentsSection";
import { ServicesCTASection } from "@/components/services/ServicesCTASection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServicesHeroSection />
        <WhyIQCLSection />
        <DepartmentsSection />
        <ServicesCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
