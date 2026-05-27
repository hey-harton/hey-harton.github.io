import { LayoutGrid } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function ProjectsHeader() {
  return (
    // PERBAIKAN: Menghapus "transform-gpu" agar rendering scroll kembali normal dan ringan
    <section className="relative w-full border-b border-white/10 bg-transparent overflow-hidden pt-32 md:pt-40 pb-20 md:pb-24 !mt-0">
      
      {/* Latar Belakang Grid Teknis (Opasitas 0.08) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Panel Judul dengan Garis Tepi Kiri */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10">
          
          <Crosshair className="absolute -top-[7px] -left-[7.5px] text-brand-green z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7.5px] text-brand-green z-20" />

          <div className="flex flex-col items-start pt-6 md:pt-8">
            
            {/* Label Terminal Path */}
            <div className="flex items-center gap-3 text-brand-green text-xs font-mono uppercase tracking-widest mb-8">
              <LayoutGrid size={14} className="animate-pulse" />
              <span>&gt; DIRECTORY: /PROJECTS/DEPLOYMENT_SHOWCASE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] mb-8 max-w-4xl">
              Featured <span className="text-brand-green">Projects.</span>
              <span className="animate-pulse text-white">_</span>
            </h1>
            
            {/* PERBAIKAN: Teks diterjemahkan ke bahasa Indonesia dengan gaya teknis */}
            <p className="text-gray-400 text-lg md:text-xl font-mono font-light leading-relaxed max-w-3xl text-left">
              Katalog dari karya arsitektural terbaru saya, mulai dari dasbor AI cerdas hingga portal komunitas full-stack.
            </p>

          </div>
        </div>
        
      </div>
    </section>
  );
}