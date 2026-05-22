import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

interface HeroSectionProps {
  title: string;
  role: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  status: string; 
}

export default function HeroSection({ title, role, year, liveUrl, githubUrl, status }: HeroSectionProps) {
  
  // LOGIKA WARNA BARU SESUAI PERMINTAAN: Finish, Progress, Idle
  const currentStatus = status || "Idle"; // Fallback jika kosong
  
  const statusColor = 
    currentStatus === "Finish" ? "bg-brand-green shadow-[0_0_10px_#10b981]" : 
    currentStatus === "Progress" ? "bg-yellow-400 shadow-[0_0_10px_#facc15]" : 
    "bg-gray-500 shadow-[0_0_10px_#6b7280]";

  return (
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1600px] mx-auto mb-16">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-white transition-colors mb-8 lg:mb-12 uppercase tracking-widest">
        <ArrowLeft size={16} /> All Solutions
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white tracking-tighter leading-[1.05] mb-8">
            {title}
          </h1>
          
          <div className="flex flex-wrap gap-8 text-sm uppercase tracking-widest text-gray-500 font-semibold mb-8 lg:mb-0">
            <div>
              <span className="block text-gray-700 mb-1">Role</span>
              <span className="text-gray-300">{role}</span>
            </div>
            <div>
              <span className="block text-gray-700 mb-1">Year</span>
              <span className="text-gray-300">{year}</span>
            </div>
            
            {/* INDIKATOR STATUS */}
            <div>
              <span className="block text-gray-700 mb-1">Status</span>
              <div className="flex items-center gap-2 h-5">
                {/* Animasi pulse dimatikan jika statusnya Idle agar terkesan benar-benar diam */}
                <div className={`w-2 h-2 rounded-full ${statusColor} ${currentStatus === "Idle" ? "" : "animate-pulse"}`}></div>
                <span className="text-white font-bold">{currentStatus}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4 pb-2">
          {liveUrl && liveUrl !== "#" ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-white text-black px-8 py-4 font-bold hover:bg-brand-blue hover:text-white transition-colors">
              <span>View Live Platform</span>
              <ExternalLink size={20} />
            </a>
          ) : (
            <div className="flex items-center justify-between w-full bg-white/5 text-gray-500 px-8 py-4 font-bold cursor-not-allowed border border-white/5">
              <span>Platform Unavailable</span>
              <ExternalLink size={20} className="opacity-50" />
            </div>
          )}

          {githubUrl && githubUrl !== "#" ? (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-transparent border border-white/20 text-white px-8 py-4 font-bold hover:border-white transition-colors">
              <span>Repository</span>
              <GithubIcon className="w-5 h-5" />
            </a>
          ) : (
            <div className="flex items-center justify-between w-full bg-transparent border border-white/5 text-gray-600 px-8 py-4 font-bold cursor-not-allowed">
              <span>Private Repository</span>
              <GithubIcon className="w-5 h-5 opacity-50" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}