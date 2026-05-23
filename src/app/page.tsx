import HeroSection from "@/components/sections/home-page/HeroSection";
import FeaturedProjects from "@/components/sections/home-page/FeaturedProjects";
import TechStack from "@/components/sections/home-page/TechStack";
import HomeCTA from "@/components/sections/home-page/HomeCTA";

export default function Home() {
  return (
    <main className="w-full flex-1 flex flex-col min-h-[calc(100vh-80px)] relative overflow-x-hidden">
      <HeroSection />
      <TechStack />
      <FeaturedProjects />
      <HomeCTA />
    </main>
  );
}