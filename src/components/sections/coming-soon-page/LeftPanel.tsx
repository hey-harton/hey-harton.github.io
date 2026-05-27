'use client';

import { ArrowLeft, Activity } from "lucide-react";
import Link from "next/link";
import Crosshair from "./Crosshair";

interface LeftPanelProps {
  uptime: string;
}

export default function LeftPanel({ uptime }: LeftPanelProps) {
  return (
    <section className="lg:col-span-7 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 p-8 md:p-12 lg:p-16 relative bg-transparent overflow-y-auto lg:overflow-hidden">
      <Crosshair className="hidden lg:block absolute -top-[7px] -right-[7.5px] text-yellow-500/50 z-20" />
      <Crosshair className="hidden lg:block absolute -bottom-[7px] -right-[7.5px] text-yellow-500/50 z-20" />

      <p className="text-yellow-500 font-mono text-[10px] md:text-xs tracking-widest mb-4 uppercase">
        &gt; ERROR_CODE: 423_LOCKED
      </p>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tighter mb-6 break-words leading-[1.05]">
        UNDER_ <br />
        <span className="text-yellow-500">CONSTRUCTION.</span>
        <span className="animate-pulse text-white">_</span>
      </h1>
      
      <p className="text-gray-400 font-mono text-[11px] md:text-xs lg:text-sm max-w-xl leading-relaxed mb-8 border-l border-white/10 pl-5 text-left">
        Modul sistem ini sedang dalam tahap pengembangan dan kompilasi arsitektur tahap lanjut. Akses ke segmen publik ini akan dibuka secara otomatis setelah serangkaian uji integrasi dan proses <em>deployment</em> selesai.
      </p>

      <div className="flex flex-col gap-2 mb-8 max-w-md">
        <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-1">
          <Activity size={14} className="text-gray-500" />
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">DEV_UPTIME_COUNTER</span>
        </div>
        <span className="text-2xl md:text-3xl font-mono font-bold text-yellow-500 tracking-widest">
          {uptime}
        </span>
      </div>

      <Link 
        href="/" 
        className="inline-flex items-center gap-4 bg-yellow-500 text-[#050505] px-6 md:px-8 py-3 md:py-4 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors rounded-none group/btn w-max"
      >
        <ArrowLeft size={16} className="group-hover/btn:-translate-x-1 transition-transform" />
        RETURN_TO_BASE
      </Link>
    </section>
  );
}