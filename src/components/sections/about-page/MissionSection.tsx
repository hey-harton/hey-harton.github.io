export default function MissionSection() {
  return (
    // bg-[#050505] dihapus
    <section className="w-full border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24 transform-gpu">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-6 tracking-tight">
              Titik temu antara <br />
              <span className="font-semibold text-brand-blue">Infrastruktur & Ventura.</span>
            </h2>
            <div className="w-16 h-[2px] bg-brand-blue"></div>
          </div>

          {/* Menambahkan kelas text-justify di sini */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-lg text-gray-400 font-light leading-relaxed text-justify">
            <p>
              Fondasi profesional dibangun di atas pemahaman mendalam mengenai arsitektur jaringan fisik dan logika operasional <em>cloud</em>. Mengawali rekam jejak dari kompetensi Teknik Komputer dan Jaringan (TKJ), fokus utama berakar pada penyediaan interkoneksi skala perusahaan yang tangguh, menguasai manajemen multi-vendor mulai dari ekosistem Cisco, MikroTik, Juniper, hingga sistem keamanan tingkat lanjut.
            </p>
            <p>
              Sebagai pendiri dari <span className="text-white font-medium">Hartono Technolution (HTN)</span>, kapabilitas teknis ini ditransformasikan menjadi entitas solusi teknologi terintegrasi. Rekayasa infrastruktur tidak lagi dipandang sekadar sebagai penarikan kabel atau konfigurasi <em>routing</em> statis, melainkan sebuah seni membangun platform operasi yang aman, berkinerja tinggi, dan adaptif terhadap kebutuhan ekosistem digital modern.
            </p>
            <p>
              Tanpa membatasi diri pada infrastruktur mentah, transisi menuju pemrosesan data diakselerasi melalui studi Sains Data di Universitas Teknologi Yogyakarta. Integrasi ini melahirkan perspektif baru: jaringan menyediakan jalur pipa data yang andal, sementara teknik sains data—seperti analitik biometri presisi dan pemodelan algoritma—mengekstrak nilai strategis dari data yang mengalir di dalamnya.
            </p>
            <p>
              Dimensi kepemimpinan di luar lingkup teknis diwujudkan melalui peran sebagai ketua komunitas akademik <span className="text-white font-medium">DATASEA</span>. Mengorkestrasi sinergi lintas divisi mulai dari manajemen inti, infrastruktur IT, hingga ekonomi kreatif, guna menciptakan ekosistem repositori digital dan portal arsip terpusat yang berdampak nyata bagi skalabilitas organisasi.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}