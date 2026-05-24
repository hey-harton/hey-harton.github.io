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
    <main className="w-full flex flex-col min-h-screen relative overflow-hidden pt-20 pb-0 transform-gpu">
      
      {/* Background Glow Effect (Dioptimalkan dengan transform-gpu agar anti-lag) */}
      <div className="absolute top-40 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none -z-10 transform-gpu translate-z-0"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none -z-10 transform-gpu translate-z-0"></div>

      {/* Kontainer batasan dipindah ke dalam komponen header & grid */}
      <ProjectsHeader />
      
      {/* Mengirim data Markdown ke dalam komponen Grid */}
      <ProjectsGrid projects={projects} />

    </main>
  );
}