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
    // PERBAIKAN: Mengubah <main> menjadi <div>, menghapus min-h-screen & overflow-x-hidden (sudah diatur layout.tsx)
    <div className="w-full flex flex-col relative pb-20 md:pb-32">
      
      {/* Background Glow: Disembunyikan di HP (hidden md:block) agar animasi form tetap mulus */}
      <div className="hidden md:block absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_60%)] rounded-full pointer-events-none z-0"></div>

      <HeroSection />

      {/* PERBAIKAN: max-w-[1600px] dipertahankan, margin disesuaikan */}
      <section className="w-full px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto relative z-10 pt-4 md:pt-8">
        
        {/* Jarak antar kolom (gap) disesuaikan agar panel kiri dan kanan punya ruang bernapas di semua layar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Kolom Kiri: Informasi (Rasio 5/12) */}
          <div className="lg:col-span-5 w-full">
            <ContactInfoSection />
          </div>

          {/* Kolom Kanan: Formulir (Rasio 7/12) */}
          {/* Tambahan mt-4 lg:mt-0 untuk memberi jarak ekstra di HP jika panel atas bawah bertumpuk */}
          <div className="lg:col-span-7 w-full mt-4 lg:mt-0">
            <ContactFormSection />
          </div>

        </div>
      </section>

    </div>
  );
}