// data/projects.ts
export const getProjectDetails = (slug: string) => {
  const allProjects: Record<string, any> = {
    "medical-dashboard": {
      title: "Medical Intelligence Dashboard",
      coverImage: "/image.png",
      overview: "Dashboard ini dirancang khusus untuk memproses dan memvisualisasikan data biometrik klinis secara real-time.",
      flowchartImage: "/projects/medical-flowchart.png",
      technologies: ["Next.js", "Tailwind CSS", "Vercel", "Microsoft Azure", "Supabase"],
      gallery: ["/slider1.png"],
      liveUrl: "#",
      githubUrl: "#",
      role: "Lead Full-Stack Developer",
      year: "2026"
    },
  };
  
  return allProjects[slug] || { title: "Not Found", role: "N/A", year: "2026" };
};