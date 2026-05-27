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
    // Memastikan background transparan agar grid global dari layout.tsx bisa tembus terlihat
    <section className="relative w-full border-t border-white/10 bg-transparent overflow-hidden">
      
      {/* Grid lokal sudah DIHAPUS dari sini agar tidak bertumpuk dengan grid di layout.tsx 
      */}

      {/* Padding vertikal disesuaikan untuk layar HP (py-16 md:py-24) */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 relative z-10">
        
        {/* Panel Instrumen CTA */}
        <div className="relative border border-white/10 bg-[#050505] p-6 sm:p-8 md:p-12 lg:p-16 hover:border-brand-blue/30 transition-colors duration-500 group">
          
          {/* Garis aksen atas yang menyala saat panel di-hover */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

          {/* Crosshairs Pengunci Panel */}
          <Crosshair className="absolute -top-[7px] -left-[7px] text-brand-blue z-20" />
          <Crosshair className="absolute -top-[7px] -right-[7px] text-brand-blue z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7px] text-brand-blue z-20" />
          <Crosshair className="absolute -bottom-[7px] -right-[7px] text-brand-blue z-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Kolom Kiri: Teks Terminal */}
            <div className="lg:col-span-7 lg:pr-10 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0">
              <p className="text-brand-blue font-mono text-xs md:text-sm tracking-widest mb-3 md:mb-4 uppercase">
                &gt; SYSTEM_PROMPT: INITIATE_COLLABORATION
              </p>
              {/* Teks responsif agar tidak tumpah ke luar kotak di HP */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight uppercase break-words">
                Siap Merancang <br className="hidden md:block" />
                <span className="text-brand-blue">Masa Depan?</span>
                {/* Animasi pulse dimatikan di HP (md:animate-pulse) */}
                <span className="md:animate-pulse text-white">_</span>
              </h2>
            </div>

            {/* Kolom Kanan: Deskripsi & Tombol Aksi */}
            <div className="lg:col-span-5 flex flex-col justify-start lg:pl-4">
              <p className="text-sm md:text-base lg:text-lg text-gray-400 font-mono font-light mb-8 md:mb-10 leading-relaxed text-left">
                Baik itu mengembangkan platform web, meningkatkan skala jaringan enterprise, memusatkan data organisasi, maupun mengimplementasikan arsitektur keamanan, mari eksekusi mahakarya teknis bersama-sama.
              </p>

              {/* Tombol yang dibuat full width di HP dan flexibel di laptop */}
              <Link 
                href="/contacts" 
                className="group/btn flex items-center justify-between bg-[#0a0a0e] text-white px-6 py-4 md:py-5 text-xs font-mono font-bold hover:bg-brand-blue hover:text-[#050505] transition-colors w-full sm:w-[300px] border border-white/20 hover:border-brand-blue rounded-none uppercase tracking-widest"
              >
                <span>HUBUNGI SAYA</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Indikator Status Menunggu Input (Pulse dimatikan di HP) */}
          <div className="absolute bottom-4 right-4 md:right-6 text-[8px] md:text-[9px] font-mono text-gray-600 uppercase tracking-widest md:animate-pulse">
            SYS_STATUS: AWAITING_INPUT
          </div>

        </div>

      </div>
    </section>
  );
}