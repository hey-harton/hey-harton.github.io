import { Server, Database, Code2, Network } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function TechStackSection() {
  const technologies = [
    { 
      icon: <Network size={32} strokeWidth={1} />, 
      category: "Jaringan Enterprise", 
      tools: "Cisco, MikroTik, Unifi, Fortinet",
      status: "ACTIVE"
    },
    { 
      icon: <Database size={32} strokeWidth={1} />, 
      category: "Sains Data & AI", 
      tools: "Python, SQL, MongoDB",
      status: "OPTIMIZED"
    },
    { 
      icon: <Code2 size={32} strokeWidth={1} />, 
      category: "Modern Web Stack", 
      tools: "Next.js, Tailwind, Ruby On Rails",
      status: "STABLE"
    },
    { 
      icon: <Server size={32} strokeWidth={1} />, 
      category: "Infrastruktur", 
      tools: "Google Cloud, Microsoft Azure, Vercel",
      status: "DEPLOYED"
    }
  ];

  return (
    <section className="relative w-full border-t border-white/10 bg-[#0a0a0e] overflow-hidden transform-gpu">
      
      {/* Latar Belakang Grid Teknis */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none opacity-60"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Kolom Kiri: Header */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0">
            <div>
              <p className="text-brand-blue font-mono text-sm tracking-widest mb-3 uppercase">
                &gt; INDEX_02: CORE_STACK
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Kompetensi<br className="hidden lg:block" /> Inti<span className="text-brand-blue">.</span>
              </h2>
            </div>
            <p className="text-gray-400 font-mono text-sm leading-relaxed text-justify">
              Teknologi fundamental yang menggerakkan infrastruktur tangguh, sistem skala cloud, dan analitik data presisi.
            </p>
          </div>
          
          {/* Kolom Kanan: Grid Teknologi */}
          <div className="lg:col-span-8 relative mt-4 lg:mt-0">
            
            {/* Crosshairs Pembungkus Utama */}
            <Crosshair className="absolute -top-[7px] -left-[7px] text-brand-blue z-20" />
            <Crosshair className="absolute -top-[7px] -right-[7px] text-brand-blue z-20" />
            <Crosshair className="absolute -bottom-[7px] -left-[7px] text-brand-blue z-20" />
            <Crosshair className="absolute -bottom-[7px] -right-[7px] text-brand-blue z-20" />

            {/* Arsitektur Grid Garis Tipis (1px) */}
            <div className="bg-white/10 gap-[1px] grid grid-cols-1 sm:grid-cols-2 border border-white/10">
              {technologies.map((tech, i) => (
                <div key={i} className="bg-[#050505] p-8 md:p-10 hover:bg-[#0c0c11] transition-colors group flex flex-col h-full relative overflow-hidden">
                  
                  {/* Efek Indikator Terminal di sisi kiri saat di-hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>

                  <div className="flex justify-between items-start mb-10">
                    <div className="text-gray-500 group-hover:text-brand-blue transition-colors duration-300">
                      {tech.icon}
                    </div>
                    {/* Status Sistem Tiruan */}
                    <span className="text-[10px] font-mono text-gray-600 group-hover:text-brand-blue/70 uppercase tracking-widest border border-transparent group-hover:border-brand-blue/30 px-2 py-0.5 transition-colors">
                      {tech.status}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">{tech.category}</h4>
                  
                  {/* Daftar Tools dengan font-mono agar terlihat seperti output log */}
                  <p className="text-gray-400 font-mono text-xs leading-relaxed mt-auto uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                    {tech.tools}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}