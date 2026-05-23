export default function StatsSection() {
  const stats = [
    { 
      value: "05+", 
      label: "Proyek Terselesaikan", 
      desc: "Portofolio pengembangan yang mencakup berbagai variasi solusi IT, dari infrastruktur hingga perangkat lunak." 
    },
    { 
      value: "Arsitek", 
      label: "Jaringan & Cloud", 
      desc: "Merancang dan mengelola topologi jaringan serta infrastruktur komputasi awan yang aman dan terukur." 
    },
    { 
      value: "Founder", 
      label: "Hartono Technolution", 
      desc: "Mendirikan dan memimpin arah strategis operasional ventura teknologi untuk solusi IT terintegrasi." 
    },
    { 
      value: "02+", 
      label: "Sertifikasi & Badge", 
      desc: "Validasi keahlian teknis spesifik yang diakui oleh industri melalui lencana digital dan sertifikasi profesional." 
    }
  ];

  return (
    // bg-[#050505] dihapus
    <section className="w-full border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24">
        <div className="bg-white/10 gap-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 transform-gpu">
          {stats.map((stat, index) => (
            // Mengubah bg-[#050505] menjadi bg-black/20 agar sedikit transparan namun grid tetap terlihat
            <div key={index} className="bg-black/20 backdrop-blur-md p-8 flex flex-col h-full hover:bg-black/40 transition-colors">
              <span className="text-4xl md:text-5xl font-semibold text-white mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-brand-blue font-semibold text-xs uppercase tracking-widest mb-4 block">
                {stat.label}
              </span>
              <p className="text-gray-500 text-sm leading-relaxed font-light mt-auto">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}