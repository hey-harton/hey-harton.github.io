'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import AnimatedLogo from "@/components/ui/AnimatedLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 1. Tag terluar memanjang penuh layar
    <nav className="relative w-full border-b border-white/10 bg-transparent">
      
      {/* 2. KUNCI UTAMA: max-w dan padding disamakan persis dengan halaman Projects & Experience */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-4 flex justify-between items-center w-full relative">
        
        {/* A. Logo HTN Animasi (Kiri) */}
        <AnimatedLogo />

        {/* B. Menu Navigasi Desktop (Tengah) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 lg:gap-8 text-sm font-medium text-gray-300 w-max">
          <Link href="/experience" className="hover:text-brand-blue transition-colors">Experience</Link>
          <Link href="/projects" className="hover:text-brand-blue transition-colors">Projects</Link>
          <Link href="/datasets" className="hover:text-brand-blue transition-colors">Datasets</Link>
          <Link href="/certifications" className="hover:text-brand-blue transition-colors">Certifications</Link>
        </div>

        {/* C. Tombol Contact & Toggle Mobile (Kanan) */}
        <div className="flex items-center gap-4 z-10">
          {/* Tombol Desktop Diubah Menjadi Link */}
          <Link 
            href="/contacts"
            className="hidden md:flex items-center justify-center bg-gradient-to-r from-brand-blue to-brand-green px-6 py-2 font-bold text-sm text-white hover:opacity-90 transition-transform hover:scale-105"
          >
            Contact Me
          </Link>

          {/* Tombol Hamburger Mobile */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 3. Dropdown Menu Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#050505]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden z-50 animate-fade-in">
          {/* Padding internal menu mobile disesuaikan */}
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 flex flex-col gap-6">
            <div className="flex flex-col gap-6 text-center font-medium text-gray-300">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-brand-blue transition-colors">Home</Link>
              <Link href="/experience" onClick={() => setIsOpen(false)} className="hover:text-brand-blue transition-colors">Experience</Link>
              <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-brand-blue transition-colors">Projects</Link>
              <Link href="/datasets" onClick={() => setIsOpen(false)} className="hover:text-brand-blue transition-colors">Datasets</Link>
              <Link href="/certifications" onClick={() => setIsOpen(false)} className="hover:text-brand-blue transition-colors">Certifications</Link>
            </div>
            {/* Tombol Mobile Diubah Menjadi Link */}
            <Link 
              href="/contacts"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full bg-gradient-to-r from-brand-blue to-brand-green px-6 py-4 font-bold text-sm text-white mt-4 hover:opacity-90 transition-opacity"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}