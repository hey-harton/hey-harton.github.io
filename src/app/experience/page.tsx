import ExperienceHeader from "@/components/sections/experience-page/ExperienceHeader";
import ExperienceTimeline from "@/components/sections/experience-page/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    // KUNCI PERBAIKAN: Menghapus "pt-20" agar ExperienceHeader bisa merambat naik menyentuh top-0 layar tanpa halangan
    <main className="w-full flex flex-col min-h-screen relative overflow-hidden pb-20">
      
      {/* Background Glow Effect (Tetap dipertahankan untuk estetika, digeser ke top-0 agar sinarnya optimal) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Sekarang komponen ini bebas merentang penuh menembus bawah Navbar */}
      <ExperienceHeader />
      
      {/* Komponen Timeline yang akan kita rombak selanjutnya */}
      <ExperienceTimeline />

    </main>
  );
}