import { TerminalSquare } from "lucide-react";

export default function TopBar() {
  return (
    <header className="w-full border-b border-white/10 bg-[#050505]/50 backdrop-blur-sm relative z-20 flex justify-between items-center px-6 py-4 shrink-0">
      <div className="flex items-center gap-3">
        <TerminalSquare size={18} className="text-yellow-500" />
        <span className="font-mono text-[10px] md:text-xs text-gray-400 tracking-widest uppercase">/ HTN_SYSTEM_CORE</span>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-[9px] md:text-[10px] font-mono text-yellow-500 uppercase tracking-widest">STATUS: OFFLINE / COMPILING</span>
        <span className="w-2 h-2 bg-yellow-500 animate-pulse ml-1 md:ml-2"></span>
      </div>
    </header>
  );
}