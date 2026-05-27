import { Code2, Database, Layout, Cloud, Network } from "lucide-react";
import { ReactNode } from "react"; 

// Mendukung dua jenis data (format lama vs format baru yang sudah di-upgrade)
interface TechCategory {
  category?: string; 
  tools?: string;    
  status?: string;  
}

interface OverviewSectionProps {
  overview: ReactNode; 
  technologies?: any[]; // Dibuat 'any' sementara agar bisa menerima string (lama) atau object (baru)
  features?: string[];
}

export default function OverviewSection({ overview, technologies = [], features = [] }: OverviewSectionProps) {
  
  // FUNGSI CERDAS YANG SUDAH KEBAL ERROR
  const getTechIcon = (category: string = "") => {
    // Jika category kosong/undefined, langsung kembalikan ikon Code2 default tanpa error
    if (!category) return <Code2 size={28} strokeWidth={1} />;
    
    const lower = category.toLowerCase();
    if (lower.includes("data") || lower.includes("db") || lower.includes("sql")) return <Database size={28} strokeWidth={1} />;
    if (lower.includes("cloud") || lower.includes("host") || lower.includes("server")) return <Cloud size={28} strokeWidth={1} />;
    if (lower.includes("network") || lower.includes("jaringan") || lower.includes("cisco")) return <Network size={28} strokeWidth={1} />;
    if (lower.includes("frame") || lower.includes("web") || lower.includes("ui")) return <Layout size={28} strokeWidth={1} />;
    return <Code2 size={28} strokeWidth={1} />;
  };

  return (
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1600px] mx-auto mb-16 md:mb-24 relative">
      
      <div className="absolute left-4 md:left-12 lg:left-16 top-0 bottom-0 w-px bg-white/5 hidden lg:block"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 mb-16 relative z-10 pl-0 lg:pl-10">
        
        <div className="lg:col-span-4 border-b border-white/10 lg:border-none pb-6 lg:pb-0">
          <p className="text-brand-blue font-mono text-[10px] md:text-xs tracking-widest mb-3 uppercase">
            &gt; INDEX_01: ARCHITECTURE
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight uppercase break-words">
            Tantangan & <br className="hidden lg:block"/>
            Arsitektur<span className="text-brand-blue">_</span>
          </h2>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-10 md:gap-12 mt-4 lg:mt-0">
          <div className="text-sm md:text-base lg:text-lg text-gray-400 font-light leading-relaxed text-left prose prose-invert max-w-none prose-p:mb-6 font-mono">
            {overview}
          </div>

          {features && features.length > 0 && (
            <div className="bg-[#050505] border border-white/10 p-5 md:p-8 rounded-none relative">
              <div className="absolute top-0 right-0 bg-white/5 px-2 py-1 text-[8px] md:text-[9px] font-mono tracking-widest text-gray-500 uppercase border-b border-l border-white/10">
                MODULES
              </div>
              <h3 className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-brand-blue font-semibold mb-6 md:mb-8 border-b border-white/10 pb-2 w-max">
                / Fitur_Utama_Platform
              </h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 font-light text-xs md:text-sm">
                    <span className="text-brand-blue font-mono font-bold shrink-0 mt-0.5">&gt;</span>
                    <span className="leading-relaxed text-left">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>

      {/* GRID TEKNOLOGI INTI */}
      <div className="pt-10 md:pt-16 border-t border-white/10 relative z-10 pl-0 lg:pl-10">
        <h3 className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-gray-500 font-semibold mb-8">
          / Teknologi_Inti_Yang_Dikerahkan
        </h3>
        
        <div className="bg-white/10 gap-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/10">
          
          {technologies?.map((tech, i) => {
            // DEFENSIVE PROGRAMMING: Mengecek apakah data tech ini pakai format lama (string) atau baru (object)
            const isOldFormat = typeof tech === "string";
            
            // Jika format lama, gunakan nilai fallback default agar tidak error
            const categoryName = isOldFormat ? "General Stack" : (tech?.category || "Technology");
            const toolsList = isOldFormat ? tech : (tech?.tools || "Not Specified");
            const techStatus = isOldFormat ? "ACTIVE" : (tech?.status || "ACTIVE");

            return (
              <div key={i} className="bg-[#050505] p-6 sm:p-8 hover:bg-[#0c0c11] transition-colors group flex flex-col h-full relative overflow-hidden">
                
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 ease-in-out"></div>

                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div className="text-gray-500 group-hover:text-brand-blue transition-colors duration-300">
                    {getTechIcon(categoryName)}
                  </div>
                  
                  <span className="text-[9px] font-mono text-gray-600 group-hover:text-brand-blue/70 uppercase tracking-widest border border-transparent group-hover:border-brand-blue/30 px-2 py-0.5 transition-colors">
                    {techStatus}
                  </span>
                </div>
                
                <h4 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3 tracking-tight uppercase">
                  {categoryName}
                </h4>
                
                <p className="text-gray-400 font-mono text-[9px] md:text-[10px] leading-relaxed mt-auto uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                  {toolsList}
                </p>
              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
}