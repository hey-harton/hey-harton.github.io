import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// --- Komponen Ikon Brand SVG ---
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

export interface ProjectData {
  id: number;
  slug: string; 
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
}

export default function ProjectCard({ project }: { project: ProjectData }) {
  return (
    // Desain Enterprise: Tepi tajam (rounded-none), warna solid pekat, garis tepi tipis
    <div className="group flex flex-col bg-[#070709] border border-white/10 hover:border-brand-blue/50 transition-all duration-500 relative">
      
      {/* Efek Garis Aksen di atas card yang menyala saat di-hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green transition-all duration-500 z-20"></div>

      {/* Bagian Gambar Pratinjau */}
      <div className="relative w-full h-64 md:h-[340px] overflow-hidden bg-[#030303] border-b border-white/5">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
        />
      </div>

      {/* Konten Teks */}
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-brand-blue transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-8 flex-1 text-base leading-relaxed font-light">
          {project.description}
        </p>

        {/* Tech Stack Badges (Gaya Data-block) */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-3 py-1.5 text-xs font-mono font-medium tracking-widest uppercase text-gray-400 border border-white/10 bg-white/5 hover:border-white/20 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/10">
          
          <Link href={`/projects/${project.slug}`} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-blue transition-colors group/link">
            <span>View Case Study</span> 
            <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
          </Link>

          {project.githubUrl && project.githubUrl !== "#" && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center text-gray-500 hover:text-white transition-colors" title="Source Code">
              <GithubIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}