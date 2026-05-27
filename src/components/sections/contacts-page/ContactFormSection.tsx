"use client";

import { Send } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function ContactFormSection() {
  return (
    <div className="bg-[#050505] border border-white/10 rounded-none p-8 lg:p-10 relative group">
      
      {/* Crosshairs Pengunci Bingkai Luar */}
      <Crosshair className="absolute top-[2px] left-[2px] text-brand-green/30 group-hover:text-brand-green transition-colors z-20" />
      <Crosshair className="absolute top-[2px] right-[2px] text-brand-green/30 group-hover:text-brand-green transition-colors z-20" />
      <Crosshair className="absolute bottom-[2px] left-[2px] text-brand-green/30 group-hover:text-brand-green transition-colors z-20" />
      <Crosshair className="absolute bottom-[2px] right-[2px] text-brand-green/30 group-hover:text-brand-green transition-colors z-20" />

      {/* Efek Garis Aksen Kiri yang menyala saat form diisi */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-focus-within:bg-brand-green transition-colors duration-500"></div>

      <div className="border-b border-white/10 pb-4 mb-8">
        <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">Transmisi Pesan<span className="text-brand-green">_</span></h3>
        <p className="text-gray-400 font-mono text-sm tracking-wide">Silakan isi parameter di bawah untuk mengirimkan payload pesan ke server utama.</p>
      </div>

      <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              / PARAM_01: IDENTITAS_PENGGUNA
            </label>
            <input 
              type="text" 
              id="name" 
              placeholder="Masukkan nama lengkap..."
              className="bg-[#0a0a0e] border border-white/10 rounded-none px-4 py-3.5 text-white placeholder:text-gray-700 font-mono text-sm focus:outline-none focus:border-brand-green focus:bg-white/5 transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              / PARAM_02: ALAMAT_SINKRONISASI
            </label>
            <input 
              type="email" 
              id="email" 
              placeholder="alamat@email.com"
              className="bg-[#0a0a0e] border border-white/10 rounded-none px-4 py-3.5 text-white placeholder:text-gray-700 font-mono text-sm focus:outline-none focus:border-brand-green focus:bg-white/5 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            / PARAM_03: OBJEKTIF_TRANSMISI
          </label>
          <input 
            type="text" 
            id="subject" 
            placeholder="Tujuan atau subjek pesan..."
            className="bg-[#0a0a0e] border border-white/10 rounded-none px-4 py-3.5 text-white placeholder:text-gray-700 font-mono text-sm focus:outline-none focus:border-brand-green focus:bg-white/5 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            / PARAM_04: PAYLOAD_PESAN
          </label>
          <textarea 
            id="message" 
            rows={5}
            placeholder="Tuliskan detail teknis atau pesan yang ingin disampaikan..."
            className="bg-[#0a0a0e] border border-white/10 rounded-none px-4 py-3.5 text-white placeholder:text-gray-700 font-mono text-sm focus:outline-none focus:border-brand-green focus:bg-white/5 transition-all resize-none"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="mt-4 flex items-center justify-center gap-3 bg-brand-green text-[#050505] px-8 py-4 rounded-none font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-[#12d192] transition-colors w-full sm:w-max group/btn"
        >
          EXECUTE_TRANSMISSION 
          <Send size={14} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </button>

      </form>
    </div>
  );
}