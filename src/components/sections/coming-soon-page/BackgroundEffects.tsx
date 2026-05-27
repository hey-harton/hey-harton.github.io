export default function BackgroundEffects() {
  return (
    <>
      {/* 1. Latar Belakang Grid: Opacity dinaikkan dari 0.02 menjadi 0.08 (8%) agar garisnya tajam */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,white,transparent_90%)]"></div>
      
      {/* 2. Glow Utama (Kiri Atas): Opacity dinaikkan dari 0.06 menjadi 0.15 (15%) dan ukurannya diperbesar */}
      <div className="hidden md:block absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(234,179,8,0.15)_0%,transparent_60%)] rounded-full pointer-events-none z-0"></div>
      
      {/* 3. Glow Sekunder (Kanan Bawah): Ditambahkan kembali untuk menyeimbangkan pencahayaan layar dengan opacity 10% */}
      <div className="hidden md:block absolute -bottom-[10%] -right-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(234,179,8,0.10)_0%,transparent_60%)] rounded-full pointer-events-none z-0"></div>
    </>
  );
}