export default function MissionSection() {
  return (
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1400px] mx-auto py-24 border-b border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Kolom Kiri: Sticky Heading */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-32">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Bridging the gap between infrastructure and intelligence.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-green"></div>
          </div>
        </div>

        {/* Kolom Kanan: Narasi Bio */}
        <div className="lg:col-span-7 flex flex-col gap-10 text-lg text-gray-300 font-light leading-relaxed">
          <p>
            The foundation of Hartono Technolution (HTN) is built upon a rigorous understanding of hardware and protocols. Rooted in an early focus on Computer and Network Engineering (TKJ), the journey began with mastering the physical layers of connectivity—configuring multi-vendor environments across Cisco, MikroTik, and Palo Alto systems.
          </p>
          <p>
            However, raw data flow is only half the equation. To truly extract value from modern systems, infrastructure must be paired with analytical intelligence. Currently advancing through the Data Science program at Universitas Teknologi Yogyakarta, the focus has expanded to precision biometry, machine learning, and centralized organizational data structures.
          </p>
          <p>
            Beyond technical execution, leadership and collaboration remain core pillars. As the driving force behind the DATASEA academic community, the mission is to orchestrate cross-functional teams—spanning IT, Human Resources, and Creative divisions—to build robust digital environments and archive portals that empower collective growth.
          </p>
        </div>

      </div>
    </section>
  );
}