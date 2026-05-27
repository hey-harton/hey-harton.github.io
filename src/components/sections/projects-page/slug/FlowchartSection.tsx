import Image from "next/image";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function FlowchartSection({ flowchartImage }: { flowchartImage: string }) {
  return (
    // PERBAIKAN: bg-[#0a0a0e] diubah ke bg-transparent, py dan mb disesuaikan untuk mobile
    <section className="relative w-full py-16 md:py-24 border-y border-white/10 bg-transparent mb-16 md:mb-24 overflow-hidden">
      
      {/* Grid lokal dihapus agar tidak bertumpuk dengan grid layout.tsx */}

      <div className="px-4 md:px-12 lg:px-16 max-w-[1600px] mx-auto relative z-10">
        
        {/* Header Teks: Diubah menjadi rata kiri dengan garis batas aksen */}
        <div className="flex flex-col items-start mb-10 md:mb-16 border-l border-brand-blue pl-6 md:pl-8">
          <p className="text-brand-blue font-mono text-xs tracking-widest mb-3 uppercase">
            &gt; INDEX_02: SYSTEM_ARCHITECTURE
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tight break-words">
            Topologi & Alur Kerja<span className="text-brand-blue">_</span>
          </h2>
          
          <p className="text-gray-400 text-sm md:text-lg max-w-3xl font-mono font-light leading-relaxed text-left">
            Tinjauan tingkat atas dari pipeline data dan arsitektur sistem yang menggerakkan infrastruktur platform ini.
          </p>
        </div>
        
        {/* Technical Bounding Box untuk Flowchart */}
        <div className="relative w-full bg-[#050505] border border-white/10 p-2 md:p-4 rounded-none group">
          
          {/* Crosshairs Pengunci Bingkai Dalam (Warna Biru) */}
          <Crosshair className="absolute top-[6px] left-[6px] md:top-[12px] md:left-[12px] text-brand-blue/40 group-hover:text-brand-blue transition-colors z-20" />
          <Crosshair className="absolute top-[6px] right-[6px] md:top-[12px] md:right-[12px] text-brand-blue/40 group-hover:text-brand-blue transition-colors z-20" />
          <Crosshair className="absolute bottom-[6px] left-[6px] md:bottom-[12px] md:left-[12px] text-brand-blue/40 group-hover:text-brand-blue transition-colors z-20" />
          <Crosshair className="absolute bottom-[6px] right-[6px] md:bottom-[12px] md:right-[12px] text-brand-blue/40 group-hover:text-brand-blue transition-colors z-20" />

          {/* Kontainer Gambar Internal dengan Padding agar diagram bisa bernapas */}
          <div className="relative w-full aspect-[4/3] md:aspect-video border border-white/5 overflow-hidden bg-[#030303] flex items-center justify-center p-4 md:p-12">
            <Image 
              src={flowchartImage} 
              alt="System Architecture Flowchart" 
              fill 
              sizes="(max-width: 768px) 100vw, 1600px"
              className="object-contain p-4 md:p-8 opacity-80 group-hover:opacity-100 transition-opacity duration-700 select-none pointer-events-none" 
            />
          </div>

          {/* Label Metadata Resolusi di Sudut Kanan Bawah */}
          {/* PERBAIKAN: Hapus backdrop-blur-sm dan shadow-xl, ganti bg menjadi solid #050505 */}
          <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 bg-[#050505] border border-white/10 px-3 py-1.5 text-[10px] font-mono text-brand-blue z-20 uppercase tracking-widest hidden sm:block">
            SYS_DIAGRAM: TOPOLOGY_RENDER
          </div>

        </div>
      </div>
    </section>
  );
}