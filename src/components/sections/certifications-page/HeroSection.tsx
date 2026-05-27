import { Award } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function HeroSection() {
  return (
    // PERBAIKAN: Mengubah struktur luar agar sama persis dengan ProjectsHeader dan DatasetHeader
    <section className="relative w-full border-b border-white/10 bg-transparent overflow-hidden pt-28 md:pt-40 pb-16 md:pb-24">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 flex flex-col justify-center">
        
        {/* Panel Judul Kiri ala Blueprint */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 max-w-4xl w-full">
          
          <Crosshair className="absolute -top-[7px] -left-[7.5px] text-brand-green z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7.5px] text-brand-green z-20" />

          <div className="flex flex-col items-start pt-4">
            
            {/* Label Terminal Path */}
            <div className="flex items-center gap-3 text-brand-green text-[10px] md:text-xs font-mono uppercase tracking-widest mb-6 md:mb-8">
              <Award size={14} className="md:animate-pulse" />
              <span>&gt; DIRECTORY: /CREDENTIALS/CERTIFICATIONS</span>
            </div>
            
            {/* PERBAIKAN: Teks rata kiri, tanpa gradien, font size disesuaikan, ditambahkan cursor '_' */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] mb-6 md:mb-8 uppercase break-words w-full">
              Sertifikasi & <br className="hidden md:block" />
              <span className="text-brand-green">Validasi Teknis.</span>
              <span className="md:animate-pulse text-white">_</span>
            </h1>
            
            {/* PERBAIKAN: Diterjemahkan ke Bahasa Indonesia dengan gaya font-mono agar konsisten */}
            <p className="text-gray-400 text-sm md:text-lg lg:text-xl font-mono font-light leading-relaxed max-w-3xl text-left">
              Rekam jejak keunggulan bersertifikat dalam arsitektur jaringan enterprise, analitik data cerdas, dan operasi infrastruktur komputasi cloud.
            </p>

          </div>
        </div>
        
      </div>
    </section>
  );
}