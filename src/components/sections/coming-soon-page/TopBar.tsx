import { TerminalSquare } from "lucide-react";

export default function TopBar() {
  return (
    // OPTIMASI PERFORMA:
    // 1. Menghapus backdrop-blur-sm dan efek transparan (/50).
    // 2. Menjadikan background hitam pekat 100% (bg-[#050505]).
    // 3. Menambahkan transform-gpu untuk mendedikasikan layer khusus di kartu grafis.
    <header className="w-full border-b border-white/10 bg-[#050505] transform-gpu relative z-20 flex justify-between items-center px-6 py-4 shrink-0">
      <div className="flex items-center gap-3">
        <TerminalSquare size={18} className="text-yellow-500" />
        <span className="font-mono text-[10px] md:text-xs text-gray-400 tracking-widest uppercase">/ HTN_SYSTEM_CORE</span>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-[9px] md:text-[10px] font-mono text-yellow-500 uppercase tracking-widest">STATUS: OFFLINE / COMPILING</span>
        {/* Ikon pulse ini aman karena bentuknya kecil dan simpel untuk CPU/GPU */}
        <span className="w-2 h-2 bg-yellow-500 animate-pulse ml-1 md:ml-2"></span>
      </div>
    </header>
  );
}