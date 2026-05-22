export default function HeroSection() {
  return (
    <section className="relative w-full px-4 md:px-12 lg:px-16 max-w-[1200px] mx-auto pt-28 lg:pt-36 pb-16 text-center">
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
        Let's Build Something <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
          Extraordinary.
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
        Whether you have a question about enterprise networking, clinical data analytics, or just want to say hi, my inbox is always open.
      </p>

    </section>
  );
}