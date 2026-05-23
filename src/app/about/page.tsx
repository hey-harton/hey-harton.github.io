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
    // bg-[#050505] dihapus agar mengikuti background bawaan
    <main className="w-full min-h-screen relative overflow-x-hidden">
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <ValuesSection />
    </main>
  );
}