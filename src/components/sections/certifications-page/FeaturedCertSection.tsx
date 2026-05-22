import { ArrowRight, Award } from "lucide-react";
import type { Certification } from "@/data/certifications";

export default function FeaturedCertSection({ cert }: { cert: Certification }) {
  if (!cert) return null;

  return (
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1400px] mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Kolom Kiri: Teks Narasi */}
        <div className="flex flex-col">
          <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">
            Featured Certification
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {cert.title}
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Demonstrating mastery in deploying, operating, and troubleshooting enterprise networks. Issued globally by <strong className="text-white">{cert.issuer}</strong> as a standard of technical excellence.
          </p>
          
          <a 
            href={cert.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors w-max"
          >
            Verify Credential <ArrowRight size={18} />
          </a>
        </div>

        {/* Kolom Kanan: Kartu Sertifikat Stylized */}
        <div className="relative w-full aspect-[4/3] flex items-center justify-center">
          {/* Efek Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-green/20 blur-3xl rounded-[3rem]"></div>
          
          {/* Kartu Fisik Virtual */}
          <div className="relative w-full max-w-md bg-[#0a0a0e] border border-white/10 rounded-3xl p-10 shadow-2xl z-10 flex flex-col">
            <div className="flex justify-between items-start mb-12">
              <Award size={48} className="text-brand-green" />
              <div className="text-right">
                <span className="block text-[10px] text-gray-500 uppercase tracking-widest">Achieved</span>
                <span className="text-sm font-mono text-gray-300">{cert.date}</span>
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-2 leading-snug">{cert.title}</h4>
            <p className="text-brand-blue text-sm font-semibold mb-8">{cert.issuer}</p>
            
            <div className="mt-auto pt-6 border-t border-white/10">
              <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Credential ID</span>
              <span className="font-mono text-gray-400 text-sm">{cert.credentialId}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}