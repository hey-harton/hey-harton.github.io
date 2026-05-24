import Image from "next/image";
import { Code2, CheckCircle2 } from "lucide-react";
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
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1400px] mx-auto mb-32 transform-gpu">
      
      {/* Bagian Atas: Judul & Deskripsi Narasi */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
        
        {/* Kolom Kiri: Judul */}
        <div className="lg:col-span-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tantangan & Arsitektur.</h2>
          <div className="w-16 h-1 bg-brand-blue"></div>
        </div>

        {/* Kolom Kanan: Teks Deskripsi & FITUR */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Teks sudah rata kiri-kanan (justify) dan rapi */}
          <div className="text-lg md:text-xl text-gray-300 font-light leading-relaxed text-justify prose prose-invert max-w-none prose-p:mb-6">
            {overview}
          </div>

          {/* === FITUR UTAMA PROYEK === */}
          {features && features.length > 0 && (
            <div className="bg-white/5 border border-white/10 p-8">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-6">Fitur Utama</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={20} />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>

      {/* Bagian Bawah: Core Technologies */}
      <div className="pt-10 border-t border-white/10">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-6">Teknologi Inti</h3>
        <div className="flex flex-wrap gap-4">
          {/* 3. KUNCI PERBAIKAN: Mapping data tech dinamis dari Markdown */}
          {technologies.map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 px-5 py-3 border border-white/10 bg-white/5 text-gray-200 text-sm font-medium hover:border-brand-blue hover:text-white hover:bg-white/10 transition-all cursor-default"
            >
              {/* Jika di file .md icon diisi, tampilkan logonya. Jika kosong (""), tampilkan logo </> bawaan */}
              {tech.icon && tech.icon !== "" ? (
                <div className="relative w-5 h-5 flex-shrink-0">
                  <Image 
                    src={tech.icon} 
                    alt={`${tech.name} logo`} 
                    fill 
                    className="object-contain" 
                  />
                </div>
              ) : (
                <Code2 size={18} className="text-gray-400 flex-shrink-0" />
              )}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}