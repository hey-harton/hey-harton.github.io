import { Cpu } from "lucide-react";

export default function ExperienceHeader() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-20 mt-12">
      
      <div className="flex flex-col items-start">
        {/* Label Atas */}
        <div className="flex items-center gap-2 text-brand-blue text-xs font-mono uppercase tracking-widest mb-6">
          <Cpu size={14} className="animate-pulse" />
          <span>Infrastructural Track Record</span>
        </div>
        
        {/* Judul Utama (Dibatasi max-w-4xl agar barisnya patah dengan rapi) */}
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-extrabold text-white tracking-tighter leading-[1.05] mb-8 max-w-4xl">
          Architecting Resilient Operations.
        </h1>
        
        {/* Deskripsi (Dibatasi max-w-2xl agar tidak terlalu panjang ke kanan) */}
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
          Menyatukan rekayasa jaringan enterprise, rekayasa data cerdas, dan kepemimpinan taktis komunitas untuk membangun ekosistem digital yang andal dan terskala.
        </p>
      </div>
      
      {/* Garis batas arsitektural */}
      <div className="w-full h-px bg-white/10 mt-16"></div>
      
    </section>
  );
}