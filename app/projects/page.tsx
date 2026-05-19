import ProjectsHeader from "@/components/sections/projects-page/ProjectsHeader";
import ProjectsGrid from "@/components/sections/projects-page/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <main className="w-full flex flex-col min-h-screen relative overflow-hidden pt-20 pb-0">
      
      {/* Background Glow Effect */}
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Kontainer batasan dipindah ke dalam komponen header & grid */}
      <ProjectsHeader />
      <ProjectsGrid />

    </main>
  );
}