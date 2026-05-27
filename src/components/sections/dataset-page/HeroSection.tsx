import { Database } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function HeroSection() {
  return (
    // PERBAIKAN: Hapus !mt-0, sesuaikan padding atas, pertahankan bg-transparent
    <section className="relative w-full border-b border-white/10 bg-transparent overflow-hidden pt-28 md:pt-40 pb-16 md:pb-24">
      
      {/* Grid lokal dihapus agar tidak bentrok dengan layout.tsx */}

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-12">
        
        {/* Panel Judul Kiri ala Blueprint */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 max-w-4xl w-full">
          
          <Crosshair className="absolute -top-[7px] -left-[7.5px] text-brand-blue z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7.5px] text-brand-blue z-20" />

          <div className="flex flex-col items-start pt-4">
            
            {/* Label Terminal Path */}
            <div className="flex items-center gap-3 text-brand-blue text-[10px] md:text-xs font-mono uppercase tracking-widest mb-6 md:mb-8">
              {/* PERBAIKAN: Matikan animasi pulse di HP */}
              <Database size={14} className="md:animate-pulse" />
              <span>&gt; DIRECTORY: /DATASETS/OPEN_REPOSITORIES</span>
            </div>
            
            {/* PERBAIKAN: Ukuran font responsif dan penambahan break-words untuk mobile */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] mb-6 md:mb-8 uppercase break-words w-full">
              Dataset Kurasi <br className="hidden md:block" />
              <span className="text-brand-blue">Riset & Analitik.</span>
              <span className="md:animate-pulse text-white">_</span>
            </h1>
            
            {/* PERBAIKAN: Font size disesuaikan agar proporsional di layar kecil */}
            <p className="text-gray-400 text-sm md:text-lg lg:text-xl font-mono font-light leading-relaxed max-w-2xl text-left">
              Jelajahi dan unduh dataset berkualitas tinggi yang mencakup informatika medis, telemetri jaringan, dan pemodelan machine learning.
            </p>

          </div>
        </div>

        {/* Global Stats Kanan ala Panel Metrik Sistem */}
        {/* PERBAIKAN: Lebar penuh di HP, flex-col untuk layar sangat kecil */}
        <div className="flex flex-col sm:flex-row xl:flex-col gap-8 xl:gap-12 bg-[#050505] border border-white/10 p-6 md:p-8 w-full xl:w-auto xl:min-w-[300px] rounded-none relative">
          
          {/* Garis Aksen Indikator */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue"></div>

          <div className="flex flex-col flex-1">
            <span className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-2">04</span>
            <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-mono border-b border-white/5 pb-2">
              SYS_METRIC: TOTAL_REPOS
            </span>
          </div>
          
          <div className="flex flex-col flex-1">
            <span className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-2">2.3M+</span>
            <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-mono border-b border-white/5 pb-2">
              SYS_METRIC: DATA_RECORDS
            </span>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}