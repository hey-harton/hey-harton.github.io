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
    // PERBAIKAN: Mengubah <main> menjadi <div>, menghapus min-h-screen & overflow-x-hidden
    <div className="w-full flex flex-col relative pb-20 md:pb-32">
      
      {/* PERBAIKAN: Efek blur-[120px] diganti dengan radial-gradient yang jauh lebih ringan untuk GPU */}
      {/* Disembunyikan di HP (hidden md:block) agar fokus rendering sepenuhnya pada teks dan grid */}
      <div className="hidden md:block absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_60%)] rounded-full pointer-events-none z-0"></div>

      <HeroSection />
      <MissionSection />
      <StatsSection />
      <ValuesSection />
      
    </div>
  );
}