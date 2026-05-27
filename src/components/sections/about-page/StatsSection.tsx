export default function StatsSection() {
  const stats = [
    { 
      id: "METRIC_01",
      value: "05+", 
      label: "PROYEK_TERSELESAIKAN", 
      desc: "Portofolio pengembangan yang mencakup berbagai variasi solusi IT, dari infrastruktur fisik hingga perangkat lunak." 
    },
    { 
      id: "METRIC_02",
      value: "Arsitek", 
      label: "JARINGAN_&_CLOUD", 
      desc: "Merancang dan mengelola topologi jaringan serta infrastruktur komputasi awan yang aman dan terukur." 
    },
    { 
      id: "METRIC_03",
      value: "Founder", 
      label: "VENTURA_TEKNOLOGI", 
      desc: "Mendirikan dan memimpin arah strategis operasional Hartono Technolution (HTN) untuk solusi IT terintegrasi." 
    },
    { 
      id: "METRIC_04",
      value: "02+", 
      label: "SERTIFIKASI_INDUSTRI", 
      desc: "Validasi keahlian teknis spesifik yang diakui oleh industri melalui lencana digital dan sertifikasi profesional." 
    }
  ];

  return (
    // PERBAIKAN: transform-gpu dihapus dari seluruh kontainer
    <section className="w-full border-b border-white/10 bg-transparent relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-32">
        
        {/* Trik gap-[1px] dipertahankan untuk membuat garis pembatas setebal 1px ala dashboard instrumen */}
        <div className="bg-white/10 gap-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10">
          {stats.map((stat) => (
            // Menggunakan warna solid #050505, tanpa efek blur kaca
            <div key={stat.id} className="bg-[#050505] p-8 md:p-10 flex flex-col h-full relative group hover:bg-[#0a0a0e] transition-colors">
              
              {/* Garis Indikator Atas yang menyala saat di-hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* ID Metrik ala Terminal */}
              <span className="text-gray-600 font-mono text-[9px] uppercase tracking-widest mb-4 block">
                / {stat.id}
              </span>

              {/* Nilai Utama */}
              <span className="text-4xl md:text-5xl font-mono font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </span>
              
              {/* Label Kategori */}
              <span className="text-brand-blue font-mono font-bold text-[10px] uppercase tracking-widest mb-6 block border-b border-white/5 pb-3">
                {stat.label}
              </span>
              
              {/* Deskripsi (Rata Kiri) */}
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-mono font-light mt-auto text-left">
                {stat.desc}
              </p>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}