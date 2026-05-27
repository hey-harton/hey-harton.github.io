import HeroSection from "@/components/sections/home-page/HeroSection";
import FeaturedProjects from "@/components/sections/home-page/FeaturedProjects";
import TechStack from "@/components/sections/home-page/TechStack";
import HomeCTA from "@/components/sections/home-page/HomeCTA";
import { getAllProjects } from "@/utils/mdx";
export default function Home() {
  // Mengeksekusi pembacaan file Markdown dari server
  const allProjects = getAllProjects();

  return (
    <div className="w-full flex flex-col relative pb-16 md:pb-24">
      <HeroSection />
      <TechStack />
      
      {/* Mengirimkan payload data (array) proyek ke dalam komponen */}
      <FeaturedProjects projects={allProjects} />
      
      <HomeCTA />
    </div>
  );
}