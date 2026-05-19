import { getProjectDetails } from "@/data/projects"; 
import HeroSection from "@/components/sections/projects-page/slug/HeroSection";
import CoverSection from "@/components/sections/projects-page/slug/CoverSection";
import OverviewSection from "@/components/sections/projects-page/slug/OverviewSection";
import FlowchartSection from "@/components/sections/projects-page/slug/FlowchartSection";
import GallerySection from "@/components/sections/projects-page/slug/GallerySection";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";
  
  const project = getProjectDetails(slug);

  return (
    <main className="w-full min-h-screen pt-20 lg:pt-24 pb-20 relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
      <HeroSection 
        title={project.title}
        role={project.role}
        year={project.year}
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
      />

      <CoverSection 
        coverImage={project.coverImage} 
        title={project.title} 
      />

      <OverviewSection 
        overview={project.overview} 
        technologies={project.technologies} 
      />

      <FlowchartSection 
        flowchartImage={project.flowchartImage} 
      />

      <GallerySection 
        gallery={project.gallery} 
      />

    </main>
  );
}