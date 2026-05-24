import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop"; // <-- IMPORT KOMPONEN BARU

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio | Data & Development",
  description: "Personal portfolio showcasing data science, medical informatics, and web development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      </head>
      <body className={`${inter.className} bg-[#070709] text-white antialiased flex flex-col min-h-screen relative overflow-x-hidden`}>
        
        {/* === BACKGROUND DECORATIONS === */}
        {/* will-change-transform memberi tahu GPU bahwa ini sekadar background mati saat di-scroll */}
        <div className="fixed inset-0 z-0 pointer-events-none will-change-transform">
          
          {/* animate-grid-flow diubah menjadi md:animate-grid-flow (Mati di HP, Nyala di PC) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] md:animate-grid-flow"></div>
          
          {/* Ukuran blur dikecilkan di HP (300px), Denyut (pulse) DIMATIKAN di HP */}
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-brand-blue/20 blur-[80px] md:blur-[150px] md:animate-pulse [animation-duration:6s]"></div>
          
          {/* Sama seperti di atas, animasi dimatikan di mode mobile */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-brand-green/20 blur-[80px] md:blur-[150px] md:animate-pulse [animation-duration:8s] [animation-delay:2s]"></div>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070709_100%)] opacity-80"></div>
        </div>

        {/* === NAVBAR === */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* === KONTEN UTAMA & FOOTER === */}
        <div className="relative z-10 w-full flex-1 flex flex-col">
          <div className="flex-1 w-full">
            {children}
          </div>
          <Footer />
        </div>

        {/* === FITUR UI GLOBAL === */}
        {/* Komponen ScrollToTop diletakkan di luar kontainer z-10 agar bisa bebas melayang */}
        <ScrollToTop />

      </body>
    </html>
  );
}