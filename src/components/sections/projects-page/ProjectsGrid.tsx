"use client";

import { useState } from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";
import Pagination from "@/components/ui/Pagination"; 

// 1. Definisikan bentuk data mentah yang kita terima dari Markdown (via page.tsx)
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

  // 2. Pemetaan Data (Data Mapping):
  // Mengubah data Markdown agar bentuknya cocok 100% dengan kebutuhan <ProjectCard />
  const formattedProjects: ProjectData[] = rawProjects.map((proj, index) => ({
    id: index + 1, 
    slug: proj.slug,
    title: proj.title,
    description: proj.description,
    image: proj.thumbnail, // Mengarahkan thumbnail ke image
    techStack: proj.tags || [], // Mengarahkan tags ke techStack
    githubUrl: proj.frontmatter?.githubUrl || "#" // Mengambil GitHub URL jika ada di file .md
  }));

  // 3. Logika Pemotongan Data untuk Pagination
  const totalPages = Math.ceil(formattedProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = formattedProjects.slice(startIndex, endIndex);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-8 transform-gpu">
      
      {/* Grid List Proyek */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 relative z-10 min-h-[400px]">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Jika Belum Ada Proyek (Empty State) */}
      {formattedProjects.length === 0 && (
        <div className="text-center py-24 border border-white/10 border-dashed mt-8">
          <p className="text-gray-500 font-mono">Belum ada dokumen proyek yang dipublikasikan.</p>
        </div>
      )}

      {/* Komponen Pagination (Hanya dirender jika halaman lebih dari 1) */}
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      )}

    </section>
  );
}