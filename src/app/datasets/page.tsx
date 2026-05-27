import { datasets } from "@/data/dataset";
import HeroSection from "@/components/sections/dataset-page/HeroSection";
import DatasetGridSection from "@/components/sections/dataset-page/DatasetGridSection";

export const metadata = {
  title: "Dataset | Hartono Adji Susanto",
  description: "Curated datasets for machine learning, medical informatics, and network analysis.",
};

export default function DatasetsPage() {
  return (
    <main className="w-full min-h-screen relative overflow-hidden">
      
      {/* Background Glow (Optimized for mobile anti-lag) */}
      <div className="absolute top-[-5%] right-[-5%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_60%)] rounded-full pointer-events-none -z-10 will-change-transform"></div>
      <div className="absolute top-[20%] left-[-5%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_60%)] rounded-full pointer-events-none -z-10 will-change-transform"></div>

      <HeroSection />
      
      <DatasetGridSection datasets={datasets} />

    </main>
  );
}