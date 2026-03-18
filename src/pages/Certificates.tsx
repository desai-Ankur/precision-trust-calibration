import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CertificatesHeroSection } from "@/components/certificates/CertificatesHeroSection";
import { CertificatesGridSection } from "@/components/certificates/CertificatesGridSection";
import { CertificatesTrustBadge } from "@/components/certificates/CertificatesTrustBadge";

const Certificates = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <CertificatesHeroSection />
      <CertificatesGridSection />
      <CertificatesTrustBadge />
      <Footer />
    </div>
  );
};

export default Certificates;
