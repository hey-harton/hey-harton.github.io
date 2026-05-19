"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1400px] mx-auto mb-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Platform Interface.</h2>
          <div className="w-16 h-1 bg-brand-green"></div>
        </div>
        
        {gallery.length > 1 && (
          <div className="flex gap-4">
            <button onClick={prevSlide} className="p-4 border border-white/20 text-white hover:bg-white hover:text-black transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-4 border border-white/20 text-white hover:bg-white hover:text-black transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>

      {/* PERUBAHAN: bg-[#0d1117] diubah menjadi bg-transparent */}
      <div className="relative w-full overflow-hidden bg-transparent border border-white/10 group">
        <div className="relative w-full flex justify-center bg-transparent">
          <Image 
            src={gallery[currentImageIndex]} 
            alt={`Gallery Preview Snapshot ${currentImageIndex + 1}`} 
            width={1920}
            height={1080}
            className="w-full h-auto object-contain transition-opacity duration-500" 
          />
        </div>

        {gallery.length > 1 && (
          <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm px-4 py-2 border border-white/10 text-white font-mono text-sm tracking-widest">
            0{currentImageIndex + 1} <span className="text-gray-500">/ 0{gallery.length}</span>
          </div>
        )}
      </div>
    </section>
  );
}