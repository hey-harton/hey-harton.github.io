export default function HeroSection() {
  return (
    // bg-[#050505] dihapus
    <section className="w-full border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-32 lg:pt-40 pb-20 transform-gpu">
        <div className="max-w-5xl">
          <span className="text-sm font-mono text-brand-blue uppercase tracking-[0.3em] block mb-6">
            Profil Eksekutif
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-white tracking-tighter leading-[1.05] mb-10">
            Merancang konektivitas. <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
              Meningkatkan skala cloud.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-4xl">
            Didorong oleh ketahanan jaringan, dirancang untuk skalabilitas cloud, dan diperkuat oleh kecerdasan data. Temukan filosofi teknis dari Hartono Adji Susanto.
          </p>
        </div>
      </div>
    </section>
  );
}