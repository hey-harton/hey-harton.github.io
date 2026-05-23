import { Shield, Network, CloudCog } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: <Network size={32} strokeWidth={1.5} />,
      title: "Arsitektur Jaringan Tangguh",
      desc: "Mendesain topologi jaringan enterprise bebas titik kegagalan tunggal (No Single Point of Failure) menggunakan protokol routing dinamis tingkat lanjut."
    },
    {
      icon: <CloudCog size={32} strokeWidth={1.5} />,
      title: "Integrasi Cloud & Ventura",
      desc: "Menjembatani sistem server lokal dengan ekosistem cloud yang fleksibel guna menekan biaya operasional dan mempercepat pergerakan skalabilitas produk."
    },
    {
      icon: <Shield size={32} strokeWidth={1.5} />,
      title: "Keamanan Algoritma & Data",
      desc: "Mengamankan integritas pipa data dari ujung ke ujung, sekaligus membuka potensi optimasi performa sistem melalui analisis prediktif sains data."
    }
  ];

  return (
    // bg-[#050505] dihapus
    <section className="w-full">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24 transform-gpu">
        <div className="mb-16">
          <span className="text-sm font-mono text-brand-blue uppercase tracking-widest block mb-2">Standar Operasional</span>
          <h2 className="text-3xl md:text-4xl font-light text-white">Prinsip <span className="font-semibold">Arsitektur Inti.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((val, index) => (
            <div key={index} className="flex flex-col border-l border-white/10 pl-6 lg:pl-8 py-2">
              <div className="text-brand-blue mb-6">
                {val.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">{val.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light text-base">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}