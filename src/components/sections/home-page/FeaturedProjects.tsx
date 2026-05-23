import Link from "next/link";
import Image from "next/image"; 
import { ArrowRight } from "lucide-react";

export default function FeaturedProjectsSection() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24 border-t border-white/10">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-6 gap-6">
        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
          Featured <span className="font-semibold">Projects.</span>
        </h2>
        <Link href="/projects" className="group flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-white transition-colors uppercase tracking-widest">
          View All Projects <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform transform-gpu" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        
        {/* Project 1 */}
        <Link href="/projects/medical-dashboard" className="group flex flex-col w-full cursor-pointer">
          <div className="w-full aspect-[16/10] bg-[#0a0a0e] relative border border-white/10 overflow-hidden mb-6 transform-gpu rounded-sm">
             {/* OPTIMASI: Pakai Image Next.js + Grayscale (Jauh lebih ringan dari mix-blend) */}
             <Image 
                src="https://picsum.photos/seed/medical/1200/800" 
                alt="Medical Dashboard" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 transform-gpu"
             />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-brand-blue"></span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Data Science</span>
          </div>
          <h4 className="text-3xl font-semibold text-white mb-4 tracking-tight group-hover:text-brand-blue transition-colors">Medical Intelligence Dashboard</h4>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed font-light flex-1">A comprehensive clinical data dashboard focused on precision biometry analytics utilizing modern web stacks and Machine Learning.</p>
          <div className="inline-flex items-center gap-2 text-white font-medium group-hover:text-brand-blue transition-colors w-max">
            Read Case Study <ArrowRight size={18} className="transform-gpu" />
          </div>
        </Link>

        {/* Project 2 */}
        <Link href="/projects/datasea-portal" className="group flex flex-col w-full cursor-pointer">
          <div className="w-full aspect-[16/10] bg-[#0a0a0e] relative border border-white/10 overflow-hidden mb-6 transform-gpu rounded-sm">
             <Image 
                src="https://picsum.photos/seed/datasea/1200/800" 
                alt="Datasea Portal" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 transform-gpu"
             />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-brand-green"></span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Web Infrastructure</span>
          </div>
          <h4 className="text-3xl font-semibold text-white mb-4 tracking-tight group-hover:text-brand-blue transition-colors">Datasea Archive Portal</h4>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed font-light flex-1">Centralized organizational file repository and portal engineered with Turso DB and Google Drive API for real-time synchronization.</p>
          <div className="inline-flex items-center gap-2 text-white font-medium group-hover:text-brand-blue transition-colors w-max">
            Read Case Study <ArrowRight size={18} className="transform-gpu" />
          </div>
        </Link>

      </div>
    </section>
  );
}