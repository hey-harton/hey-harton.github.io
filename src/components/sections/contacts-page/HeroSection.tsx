import { Terminal } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function HeroSection() {
  return (
    // Struktur disamakan dengan header halaman lain agar Navbar bisa menempel rapi tanpa gap hitam
    <section className="relative w-full border-b border-white/10 bg-transparent overflow-hidden pt-32 md:pt-40 pb-20 md:pb-24 !mt-0">
      
      {/* Latar Belakang Grid Teknis (Opasitas 0.08) - Merambat dari balik Navbar */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Panel Judul Kiri ala Blueprint */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10">
          
          <Crosshair className="absolute -top-[7px] -left-[7.5px] text-brand-green z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7.5px] text-brand-green z-20" />

          <div className="flex flex-col items-start pt-6 md:pt-8">
            
            {/* Label Terminal Path */}
            <div className="flex items-center gap-3 text-brand-green text-xs font-mono uppercase tracking-widest mb-8">
              <Terminal size={14} className="animate-pulse" />
              <span>&gt; DIRECTORY: /CONTACT/SECURE_CHANNEL</span>
            </div>
            
            {/* Gradien dihapus, teks diratakan kiri, dan diubah ke huruf kapital tegas */}
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] mb-8 uppercase">
              Establish <br className="hidden md:block" />
              <span className="text-brand-green">Connection.</span>
              <span className="animate-pulse text-white">_</span>
            </h1>
            
            {/* Teks diterjemahkan dengan gaya bahasa teknis/profesional */}
            <p className="text-gray-400 text-lg md:text-xl font-mono font-light leading-relaxed max-w-3xl text-left">
              Terbuka untuk diskusi teknis terkait rekayasa jaringan enterprise, analitik data klinis, atau sekadar inisiasi kolaborasi strategis infrastruktur IT.
            </p>

          </div>
        </div>
        
      </div>
    </section>
  );
}