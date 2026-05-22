import { getProjectDetails } from "@/data/projects"; 
import HeroSection from "@/components/sections/projects-page/slug/HeroSection";
import CoverSection from "@/components/sections/projects-page/slug/CoverSection";
import OverviewSection from "@/components/sections/projects-page/slug/OverviewSection";
import FlowchartSection from "@/components/sections/projects-page/slug/FlowchartSection";
import GallerySection from "@/components/sections/projects-page/slug/GallerySection";
import UpdateHistorySection from "@/components/sections/projects-page/slug/UpdateHistorySection"; 

export async function generateStaticParams() {
  return [
    { slug: "medical-dashboard" },
    { slug: "datasea-portal" },
    { slug: "truenews" },
    { slug: "interactive-story" },
    { slug: "network-topology" },
  ];
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";
  
  const project = getProjectDetails(slug);

  return (
    <main className="w-full min-h-screen pt-20 lg:pt-24 pb-20 relative">
      
      {/* Background Glow (Dioptimalkan anti-lag untuk Mobile) */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_60%)] rounded-full pointer-events-none -z-10 will-change-transform"></div>
      
      <HeroSection 
        title={project.title}
        role={project.role}
        year={project.year}
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
        status={project.status} 
      />

      <CoverSection 
        coverImage={project.coverImage} 
        title={project.title} 
      />

      <OverviewSection 
        overview={project.overview} 
        features={project.features}
        technologies={project.technologies} 
      />

      <FlowchartSection 
        flowchartImage={project.flowchartImage} 
      />

      <GallerySection 
        gallery={project.gallery} 
      />

      <UpdateHistorySection 
        updates={project.updates}
      />

    </main>
  );
}