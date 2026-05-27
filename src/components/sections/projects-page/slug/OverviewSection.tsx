import Image from "next/image";
import { Code2 } from "lucide-react";
import { ReactNode } from "react"; 

interface TechItem {
  name: string;
  icon?: string;
}

interface OverviewSectionProps {
  overview: ReactNode; 
  technologies: TechItem[]; 
  features?: string[];
}

export default function OverviewSection({ overview, technologies = [], features = [] }: OverviewSectionProps) {
  return (
    // PERBAIKAN: transform-gpu dihapus untuk optimasi scrolling
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1600px] mx-auto mb-32 relative">
      
      {/* Garis vertikal estetika sebagai pemandu baca (opsional) */}
      <div className="absolute left-4 md:left-12 lg:left-16 top-0 bottom-0 w-px bg-white/5 hidden lg:block"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 relative z-10 pl-0 lg:pl-10">
        
        {/* Kolom Kiri: Judul Panel */}
        <div className="lg:col-span-4 border-b border-white/10 lg:border-none pb-6 lg:pb-0">
          <p className="text-brand-blue font-mono text-xs tracking-widest mb-3 uppercase">
            &gt; INDEX_01: ARCHITECTURE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
            Tantangan & <br className="hidden lg:block"/>
            Arsitektur<span className="text-brand-blue">_</span>
          </h2>
        </div>

        {/* Kolom Kanan: Teks Deskripsi & FITUR */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          {/* Teks diubah menjadi text-left untuk kerapian ala log dokumen, justify dihapus */}
          <div className="text-lg text-gray-400 font-light leading-relaxed text-left prose prose-invert max-w-none prose-p:mb-6 font-mono">
            {overview}
          </div>

          {/* === FITUR UTAMA PROYEK === */}
          {features && features.length > 0 && (
            <div className="bg-[#050505] border border-white/10 p-8 rounded-none relative">
              
              {/* Indikator Status di sudut */}
              <div className="absolute top-0 right-0 bg-white/5 px-2 py-1 text-[9px] font-mono tracking-widest text-gray-500 uppercase border-b border-l border-white/10">
                MODULES
              </div>

              <h3 className="text-xs uppercase font-mono tracking-widest text-brand-blue font-semibold mb-8 border-b border-white/10 pb-2 w-max">
                / Fitur_Utama_Platform
              </h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 font-light text-sm">
                    {/* CheckCircle diganti dengan chevron terminal agar lebih teknis */}
                    <span className="text-brand-blue font-mono font-bold shrink-0 mt-0.5">&gt;</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>

      {/* Bagian Bawah: Core Technologies */}
      <div className="pt-12 border-t border-white/10 relative z-10 pl-0 lg:pl-10">
        <h3 className="text-xs uppercase font-mono tracking-widest text-gray-500 font-semibold mb-6">/ Teknologi_Inti_Yang_Dikerahkan</h3>
        
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 px-4 py-2 border border-white/10 bg-[#050505] text-gray-400 text-xs font-mono uppercase tracking-wider hover:border-brand-blue hover:text-white transition-colors cursor-default rounded-none"
            >
              {tech.icon && tech.icon !== "" ? (
                <div className="relative w-4 h-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                  <Image 
                    src={tech.icon} 
                    alt={`${tech.name} logo`} 
                    fill 
                    className="object-contain" 
                  />
                </div>
              ) : (
                <Code2 size={16} className="text-gray-500 flex-shrink-0" />
              )}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}