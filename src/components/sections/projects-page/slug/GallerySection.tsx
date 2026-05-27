"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function GallerySection({ gallery }: { gallery: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  if (!gallery || gallery.length === 0) return null;

  return (
    // PERBAIKAN: Margin bawah disesuaikan untuk mobile (mb-16 md:mb-32)
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1600px] mx-auto mb-16 md:mb-32 relative z-10">
      
      {/* PERBAIKAN: Header diselaraskan dengan gaya arsitektur/terminal komponen lain */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6 border-l border-brand-green pl-6 md:pl-8">
        <div>
          <p className="text-brand-green font-mono text-xs tracking-widest mb-3 uppercase">
            &gt; INDEX_03: USER_INTERFACE
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight break-words">
            Antarmuka Platform<span className="text-brand-green">_</span>
          </h2>
        </div>
        
        {/* Navigasi Slider */}
        {gallery.length > 1 && (
          <div className="flex gap-4">
            {/* Tombol dibuat kaku (rounded-none) dengan efek hover warna brand */}
            <button onClick={prevSlide} className="p-3 md:p-4 border border-white/20 text-white hover:bg-brand-green hover:text-black hover:border-brand-green transition-colors rounded-none" aria-label="Previous image">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-3 md:p-4 border border-white/20 text-white hover:bg-brand-green hover:text-black hover:border-brand-green transition-colors rounded-none" aria-label="Next image">
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>

      {/* Technical Bounding Box untuk Galeri */}
      <div className="relative w-full bg-[#050505] border border-white/10 p-2 md:p-4 rounded-none group">
        
        {/* Crosshairs Pengunci Bingkai Dalam (Warna Hijau) */}
        <Crosshair className="absolute top-[6px] left-[6px] md:top-[12px] md:left-[12px] text-brand-green/40 group-hover:text-brand-green transition-colors z-20" />
        <Crosshair className="absolute top-[6px] right-[6px] md:top-[12px] md:right-[12px] text-brand-green/40 group-hover:text-brand-green transition-colors z-20" />
        <Crosshair className="absolute bottom-[6px] left-[6px] md:bottom-[12px] md:left-[12px] text-brand-green/40 group-hover:text-brand-green transition-colors z-20" />
        <Crosshair className="absolute bottom-[6px] right-[6px] md:bottom-[12px] md:right-[12px] text-brand-green/40 group-hover:text-brand-green transition-colors z-20" />

        <div className="relative w-full flex justify-center border border-white/5 bg-[#030303] overflow-hidden">
          <Image 
            src={gallery[currentImageIndex]} 
            alt={`Gallery Preview Snapshot ${currentImageIndex + 1}`} 
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 1600px" // PERBAIKAN: Optimasi ukuran muat gambar
            className="w-full h-auto max-h-[75vh] object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
          />
        </div>

        {/* Label Counter (Menghapus backdrop-blur-sm, mengganti dengan bg solid) */}
        {gallery.length > 1 && (
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-[#050505] px-3 py-2 border border-white/10 text-white font-mono text-[10px] md:text-xs tracking-widest z-20">
            0{currentImageIndex + 1} <span className="text-gray-500">/ 0{gallery.length}</span>
          </div>
        )}
      </div>
    </section>
  );
}