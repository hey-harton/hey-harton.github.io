"use client";

import { useState } from "react";
import { FileDown, HardDrive, FileJson, FileSpreadsheet, FileText, ChevronLeft, ChevronRight } from "lucide-react";

interface Dataset {
  id: string;
  title: string;
  description: string;
  category: string;
  format: string;
  size: string;
  records: string;
  lastUpdated: string;
  downloadUrl: string;
}

// Helper ikon format file, disejajarkan warnanya dengan tema Carbon
const getFormatIcon = (format: string) => {
  switch (format.toUpperCase()) {
    case 'JSON': return <FileJson size={14} className="text-gray-400 group-hover:text-yellow-400 transition-colors" />;
    case 'EXCEL': return <FileSpreadsheet size={14} className="text-gray-400 group-hover:text-green-500 transition-colors" />;
    case 'CSV':
    default: return <FileText size={14} className="text-gray-400 group-hover:text-brand-blue transition-colors" />;
  }
};

const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function DatasetGridSection({ datasets }: { datasets: Dataset[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDatasets = datasets.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(datasets.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto pb-32">
      
      {/* GRID KARTU DATASET */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {currentDatasets.map((dataset) => (
          <div 
            key={dataset.id}
            className="group flex flex-col bg-[#050505] border border-white/10 hover:border-brand-blue/50 transition-all duration-300 relative overflow-hidden rounded-none"
          >
            {/* Aksen Garis Biru saat Hover (Solid, non-gradien) */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

            {/* Crosshairs Pengunci Bingkai Luar */}
            <Crosshair className="absolute top-[2px] left-[2px] text-brand-blue/20 group-hover:text-brand-blue transition-colors z-20" />
            <Crosshair className="absolute top-[2px] right-[2px] text-brand-blue/20 group-hover:text-brand-blue transition-colors z-20" />
            
            <div className="p-8 md:p-10 flex-1 flex flex-col">
              
              {/* Category & Format Badge (Kaku dan Technical) */}
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest border border-white/10 bg-[#0a0a0e] px-2 py-1 group-hover:border-brand-blue/30 group-hover:text-brand-blue transition-colors">
                  DIR: {dataset.category}
                </span>
                <div className="flex items-center gap-2 bg-[#0a0a0e] border border-white/10 px-2 py-1 rounded-none group-hover:border-white/20 transition-colors">
                  {getFormatIcon(dataset.format)}
                  <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">
                    {dataset.format}
                  </span>
                </div>
              </div>

              {/* Title & Desc */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors uppercase tracking-tight">
                {dataset.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-10 flex-1 font-light text-left">
                {dataset.description}
              </p>

              {/* Meta Info ala Terminal Log */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 mb-8">
                <div className="flex flex-col border-r border-white/5 pr-2">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest mb-1 font-mono">FILE_SIZE</span>
                  <span className="text-xs text-gray-300 font-mono flex items-center gap-1.5 truncate">
                    <HardDrive size={12} className="text-brand-blue" /> {dataset.size}
                  </span>
                </div>
                <div className="flex flex-col border-r border-white/5 pr-2 pl-2">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest mb-1 font-mono">DATA_ROWS</span>
                  <span className="text-xs text-gray-300 font-mono truncate">{dataset.records}</span>
                </div>
                <div className="flex flex-col pl-2">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest mb-1 font-mono">LAST_SYNC</span>
                  <span className="text-xs text-gray-300 font-mono truncate">{dataset.lastUpdated}</span>
                </div>
              </div>

              {/* Download Button Bergaya Eksekusi Perintah */}
              {dataset.downloadUrl !== "#" ? (
                <a 
                  href={dataset.downloadUrl} 
                  className="flex items-center justify-center gap-3 w-full bg-[#0a0a0e] border border-white/10 text-gray-300 py-4 text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-brand-blue hover:text-[#050505] hover:border-brand-blue transition-colors rounded-none group/btn"
                >
                  <FileDown size={14} className="group-hover/btn:animate-bounce" /> EXECUTE_DOWNLOAD
                </a>
              ) : (
                <div className="flex items-center justify-center gap-3 w-full bg-[#030303] border border-white/5 text-gray-700 py-4 text-[10px] font-mono font-bold uppercase tracking-widest cursor-not-allowed rounded-none">
                  <FileDown size={14} className="opacity-30" /> RESTRICTED_ACCESS
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* NAVIGASI PAGINATION */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-6 mt-20">
          <button 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-12 h-12 border rounded-none transition-colors ${
              currentPage === 1 
                ? "border-white/5 text-gray-700 bg-[#030303] cursor-not-allowed" 
                : "border-white/20 text-gray-400 hover:border-brand-blue hover:text-brand-blue bg-[#0a0a0e]"
            }`}
          >
            <ChevronLeft size={16} />
          </button>
          
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest bg-[#050505] border border-white/10 px-4 py-3">
            <span className="text-gray-500">PAGE</span>
            <span className="text-brand-blue font-bold">{currentPage}</span>
            <span className="text-gray-700">OF</span>
            <span className="text-gray-400">{totalPages}</span>
          </div>

          <button 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-12 h-12 border rounded-none transition-colors ${
              currentPage === totalPages 
                ? "border-white/5 text-gray-700 bg-[#030303] cursor-not-allowed" 
                : "border-white/20 text-gray-400 hover:border-brand-blue hover:text-brand-blue bg-[#0a0a0e]"
            }`}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

    </section>
  );
}