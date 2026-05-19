"use client";

import { useState } from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";
import Pagination from "@/components/ui/Pagination"; 

export default function ProjectsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const projects: ProjectData[] = [
    {
      id: 1,
      slug: "medical-dashboard", 
      title: "Medical Intelligence Dashboard",
      description: "A comprehensive clinical data dashboard focused on precision biometry analytics. Features real-time data visualization and standardized reporting.",
      image: "/projects/medical-dashboard.jpg", 
      techStack: ["Next.js 16", "Tailwind 4", "Data Analytics"],
      githubUrl: "#" 
    },
    {
      id: 2,
      slug: "datasea-portal", 
      title: "Datasea Archive Portal",
      description: "Centralized organizational file repository and portal for the Datasea academic community, featuring real-time monitoring and automated file synchronization.",
      image: "/projects/datasea-portal.jpg",
      techStack: ["Next.js", "Turso DB", "Google Drive API"],
      githubUrl: "#" 
    },
    {
      id: 3,
      slug: "truenews", 
      title: "TrueNews Fact-Checker",
      description: "An intelligent fact-checking application utilizing advanced machine learning models and Llama-3 AI integration for news interpretation.",
      image: "/projects/truenews.jpg",
      techStack: ["Flask", "XGBoost", "Azure App Service", "Llama-3"],
      githubUrl: "#" 
    },
    {
      id: 4,
      slug: "interactive-story", 
      title: "Interactive Story Web",
      description: "A digital storytelling web experience featuring custom JavaScript, CSS animations, and dynamic narrative progression.",
      image: "/projects/interactive-story.jpg",
      techStack: ["JavaScript", "CSS3", "Digital Storytelling"],
      githubUrl: "#" 
    },
    {
      id: 5,
      slug: "network-topology", 
      title: "Enterprise Network Topology",
      description: "Automated provisioning script for Cisco and MikroTik multi-router lab environments. Designed for scalability and strict firewall policies.",
      image: "/projects/medical-dashboard.jpg",
      techStack: ["Python", "Cisco IOS", "MikroTik"],
      githubUrl: "#" 
    }
  ];

  // Logika Pemotongan Data
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-8">
      
      {/* Grid List Proyek */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 relative z-10 min-h-[400px]">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Komponen Pagination Bersih & Modular */}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />

    </section>
  );
}