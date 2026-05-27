import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function HomeCTASection() {
  return (
    // PERBAIKAN: 
    // 1. bg-[#0a0a0e] diubah menjadi bg-transparent agar menyatu dengan latar belakang halaman.
    // 2. mt-12 dihapus agar menempel rapat dan tidak ada celah patahan.
    // 3. transform-gpu dihapus untuk optimasi.
    <section className="relative w-full border-t border-white/10 bg-transparent overflow-hidden">
      
      {/* Latar Belakang Grid Teknis (Opasitas 0.08) - Akan berlanjut tanpa patahan */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] md:[mask-image:linear-gradient(to_bottom,white,transparent)] transform-gpu will-change-transform"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 relative z-10">
        
        {/* Panel Instrumen CTA */}
        <div className="relative border border-white/10 bg-[#050505] p-8 md:p-16 hover:border-brand-blue/30 transition-colors duration-500 group">
          
          {/* Garis aksen atas yang menyala saat panel di-hover */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

          {/* Crosshairs Pengunci Panel */}
          <Crosshair className="absolute -top-[7px] -left-[7px] text-brand-blue z-20" />
          <Crosshair className="absolute -top-[7px] -right-[7px] text-brand-blue z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7px] text-brand-blue z-20" />
          <Crosshair className="absolute -bottom-[7px] -right-[7px] text-brand-blue z-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Kolom Kiri: Teks Terminal */}
            <div className="lg:col-span-7 lg:pr-10 border-b lg:border-b-0 lg:border-r border-white/10 pb-10 lg:pb-0">
              <p className="text-brand-blue font-mono text-sm tracking-widest mb-4 uppercase">
                &gt; SYSTEM_PROMPT: INITIATE_COLLABORATION
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight uppercase">
                Siap Merancang <br />
                <span className="text-brand-blue">Masa Depan?</span>
                <span className="animate-pulse text-white">_</span>
              </h2>
            </div>

            {/* Kolom Kanan: Deskripsi & Tombol Aksi */}
            <div className="lg:col-span-5 flex flex-col justify-start lg:pl-4">
              <p className="text-base md:text-lg text-gray-400 font-mono font-light mb-10 leading-relaxed text-left">
                Baik itu mengembangkan platform web, meningkatkan skala jaringan enterprise, memusatkan data organisasi, maupun mengimplementasikan arsitektur keamanan, mari eksekusi mahakarya teknis bersama-sama.
              </p>

              <Link 
                href="/contacts" 
                className="group/btn flex items-center justify-between bg-[#0a0a0e] text-white px-6 py-4 text-[10px] font-mono font-bold hover:bg-brand-blue hover:text-[#050505] transition-colors w-full sm:w-[300px] border border-white/20 hover:border-brand-blue rounded-none uppercase tracking-widest"
              >
                <span>HUBUNGI SAYA</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Indikator Status Menunggu Input */}
          <div className="absolute bottom-4 right-6 text-[9px] font-mono text-gray-600 uppercase tracking-widest animate-pulse">
            SYS_STATUS: AWAITING_INPUT
          </div>

        </div>

      </div>
    </section>
  );
}