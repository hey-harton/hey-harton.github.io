import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Terminal } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function FeaturedProjectsSection() {
  // DATA DINAMIS: Kamu bisa mengosongkan array ini ( [] ) untuk mengetes tampilan "Data Kosong"
  const projects = [
    {
      id: "medical-dashboard",
      title: "Medical Intelligence Dashboard",
      category: "Sains Data",
      description: "Dasbor data klinis komprehensif untuk analitik biometri presisi menggunakan modern web stack.",
      image: "/projects/medical.jpg", // Ganti path
      resolution: "1200x800",
      color: "brand-blue" // brand-blue atau brand-green
    },
    {
      id: "datasea-portal",
      title: "Datasea Archive Portal",
      category: "Infrastruktur Web",
      description: "Repositori file organisasi terpusat dengan sinkronisasi waktu nyata menggunakan Turso DB.",
      image: "/projects/datasea.jpg", // Ganti path
      resolution: "1200x800",
      color: "brand-green"
    }
  ];

  return (
    <section className="relative w-full bg-transparent overflow-hidden border-t border-white/10">
      
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 relative z-10 flex flex-col justify-center min-h-[60vh]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 border-b border-white/10 pb-6 md:pb-8 gap-6">
          <div>
            <p className="text-brand-blue font-mono text-xs md:text-sm tracking-widest mb-3 uppercase">
              &gt; INDEX_01: HIGHLIGHTS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Proyek Unggulan<span className="text-brand-blue">.</span>
            </h2>
          </div>
          
          {/* Tombol hanya muncul jika ada data proyek */}
          {projects.length > 0 && (
            <Link 
              href="/projects" 
              className="group flex items-center justify-center w-full md:w-auto gap-3 text-[10px] md:text-xs font-mono font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-widest border border-white/10 bg-[#050505] hover:bg-white/5 px-6 py-4 md:py-3 rounded-none"
            >
              <span>Akses Direktori</span> 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* LOGIKA CONDITIONAL: Tampilkan pesan jika array kosong, render grid jika ada data */}
        {projects.length === 0 ? (
          
          <div className="w-full border border-white/10 bg-[#050505] p-10 md:p-16 flex flex-col items-center justify-center text-center relative group">
            <Crosshair className="absolute -top-[7px] -left-[7px] text-gray-600 z-20" />
            <Crosshair className="absolute -top-[7px] -right-[7px] text-gray-600 z-20" />
            <Crosshair className="absolute -bottom-[7px] -left-[7px] text-gray-600 z-20" />
            <Crosshair className="absolute -bottom-[7px] -right-[7px] text-gray-600 z-20" />
            
            <Terminal size={48} className="text-gray-600 mb-6 group-hover:text-brand-blue transition-colors" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-widest uppercase">
              // DATA_NOT_FOUND
            </h3>
            <p className="text-gray-400 font-mono text-xs md:text-sm max-w-md">
              Repositori saat ini sedang dalam proses sinkronisasi. Belum ada entitas proyek yang dialokasikan untuk sektor ini.
            </p>
            <div className="mt-8 flex gap-2 items-center">
               <span className="w-2 h-2 bg-yellow-500 animate-pulse"></span>
               <span className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest">STATUS: COMPILING...</span>
            </div>
          </div>

        ) : (
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {projects.map((project, index) => (
              <Link key={index} href={`/projects/${project.id}`} className="group flex flex-col w-full cursor-pointer">
                
                {/* Bingkai Teknis */}
                <div className="w-full aspect-[16/9] relative bg-white/[0.02] border border-white/10 mb-6 md:mb-8 rounded-none">
                  <Crosshair className={`absolute -top-[7px] -left-[7px] text-${project.color} z-20`} />
                  <Crosshair className={`absolute -top-[7px] -right-[7px] text-${project.color} z-20`} />
                  <Crosshair className={`absolute -bottom-[7px] -left-[7px] text-${project.color} z-20`} />
                  <Crosshair className={`absolute -bottom-[7px] -right-[7px] text-${project.color} z-20`} />
                  
                  <div className="absolute inset-2 md:inset-3 border border-white/10 overflow-hidden bg-[#050505]">
                     <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                     />
                  </div>

                  <div className="absolute bottom-4 right-4 md:bottom-5 md:right-5 bg-[#0a0a0e] border border-white/10 px-2 py-0.5 text-[8px] md:text-[10px] font-mono text-gray-500 z-20">
                    RES: {project.resolution}
                  </div>
                </div>

                {/* Konten Teks */}
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <span className={`w-2 h-2 md:w-2.5 md:h-2.5 bg-${project.color}`}></span>
                  <span className={`text-[10px] md:text-xs font-mono text-${project.color} uppercase tracking-widest`}>
                    {project.category}
                  </span>
                </div>
                <h4 className={`text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 tracking-tight group-hover:text-${project.color} transition-colors`}>
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light text-left flex-1">
                  {project.description}
                </p>
                
                <div className={`inline-flex items-center mt-5 md:mt-6 gap-2 text-[10px] md:text-xs font-mono text-gray-500 group-hover:text-${project.color} transition-colors w-max uppercase tracking-widest border-b border-transparent group-hover:border-${project.color} pb-1`}>
                  Mulai Analisis <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>

              </Link>
            ))}
          </div>

        )}
      </div>
    </section>
  );
}