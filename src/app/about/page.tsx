import HeroSection from "@/components/sections/about-page/HeroSection";
import MissionSection from "@/components/sections/about-page/MissionSection";
import StatsSection from "@/components/sections/about-page/StatsSection";
import ValuesSection from "@/components/sections/about-page/ValuesSection";

export const metadata = {
  title: "Tentang | Hartono Adji Susanto",
  description: "Profil profesional resmi dari Hartono Adji Susanto — Network Engineer, Cloud Architect, dan Tech Founder.",
};

export default function AboutPage() {
  return (
    // Menambahkan pb-32 agar memberikan ruang napas antara komponen terakhir dan Footer
    <main className="w-full flex flex-col min-h-screen relative overflow-x-hidden pb-32">
      
      {/* Latar Belakang Cahaya (Glow Effect) warna biru khas halaman About */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <HeroSection />
      <MissionSection />
      <StatsSection />
      <ValuesSection />
      
    </main>
  );
}