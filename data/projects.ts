export const getProjectDetails = (slug: string) => {
  const allProjects: Record<string, any> = {
    "medical-dashboard": {
      title: "Medical Intelligence Dashboard",
      coverImage: "/projects/medical-dashboard.jpg", 
      overview: "A comprehensive clinical data dashboard focused on precision biometry analytics.",
      flowchartImage: "",
      technologies: ["Next.js 16", "Tailwind 4", "Data Analytics"],
      gallery: ["/projects/medical-dashboard.jpg"], 
      liveUrl: "#",
      githubUrl: "#",
      role: "Lead Full-Stack Developer",
      year: "2026"
    },
    "datasea-portal": {
      title: "Datasea Archive Portal",
      coverImage: "/projects/datasea-portal.jpg",
      overview: "Centralized organizational file repository and portal for the Datasea academic community.",
      flowchartImage: "",
      technologies: ["Next.js", "Turso DB", "Google Drive API"],
      gallery: [],
      liveUrl: "#",
      githubUrl: "#",
      role: "Lead Engineer",
      year: "2026"
    },
    "truenews": {
      title: "TrueNews Fact-Checker",
      coverImage: "/projects/truenews.jpg",
      overview: "An intelligent fact-checking application utilizing advanced machine learning models.",
      flowchartImage: "",
      technologies: ["Flask", "XGBoost", "Azure App Service", "Llama-3"],
      gallery: [], 
      liveUrl: "#",
      githubUrl: "#",
      role: "AI/ML Engineer",
      year: "2025"
    },
    "interactive-story": {
      title: "Interactive Story Web",
      coverImage: "/projects/interactive-story.jpg",
      overview: "A digital storytelling web experience featuring dynamic narrative progression.",
      flowchartImage: "",
      technologies: ["JavaScript", "CSS3", "Digital Storytelling"],
      gallery: [], 
      liveUrl: "#",
      githubUrl: "#",
      role: "Frontend Developer",
      year: "2025"
    },
    "network-topology": {
      title: "Enterprise Network Topology",
      coverImage: "/projects/medical-dashboard.jpg",
      overview: "Automated provisioning script for multi-router lab environments.",
      flowchartImage: "",
      technologies: ["Python", "Cisco IOS", "MikroTik"],
      gallery: [], 
      liveUrl: "#",
      githubUrl: "#",
      role: "Network Engineer",
      year: "2025"
    }
  };
  
  const defaultFallback = { 
    title: "Project Not Found", 
    coverImage: "",
    overview: "Data detail untuk proyek ini belum tersedia.",
    flowchartImage: "",
    technologies: [], 
    gallery: [],      
    liveUrl: "#", 
    githubUrl: "#",
    role: "N/A", 
    year: "2026" 
  };

  return allProjects[slug] || defaultFallback;
};