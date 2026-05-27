import { ArrowRight, Award } from "lucide-react";
import type { Certification } from "@/data/certifications";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function FeaturedCertSection({ cert }: { cert: Certification }) {
  if (!cert) return null;

  return (
    // PERBAIKAN: Max width disamakan dengan komponen lain (1600px), padding disesuaikan
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1600px] mx-auto py-16 md:py-24 relative z-10 border-b border-white/10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Kolom Kiri: Teks Narasi */}
        <div className="lg:col-span-6 flex flex-col border-l border-brand-blue pl-6 md:pl-8">
          <p className="text-brand-blue font-mono text-[10px] md:text-xs tracking-widest mb-3 uppercase">
            &gt; INDEX_01: PRIMARY_CREDENTIAL
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase tracking-tight break-words">
            {cert.title}<span className="text-brand-blue">_</span>
          </h2>
          
          <p className="text-sm md:text-lg text-gray-400 font-mono font-light leading-relaxed mb-8 md:mb-10 text-left">
            Validasi penguasaan tingkat lanjut dalam menerapkan, mengoperasikan, dan melakukan *troubleshooting* pada infrastruktur enterprise. Diterbitkan secara global oleh <strong className="text-white font-bold">{cert.issuer}</strong> sebagai standar keunggulan teknis.
          </p>
          
          {/* PERBAIKAN: Tombol diubah menjadi gaya balok eksekusi command */}
          <a 
            href={cert.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-between gap-4 bg-brand-blue text-[#050505] px-6 py-4 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#2563eb] transition-colors w-max rounded-none"
          >
            <span>EXECUTE_VERIFICATION</span> 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Kolom Kanan: Kartu Sertifikat Stylized */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          
          {/* PERBAIKAN: Efek blur-3xl dihapus untuk performa, diganti dengan Technical Bounding Box */}
          <div className="relative w-full max-w-lg bg-[#050505] border border-white/10 p-6 md:p-10 z-10 flex flex-col group rounded-none shadow-2xl">
            
            {/* Garis Aksen Indikator */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue scale-x-50 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            {/* Crosshairs Pengunci Bingkai */}
            <Crosshair className="absolute top-[2px] left-[2px] text-brand-blue/30 group-hover:text-brand-blue transition-colors z-20" />
            <Crosshair className="absolute top-[2px] right-[2px] text-brand-blue/30 group-hover:text-brand-blue transition-colors z-20" />
            <Crosshair className="absolute bottom-[2px] left-[2px] text-brand-blue/30 group-hover:text-brand-blue transition-colors z-20" />
            <Crosshair className="absolute bottom-[2px] right-[2px] text-brand-blue/30 group-hover:text-brand-blue transition-colors z-20" />

            <div className="flex justify-between items-start mb-10 md:mb-12">
              <div className="p-3 bg-[#0a0a0e] border border-white/10 group-hover:border-brand-blue/30 transition-colors">
                <Award size={32} className="text-brand-blue" />
              </div>
              <div className="text-right">
                <span className="block text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest mb-1 border-b border-white/5 pb-1">SYS_STATUS: ACHIEVED</span>
                <span className="text-xs md:text-sm font-mono text-gray-300">{cert.date}</span>
              </div>
            </div>
            
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug uppercase group-hover:text-brand-blue transition-colors">
              {cert.title}
            </h4>
            <p className="text-gray-500 text-[10px] md:text-xs font-mono uppercase tracking-widest mb-10">
              AUTHORITY: <span className="text-brand-blue font-bold">{cert.issuer}</span>
            </p>
            
            <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-1">
              <span className="block text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest mb-1">CREDENTIAL_ID_HASH</span>
              <span className="font-mono text-gray-400 text-xs md:text-sm">{cert.credentialId}</span>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}