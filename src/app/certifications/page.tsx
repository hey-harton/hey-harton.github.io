import { certifications } from "@/data/certifications";
import HeroSection from "@/components/sections/certifications-page/HeroSection";
import FeaturedCertSection from "@/components/sections/certifications-page/FeaturedCertSection";
import CertGridSection from "@/components/sections/certifications-page/CertGridSection";

export const metadata = {
  title: "Sertifikasi | Hartono Adji Susanto",
  description: "Industry-recognized certifications in Networking, Cloud, and Data Science.",
};

export default function CertificationsPage() {
  // Pisahkan sertifikasi yang 'featured' dengan yang biasa
  const featuredCert = certifications.find(cert => cert.featured);
  const otherCerts = certifications.filter(cert => !cert.featured);

  return (
    <main className="w-full min-h-screen relative overflow-x-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_60%)] rounded-full pointer-events-none -z-10 will-change-transform"></div>

      <HeroSection />
      
      {/* Section khusus ala Ciena */}
      {featuredCert && <FeaturedCertSection cert={featuredCert} />}
      
      {/* Sisa sertifikasi */}
      <CertGridSection certs={otherCerts} />

    </main>
  );
}