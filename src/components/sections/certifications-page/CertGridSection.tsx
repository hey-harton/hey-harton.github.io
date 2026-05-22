import { ArrowRight, CheckCircle } from "lucide-react";
import type { Certification } from "@/data/certifications";

export default function CertGridSection({ certs }: { certs: Certification[] }) {
  return (
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1400px] mx-auto py-24">
      
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Additional Credentials</h3>
        <p className="text-gray-400 text-lg">Continuous learning across networking, cloud, and security.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert) => (
          <div 
            key={cert.id} 
            className="group flex flex-col p-8 bg-white/[0.02] border border-white/10 rounded-2xl hover:bg-white/[0.04] hover:border-brand-blue/50 transition-all duration-300"
          >
            {/* Header Kartu */}
            <div className="flex justify-between items-center mb-8">
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-brand-blue/10 transition-colors">
                <CheckCircle className="text-gray-400 group-hover:text-brand-blue transition-colors" size={24} />
              </div>
              <span className="text-xs font-mono text-gray-500 bg-[#070709] px-3 py-1 rounded-full border border-white/5">
                {cert.category}
              </span>
            </div>

            {/* Konten Utama */}
            <h4 className="text-xl font-bold text-white mb-3 leading-tight">
              {cert.title}
            </h4>
            <p className="text-gray-400 text-sm mb-6 flex-1">
              Issued by <span className="font-semibold text-gray-300">{cert.issuer}</span>
            </p>

            {/* Meta Data */}
            <div className="flex flex-col gap-1 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Date</span>
                <span className="text-gray-300 font-mono">{cert.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Credential ID</span>
                <span className="text-gray-300 font-mono">{cert.credentialId}</span>
              </div>
            </div>

            {/* Tautan ala Cisco (Bottom Action) */}
            <a 
              href={cert.url} 
              className="mt-auto flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-green transition-colors w-max group/link"
            >
              Verify Credential 
              <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}