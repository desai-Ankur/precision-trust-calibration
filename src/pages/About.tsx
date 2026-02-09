import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutOverviewSection } from "@/components/about/AboutOverviewSection";
import { VisionMissionSection } from "@/components/about/VisionMissionSection";
import { JourneyTimelineSection } from "@/components/about/JourneyTimelineSection";
import { ExpertiseSection } from "@/components/about/ExpertiseSection";
import { AboutIndustriesSection } from "@/components/about/AboutIndustriesSection";
import { WhyChooseIQCLSection } from "@/components/about/WhyChooseIQCLSection";
import { TeamSection } from "@/components/about/TeamSection";
import { CertificationsSection } from "@/components/about/CertificationsSection";
import { AboutCTASection } from "@/components/about/AboutCTASection";

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <AboutHeroSection />
      <AboutOverviewSection />
      <VisionMissionSection />
      <JourneyTimelineSection />
      <ExpertiseSection />
      <AboutIndustriesSection />
      <WhyChooseIQCLSection />
      <TeamSection />
      <CertificationsSection />
      <AboutCTASection />
    </main>
    <Footer />
  </div>
);

export default About;
