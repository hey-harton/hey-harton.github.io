import { Server, Database, Code2, Network } from "lucide-react";

export default function TechStackSection() {
  const technologies = [
    { 
      icon: <Network size={32} strokeWidth={1.5} />, 
      category: "Enterprise Networking", 
      tools: "Mikroitik, Cisco, Wireshark" 
    },
    { 
      icon: <Database size={32} strokeWidth={1.5} />, 
      category: "Data Science & AI", 
      tools: "Python, Skicit-learn, TensorFlow" 
    },
    { 
      icon: <Code2 size={32} strokeWidth={1.5} />, 
      category: "Modern Web Stack", 
      tools: "Ruby On Rails, NextJS, Tailwind, Astro, Carbon Design" 
    },
    { 
      icon: <Server size={32} strokeWidth={1.5} />, 
      category: "Infrastructure", 
      tools: "Goole Cloud Console, Microsoft Azure, Vercel, Netlify, Railway" 
    }
  ];

  return (
    // 1. Tag Section membentang 100% layar dengan background gelap khas Carbon
    <section className="w-full border-t border-white/10 bg-[#050505]">
      
      {/* 2. Tag Div menahan konten agar tetap rata tengah dan rapi */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Kolom Kiri: Judul (IBM Style: Light + Bold) */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Core <br className="hidden lg:block" />
              <span className="font-semibold text-brand-blue">Competencies.</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg">
              The foundational technologies powering resilient and intelligent infrastructures.
            </p>
          </div>
          
          {/* Kolom Kanan: Grid 1px Border (Carbon Strict Grid) */}
          <div className="lg:col-span-8 bg-white/10 gap-[1px] grid grid-cols-1 sm:grid-cols-2 border border-white/10">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-[#050505] p-10 hover:bg-[#0a0a0f] transition-colors group flex flex-col h-full">
                <div className="text-brand-blue mb-10 group-hover:scale-110 transition-transform origin-left">
                  {tech.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">{tech.category}</h4>
                <p className="text-gray-400 leading-relaxed font-light mt-auto">{tech.tools}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}