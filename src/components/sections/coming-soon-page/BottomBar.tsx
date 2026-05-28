export default function BottomBar() {
  return (
    // OPTIMASI PERFORMA:
    // 1. Menghapus backdrop-blur-sm dan bg-[#050505]/50.
    // 2. Menggunakan warna hitam pekat 100% solid (bg-[#050505]) agar GPU tidak perlu menghitung alpha/blur.
    // 3. Menambahkan transform-gpu agar bar ini punya layer render mandiri.
    <footer className="w-full border-t border-white/10 bg-[#050505] transform-gpu relative z-20 flex justify-between items-center px-6 py-4 shrink-0">
      <span className="font-mono text-[8px] md:text-[9px] text-gray-500 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} HARTONO ADJI SUSANTO
      </span>
      <span className="font-mono text-[8px] md:text-[9px] text-gray-500 uppercase tracking-widest hidden sm:block">
        ENCRYPTED CONNECTION ESTABLISHED
      </span>
    </footer>
  );
}