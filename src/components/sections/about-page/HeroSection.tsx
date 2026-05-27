"use client";

import { Theme } from "@carbon/react";
import { User } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function HeroSection() {
  return (
    // 1. KUNCI INTEGRASI: Dibungkus dengan tema gelap IBM Carbon (G100)
    <Theme theme="g100">
      <section className="relative w-full border-b border-white/10 bg-transparent overflow-hidden pt-28 md:pt-40 pb-16 md:pb-24 !mt-0">
        
        {/* KUNCI PERFORMA REDMI 10: Grid dinonaktifkan di mobile (hidden md:block) agar tidak memicu overdraw/repaint lag */}
        <div className="hidden md:block absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          
          {/* Panel Judul dengan Garis Tepi Kiri ala Blueprint */}
          <div className="relative border-l border-white/10 pl-6 md:pl-10">
            
            {/* Crosshairs Pengunci Garis Vertikal (Sangat ringan render-nya) */}
            <Crosshair className="absolute -top-[7px] -left-[7.5px] text-brand-blue z-20" />
            <Crosshair className="absolute -bottom-[7px] -left-[7.5px] text-brand-blue z-20" />

            <div className="flex flex-col items-start pt-4 md:pt-8">
              
              {/* Label Terminal Path: Animasi denyut dibatasi hanya di laptop (md:animate-pulse) */}
              <div className="flex items-center gap-3 text-brand-blue text-[10px] md:text-xs font-mono uppercase tracking-widest mb-6 md:mb-8">
                <User size={14} className="md:animate-pulse" />
                <span>&gt; DIRECTORY: /ABOUT/EXECUTIVE_PROFILE</span>
              </div>
              
              {/* Judul: Aman untuk layar HP tanpa terpotong berkat break-words */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] mb-6 md:mb-8 uppercase break-words">
                Merancang Konektivitas. <br className="hidden lg:block"/>
                <span className="text-brand-blue">Skala Cloud.</span>
                <span className="md:animate-pulse text-white">_</span>
              </h1>
              
              {/* Deskripsi: Nyaman dibaca di resolusi layar mana pun */}
              <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-mono font-light leading-relaxed max-w-3xl text-left">
                Didorong oleh ketahanan jaringan, dirancang untuk skalabilitas cloud, dan diperkuat oleh kecerdasan data. Tinjauan mendalam atas filosofi teknis operasional.
              </p>

            </div>
          </div>
          
        </div>
      </section>
    </Theme>
  );
}