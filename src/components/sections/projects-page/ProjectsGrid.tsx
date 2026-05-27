"use client";

import { useState } from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";
import Pagination from "@/components/ui/Pagination"; 
import { Terminal } from "lucide-react"; // Tambahkan icon Terminal

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

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
    // PERBAIKAN: Padding responsif untuk HP (pt-8 md:pt-16 pb-24 md:pb-32)
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-16 pb-24 md:pb-32">
      
      {/* State Kosong ala Terminal (Di-upgrade dengan desain arsitektur) */}
      {formattedProjects.length === 0 ? (
        
        <div className="w-full border border-white/10 bg-[#050505] p-10 md:p-16 flex flex-col items-center justify-center text-center relative group mt-8">
          <Crosshair className="absolute -top-[7px] -left-[7px] text-gray-600 z-20" />
          <Crosshair className="absolute -top-[7px] -right-[7px] text-gray-600 z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7px] text-gray-600 z-20" />
          <Crosshair className="absolute -bottom-[7px] -right-[7px] text-gray-600 z-20" />
          
          <Terminal size={48} className="text-gray-600 mb-6 group-hover:text-brand-green transition-colors" />
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-widest uppercase">
            // REPOSITORY_EMPTY
          </h3>
          <p className="text-gray-400 font-mono text-xs md:text-sm max-w-md">
            Sistem tidak mendeteksi adanya data proyek yang di-deploy. Silakan periksa kembali direktori repositori Anda.
          </p>
          <div className="mt-8 flex gap-2 items-center">
             <span className="w-2 h-2 bg-yellow-500 animate-pulse"></span>
             <span className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest">SYS_STATUS: AWAITING_DATA...</span>
          </div>
        </div>

      ) : (
        
        /* Grid List Proyek */
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 relative z-10 min-h-[400px]">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 md:mt-16">
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