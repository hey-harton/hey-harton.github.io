import { datasets } from "@/data/dataset";
import HeroSection from "@/components/sections/dataset-page/HeroSection";
import DatasetGridSection from "@/components/sections/dataset-page/DatasetGridSection";

export const metadata = {
  title: "Dataset | Hartono Adji Susanto",
  description: "Curated datasets for machine learning, medical informatics, and network analysis.",
};

export default function DatasetsPage() {
  return (
    // PERBAIKAN: Mengubah <main> menjadi <div>, menghapus overflow-hidden dan min-h-screen
    <div className="w-full flex flex-col relative">
      
      {/* Background Glow (Dioptimalkan untuk performa anti-lag) */}
      {/* PERBAIKAN: Dimatikan di HP (hidden md:block) dan will-change-transform dihapus */}
      <div className="hidden md:block absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_60%)] rounded-full pointer-events-none z-0"></div>
      <div className="hidden md:block absolute top-[20%] left-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_60%)] rounded-full pointer-events-none z-0"></div>

      <HeroSection />
      
      <DatasetGridSection datasets={datasets} />

    </div>
  );
}