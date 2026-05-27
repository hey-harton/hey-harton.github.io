import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function FeaturedProjectsSection() {
  return (
    // PERBAIKAN: bg-[#0a0a0e] diubah menjadi bg-transparent agar grid global menembus
    <section className="relative w-full bg-transparent overflow-hidden border-t border-white/10">
      
      {/* Grid lokal dihapus agar tidak bertumpuk */}

      {/* Kontainer Utama: Padding vertikal disesuaikan untuk mobile (py-16 md:py-24) */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 relative z-10 flex flex-col justify-center">
        
        {/* Header Section dengan Gaya Terminal */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 border-b border-white/10 pb-6 md:pb-8 gap-6">
          <div>
            <p className="text-brand-blue font-mono text-xs md:text-sm tracking-widest mb-3 uppercase">
              &gt; INDEX_01: HIGHLIGHTS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Proyek Unggulan<span className="text-brand-blue">.</span>
            </h2>
          </div>
          
          {/* Tombol Lihat Semua bergaya konsol */}
          <Link 
            href="/projects" 
            className="group flex items-center justify-center w-full md:w-auto gap-3 text-[10px] md:text-xs font-mono font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-widest border border-white/10 bg-[#050505] hover:bg-white/5 px-6 py-4 md:py-3 rounded-none"
          >
            <span>Akses Direktori</span> 
            {/* PERBAIKAN: Menghapus transform-gpu pada panah */}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid Proyek */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          
          {/* Project 1: Medical Dashboard */}
          <Link href="/projects/medical-dashboard" className="group flex flex-col w-full cursor-pointer">
            
            {/* Bingkai Teknis untuk Gambar (Menghapus transform-gpu) */}
            <div className="w-full aspect-[16/9] relative bg-white/[0.02] border border-white/10 mb-6 md:mb-8 rounded-none">
              <Crosshair className="absolute -top-[7px] -left-[7px] text-brand-blue z-20" />
              <Crosshair className="absolute -top-[7px] -right-[7px] text-brand-blue z-20" />
              <Crosshair className="absolute -bottom-[7px] -left-[7px] text-brand-blue z-20" />
              <Crosshair className="absolute -bottom-[7px] -right-[7px] text-brand-blue z-20" />
              
              <div className="absolute inset-2 md:inset-3 border border-white/10 overflow-hidden bg-[#050505]">
                 {/* PERBAIKAN: Menghapus transform-gpu dari Image */}
                 <Image 
                    src="/projects/medical.jpg" // Ganti dengan path gambarmu yang sebenarnya jika sudah ada
                    alt="Medical Dashboard" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                 />
              </div>

              <div className="absolute bottom-4 right-4 md:bottom-5 md:right-5 bg-[#0a0a0e] border border-white/10 px-2 py-0.5 text-[8px] md:text-[10px] font-mono text-gray-500 z-20">
                RES: 1200x800
              </div>
            </div>

            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-brand-blue"></span>
              <span className="text-[10px] md:text-xs font-mono text-brand-blue uppercase tracking-widest">Sains Data</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 tracking-tight group-hover:text-brand-blue transition-colors">
              Medical Intelligence Dashboard
            </h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light text-left flex-1">
              Dasbor data klinis komprehensif untuk analitik biometri presisi menggunakan modern web stack.
            </p>
            
            <div className="inline-flex items-center mt-5 md:mt-6 gap-2 text-[10px] md:text-xs font-mono text-gray-500 group-hover:text-brand-blue transition-colors w-max uppercase tracking-widest border-b border-transparent group-hover:border-brand-blue pb-1">
              Mulai Analisis <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Project 2: Datasea Portal */}
          <Link href="/projects/datasea-portal" className="group flex flex-col w-full cursor-pointer">
            
            <div className="w-full aspect-[16/9] relative bg-white/[0.02] border border-white/10 mb-6 md:mb-8 rounded-none">
              <Crosshair className="absolute -top-[7px] -left-[7px] text-brand-green z-20" />
              <Crosshair className="absolute -top-[7px] -right-[7px] text-brand-green z-20" />
              <Crosshair className="absolute -bottom-[7px] -left-[7px] text-brand-green z-20" />
              <Crosshair className="absolute -bottom-[7px] -right-[7px] text-brand-green z-20" />
              
              <div className="absolute inset-2 md:inset-3 border border-white/10 overflow-hidden bg-[#050505]">
                 <Image 
                    src="/projects/datasea.jpg" // Ganti dengan path gambarmu yang sebenarnya
                    alt="Datasea Portal" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                 />
              </div>

              <div className="absolute bottom-4 right-4 md:bottom-5 md:right-5 bg-[#0a0a0e] border border-white/10 px-2 py-0.5 text-[8px] md:text-[10px] font-mono text-gray-500 z-20">
                RES: 1200x800
              </div>
            </div>

            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-brand-green"></span>
              <span className="text-[10px] md:text-xs font-mono text-brand-green uppercase tracking-widest">Infrastruktur Web</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 tracking-tight group-hover:text-brand-green transition-colors">
              Datasea Archive Portal
            </h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light text-left flex-1">
              Repositori file organisasi terpusat dengan sinkronisasi waktu nyata menggunakan Turso DB.
            </p>
            
            <div className="inline-flex items-center mt-5 md:mt-6 gap-2 text-[10px] md:text-xs font-mono text-gray-500 group-hover:text-brand-green transition-colors w-max uppercase tracking-widest border-b border-transparent group-hover:border-brand-green pb-1">
              Mulai Analisis <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}