'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import AnimatedLogo from "@/components/ui/AnimatedLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 1. KUNCI PERBAIKAN: Navbar diubah menjadi fixed agar melayang dan mengikuti scroll
    <nav className="fixed top-0 left-0 right-0 w-full border-b border-white/10 bg-[#0a0a0e]/80 backdrop-blur-md z-[100] transform-gpu">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-4 flex justify-between items-center w-full relative">
        
        {/* A. Logo Animasi */}
        <AnimatedLogo />

        {/* B. Menu Navigasi Desktop bergaya IBM Carbon (Monospace, Uppercase) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-xs font-mono tracking-widest uppercase text-gray-400 w-max">
          <Link href="/experience" className="hover:text-white transition-colors">Pengalaman</Link>
          <Link href="/projects" className="hover:text-white transition-colors">Proyek</Link>
          <Link href="/datasets" className="hover:text-white transition-colors">Dataset</Link>
          <Link href="/certifications" className="hover:text-white transition-colors">Sertifikasi</Link>
        </div>

        {/* C. Tombol Contact & Toggle Mobile */}
        <div className="flex items-center gap-4 z-10">
          {/* Tombol Desktop Diubah jadi kaku (rounded-none), warna solid, tanpa gradien, font-mono */}
          <Link 
            href="/contacts"
            className="hidden md:flex items-center justify-center bg-brand-blue px-6 py-2 font-mono text-xs font-semibold text-white hover:bg-[#0f52d6] transition-colors rounded-none uppercase tracking-widest border border-transparent"
          >
            Hubungi Saya
          </Link>

          {/* Tombol Hamburger Mobile */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-none border border-transparent hover:border-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 3. Dropdown Menu Mobile bergaya Konsol Terstruktur */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden z-50">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-left font-mono text-xs tracking-widest uppercase text-gray-400">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-white hover:pl-2 transition-all border-b border-white/5 pb-3">&gt; Beranda</Link>
              <Link href="/experience" onClick={() => setIsOpen(false)} className="hover:text-white hover:pl-2 transition-all border-b border-white/5 pb-3">&gt; Pengalaman</Link>
              <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-white hover:pl-2 transition-all border-b border-white/5 pb-3">&gt; Proyek</Link>
              <Link href="/datasets" onClick={() => setIsOpen(false)} className="hover:text-white hover:pl-2 transition-all border-b border-white/5 pb-3">&gt; Dataset</Link>
              <Link href="/certifications" onClick={() => setIsOpen(false)} className="hover:text-white hover:pl-2 transition-all border-b border-white/5 pb-3">&gt; Sertifikasi</Link>
            </div>
            
            <Link 
              href="/contacts"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full bg-brand-blue px-6 py-4 font-mono font-bold text-xs tracking-widest uppercase text-white mt-2 hover:bg-[#0f52d6] transition-colors rounded-none"
            >
              Execute_Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}