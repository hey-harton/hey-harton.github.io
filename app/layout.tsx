import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      </head>
      <body className={`${inter.className} bg-[#070709] text-white antialiased flex flex-col min-h-screen relative`}>
        
        {/* === BACKGROUND DECORATIONS === */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] animate-grid-flow"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-blue/20 blur-[150px] animate-pulse [animation-duration:6s]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-green/20 blur-[150px] animate-pulse [animation-duration:8s] [animation-delay:2s]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070709_100%)] opacity-80"></div>
        </div>

        {/* === NAVBAR === */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* === KONTEN UTAMA & FOOTER === */}
        {/* KUNCI PERUBAHAN: Class max-w-7xl, mx-auto, px-6, sm:px-12 DIHAPUS. */}
        {/* Sekarang container ini membentang 100% dari ujung ke ujung layar. */}
        <div className="relative z-10 w-full flex-1 flex flex-col">
          <div className="flex-1 w-full">
            {children}
          </div>
          <Footer />
        </div>

      </body>
    </html>
  );
}