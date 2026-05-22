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

// Helper untuk menampilkan ikon format file yang berbeda-beda
const getFormatIcon = (format: string) => {
  switch (format.toUpperCase()) {
    case 'JSON': return <FileJson size={16} className="text-yellow-400" />;
    case 'EXCEL': return <FileSpreadsheet size={16} className="text-green-500" />;
    case 'CSV':
    default: return <FileText size={16} className="text-brand-blue" />;
  }
};

export default function DatasetGridSection({ datasets }: { datasets: Dataset[] }) {
  // === LOGIKA PAGINATION ===
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Jumlah dataset per halaman. Bisa kamu ubah sesuai kebutuhan.

  // Menghitung index dataset yang akan ditampilkan
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDatasets = datasets.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(datasets.length / itemsPerPage);

  // Fungsi navigasi tombol
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1600px] mx-auto pb-32">
      
      {/* GRID KARTU DATASET */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {currentDatasets.map((dataset) => (
          <div 
            key={dataset.id}
            className="group flex flex-col bg-white/[0.02] border border-white/5 hover:border-brand-blue/50 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
          >
            {/* Aksen Garis Biru saat Hover */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-blue to-brand-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            <div className="p-8 flex-1 flex flex-col">
              {/* Category & Format Badge */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-brand-blue uppercase tracking-widest border border-brand-blue/30 bg-brand-blue/10 px-3 py-1">
                  {dataset.category}
                </span>
                <div className="flex items-center gap-2 bg-[#070709] border border-white/10 px-3 py-1 rounded-full">
                  {getFormatIcon(dataset.format)}
                  <span className="text-xs font-bold text-gray-300">{dataset.format}</span>
                </div>
              </div>

              {/* Title & Desc */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">
                {dataset.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                {dataset.description}
              </p>

              {/* Meta Info */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 mb-8">
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Size</span>
                  <span className="text-sm text-gray-300 font-mono flex items-center gap-1.5">
                    <HardDrive size={14} className="text-gray-500" /> {dataset.size}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Records</span>
                  <span className="text-sm text-gray-300 font-mono">{dataset.records}</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Updated</span>
                  <span className="text-sm text-gray-300 font-mono">{dataset.lastUpdated}</span>
                </div>
              </div>

              {/* Download Button */}
              {dataset.downloadUrl !== "#" ? (
                <a 
                  href={dataset.downloadUrl} 
                  className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 text-white py-3 font-semibold hover:bg-brand-blue hover:border-brand-blue transition-colors"
                >
                  <FileDown size={18} /> Download Dataset
                </a>
              ) : (
                <div className="flex items-center justify-center gap-2 w-full bg-[#070709] border border-white/5 text-gray-600 py-3 font-semibold cursor-not-allowed">
                  <FileDown size={18} className="opacity-50" /> Private Access Only
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* NAVIGASI PAGINATION */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-16">
          <button 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-12 h-12 border transition-colors ${
              currentPage === 1 
                ? "border-white/5 text-gray-600 cursor-not-allowed" 
                : "border-white/20 text-white hover:border-brand-blue hover:text-brand-blue bg-white/5"
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="text-brand-blue font-bold">{currentPage}</span>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">{totalPages}</span>
          </div>

          <button 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-12 h-12 border transition-colors ${
              currentPage === totalPages 
                ? "border-white/5 text-gray-600 cursor-not-allowed" 
                : "border-white/20 text-white hover:border-brand-blue hover:text-brand-blue bg-white/5"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

    </section>
  );
}