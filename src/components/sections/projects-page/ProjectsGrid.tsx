"use client";

import { useState } from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";
import Pagination from "@/components/ui/Pagination"; 

interface MdxProject {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  thumbnail: string;
  tags: string[];
  frontmatter?: Record<string, any>;
}

export default function ProjectsGrid({ projects: rawProjects }: { projects: MdxProject[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const formattedProjects: ProjectData[] = rawProjects.map((proj, index) => ({
    id: index + 1, 
    slug: proj.slug,
    title: proj.title,
    description: proj.description,
    image: proj.thumbnail, 
    techStack: proj.tags || [], 
    githubUrl: proj.frontmatter?.githubUrl || "#" 
  }));

  const totalPages = Math.ceil(formattedProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = formattedProjects.slice(startIndex, endIndex);

  return (
    // PERBAIKAN: Menghapus "transform-gpu" agar rendering scroll dikelola secara efisien oleh CPU/Browser biasa
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-32">
      
      {/* Grid List Proyek dengan gap tebal */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 relative z-10 min-h-[400px]">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* State Kosong ala Terminal */}
      {formattedProjects.length === 0 && (
        <div className="text-center py-24 border border-white/10 border-dashed mt-8 bg-[#050505]">
          <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">SYS_LOG: NO_DEPLOYED_PROJECTS_FOUND</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16">
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
          />
        </div>
      )}

    </section>
  );
}