import Image from "next/image";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

interface CoverSectionProps {
  coverImage: string;
  title: string;
}

export default function CoverSection({ coverImage, title }: CoverSectionProps) {
  return (
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1600px] mx-auto mb-24">
      
      {/* Technical Bounding Box: Bingkai luar yang kaku */}
      <div className="relative w-full bg-[#050505] border border-white/10 p-2 md:p-4 rounded-none group">
        
        {/* Crosshairs Pengunci Bingkai Dalam */}
        <Crosshair className="absolute top-[6px] left-[6px] md:top-[12px] md:left-[12px] text-gray-600 group-hover:text-brand-blue transition-colors z-20" />
        <Crosshair className="absolute top-[6px] right-[6px] md:top-[12px] md:right-[12px] text-gray-600 group-hover:text-brand-blue transition-colors z-20" />
        <Crosshair className="absolute bottom-[6px] left-[6px] md:bottom-[12px] md:left-[12px] text-gray-600 group-hover:text-brand-blue transition-colors z-20" />
        <Crosshair className="absolute bottom-[6px] right-[6px] md:bottom-[12px] md:right-[12px] text-gray-600 group-hover:text-brand-blue transition-colors z-20" />

        {/* Kontainer Gambar Internal */}
        <div className="relative w-full border border-white/5 overflow-hidden bg-[#030303]">
          <Image 
            src={coverImage} 
            alt={`${title} Cover`} 
            width={1920}
            height={1080}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1600px" // Optimasi loading Next.js
            className="w-full h-auto object-cover select-none pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-700" 
          />
        </div>

        {/* Label Metadata Resolusi ala Terminal (Disembunyikan di layar sangat kecil agar tidak menumpuk) */}
        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-[#0a0a0e]/90 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-[10px] font-mono text-gray-400 z-20 uppercase tracking-widest hidden sm:block shadow-xl">
          SYS_IMG: HIGH_RES_RENDER
        </div>

      </div>

    </section>
  );
}