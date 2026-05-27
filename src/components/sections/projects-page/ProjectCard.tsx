import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// --- Komponen Ikon Brand SVG ---
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
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
    <div className="group flex flex-col bg-[#050505] border border-white/10 hover:border-brand-green/50 transition-all duration-500 relative rounded-none">
      
      {/* Efek Garis Aksen (Indikator Aktif) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-brand-green transition-all duration-500 z-20 scale-x-0 group-hover:scale-x-100 origin-left"></div>

      {/* Bagian Gambar Pratinjau dengan Bingkai Teknis */}
      <div className="relative w-full h-56 sm:h-64 md:h-[340px] bg-[#030303] border-b border-white/10 p-2 md:p-3">
        
        {/* Crosshairs Pengunci Bingkai Gambar */}
        <Crosshair className="absolute top-[2px] left-[2px] text-brand-green/30 group-hover:text-brand-green transition-colors z-20" />
        <Crosshair className="absolute top-[2px] right-[2px] text-brand-green/30 group-hover:text-brand-green transition-colors z-20" />
        <Crosshair className="absolute bottom-[2px] left-[2px] text-brand-green/30 group-hover:text-brand-green transition-colors z-20" />
        <Crosshair className="absolute bottom-[2px] right-[2px] text-brand-green/30 group-hover:text-brand-green transition-colors z-20" />

        <div className="relative w-full h-full overflow-hidden border border-white/5">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // PERBAIKAN: transisi zoom gambar dibuat sedikit lebih cepat agar UI terasa responsif (duration-500)
            className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Konten Teks */}
      {/* PERBAIKAN: Padding responsif (p-6 di HP, p-10 di Laptop) agar kotak tidak terlalu tinggi */}
      <div className="p-6 md:p-10 flex flex-col flex-1">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight group-hover:text-brand-green transition-colors uppercase line-clamp-2">
          {project.title}
        </h3>
        
        {/* PERBAIKAN: Ukuran font deskripsi disesuaikan, margin bawah dikurangi (mb-6 md:mb-8) */}
        <p className="text-gray-400 mb-6 md:mb-8 flex-1 text-sm md:text-base leading-relaxed font-light text-left">
          {project.description}
        </p>

        {/* Tech Stack Badges ala Log Data */}
        <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-2 py-1 text-[9px] md:text-[10px] font-mono tracking-widest uppercase text-gray-500 border border-white/10 bg-[#0a0a0e] group-hover:border-brand-green/30 group-hover:text-gray-300 transition-colors cursor-default rounded-none">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        {/* PERBAIKAN: pt-4 di mobile, pt-6 di desktop agar padat */}
        <div className="flex justify-between items-center mt-auto pt-4 md:pt-6 border-t border-white/10">
          
          <Link href={`/projects/${project.slug}`} className="flex items-center gap-3 text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-white hover:text-brand-green transition-colors group/link pb-1 border-b border-transparent hover:border-brand-green">
            <span>Execute_Case_Study</span> 
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>

          {project.githubUrl && project.githubUrl !== "#" && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center text-gray-600 hover:text-brand-green transition-colors" title="Source Code">
              <GithubIcon className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}