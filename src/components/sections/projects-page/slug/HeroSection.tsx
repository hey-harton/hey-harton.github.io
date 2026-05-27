import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
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
  
  // LOGIKA WARNA STATUS: Diselaraskan dengan tema warna Carbon
  const currentStatus = status || "Idle"; 
  
  // Menggunakan warna solid yang tajam
  const statusColor = 
    currentStatus === "Finish" ? "bg-brand-green" : 
    currentStatus === "Progress" ? "bg-brand-blue" : 
    "bg-gray-600";

  return (
    // PERBAIKAN: Hapus !mt-0, sesuaikan padding, dan hapus grid background lokal
    <section className="relative w-full border-b border-white/10 bg-transparent overflow-hidden pt-28 md:pt-40 pb-16 md:pb-24">
      
      {/* Grid lokal dihapus agar tidak bertumpuk */}

      <div className="w-full px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto relative z-10">
        
        {/* Navigasi "Kembali" Bergaya Direktori Konsol */}
        <Link 
          href="/projects" 
          className="group inline-flex items-center gap-3 text-[10px] font-mono font-bold text-gray-500 hover:text-white transition-colors mb-10 md:mb-12 uppercase tracking-widest border border-white/10 bg-[#050505] px-4 py-3 md:py-2 rounded-none"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          <span>CMD: RETURN_TO_DIRECTORY</span>
        </Link>

        {/* Panel Info Utama dengan Garis Tepi Kiri ala Blueprint */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-end">
          
          {/* Crosshairs Pengunci Garis Vertikal */}
          <Crosshair className="absolute -top-[7px] -left-[7.5px] text-brand-green z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7.5px] text-brand-green z-20" />

          {/* Bagian Judul dan Metadata */}
          <div className="lg:col-span-8 flex flex-col items-start pt-2 md:pt-4">
            {/* PERBAIKAN: Menambahkan break-words dan text-3xl untuk HP agar judul tidak jebol */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.05] mb-8 md:mb-12 uppercase break-words w-full">
              {title}<span className="text-brand-green">_</span>
            </h1>
            
            {/* Metadata Proyek Bergaya Log Data */}
            <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8 text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold mb-2 lg:mb-0 w-full border-t border-white/10 pt-6">
              <div className="flex flex-col">
                <span className="text-gray-600 mb-2 border-b border-white/5 pb-1 w-max">ROLE_ASSIGNED</span>
                <span className="text-gray-300">{role}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 mb-2 border-b border-white/5 pb-1 w-max">DEPLOYMENT_YEAR</span>
                <span className="text-gray-300">{year}</span>
              </div>
              
              {/* INDIKATOR STATUS */}
              <div className="flex flex-col">
                <span className="text-gray-600 mb-2 border-b border-white/5 pb-1 w-max">SYS_STATUS</span>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-none ${statusColor} ${currentStatus === "Idle" ? "" : "animate-pulse"}`}></div>
                  <span className="text-white">{currentStatus}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian Tombol Aksi Kanan (Action Pane) */}
          <div className="lg:col-span-4 flex flex-col gap-4 pb-1 w-full mt-4 lg:mt-0">
            {liveUrl && liveUrl !== "#" ? (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between w-full bg-brand-green text-[#050505] px-6 py-4 font-mono text-[9px] md:text-[10px] font-bold tracking-widest uppercase hover:bg-[#12d192] transition-colors rounded-none">
                <span>EXECUTE_LIVE_PLATFORM</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            ) : (
              <div className="flex items-center justify-between w-full bg-white/5 text-gray-600 px-6 py-4 font-mono text-[9px] md:text-[10px] font-bold tracking-widest uppercase cursor-not-allowed border border-white/5 rounded-none">
                <span>PLATFORM_UNAVAILABLE</span>
                <ExternalLink size={16} className="opacity-30" />
              </div>
            )}

            {githubUrl && githubUrl !== "#" ? (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between w-full bg-[#0a0a0e] border border-white/20 text-white px-6 py-4 font-mono text-[9px] md:text-[10px] font-bold tracking-widest uppercase hover:border-brand-green hover:text-brand-green transition-colors rounded-none">
                <span>ACCESS_SOURCE_CODE</span>
                <GithubIcon className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            ) : (
              <div className="flex items-center justify-between w-full bg-[#050505] border border-white/10 text-gray-700 px-6 py-4 font-mono text-[9px] md:text-[10px] font-bold tracking-widest uppercase cursor-not-allowed rounded-none">
                <span>PRIVATE_REPOSITORY</span>
                <GithubIcon className="w-4 h-4 md:w-5 md:h-5 opacity-30" />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}