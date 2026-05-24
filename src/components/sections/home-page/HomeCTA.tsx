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
    <section className="relative w-full border-t border-white/10 bg-[#0a0a0e] overflow-hidden transform-gpu mt-12">
      
      {/* Latar Belakang Grid Teknis (Opasitas 0.08) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 relative z-10">
        
        {/* Panel Instrumen CTA */}
        <div className="relative border border-white/10 bg-[#050505] p-8 md:p-16">
          
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
              <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white leading-[1.05] tracking-tight">
                Siap merancang <br />
                <span className="text-brand-blue">masa depan?</span>
                <span className="animate-pulse text-white">_</span>
              </h2>
            </div>

            {/* Kolom Kanan: Deskripsi & Tombol Aksi */}
            <div className="lg:col-span-5 flex flex-col justify-start lg:pl-4">
              {/* PERBAIKAN: Mengubah text-justify menjadi text-left */}
              <p className="text-lg text-gray-400 font-mono font-light mb-10 leading-relaxed text-left">
                Baik itu mengembangan wesite, meningkatkan skala jaringan enterprise, memusatkan data organisasi, maupun mengimplementasikan pipeline machine learning, mari bangun sesuatu yang luar biasa bersama-sama.
              </p>

              <Link 
                href="/contact" 
                className="group flex items-center justify-between bg-brand-blue text-white px-6 py-4 font-mono font-semibold hover:bg-[#0f52d6] transition-colors w-full sm:w-[300px] border border-transparent rounded-none uppercase tracking-widest"
              >
                <span>Hubungi Saya</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Indikator Status Menunggu Input */}
          <div className="absolute bottom-4 right-6 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            STATUS: AWAITING_INPUT
          </div>

        </div>

      </div>
    </section>
  );
}