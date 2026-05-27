import { Terminal } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function HeroSection() {
  return (
    // PERBAIKAN: Padding atas disesuaikan untuk mobile (pt-28 md:pt-40) agar tidak mepet dengan Navbar
    <section className="relative w-full border-b border-white/10 bg-transparent overflow-hidden pt-28 md:pt-40 pb-16 md:pb-24 !mt-0">
      
      {/* Latar Belakang Grid Teknis (Opasitas 0.08) - Merambat dari balik Navbar */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Panel Judul Kiri ala Blueprint */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10">
          
          <Crosshair className="absolute -top-[7px] -left-[7.5px] text-brand-green z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7.5px] text-brand-green z-20" />

          <div className="flex flex-col items-start pt-4 md:pt-8">
            
            {/* Label Terminal Path: Ukuran font diperkecil di mobile (text-[10px]) */}
            <div className="flex items-center gap-3 text-brand-green text-[10px] md:text-xs font-mono uppercase tracking-widest mb-6 md:mb-8">
              <Terminal size={14} className="animate-pulse" />
              <span>&gt; DIRECTORY: /CONTACT/SECURE_CHANNEL</span>
            </div>
            
            {/* Judul: Diperkecil menjadi text-4xl di mode HP dan ditambah break-words */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] mb-6 md:mb-8 uppercase break-words">
              Establish <br className="hidden md:block" />
              <span className="text-brand-green">Connection.</span>
              <span className="animate-pulse text-white">_</span>
            </h1>
            
            {/* Deskripsi: Ukuran teks disesuaikan (text-sm) agar nyaman dibaca di layar kecil */}
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-mono font-light leading-relaxed max-w-3xl text-left">
              Terbuka untuk diskusi teknis terkait rekayasa jaringan enterprise, analitik data klinis, atau sekadar inisiasi kolaborasi strategis infrastruktur IT.
            </p>

          </div>
        </div>
        
      </div>
    </section>
  );
}