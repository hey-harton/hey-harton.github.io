import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; 

// --- Komponen Ikon Brand SVG ---
const GithubIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg> );
const LinkedinIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> );
const InstagramIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> );

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function HeroSection() {
  return (
    // PERBAIKAN: Hapus min-h dan padding vertikal dari section utama. Gunakan h-screen agar memenuhi layar penuh dari atas tanpa sisa.
    <section id="home" className="relative w-full border-b border-white/10 bg-transparent overflow-hidden transform-gpu h-screen flex items-center">
      
      {/* Latar Belakang Grid Teknis */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 w-full gap-12 lg:gap-8 mt-16">
        
        {/* Kolom Kiri: Teks & Konsol Logika */}
        <div className="flex-1 flex flex-col justify-center lg:pr-10 z-20 border-r border-white/5 py-4">
          
          {/* Indikator Status ala Terminal */}
          <div className="flex items-center gap-3 mb-8 mt-4 lg:mt-0">
            <span className="w-2 h-2 bg-brand-blue animate-pulse"></span>
            <span className="text-xs font-mono text-brand-blue uppercase tracking-widest">[ SYSTEM: ONLINE ]</span>
          </div>

          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white mb-6">
              Hartono Adji Susanto<span className="text-brand-blue">.</span>
            </h1>
            
            {/* Jabatan dengan font-mono dan pemisah tegas */}
            <div className="flex flex-col gap-2 border-l-2 border-brand-blue pl-4 mt-6">
              <p className="text-gray-400 font-mono text-sm md:text-base tracking-wide">
                &gt; DATA ENGINEER
              </p>
              <p className="text-gray-400 font-mono text-sm md:text-base tracking-wide">
                &gt; NETWORK ENGINEER
              </p>
              <p className="text-gray-400 font-mono text-sm md:text-base tracking-wide">
                &gt; CLOUD ENGINEER
              </p>
              <p className="text-gray-400 font-mono text-sm md:text-base tracking-wide">
                &gt; ARCHITECTURE
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 border border-white/10 w-max">
            {/* Tombol dengan gaya kaku ala IBM */}
            <Link 
              href="/about"
              className="group flex items-center justify-center gap-4 bg-brand-blue text-white px-8 py-4 font-semibold hover:bg-[#0f52d6] transition-colors rounded-none"
            >
              <span>ACCESS PROFILE</span> 
              <ArrowRight size={18} className="transform-gpu group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="flex bg-[#0a0a0e]">
              <a href="#" aria-label="GitHub" className="p-4 border-l border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors rounded-none">
                <GithubIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-4 border-l border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors rounded-none">
                <LinkedinIcon />
              </a>
              <a href="#" aria-label="Instagram" className="p-4 border-l border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors rounded-none">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Foto Profil Rigid */}
        <div className="flex-1 flex justify-center lg:justify-end items-center relative w-full pt-8 lg:pt-0">
          
          <div className="relative w-full max-w-[380px] xl:max-w-[450px] aspect-[4/5] border border-white/10 bg-white/[0.02]">
            
            {/* Crosshairs di setiap sudut atas */}
            <Crosshair className="absolute -top-[7px] -left-[7px] text-brand-blue" />
            <Crosshair className="absolute -top-[7px] -right-[7px] text-brand-blue" />
            <Crosshair className="absolute -bottom-[7px] -left-[7px] text-brand-blue" />
            <Crosshair className="absolute -bottom-[7px] -right-[7px] text-brand-blue" />
            
            {/* Container Gambar */}
            <div className="absolute inset-4 sm:inset-6 lg:inset-8 border border-white/10 bg-[#050505] overflow-hidden">
               <Image 
                 src="/profile.png" 
                 alt="Hartono Adji Susanto" 
                 fill 
                 priority
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="object-cover object-bottom grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
               />
            </div>
            
            {/* Label Metadata di sudut bawah bingkai */}
            <div className="absolute bottom-4 right-8 bg-[#0a0a0e] border border-white/10 px-2 py-0.5 text-[10px] font-mono text-gray-500 z-20">
              IMG_SRC: ROOT/PROFILE
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
}