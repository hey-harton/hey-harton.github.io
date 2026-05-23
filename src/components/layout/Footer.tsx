import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-white/20 pt-16 pb-8 bg-transparent">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Bagian Atas: Brand & Tautan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Info Brand (Kiri) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="text-3xl font-bold text-white tracking-tighter">
              HAS<span className="text-brand-blue">.</span>
            </Link>
            <p className="text-gray-400 font-light leading-relaxed max-w-sm text-sm">
              Merancang jaringan enterprise yang tangguh, meningkatkan skala lingkungan cloud, dan menerapkan kecerdasan data presisi.
            </p>
          </div>

          {/* Grid Navigasi (Kanan) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Sitemap */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-2">Navigasi</h4>
              <Link href="/about" className="text-gray-400 hover:text-brand-blue transition-colors text-sm w-max">Tentang</Link>
              <Link href="/experience" className="text-gray-400 hover:text-brand-blue transition-colors text-sm w-max">Pengalaman</Link>
              <Link href="/projects" className="text-gray-400 hover:text-brand-blue transition-colors text-sm w-max">Proyek</Link>
              <Link href="/certifications" className="text-gray-400 hover:text-brand-blue transition-colors text-sm w-max">Sertifikasi</Link>
            </div>

            {/* Sosial Media */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-2">Terhubung</h4>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors text-sm flex items-center gap-1 w-max group">
                LinkedIn <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors text-sm flex items-center gap-1 w-max group">
                GitHub <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors text-sm flex items-center gap-1 w-max group">
                Instagram <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Kontak */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-2">Kontak</h4>
              <span className="text-gray-400 text-sm">Yogyakarta, Indonesia</span>
              <a href="mailto:hartonoadjisusanto@gmail.com" className="text-gray-400 hover:text-brand-blue transition-colors text-sm w-max">hartonoadjisusanto@gmail.com</a>
            </div>

          </div>
        </div>

        {/* Bagian Bawah: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Hartono Adji Susanto. Hak cipta dilindungi undang-undang.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Ketentuan Layanan</a>
          </div>
        </div>

      </div>
    </footer>
  );
}