import Image from "next/image";
import { ArrowRight } from "lucide-react"; 

// --- Komponen Ikon Brand SVG ---
const GithubIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg> );
const LinkedinIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> );
const BehanceIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.175H16.208v2.24H22V7.175zM9.479 12.392c1.479-.475 2.502-1.637 2.502-3.418 0-2.602-1.956-3.83-4.81-3.83H2v13.682h5.794c3.042 0 5.155-1.42 5.155-4.093 0-1.488-.93-2.585-2.18-2.905l-1.29-.436zm-3.64-5.06h1.22c.983 0 1.57.447 1.57 1.25s-.59 1.265-1.666 1.265H5.838V7.331zm1.378 9.324H5.838v-3.08h1.49c1.077 0 1.83.473 1.83 1.503 0 1.133-.865 1.577-1.98 1.577h.04zM16.924 18.825c2.907 0 4.607-1.905 4.607-5.088 0-3.37-2.074-5.034-4.606-5.034-2.73 0-4.85 2.05-4.85 5.068 0 3.018 2.052 5.054 4.85 5.054zm0-7.852c1.233 0 1.946.88 2.08 2.29h-4.084c.164-1.465.918-2.29 2.004-2.29zM15 15.195h4.636c-.164 1.242-1.072 1.636-2.008 1.636-1.127 0-1.84-.666-1.928-1.636H15z" /></svg> );

// --- Komponen Ornamen Geometris ---
const OrnamentZigzag = ({ className }: { className?: string }) => ( <svg width="45" height="15" viewBox="0 0 45 15" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M1 7.5L8.5 1L16 7.5L23.5 1L31 7.5L38.5 1L44 6.5" /></svg> );
const OrnamentCircle = ({ className }: { className?: string }) => ( <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" className={className}><circle cx="15" cy="15" r="14" /></svg> );
const OrnamentCross = ({ className }: { className?: string }) => ( <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M10 1V19M1 10H19" /></svg> );
const OrnamentTriangle = ({ className }: { className?: string }) => ( <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M15 2L28 28H2L15 2Z" /></svg> );

export default function Home() {
  return (
    <main className="w-full flex-1 flex flex-col min-h-[calc(100vh-80px)] relative overflow-hidden">
      
      {/* HERO SECTION - DIBERI BATASAN MAKSIMAL & PADDING */}
      <section id="home" className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10 w-full pt-16 md:pt-24 lg:pt-28 pb-20">
        
        {/* Kolom Kiri: Teks & Tombol */}
        <div className="flex-1 flex flex-col gap-6 lg:pr-10 z-20">
          <div>
            <p className="flex items-center gap-3 text-brand-green font-mono text-sm mb-4 tracking-widest uppercase">
              <span className="w-8 h-px bg-brand-green"></span>
              HI, I AM HARTONO ADJI S.
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold leading-[1.05] tracking-tighter mb-8">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                AI-Assisted Cloud
              </span> <br />
              Infrastructure.
            </h1>
            
            {/* DESKRIPSI DIRAMPINGKAN & DIBUAT LEBIH ELEGAN */}
            <p className="text-gray-400 max-w-xl leading-relaxed text-lg font-light">
              Data Science student bridging the gap between intelligent analytics and scalable infrastructure. 
              Specializing in full-cycle deployment and enterprise-grade network provisioning.
            </p>
            
            {/* DAFTAR TEKNOLOGI DIPISAH MENJADI BULLET POINTS */}
            <ul className="mt-6 space-y-2 text-sm text-gray-500 font-mono tracking-wide">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-blue"></span>
                <span>Web Stack: Next.js, Tailwind, Turso, Supabase</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-green"></span>
                <span>Cloud & Networking: Azure, GCP, Docker, Mikrotik, Cisco</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-8 items-start sm:items-center">
            {/* TOMBOL DENGAN SUDUT TAJAM (Menghapus rounded-xl) */}
            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 font-bold hover:bg-brand-blue hover:text-white transition-all shadow-[4px_4px_0px_rgba(59,130,246,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              <span>EXPLORE MY WORK</span> <ArrowRight size={18} />
            </button>
            
            <div className="flex gap-4">
              <a href="#" aria-label="GitHub" className="p-4 bg-transparent border border-white/10 hover:border-brand-blue hover:text-brand-blue transition-all">
                <GithubIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-4 bg-transparent border border-white/10 hover:border-brand-blue hover:text-brand-blue transition-all">
                <LinkedinIcon />
              </a>
              <a href="#" aria-label="Behance" className="p-4 bg-transparent border border-white/10 hover:border-brand-blue hover:text-brand-blue transition-all">
                <BehanceIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Foto Profil (Tetap Sama, hanya penyesuaian margin atas) */}
        <div className="flex-1 flex justify-center items-center relative min-h-[450px] w-full mt-12 lg:mt-0">
          <OrnamentZigzag className="absolute top-0 left-10 text-gray-400 -rotate-12 animate-pulse" />
          <OrnamentCircle className="absolute top-10 right-0 text-gray-500 opacity-50" />
          <OrnamentCross className="absolute bottom-10 right-10 text-brand-green" />
          <OrnamentTriangle className="absolute bottom-20 left-0 text-brand-blue opacity-70 rotate-12" />

          <div className="absolute w-[400px] h-[400px] bg-brand-blue/10 blur-[120px] rounded-full"></div>
          
          <div className="relative w-72 h-80 md:w-[350px] md:h-[450px]">
            {/* Border kotak tajam (menghapus rounded) */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-20 -rotate-6 md:-rotate-6 transform origin-center"></div>
            <div className="absolute inset-0 border border-white/20 rotate-3 md:rotate-3 transform origin-center"></div>

            <div className="absolute inset-0 overflow-hidden bg-[#030303] z-10 flex items-center justify-center border border-white/10">
               <Image 
                 src="/profile.png" 
                 alt="Hartono Adji Susanto" 
                 fill 
                 priority
                 className="object-cover object-bottom grayscale hover:grayscale-0 transition-all duration-700" 
               />
            </div>
          </div>
        </div>
        
      </section>
    </main>
  );
}