import HeroSection from "@/components/sections/home-page/HeroSection";
import FeaturedProjects from "@/components/sections/home-page/FeaturedProjects";
import TechStack from "@/components/sections/home-page/TechStack";
import HomeCTA from "@/components/sections/home-page/HomeCTA";

export default function Home() {
  return (
    <div className="w-full flex flex-col relative">
      <HeroSection />
      <TechStack />
      <FeaturedProjects />
      <HomeCTA />
    </div>
  );
}