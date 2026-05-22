import HeroSection from "@/components/sections/about-page/HeroSection";
import MissionSection from "@/components/sections/about-page/MissionSection";
import StatsSection from "@/components/sections/about-page/StatsSection";
import ValuesSection from "@/components/sections/about-page/ValuesSection";

export const metadata = {
  title: "About | Hartono Technolution",
  description: "Bridging the gap between network infrastructure and intelligent data analytics.",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen relative overflow-hidden pb-20">
      
      {/* Background Glow Ciena-Style */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-[40%] left-[-10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_70%)] rounded-full pointer-events-none -z-10"></div>

      <HeroSection />
      <MissionSection />
      <StatsSection />
      <ValuesSection />

    </main>
  );
}