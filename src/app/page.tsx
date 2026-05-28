import { redirect } from "next/navigation";
import HeroSection from "@/components/sections/home-page/HeroSection";
import FeaturedProjects from "@/components/sections/home-page/FeaturedProjects";
import TechStack from "@/components/sections/home-page/TechStack";
import HomeCTA from "@/components/sections/home-page/HomeCTA";
import { getAllProjects } from "@/utils/mdx"; // Pastikan path utils atau lib sesuai dengan folder milikmu

export default function Home() {
  // =================================================================
  // SAKLAR UTAMA (MASTER SWITCH)
  // Ubah ke 'false' jika website sudah siap dirilis ke publik
  // =================================================================
  const isUnderConstruction = true;

  if (isUnderConstruction) {
    // Alihkan paksa ke rute /coming-soon
    // Metode ini sangat aman untuk GitHub Pages (Static Export)
    // dan akan memicu Navbar/Footer untuk otomatis menghilang.
    redirect("/coming-soon");
  }

  // Pengeksekusian di bawah ini HANYA terjadi jika saklar bernilai 'false'
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