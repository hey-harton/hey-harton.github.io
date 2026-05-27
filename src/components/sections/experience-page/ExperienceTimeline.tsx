import ExperienceItem from "./ExperienceItem";

export default function ExperienceTimeline() {
  const dynamicExperiences = [
    {
      role: "Founder & Technical Lead",
      organization: "Hartono Technolution (HTN)",
      period: "2025 - Present",
      description: "Mendirikan dan mengomandoi operasional ventura layanan teknis independen. Berfokus pada integrasi deployment perangkat lunak modern dan manajemen kontrol jaringan lokal.",
      highlights: [
        "Mengeksekusi branding arsitektur infrastruktur digital internal perusahaan dan registrasi domain mandiri.",
        "Membangun pangkalan laboratorium jaringan lokal mandiri yang terdiri dari multi-router Cisco dan MikroTik untuk simulasi beban kerja routing skala menengah.",
        "Mengintegrasikan deployment otomatis repositori dengan efisiensi tinggi menggunakan arsitektur web modern."
      ],
      technologies: ["Next.js", "Tailwind CSS", "Vercel", "Cisco IOS", "MikroTik RouterOS"]
    },
    {
      role: "Chairperson & Technology Director",
      organization: "DATASEA Academic Community",
      period: "2025 - Present",
      description: "Memimpin penataan ulang identitas teknologi komunitas riset data tingkat mahasiswa. Bertanggung jawab penuh atas migrasi arsip digital terpusat dan tata kelola akun infrastruktur IT inti organisasi.",
      highlights: [
        "Memimpin reposisi arsitektur platform internal terintegrasi, mengkoordinasikan divisi IT, PR, PSDM, dan Creative Economy.",
        "Mendeploy Datasea Archive Portal menggunakan Google Drive API tingkat lanjut untuk otomatisasi sinkronisasi data arsip terpusat.",
        "Mengelola basis data member skala komunitas menggunakan integrasi Turso DB dan manajemen otentikasi aman."
      ],
      technologies: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript"]
    },
    {
      role: "Network Infrastructure Engineer",
      organization: "Enterprise Routing & Switching Lab (TKJ Background)",
      period: "2024 - 2025",
      description: "Mengoptimalkan konfigurasi perangkat keras jaringan enterprise untuk simulasi beban distribusi data paket secara manual dan terotomatisasi.",
      highlights: [
        "Mengonfigurasi tumpukan protokol routing dinamis pada topologi multi-router fisik Cisco ISR 1100 dan seri 2901.",
        "Merancang manajemen manajemen bandwidth dan kebijakan firewall ketat untuk pengamanan jalur distribusi data lokal.",
        "Melakukan instalasi mandiri media transmisi kabel CAT6 sepanjang ratusan meter dengan standar redaman minimal."
      ],
      technologies: ["Cisco IOS", "MikroTik RouterOS"]
    }
  ];

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-32">
      <div className="relative w-full">
        
        {/* Garis Vertikal Timeline: Diselaraskan dengan kordinat kotak di ExperienceItem */}
        <div className="absolute left-[25%] top-2 bottom-0 w-px bg-white/10 hidden lg:block" style={{ transform: 'translateX(-0.5px)' }}></div>
        
        <div className="space-y-16 lg:space-y-20">
          {dynamicExperiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              role={exp.role}
              organization={exp.organization}
              period={exp.period}
              description={exp.description}
              highlights={exp.highlights}
              technologies={exp.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}