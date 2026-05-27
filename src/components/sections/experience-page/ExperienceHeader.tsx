import { Cpu } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function ExperienceHeader() {
  return (
    // PERBAIKAN: Hapus transform-gpu, sesuaikan pt-28 untuk mobile agar tidak tertutup Navbar
    <section className="relative w-full border-b border-white/10 bg-transparent overflow-hidden pt-28 md:pt-40 pb-16 md:pb-24 !mt-0">
      
      {/* Latar Belakang Grid Teknis (Opasitas 0.08) - Akan merambat dari balik Navbar */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] md:[mask-image:linear-gradient(to_bottom,white,transparent)] transform-gpu will-change-transform"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Panel Judul dengan Garis Tepi Kiri ala Blueprint */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10">
          
          {/* Crosshairs Pengunci Garis Vertikal */}
          <Crosshair className="absolute -top-[7px] -left-[7.5px] text-brand-blue z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7.5px] text-brand-blue z-20" />

          <div className="flex flex-col items-start pt-4 md:pt-8">
            
            {/* Label Atas bergaya Terminal Path (Ukuran font responsif) */}
            <div className="flex items-center gap-3 text-brand-blue text-[10px] md:text-xs font-mono uppercase tracking-widest mb-6 md:mb-8">
              <Cpu size={14} className="animate-pulse" />
              <span>&gt; DIRECTORY: /EXPERIENCE/TRACK_RECORD</span>
            </div>
            
            {/* Judul Utama: Diterjemahkan ke Bahasa Indonesia & Ukuran font dibuat responsif agar tidak tumpah di HP */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] mb-6 md:mb-8 max-w-4xl uppercase break-words">
              Arsitektur Operasional <br className="hidden md:block"/>
              <span className="text-brand-blue">Tangguh.</span>
              <span className="animate-pulse text-white">_</span>
            </h1>
            
            {/* Deskripsi: Font lebih kecil di mobile agar mudah dibaca */}
            <p className="text-gray-400 text-sm md:text-lg lg:text-xl font-mono font-light leading-relaxed max-w-3xl text-left">
              Menyatukan rekayasa jaringan enterprise, rekayasa data cerdas, dan kepemimpinan taktis komunitas untuk membangun ekosistem digital yang andal dan terskala.
            </p>

          </div>
        </div>
        
      </div>
    </section>
  );
}