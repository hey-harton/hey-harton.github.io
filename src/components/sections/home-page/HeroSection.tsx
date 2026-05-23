import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; 

// --- Komponen Ikon Brand SVG (Tetap Sama) ---
const GithubIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg> );
const LinkedinIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> );
const InstagramIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> );

// --- Komponen Ornamen Geometris ---
const OrnamentZigzag = ({ className }: { className?: string }) => ( <svg width="45" height="15" viewBox="0 0 45 15" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M1 7.5L8.5 1L16 7.5L23.5 1L31 7.5L38.5 1L44 6.5" /></svg> );
const OrnamentCircle = ({ className }: { className?: string }) => ( <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" className={className}><circle cx="15" cy="15" r="14" /></svg> );
const OrnamentCross = ({ className }: { className?: string }) => ( <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M10 1V19M1 10H19" /></svg> );
const OrnamentTriangle = ({ className }: { className?: string }) => ( <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M15 2L28 28H2L15 2Z" /></svg> );

export default function HeroSection() {
  return (
    <section id="home" className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16 relative z-10 w-full pt-12 sm:pt-16 md:pt-24 lg:pt-32 pb-20 overflow-hidden">
      
      {/* Kolom Kiri: Teks & Tombol */}
      <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:pr-10 z-20">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.1] md:leading-[1.05] tracking-tighter mb-6 md:mb-8 transform-gpu">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
              Hartono Adji Susanto.
            </span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl leading-relaxed text-lg sm:text-xl md:text-2xl font-light tracking-wide flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2 items-center">
            <span>Architecting</span>
            <span className="text-brand-blue/50 hidden sm:inline">•</span>
            <span>AI-Assisted</span>
            <span className="text-brand-blue/50 hidden sm:inline">•</span>
            <span>Cloud Infrastructure</span>
            <span className="text-brand-blue/50 hidden sm:inline">•</span>
            <span>Network Engineering</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2 md:mt-4 items-start sm:items-center">
          <Link 
            href="/about"
            className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-white text-black px-8 py-4 font-bold hover:bg-brand-blue hover:text-white transition-all duration-200 shadow-[4px_4px_0px_rgba(59,130,246,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transform-gpu"
          >
            <span>ABOUT ME</span> <ArrowRight size={18} className="transform-gpu group-hover:translate-x-1" />
          </Link>
          
          <div className="flex gap-4 w-full sm:w-auto justify-center sm:justify-start">
            <a href="#" aria-label="GitHub" className="p-4 bg-transparent border border-white/10 hover:border-brand-blue hover:text-brand-blue transition-colors duration-200 transform-gpu">
              <GithubIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-4 bg-transparent border border-white/10 hover:border-brand-blue hover:text-brand-blue transition-colors duration-200 transform-gpu">
              <LinkedinIcon />
            </a>
            <a href="#" aria-label="Instagram" className="p-4 bg-transparent border border-white/10 hover:border-brand-blue hover:text-brand-blue transition-colors duration-200 transform-gpu">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Foto Profil */}
      <div className="flex-1 flex justify-center items-center relative min-h-[350px] md:min-h-[450px] w-full mt-8 md:mt-0">
        <OrnamentZigzag className="absolute top-0 left-4 md:left-10 text-gray-400 -rotate-12 hidden md:block" />
        <OrnamentCircle className="absolute top-10 right-0 text-gray-500 opacity-50 hidden md:block" />
        <OrnamentCross className="absolute bottom-10 right-4 md:right-10 text-brand-green hidden md:block" />
        <OrnamentTriangle className="absolute bottom-20 left-0 text-brand-blue opacity-70 rotate-12 hidden md:block" />

        {/* OPTIMASI: Menghapus will-change-transform yang memakan RAM & tambah transform-gpu */}
        <div className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_60%)] rounded-full pointer-events-none transform-gpu translate-z-0"></div>
        
        <div className="relative w-[260px] h-[300px] sm:w-72 sm:h-80 md:w-[350px] md:h-[450px] transform-gpu translate-z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-20 -rotate-6 md:-rotate-6 transform origin-center rounded-sm"></div>
          <div className="absolute inset-0 border border-white/20 rotate-3 md:rotate-3 transform origin-center rounded-sm"></div>

          <div className="absolute inset-0 overflow-hidden bg-[#030303] z-10 flex items-center justify-center border border-white/10 rounded-sm">
             <Image 
               src="/profile.png" 
               alt="Hartono Adji Susanto" 
               fill 
               priority
               sizes="(max-width: 768px) 260px, 350px"
               className="object-cover object-bottom grayscale hover:grayscale-0 transition-all duration-300 transform-gpu" 
             />
          </div>
        </div>
      </div>
      
    </section>
  );
}