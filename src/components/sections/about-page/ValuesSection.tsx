import { Shield, Network, CloudCog } from "lucide-react";

// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function ValuesSection() {
  const values = [
    {
      id: "MODULE_01: NETWORK",
      icon: <Network className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
      title: "Arsitektur Jaringan Tangguh",
      desc: "Mendesain topologi jaringan enterprise bebas titik kegagalan tunggal (No Single Point of Failure) menggunakan protokol routing dinamis tingkat lanjut."
    },
    {
      id: "MODULE_02: CLOUD",
      icon: <CloudCog className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
      title: "Integrasi Cloud & Ventura",
      desc: "Menjembatani sistem server lokal dengan ekosistem cloud yang fleksibel guna menekan biaya operasional dan mempercepat pergerakan skalabilitas produk."
    },
    {
      id: "MODULE_03: SECURITY",
      icon: <Shield className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
      title: "Keamanan Algoritma & Data",
      desc: "Mengamankan integritas pipa data dari ujung ke ujung, sekaligus membuka potensi optimasi performa sistem melalui analisis prediktif sains data."
    }
  ];

  return (
    // PERBAIKAN: Padding responsif (py-16 md:py-24 lg:py-32)
    <section className="w-full bg-transparent border-b border-white/10 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-32">
        
        {/* Header ala Log Terminal */}
        <div className="mb-10 md:mb-16 border-l border-brand-blue pl-6 md:pl-8">
          <p className="text-brand-blue font-mono text-[10px] md:text-xs tracking-widest mb-3 uppercase">
            &gt; SYS_DOC: CORE_PRINCIPLES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-tight break-words">
            Prinsip <span className="text-brand-blue">Arsitektur Inti.</span>
            <span className="md:animate-pulse text-white">_</span>
          </h2>
        </div>

        {/* Grid Modul Nilai Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {values.map((val, index) => (
            // PERBAIKAN: Padding diubah menjadi p-6 md:p-8 lg:p-10 untuk HP
            <div 
              key={index} 
              className="group relative flex flex-col bg-[#050505] border border-white/10 p-6 md:p-8 lg:p-10 transition-colors duration-300 rounded-none hover:bg-[#0a0a0e] shadow-lg md:shadow-none"
            >
              {/* Garis Aksen Atas yang menyala saat di-hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>

              {/* Crosshairs Pengunci Bingkai Luar */}
              <Crosshair className="absolute top-[2px] left-[2px] text-brand-blue/20 group-hover:text-brand-blue transition-colors z-20" />
              <Crosshair className="absolute top-[2px] right-[2px] text-brand-blue/20 group-hover:text-brand-blue transition-colors z-20" />
              <Crosshair className="absolute bottom-[2px] left-[2px] text-brand-blue/20 group-hover:text-brand-blue transition-colors z-20" />
              <Crosshair className="absolute bottom-[2px] right-[2px] text-brand-blue/20 group-hover:text-brand-blue transition-colors z-20" />

              {/* ID Modul & Ikon */}
              <div className="flex justify-between items-center mb-6 md:mb-8 border-b border-white/10 pb-3 md:pb-4">
                <span className="text-[8px] md:text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                  / {val.id}
                </span>
                <div className="text-gray-500 group-hover:text-brand-blue transition-colors">
                  {val.icon}
                </div>
              </div>

              {/* Judul Prinsip */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 md:mb-6 tracking-tight uppercase group-hover:text-brand-blue transition-colors">
                {val.title}
              </h3>
              
              {/* Deskripsi Teknis (Font-Mono) */}
              {/* PERBAIKAN: Ukuran font diperkecil sedikit di layar mobile */}
              <p className="text-gray-400 font-mono text-[10px] md:text-xs lg:text-sm leading-relaxed font-light text-left mt-auto">
                {val.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}