"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

// Tanda Plus (Crosshair) untuk estetika arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="10" height="10" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk memantau pergerakan scroll
  useEffect(() => {
    const toggleVisibility = () => {
      // Tombol akan muncul setelah layar di-scroll ke bawah sejauh 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fungsi untuk mengeksekusi scroll ke atas secara halus
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // PERBAIKAN 1: 'group' dipindah ke sini agar hover mendeteksi seluruh area
    // PERBAIKAN 2: transform-gpu dihapus, posisi diubah menjadi bottom-4/6 untuk HP
    <div 
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 transition-all duration-500 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        // PERBAIKAN 3: Warna default diubah menjadi aksen biru (border dan teks biru)
        className="relative bg-[#050505] hover:bg-brand-blue border border-brand-blue/40 hover:border-brand-blue p-3 md:p-4 text-brand-blue hover:text-[#050505] transition-all duration-300 rounded-none flex items-center justify-center shadow-lg"
      >
        {/* Ornamen Crosshair khas Carbon Design, menyesuaikan kontras saat di-hover */}
        <Crosshair className="absolute -top-[5px] -left-[5px] text-brand-blue group-hover:text-[#050505] transition-colors" />
        <Crosshair className="absolute -bottom-[5px] -right-[5px] text-brand-blue group-hover:text-[#050505] transition-colors" />

        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>
      
      {/* Label Teknis: Sekarang akan muncul dengan sempurna saat tombol di-hover */}
      <div className="absolute -bottom-5 right-0 text-[9px] font-mono text-brand-blue/80 tracking-widest text-right whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        CMD: RETURN_0
      </div>
    </div>
  );
}