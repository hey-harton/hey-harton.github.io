import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/utils/mdx"; 
import { MDXRemote } from "next-mdx-remote/rsc";

import HeroSection from "@/components/sections/projects-page/slug/HeroSection";
import CoverSection from "@/components/sections/projects-page/slug/CoverSection";
import OverviewSection from "@/components/sections/projects-page/slug/OverviewSection";
import FlowchartSection from "@/components/sections/projects-page/slug/FlowchartSection";
import GallerySection from "@/components/sections/projects-page/slug/GallerySection";
import UpdateHistorySection from "@/components/sections/projects-page/slug/UpdateHistorySection"; 

// 1. Mengambil slug secara otomatis dari semua file .md yang ada
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";
  
  // 2. Membaca file Markdown berdasarkan slug
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Fallback data kosong jika di markdown belum diisi
  const frontmatter = project.frontmatter || {};

  return (
    <main className="w-full min-h-screen pt-20 lg:pt-24 pb-20 relative overflow-x-hidden transform-gpu">
      
      {/* Background Glow (Dioptimalkan anti-lag untuk Mobile) */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_60%)] rounded-full pointer-events-none -z-10 transform-gpu translate-z-0"></div>
      
      <HeroSection 
        title={project.title}
        role={frontmatter.role || "Network & Cloud Architect"}
        year={frontmatter.year || project.date}
        liveUrl={frontmatter.liveUrl}
        githubUrl={frontmatter.githubUrl}
        status={frontmatter.status || "Completed"} 
      />

      <CoverSection 
        coverImage={project.thumbnail} 
        title={project.title} 
      />

      {/* OverviewSection sekarang menggunakan body Markdown sebagai teksnya */}
      <OverviewSection 
        overview={<MDXRemote source={project.content} />} 
        features={frontmatter.features || []}
        technologies={frontmatter.technologies || []} 
      />

      {frontmatter.flowchartImage && (
        <FlowchartSection 
          flowchartImage={frontmatter.flowchartImage} 
        />
      )}

      {frontmatter.gallery && frontmatter.gallery.length > 0 && (
        <GallerySection 
          gallery={frontmatter.gallery} 
        />
      )}

      <UpdateHistorySection 
        githubUrl={frontmatter.githubUrl}
        updates={frontmatter.updates}
      />

    </main>
  );
}