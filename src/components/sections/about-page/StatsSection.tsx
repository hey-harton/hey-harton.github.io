export default function StatsSection() {
  const stats = [
    { value: "5+", label: "Physical Routing Nodes", desc: "Enterprise lab provisioning" },
    { value: "100%", label: "Data Uptime", desc: "Via Turso & Drive API integration" },
    { value: "3+", label: "Core Divisions Led", desc: "DATASEA community orchestration" },
    { value: "Llama-3", label: "NLP Integration", desc: "Advanced machine learning pipelines" }
  ];

  return (
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1400px] mx-auto py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-2xl">
            <span className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tighter">
              {stat.value}
            </span>
            <span className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-4">
              {stat.label}
            </span>
            <p className="text-gray-500 text-sm mt-auto">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}