export default function HeroSection() {
  return (
    <section className="relative w-full px-4 md:px-12 lg:px-16 max-w-[1400px] mx-auto pt-32 lg:pt-40 pb-20 border-b border-white/5">
      <div className="max-w-5xl">
        <h1 className="text-sm font-mono text-brand-blue uppercase tracking-[0.3em] mb-8">
          About HTN
        </h1>
        
        {/* Tipografi Raksasa ala Ciena */}
        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter leading-[1.05] text-white mb-10">
          Architecting the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
            Intelligence Edge.
          </span>
        </h2>
        
        <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-4xl">
          We don't just build systems. We design resilient network infrastructures and power them with precision data analytics to solve complex challenges.
        </p>
      </div>
    </section>
  );
}