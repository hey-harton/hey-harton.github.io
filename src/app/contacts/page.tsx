import HeroSection from "@/components/sections/contacts-page/HeroSection";
import ContactInfoSection from "@/components/sections/contacts-page/ContactInfoSection";
import ContactFormSection from "@/components/sections/contacts-page/ContactFormSection";

export const metadata = {
  title: "Contact | Hartono Technolution",
  description: "Get in touch for enterprise networking and data science solutions.",
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen relative overflow-hidden pb-32">
      
      {/* Background Glow */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_60%)] rounded-full pointer-events-none -z-10"></div>

      <HeroSection />

      <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Kolom Kiri: Informasi */}
          <div className="lg:col-span-5">
            <ContactInfoSection />
          </div>

          {/* Kolom Kanan: Formulir */}
          <div className="lg:col-span-7">
            <ContactFormSection />
          </div>

        </div>
      </section>

    </main>
  );
}