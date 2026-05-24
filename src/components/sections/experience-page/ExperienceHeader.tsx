import { Cpu } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function ExperienceHeader() {
  return (
    // Menggunakan padding atas yang cukup besar (pt-32) agar tidak tertutup Navbar
    <section className="relative w-full border-b border-white/10 bg-[#0a0a0e] overflow-hidden transform-gpu pt-32 pb-20 md:pt-40 md:pb-24">
      
      {/* Latar Belakang Grid Teknis (Opasitas 0.08 yang Diperkuat) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Panel Judul dengan Garis Tepi Kiri ala Blueprint */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10">
          
          {/* Crosshairs Pengunci Garis Vertikal */}
          <Crosshair className="absolute -top-[7px] -left-[7.5px] text-brand-blue z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7.5px] text-brand-blue z-20" />

          <div className="flex flex-col items-start">
            
            {/* Label Atas bergaya Terminal Path */}
            <div className="flex items-center gap-3 text-brand-blue text-xs font-mono uppercase tracking-widest mb-8">
              <Cpu size={14} className="animate-pulse" />
              <span>&gt; DIRECTORY: /EXPERIENCE/TRACK_RECORD</span>
            </div>
            
            {/* Judul Utama yang Tegas */}
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] mb-8 max-w-4xl">
              Architecting <br className="hidden md:block"/>
              Resilient <span className="text-brand-blue">Operations.</span>
              <span className="animate-pulse text-white">_</span>
            </h1>
            
            {/* Deskripsi (Menggunakan font-mono untuk estetika konsol) */}
            <p className="text-gray-400 text-lg md:text-xl font-mono font-light leading-relaxed max-w-3xl text-left">
              Menyatukan rekayasa jaringan enterprise, rekayasa data cerdas, dan kepemimpinan taktis komunitas untuk membangun ekosistem digital yang andal dan terskala.
            </p>

          </div>
        </div>
        
      </div>
    </section>
  );
}