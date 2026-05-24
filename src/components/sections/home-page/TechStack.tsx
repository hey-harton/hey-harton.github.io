import { Server, Database, Code2, Network } from "lucide-react";

export default function TechStackSection() {
  const technologies = [
    { 
      icon: <Network size={32} strokeWidth={1.5} />, 
      category: "Jaringan Enterprise", 
      tools: "Cisco IOS, MikroTik, Palo Alto, BGP/OSPF" 
    },
    { 
      icon: <Database size={32} strokeWidth={1.5} />, 
      category: "Sains Data & AI", 
      tools: "Python, Llama-3, XGBoost, Pandas, Turso DB" 
    },
    { 
      icon: <Code2 size={32} strokeWidth={1.5} />, 
      category: "Modern Web Stack", 
      tools: "Next.js, Tailwind CSS, TypeScript, Firebase" 
    },
    { 
      icon: <Server size={32} strokeWidth={1.5} />, 
      category: "Infrastruktur", 
      tools: "Linux Ubuntu, Azure App Service, Vercel" 
    }
  ];

  return (
    <section className="w-full border-t border-white/10 bg-[#050505]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Kompetensi <br className="hidden lg:block" />
              <span className="font-semibold text-brand-blue">Inti.</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg">
              Teknologi fundamental yang menggerakkan infrastruktur tangguh dan cerdas.
            </p>
          </div>
          
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