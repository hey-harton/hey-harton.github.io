import type { Metadata } from "next";
import "@/components/style/global.css";

// Import komponen global
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop"; // KUNCI: Import komponen ScrollToTop

export const metadata: Metadata = {
  title: "Hartono Adji Susanto | Portfolio",
  description: "Portofolio Profesional Enterprise Networking, Cloud Architecture, & Data Science.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#050505] text-white min-h-screen overflow-x-hidden antialiased font-mono relative">
        
        {/* =========================================================
            LATAR BELAKANG GRID GLOBAL (MENGURANGI MATA LELAH)
            ========================================================= */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* 1. Garis Grid: Opasitas putih dinaikkan menjadi 8% (0.08) agar lebih tegas */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          
          {/* 2. Cahaya Latar (Glow): Bias warna biru sangat halus di bagian atas layar 
                 untuk memecah kepadatan warna hitam solid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,82,214,0.08)_0%,transparent_60%)]"></div>
        </div>

        {/* =========================================================
            KONTAINER KONTEN UTAMA
            ========================================================= */}
        {/* z-10 memastikan semua konten berada di atas grid */}
        <div className="flex flex-col min-h-screen relative w-full z-10">
          
          <Navbar />
          
          <main className="flex-1 w-full flex flex-col relative">
            {children}
          </main>

          <Footer />
          
          {/* Eksekusi komponen ScrollToTop di level teratas */}
          <ScrollToTop />
          
        </div>

      </body>
    </html>
  );
}