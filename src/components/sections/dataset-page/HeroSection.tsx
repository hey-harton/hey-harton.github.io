import { Database } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full px-4 md:px-12 lg:px-16 max-w-[1600px] mx-auto pt-24 lg:pt-32 pb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 z-10 relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-brand-blue font-mono text-sm tracking-wider uppercase mb-6">
            <Database size={18} />
            <span>Open Data Repositories</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-6 text-white">
            Curated Datasets for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
              Research & Analytics.
            </span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
            Explore and download high-quality datasets spanning medical informatics, network telemetry, and machine learning models. 
          </p>
        </div>

        {/* Global Stats Ala Enterprise */}
        <div className="flex gap-6 md:gap-10 border-l-2 border-brand-blue/30 pl-6 md:pl-8 py-2">
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-white mb-1">4</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Total Repos</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-white mb-1">2.3M+</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Data Records</span>
          </div>
        </div>
      </div>
    </section>
  );
}