import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Jika total halaman hanya 1 atau 0, sembunyikan pagination sepenuhnya
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-20">
      <div className="flex items-center gap-4 font-mono text-sm tracking-widest text-gray-500 bg-[#070709] border border-white/10 px-6 py-3">
        
        {/* Tombol Sebelumnya (<) */}
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="p-1 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous Page"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Deretan Angka (01 | 02 | 03) */}
        <div className="flex items-center gap-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page, index) => (
            <div key={page} className="flex items-center gap-4">
              <button
                onClick={() => onPageChange(page)}
                className={`transition-colors ${
                  currentPage === page 
                    ? "text-brand-blue font-bold" 
                    : "hover:text-white"
                }`}
              >
                {page < 10 ? `0${page}` : page}
              </button>
              
              {/* Pemisah (|) */}
              {index < totalPages - 1 && (
                <span className="text-white/20 select-none">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Tombol Selanjutnya (>) */}
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-1 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Next Page"
        >
          <ChevronRight size={18} />
        </button>

      </div>
    </div>
  );
}