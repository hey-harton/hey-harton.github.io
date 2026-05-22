import { LayoutGrid } from "lucide-react";

export default function ProjectsHeader() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-16 mt-12">
      <div className="flex flex-col items-start">
        
        {/* Label Atas ala Enterprise */}
        <div className="flex items-center gap-2 text-brand-green text-xs font-mono uppercase tracking-widest mb-6">
          <LayoutGrid size={14} className="animate-pulse" />
          <span>Deployment Portfolio</span>
        </div>
        
        {/* Judul Utama Rata Kiri (Kata "Web" dihapus agar lebih universal) */}
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-extrabold text-white tracking-tighter leading-[1.05] mb-8 max-w-4xl">
          Featured Projects.
        </h1>
        
        {/* Deskripsi */}
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
          A showcase of my recent architectural work, ranging from intelligent AI dashboards to full-stack community portals.
        </p>
      </div>
      
      {/* Garis batas horizontal panjang */}
      <div className="w-full h-px bg-white/10 mt-16"></div>
    </section>
  );
}