import HeroSection from "@/components/sections/contacts-page/HeroSection";
import ContactInfoSection from "@/components/sections/contacts-page/ContactInfoSection";
import ContactFormSection from "@/components/sections/contacts-page/ContactFormSection";

// Menyesuaikan metadata dengan bahasa Indonesia dan diksi teknis
export const metadata = {
  title: "Kontak | Hartono Adji Susanto",
  description: "Jalur komunikasi aman untuk diskusi teknis rekayasa jaringan dan arsitektur data.",
};

export default function ContactPage() {
  return (
    // PERBAIKAN 1: Mengubah overflow-hidden menjadi overflow-x-hidden agar form di sisi kanan tidak terpotong (clipping)
    <main className="w-full min-h-screen flex flex-col relative overflow-x-hidden pb-32">
      
      {/* Background Glow: Warnanya diubah dari biru (rgba 59,130,246) menjadi hijau (rgba 16,185,129) agar senada dengan form */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_60%)] rounded-full pointer-events-none -z-10"></div>

      <HeroSection />

      {/* PERBAIKAN 2: max-w-[1200px] dilebarkan menjadi max-w-[1600px] (Seragam dengan halaman Enterprise lainnya) */}
      <section className="w-full px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto relative z-10 pt-8">
        
        {/* Jarak antar kolom (gap) disesuaikan agar panel kiri dan kanan punya ruang bernapas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Kolom Kiri: Informasi (Rasio 5/12) */}
          <div className="lg:col-span-5 w-full">
            <ContactInfoSection />
          </div>

          {/* Kolom Kanan: Formulir (Rasio 7/12) */}
          <div className="lg:col-span-7 w-full">
            <ContactFormSection />
          </div>

        </div>
      </section>

    </main>
  );
}