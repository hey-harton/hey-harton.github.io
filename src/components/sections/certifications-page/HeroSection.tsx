export default function HeroSection() {
  return (
    <section className="relative w-full px-4 md:px-12 lg:px-16 max-w-[1200px] mx-auto pt-28 lg:pt-33 pb-20 text-center">
      
      {/* Tipografi Rapi dan Tengah */}
      <h1 className="max-w-3xl mx-auto text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-white text-center">
        Validated Expertise for the <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
          Modern Enterprise.
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
        A proven track record of certified excellence across enterprise network routing, clinical data analytics, and secure cloud infrastructure operations.
      </p>

    </section>
  );
}