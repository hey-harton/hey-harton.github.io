import Image from "next/image";
import { Code2 } from "lucide-react";

const TechIcons: Record<string, string> = {
  "Next.js": "/logo-brand/nextjs-icon.svg",
  "Tailwind CSS": "/logo-brand/tailwind-icon.svg",
  "Vercel": "/logo-brand/vercel-icon.svg",
  "Microsoft Azure": "/logo-brand/microsoft-azure-icon.svg",
  "Supabase": "/logo-brand/supabase-icon.svg",
  "Cisco IOS": "/logo-brand/cisco-icon.svg",
  "MikroTik RouterOS": "/logo-brand/mikrotik-icon.svg",
  "Python": "/logo-brand/python-icon.svg",
  "TypeScript": "/logo-brand/typescript-icon.svg",
};

interface ExperienceItemProps {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export default function ExperienceItem({
  role,
  organization,
  period,
  description,
  highlights,
  technologies,
}: ExperienceItemProps) {
  return (
    // Class px dihilangkan karena sudah diatur oleh komponen induk (Timeline)
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 group pb-16 w-full">
      
      {/* Pipa Node (Lingkaran): Terkunci tepat di titik 25% margin kiri */}
      <div className="absolute left-0 lg:left-[25%] top-2 w-4 h-4 rounded-full border-2 border-brand-blue bg-[#050505] z-10 group-hover:bg-brand-blue transition-colors duration-500 hidden lg:block -translate-x-[8px]"></div>

      {/* KOLOM KIRI (Rasio 3/12 = 25%) */}
      {/* PERUBAHAN: Menambahkan lg:pr-6 untuk memberi jarak aman ke garis tengah */}
      <div className="lg:col-span-3 flex flex-col justify-start lg:pr-6">
        <span className="text-sm font-mono text-brand-blue tracking-wider mb-1">{period}</span>
        <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-brand-blue transition-colors">
          {organization}
        </h3>
        
        {/* PERUBAHAN: Mengganti w-max dengan w-fit max-w-full inline-block */}
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500 bg-white/5 px-3 py-2 border border-white/5 w-fit max-w-full inline-block leading-relaxed mt-1">
          {role}
        </span>
      </div>

      {/* KOLOM KANAN (Rasio 9/12 = 75%) */}
      <div className="lg:col-span-9 flex flex-col">
        <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-6">
          {description}
        </p>

        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">Key Deliverables & Operations</h4>
          <ul className="space-y-2.5">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 bg-brand-green flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">Deployed Infrastructure Stack</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => {
              const iconPath = TechIcons[tech];
              return (
                <div 
                  key={i} 
                  className="flex items-center gap-2 px-3 py-1.5 border border-white/5 bg-white/5 text-gray-400 text-xs font-medium hover:border-brand-blue hover:text-white transition-all cursor-default"
                >
                  {iconPath ? (
                    <div className="relative w-3.5 h-3.5 flex-shrink-0">
                      <Image src={iconPath} alt={tech} fill className="object-contain" />
                    </div>
                  ) : (
                    <Code2 size={14} className="text-gray-500" />
                  )}
                  <span>{tech}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
    </div>
  );
}