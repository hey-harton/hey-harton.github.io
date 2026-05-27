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
    // PERBAIKAN UTAMA: 
    // 1. Hapus "transform-gpu" dari <main> agar browser me-render scroll secara normal (tidak membebani VRAM GPU).
    // 2. Ubah "overflow-hidden" menjadi "overflow-x-hidden" agar tidak mengunci perhitungan tinggi halaman saat di-scroll.
    <main className="w-full flex flex-col min-h-screen relative overflow-x-hidden pb-0">
      
      {/* Background Glow Effect */}
      {/* transform-gpu hanya kita pertahankan pada elemen cahaya ini saja agar rendering blurnya yang diproses GPU, bukan seluruh halaman */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none -z-10 transform-gpu"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none -z-10 transform-gpu"></div>

      {/* Kontainer batasan dipindah ke dalam komponen header & grid */}
      <ProjectsHeader />
      
      {/* Mengirim data Markdown ke dalam komponen Grid */}
      <ProjectsGrid projects={projects} />

    </main>
  );
}