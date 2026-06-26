import { redirect } from "next/navigation";
import HeroSection from "@/components/sections/home-page/HeroSection";
import FeaturedProjects from "@/components/sections/home-page/FeaturedProjects";
import TechStack from "@/components/sections/home-page/TechStack";
import HomeCTA from "@/components/sections/home-page/HomeCTA";
import { getAllProjects } from "@/utils/mdx"; 

export default function Home() {
  // =================================================================
  // SAKLAR UTAMA (MASTER SWITCH)
  // Ubah ke 'false' jika website sudah siap dirilis ke publik
  // =================================================================
  const isUnderConstruction = true;

  // PERBAIKAN: Menambahkan pengecekan process.env.NODE_ENV
  // Jika saklar menyala DAN kita BUKAN berada di mode pengembangan lokal,
  // maka lempar pengunjung ke halaman coming-soon.
  if (isUnderConstruction && process.env.NODE_ENV !== "development") {
    redirect("/coming-soon");
  }

  // Pengeksekusian di bawah ini HANYA terjadi jika saklar bernilai 'false'
  // ATAU jika kamu sedang menjalankannya di lokal (npm run dev)
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