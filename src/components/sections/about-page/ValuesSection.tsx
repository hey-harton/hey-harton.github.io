import { Shield, Network, BrainCircuit } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: <Network size={32} />,
      title: "Resilient Architecture",
      desc: "Designing networks and applications that withstand failure, leveraging modern stacks like Next.js and robust routing protocols."
    },
    {
      icon: <BrainCircuit size={32} />,
      title: "Analytical Precision",
      desc: "Transforming raw telemetry and clinical records into actionable intelligence using advanced machine learning models."
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Operations",
      desc: "Implementing strict access controls and encrypted data pipelines to ensure organizational and user data integrity."
    }
  ];

  return (
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1400px] mx-auto py-24 border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Principles.</h2>
        <p className="text-gray-400 text-lg max-w-2xl">The technical philosophies that drive every line of code and every cable routed.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {values.map((val, index) => (
          <div key={index} className="flex flex-col group">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 mb-6 group-hover:bg-brand-blue/20 group-hover:text-brand-blue group-hover:border-brand-blue/50 transition-all duration-300">
              {val.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{val.title}</h3>
            <p className="text-gray-400 leading-relaxed">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}