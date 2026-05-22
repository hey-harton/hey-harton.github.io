import ExperienceHeader from "@/components/sections/experience-page/ExperienceHeader";
import ExperienceTimeline from "@/components/sections/experience-page/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    // Memastikan tag main melebar 100% (w-full)
    <main className="w-full flex flex-col min-h-screen relative overflow-hidden pt-20 pb-20">
      
      {/* Background Glow Effect (Tetap dipertahankan untuk estetika) */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* KUNCI PERUBAHAN: Menghapus div "max-w-4xl" pengurung */}
      {/* Sekarang komponen ini bebas merentang penuh sesuai konfigurasi di dalamnya */}
      <ExperienceHeader />
      <ExperienceTimeline />

    </main>
  );
}