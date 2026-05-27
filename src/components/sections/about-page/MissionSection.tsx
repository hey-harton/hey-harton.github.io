// Tanda Plus (Crosshair) khas titik kordinat arsitektur
const Crosshair = ({ className }: { className?: string }) => ( 
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7.5 0V15M0 7.5H15" />
  </svg> 
);

export default function MissionSection() {
  return (
    <section className="w-full border-b border-white/10 relative z-10 bg-[#050505]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-32">
        
        {/* Kontainer Grid dengan Garis Tepi Kiri ala Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative border-l border-white/10 pl-6 md:pl-10">
          
          {/* Crosshairs Pengunci Garis Vertikal */}
          <Crosshair className="absolute -top-[7px] -left-[7.5px] text-brand-blue z-20" />
          <Crosshair className="absolute -bottom-[7px] -left-[7.5px] text-brand-blue z-20" />

          {/* Kolom Kiri: Judul Panel */}
          {/* PERBAIKAN: lg:sticky dan lg:top-32 DIHAPUS agar judul diam di tempat (tidak mengikuti scroll) */}
          <div className="lg:col-span-5 pt-2">
            <p className="text-brand-blue font-mono text-[10px] md:text-xs tracking-widest mb-3 md:mb-4 uppercase">
              &gt; SYS_DOC: CORE_MISSION
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6 md:mb-8 tracking-tight uppercase break-words">
              Sinergi <br className="hidden lg:block"/>
              <span className="text-brand-blue">Infrastruktur & Ventura.</span>
              <span className="md:animate-pulse text-white">_</span>
            </h2>
          </div>

          {/* Kolom Kanan: Teks Deskripsi */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 text-sm md:text-base lg:text-lg text-gray-400 font-mono font-light leading-relaxed text-left">
            <p>
              Fondasi profesional dibangun di atas pemahaman mendalam mengenai arsitektur jaringan fisik dan logika operasional <em>cloud</em>. Mengawali rekam jejak dari kompetensi Teknik Komputer dan Jaringan (TKJ), fokus utama berakar pada penyediaan interkoneksi skala perusahaan yang tangguh, menguasai manajemen multi-vendor mulai dari ekosistem Cisco, MikroTik, Juniper, hingga sistem keamanan tingkat lanjut.
            </p>
            
            <p>
              Sebagai pendiri dari <span className="inline-block bg-[#050505] border border-white/20 px-2 py-0.5 text-white font-bold tracking-widest mx-1 text-[10px] md:text-xs lg:text-sm rounded-none">Hartono Technolution (HTN)</span>, kapabilitas teknis ini ditransformasikan menjadi entitas solusi teknologi terintegrasi. Rekayasa infrastruktur tidak lagi dipandang sekadar sebagai penarikan kabel atau konfigurasi <em>routing</em> statis, melainkan sebuah seni membangun platform operasi yang aman, berkinerja tinggi, dan adaptif terhadap kebutuhan ekosistem digital modern.
            </p>
            
            <p>
              Tanpa membatasi diri pada infrastruktur mentah, transisi menuju pemrosesan data diakselerasi melalui studi Sains Data di Universitas Teknologi Yogyakarta. Integrasi ini melahirkan perspektif baru: jaringan menyediakan jalur pipa data yang andal, sementara teknik sains data—seperti analitik biometri presisi dan pemodelan algoritma—mengekstrak nilai strategis dari data yang mengalir di dalamnya.
            </p>
            
            <p>
              Dimensi kepemimpinan di luar lingkup teknis diwujudkan melalui peran sebagai ketua komunitas akademik <span className="inline-block bg-[#050505] border border-white/20 px-2 py-0.5 text-white font-bold tracking-widest mx-1 text-[10px] md:text-xs lg:text-sm rounded-none">DATASEA</span>. Mengorkestrasi sinergi lintas divisi mulai dari manajemen inti, infrastruktur IT, hingga ekonomi kreatif, guna menciptakan ekosistem repositori digital dan portal arsip terpusat yang berdampak nyata bagi skalabilitas organisasi.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}