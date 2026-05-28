export default function BackgroundEffects() {
  return (
    // OPTIMASI: Membungkus semua efek dalam kontainer khusus yang dikunci oleh GPU
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden contain-strict transform-gpu">
      
      {/* 1. Latar Belakang Grid: Ditambah transform-gpu agar masker dieksekusi sekali saja di awal */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent_90%)] transform-gpu"></div>
      
      {/* 2. Glow Utama: Ditambah transform-gpu dan will-change-transform */}
      <div className="hidden md:block absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(234,179,8,0.15)_0%,transparent_60%)] rounded-full transform-gpu will-change-transform"></div>
      
      {/* 3. Glow Sekunder: Ditambah transform-gpu dan will-change-transform */}
      <div className="hidden md:block absolute -bottom-[10%] -right-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(234,179,8,0.10)_0%,transparent_60%)] rounded-full transform-gpu will-change-transform"></div>
      
    </div>
  );
}