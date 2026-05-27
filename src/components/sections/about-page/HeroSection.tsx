import { User } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function HeroSection() {
  return (
    // PERBAIKAN: Menambahkan `min-h-[85vh] lg:min-h-screen flex flex-col justify-center` 
    // agar tinggi seksi ini menyesuaikan dengan tinggi layar laptop dan kontennya berada di tengah.
    <section className="relative w-full min-h-[85vh] lg:min-h-screen flex flex-col justify-center border-b border-white/10 bg-transparent overflow-hidden pt-32 pb-20 !mt-0">
      
      {/* Latar Belakang Grid Teknis (Opasitas 0.08) - Merambat dari balik Navbar */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

      {/* Tambahan w-full agar kontainer flex tidak menyusut */}
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Panel Judul dengan Garis Tepi Kiri ala Blueprint */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10">
          
          {/* Crosshairs Pengunci Garis Vertikal */}
          <Crosshair className="absolute -top-[7px] -left-[7.5px] text-brand-blue z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7.5px] text-brand-blue z-20" />

          <div className="flex flex-col items-start pt-6 md:pt-8">
            
            {/* Label Terminal Path */}
            <div className="flex items-center gap-3 text-brand-blue text-xs font-mono uppercase tracking-widest mb-8">
              <User size={14} className="animate-pulse" />
              <span>&gt; DIRECTORY: /ABOUT/EXECUTIVE_PROFILE</span>
            </div>
            
            {/* Gradien dihapus, diganti warna solid tegas dengan efek kursor */}
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] mb-8 uppercase">
              Merancang Konektivitas. <br className="hidden lg:block"/>
              <span className="text-brand-blue">Skala Cloud.</span>
              <span className="animate-pulse text-white">_</span>
            </h1>
            
            {/* Deskripsi (Menggunakan font-mono untuk estetika konsol log) */}
            <p className="text-gray-400 text-lg md:text-xl font-mono font-light leading-relaxed max-w-3xl text-left">
              Didorong oleh ketahanan jaringan, dirancang untuk skalabilitas cloud, dan diperkuat oleh kecerdasan data. Tinjauan mendalam atas filosofi teknis operasional.
            </p>

          </div>
        </div>
        
      </div>
    </section>
  );
}