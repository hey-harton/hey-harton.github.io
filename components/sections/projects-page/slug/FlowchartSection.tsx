import Image from "next/image";

export default function FlowchartSection({ flowchartImage }: { flowchartImage: string }) {
  return (
    <section className="w-full py-24 border-y border-white/5 mb-32">
      <div className="px-4 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Intelligent Workflow</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            A high-level view of the data pipeline and system architecture powering the platform.
          </p>
        </div>
        
        <div className="relative w-full aspect-video bg-transparent border border-white/5 p-4 md:p-8">
          <Image 
            src={flowchartImage} 
            alt="System Architecture Flowchart" 
            fill 
            className="object-contain" 
          />
        </div>
      </div>
    </section>
  );
}