import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import type { Certification } from "@/data/certifications";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function CertGridSection({ certs }: { certs: Certification[] }) {
  
  return (
    // PERBAIKAN: Padding dan margin disesuaikan untuk mobile (py-16 md:py-24)
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1600px] mx-auto py-16 md:py-24 relative z-10">
      
      {/* Header ala Terminal */}
      <div className="mb-10 md:mb-16 border-l border-brand-green pl-6 md:pl-8">
        <p className="text-brand-green font-mono text-[10px] md:text-xs tracking-widest mb-3 uppercase">
          &gt; INDEX_02: ADDITIONAL_CREDENTIALS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">
          Lisensi & Kredensial<span className="text-brand-green">_</span>
        </h2>
        <p className="text-sm md:text-lg text-gray-400 font-mono font-light max-w-2xl text-left">
          Validasi berkelanjutan lintas infrastruktur jaringan, komputasi cloud, dan keamanan data.
        </p>
      </div>

      {/* Logika Empty State jika array sertifikat kosong */}
      {!certs || certs.length === 0 ? (
        <div className="w-full border border-white/10 bg-[#050505] p-10 flex flex-col items-center justify-center text-center relative group">
          <ShieldCheck size={48} className="text-gray-600 mb-6 group-hover:text-brand-green transition-colors" />
          <h3 className="text-xl font-bold text-white mb-2 tracking-widest uppercase">
            // NO_CREDENTIALS_FOUND
          </h3>
          <p className="text-gray-400 font-mono text-xs">Menunggu sinkronisasi data sertifikat dari server otoritas.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certs.map((cert) => (
            <div 
              key={cert.id} 
              // PERBAIKAN: rounded-2xl dihapus, diganti rounded-none dan border arsitektur kaku
              className="group flex flex-col bg-[#050505] border border-white/10 hover:border-brand-green/50 transition-all duration-300 relative overflow-hidden rounded-none"
            >
              {/* Garis Aksen Atas */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

              {/* Crosshairs Pengunci Bingkai */}
              <Crosshair className="absolute top-[2px] left-[2px] text-brand-green/20 group-hover:text-brand-green transition-colors z-20" />
              <Crosshair className="absolute top-[2px] right-[2px] text-brand-green/20 group-hover:text-brand-green transition-colors z-20" />

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                
                {/* Header Kartu: Kategori & Icon */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-2 border border-white/10 bg-[#0a0a0e] group-hover:border-brand-green/30 transition-colors rounded-none">
                    <CheckCircle className="text-gray-500 group-hover:text-brand-green transition-colors" size={20} />
                  </div>
                  {/* PERBAIKAN: rounded-full dihapus */}
                  <span className="text-[9px] md:text-[10px] font-mono text-gray-500 bg-[#0a0a0e] px-2 py-1 border border-white/10 uppercase tracking-widest group-hover:text-brand-green transition-colors">
                    {cert.category}
                  </span>
                </div>

                {/* Konten Utama */}
                <h4 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight uppercase group-hover:text-brand-green transition-colors">
                  {cert.title}
                </h4>
                <p className="text-gray-400 text-[10px] md:text-xs mb-8 flex-1 font-mono uppercase tracking-widest">
                  AUTHORITY: <span className="font-bold text-gray-300">{cert.issuer}</span>
                </p>

                {/* Meta Data Grid ala Log Terminal */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 mb-8">
                  <div className="flex flex-col border-r border-white/5 pr-2">
                    <span className="text-[8px] md:text-[9px] text-gray-500 uppercase tracking-widest mb-1 font-mono">ISSUE_DATE</span>
                    <span className="text-[10px] md:text-xs text-gray-300 font-mono truncate">{cert.date}</span>
                  </div>
                  <div className="flex flex-col pl-2">
                    <span className="text-[8px] md:text-[9px] text-gray-500 uppercase tracking-widest mb-1 font-mono">CRED_ID</span>
                    <span className="text-[10px] md:text-xs text-gray-300 font-mono truncate">{cert.credentialId}</span>
                  </div>
                </div>

                {/* Tautan Aksi Bawah */}
                {cert.url && cert.url !== "#" ? (
                  <a 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="mt-auto flex items-center justify-between gap-2 text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 hover:text-brand-green transition-colors w-full pb-2 border-b border-white/10 hover:border-brand-green group/link"
                  >
                    <span>EXECUTE_VERIFICATION</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <div className="mt-auto flex items-center justify-between gap-2 text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-gray-600 w-full pb-2 border-b border-white/5 cursor-not-allowed">
                    <span>UNVERIFIED_RECORD</span>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}