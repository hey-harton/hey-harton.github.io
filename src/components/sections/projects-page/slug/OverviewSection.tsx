import Image from "next/image";
import { Code2 } from "lucide-react";

// --- KAMUS LOGO TEKNOLOGI (LOKAL) ---
const TechIcons: Record<string, string> = {
  "Next.js": "/logo-brand/nextjs-icon.svg",
  "Tailwind CSS": "/logo-brand/tailwind-icon.svg",
  "Vercel": "/logo-brand/vercel-icon.svg",
  "Microsoft Azure": "/logo-brand/microsoft-azure-icon.svg",
  "Supabase": "/logo-brand/supabase-icon.svg",
};

interface OverviewSectionProps {
  overview: string;
  technologies: string[];
}

export default function OverviewSection({ overview, technologies }: OverviewSectionProps) {
  return (
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1400px] mx-auto mb-32">
      
      {/* Bagian Atas: Judul & Deskripsi Narasi */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
        
        {/* Kolom Kiri: Judul */}
        <div className="lg:col-span-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Challenge & Architecture.</h2>
          <div className="w-16 h-1 bg-brand-blue"></div>
        </div>

        {/* Kolom Kanan: Teks Deskripsi */}
        <div className="lg:col-span-8">
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            {overview}
          </p>
        </div>

      </div>

      {/* Bagian Bawah: Core Technologies */}
      <div className="pt-10 border-t border-white/10">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-6">Core Technologies</h3>
        <div className="flex flex-wrap gap-4">
          {technologies.map((tech, i) => {
            // Ambil path gambar berdasarkan nama teknologi
            const iconPath = TechIcons[tech];
            
            return (
              <div 
                key={i} 
                className="flex items-center gap-3 px-5 py-3 border border-white/10 bg-white/5 text-gray-200 text-sm font-medium hover:border-brand-blue hover:text-white hover:bg-white/10 transition-all cursor-default"
              >
                {/* Jika path gambar ada, tampilkan Image lokal. Jika tidak, pakai ikon bawaan Lucide */}
                {iconPath ? (
                  <div className="relative w-5 h-5 flex-shrink-0">
                    <Image 
                      src={iconPath} 
                      alt={`${tech} logo`} 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                ) : (
                  <Code2 size={18} className="text-gray-400 flex-shrink-0" />
                )}
                <span>{tech}</span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}