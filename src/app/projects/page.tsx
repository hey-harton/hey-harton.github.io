import ProjectsHeader from "@/components/sections/projects-page/ProjectsHeader";
import ProjectsGrid from "@/components/sections/projects-page/ProjectsGrid";
import { getAllProjects } from "@/utils/mdx"; // Gunakan path yang sesuai dengan lokasimu

export const metadata = {
  title: "Proyek | Hartono Adji Susanto",
  description: "Katalog portofolio proyek rekayasa jaringan, infrastruktur cloud, dan sains data.",
};

export default function ProjectsPage() {
  // Mesin otomatis mengambil semua data dari file Markdown (.md)
  const projects = getAllProjects();

  return (
    // PERBAIKAN: 
    // 1. Mengubah <main> menjadi <div> karena tag <main> sudah terpasang di layout.tsx.
    // 2. Menghapus overflow-x-hidden dan min-h-screen karena sudah ditangani layout global.
    <div className="w-full flex flex-col relative">
      
      {/* Background Glow Effect */}
      {/* PERBAIKAN: Dimatikan di HP (hidden md:block) karena filter blur-[120px] sangat menyiksa GPU HP */}
      <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Komponen Header */}
      <ProjectsHeader />
      
      {/* Komponen Grid dengan Data Markdown */}
      <ProjectsGrid projects={projects} />

    </div>
  );
}