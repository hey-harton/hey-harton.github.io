import Link from "next/link";

export default function AnimatedLogo() {
  return (
    <Link 
      href="/" 
      className="relative flex items-center justify-center text-2xl font-bold tracking-tighter z-10 h-[32px] group" 
      title="Hartono Technolution"
    >
      {/* 1. Balok Geometris yang memanjang lalu menyusut */}
      <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-brand-blue to-brand-green rounded-sm animate-logo-block origin-center opacity-0 pointer-events-none"></div>

      {/* 2. Teks HTN yang merakit dari dalam keluar */}
      <div className="flex items-center animate-logo-text opacity-0">
        <span className="text-brand-blue">H</span>
        <span className="text-brand-green">AS</span>
      </div>
    </Link>
  );
}