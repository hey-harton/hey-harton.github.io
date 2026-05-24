import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#0a0a0e] pt-16 pb-8 transform-gpu">
      
      {/* Latar Belakang Grid Teknis */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none opacity-50"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Bagian Atas: Brand & Tautan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Info Brand (Kiri) */}
          <div className="lg:col-span-4 flex flex-col gap-6 border-r-0 lg:border-r border-white/5 lg:pr-10">
            <p className="text-brand-blue font-mono text-xs tracking-widest uppercase">
              &gt; END_OF_PAGE
            </p>
            <Link href="/" className="text-4xl font-bold text-white tracking-tighter">
              HAS<span className="text-brand-blue">.</span>
            </Link>
            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-sm text-justify">
              Merancang jaringan enterprise yang tangguh, meningkatkan skala lingkungan cloud, dan menerapkan kecerdasan data presisi.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="w-2 h-2 bg-brand-green animate-pulse"></span>
              <span className="text-xs font-mono text-brand-green uppercase tracking-widest">[ NETWORK: SECURE ]</span>
            </div>
          </div>

          {/* Grid Navigasi (Kanan) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 lg:pl-4">
            
            {/* Sitemap */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-mono font-semibold text-xs tracking-widest uppercase border-b border-white/10 pb-2 mb-2">/ Direktori</h4>
              <Link href="/about" className="text-gray-400 hover:text-white hover:pl-2 transition-all font-mono text-sm w-max">&gt; Tentang</Link>
              <Link href="/experience" className="text-gray-400 hover:text-white hover:pl-2 transition-all font-mono text-sm w-max">&gt; Pengalaman</Link>
              <Link href="/projects" className="text-gray-400 hover:text-white hover:pl-2 transition-all font-mono text-sm w-max">&gt; Proyek</Link>
              <Link href="/certifications" className="text-gray-400 hover:text-white hover:pl-2 transition-all font-mono text-sm w-max">&gt; Sertifikasi</Link>
            </div>

            {/* Sosial Media */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-mono font-semibold text-xs tracking-widest uppercase border-b border-white/10 pb-2 mb-2">/ Terhubung</h4>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors font-mono text-sm flex items-center gap-2 w-max group">
                LinkedIn <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors font-mono text-sm flex items-center gap-2 w-max group">
                GitHub <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors font-mono text-sm flex items-center gap-2 w-max group">
                Instagram <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Kontak */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-mono font-semibold text-xs tracking-widest uppercase border-b border-white/10 pb-2 mb-2">/ Kontak</h4>
              <span className="text-gray-400 font-mono text-sm">Yogyakarta, ID</span>
              <a href="mailto:hartonoadjisusanto@gmail.com" className="text-gray-400 hover:text-brand-blue transition-colors font-mono text-sm w-max break-all">hartonoadjisusanto<br/>@gmail.com</a>
            </div>

          </div>
        </div>

        {/* Bagian Bawah: Copyright & Legal (Gaya Log Terminal) */}
        {/* PERBAIKAN: Mengubah justify-between menjadi justify-center agar teks berada tepat di tengah */}
        <div className="relative flex justify-center items-center pt-6 mt-8 border-t border-white/10 text-xs font-mono text-gray-500 uppercase tracking-widest bg-white/[0.01] px-4 py-4 text-center">
          
          {/* Crosshairs Pengunci Footer */}
          <Crosshair className="absolute -top-[7px] -left-[7px] text-brand-blue/50" />
          <Crosshair className="absolute -top-[7px] -right-[7px] text-brand-blue/50" />
          <Crosshair className="absolute -bottom-[7px] -left-[7px] text-brand-blue/50" />
          <Crosshair className="absolute -bottom-[7px] -right-[7px] text-brand-blue/50" />

          <p>&copy; {new Date().getFullYear()} HARTONO ADJI SUSANTO. ALL RIGHTS RESERVED.</p>
        </div>

      </div>
    </footer>
  );
}