import { LayoutGrid } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function ProjectsHeader() {
  return (
    // PERBAIKAN: Hapus !mt-0, sesuaikan padding atas untuk mobile, pastikan bg-transparent
    <section className="relative w-full border-b border-white/10 bg-transparent overflow-hidden pt-28 md:pt-40 pb-16 md:pb-24">
      
      {/* Grid lokal dihapus agar tidak bertumpuk dengan grid dari layout.tsx */}

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Panel Judul dengan Garis Tepi Kiri */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10">
          
          <Crosshair className="absolute -top-[7px] -left-[7.5px] text-brand-green z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7.5px] text-brand-green z-20" />

          <div className="flex flex-col items-start pt-4 md:pt-8">
            
            {/* Label Terminal Path */}
            <div className="flex items-center gap-3 text-brand-green text-[10px] md:text-xs font-mono uppercase tracking-widest mb-6 md:mb-8">
              {/* PERBAIKAN: Matikan animasi pulse di HP agar hemat RAM */}
              <LayoutGrid size={14} className="md:animate-pulse" />
              <span>&gt; DIRECTORY: /PROJECTS/DEPLOYMENT_SHOWCASE</span>
            </div>
            
            {/* PERBAIKAN: Judul di-uppercase, diubah jadi Repositori Proyek, & disesuaikan ukurannya untuk HP */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] mb-6 md:mb-8 max-w-4xl uppercase break-words">
              Repositori <br className="hidden md:block"/>
              <span className="text-brand-green">Proyek.</span>
              <span className="md:animate-pulse text-white">_</span>
            </h1>
            
            {/* PERBAIKAN: Ukuran font diperkecil di mobile agar nyaman dibaca */}
            <p className="text-gray-400 text-sm md:text-lg lg:text-xl font-mono font-light leading-relaxed max-w-3xl text-left">
              Katalog dari karya arsitektural terbaru saya, mulai dari dasbor analitik cerdas hingga portal komunitas full-stack tersinkronisasi.
            </p>

          </div>
        </div>
        
      </div>
    </section>
  );
}