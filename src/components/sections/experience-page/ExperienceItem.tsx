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
    // PERBAIKAN MINOR: Menyesuaikan gap dan padding-bottom untuk mobile (gap-6 lg:gap-12, pb-12 lg:pb-16)
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 group pb-12 lg:pb-16 w-full border-b border-white/5 last:border-b-0 pt-6 lg:pt-0">
      
      {/* Pipa Node (Kotak Presisi pengganti lingkaran): Terkunci tepat di titik 25% margin kiri */}
      <div className="absolute left-0 lg:left-[25%] top-1.5 w-3 h-3 border border-brand-blue bg-[#050505] z-10 group-hover:bg-brand-blue transition-colors duration-500 hidden lg:block -translate-x-[6px] rounded-none shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

      {/* KOLOM KIRI (Rasio 3/12 = 25%) */}
      <div className="lg:col-span-3 flex flex-col justify-start lg:pr-6">
        <span className="text-xs font-mono text-gray-500 tracking-widest mb-3 uppercase">
          [{period}]
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-brand-blue transition-colors">
          {organization}
        </h3>
        
        {/* Lencana Role ala Terminal Status */}
        <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-brand-blue bg-brand-blue/5 px-2 py-1 border border-brand-blue/30 w-fit inline-block">
          {role}
        </span>
      </div>

      {/* KOLOM KANAN (Rasio 9/12 = 75%) */}
      <div className="lg:col-span-9 flex flex-col mt-2 lg:mt-0">
        <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-8 text-left">
          {description}
        </p>

        <div className="mb-8 md:mb-10">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-4 border-b border-white/10 pb-2 w-max">
            / Key_Deliverables_&_Operations
          </h4>
          <ul className="space-y-3">
            {/* PERBAIKAN: Menambahkan pengaman '?.' agar tidak error jika highlights kosong */}
            {highlights?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                <span className="mt-0.5 text-brand-blue font-mono font-bold flex-shrink-0">&gt;</span>
                <span className="text-left">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-4 border-b border-white/10 pb-2 w-max">
            / Deployed_Infrastructure_Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {/* PERBAIKAN: Menambahkan pengaman '?.' agar tidak error jika technologies kosong */}
            {technologies?.map((tech, i) => {
              const iconPath = TechIcons[tech];
              return (
                <div 
                  key={i} 
                  className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-[#0a0a0e] text-gray-400 text-[9px] md:text-[10px] font-mono uppercase tracking-wider hover:border-brand-blue hover:text-white transition-all cursor-default rounded-none"
                >
                  {iconPath ? (
                    <div className="relative w-3.5 h-3.5 flex-shrink-0 opacity-70 group-hover:opacity-100">
                      <Image src={iconPath} alt={tech} fill className="object-contain" />
                    </div>
                  ) : (
                    <div className="relative flex-shrink-0 opacity-70 group-hover:opacity-100">
                      <Code2 size={12} className="text-gray-500" />
                    </div>
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