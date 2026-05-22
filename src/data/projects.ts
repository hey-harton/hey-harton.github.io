export const getProjectDetails = (slug: string) => {
  const allProjects: Record<string, any> = {
    "medical-dashboard": {
      title: "Medical Intelligence Dashboard",
      coverImage: "https://picsum.photos/seed/medical/1920/1080", 
      overview: "A comprehensive clinical data dashboard focused on precision biometry analytics.",
      flowchartImage: "https://picsum.photos/seed/medflow/1200/600",
      technologies: ["Next.js 16", "Tailwind 4", "Data Analytics"],
      gallery: [
        "https://picsum.photos/seed/med1/1200/800",
        "https://picsum.photos/seed/med2/1200/800",
        "https://picsum.photos/seed/med3/1200/800"
      ], 
      liveUrl: "#",
      githubUrl: "#",
      role: "Lead Full-Stack Developer",
      year: "2026",
      status: "Finish", // <-- DIUBAH MENJADI Finish
      updates: [
        { date: "May 15, 2026", version: "v1.1.0", description: "Integrated precision biometry analytics modules." },
        { date: "April 10, 2026", version: "v1.0.0", description: "Initial clinical data dashboard deployment." }
      ]
    },
    "datasea-portal": {
      title: "Datasea Archive Portal",
      coverImage: "https://picsum.photos/seed/datasea/1920/1080",
      overview: "Centralized organizational file repository and portal for the Datasea academic community.",
      flowchartImage: "https://picsum.photos/seed/dataflow/1200/600",
      technologies: ["Next.js", "Turso DB", "Google Drive API"],
      gallery: [
        "https://picsum.photos/seed/data1/1200/800",
        "https://picsum.photos/seed/data2/1200/800"
      ],
      liveUrl: "#",
      githubUrl: "#",
      role: "Lead Engineer",
      year: "2026",
      status: "Progress", // <-- DIUBAH MENJADI Progress
      updates: [
        { date: "May 20, 2026", version: "v0.9.5", description: "Optimized Google Drive API real-time file synchronization." },
        { date: "April 05, 2026", version: "v0.8.0", description: "Backend migration to Turso DB for centralized archive structures." },
        { date: "November 15, 2025", version: "v0.1.0", description: "Initial Next.js setup and organizational transition protocols." }
      ]
    },
    "truenews": {
      title: "TrueNews Fact-Checker",
      coverImage: "https://picsum.photos/seed/truenews/1920/1080",
      overview: "An intelligent fact-checking application utilizing advanced machine learning models.",
      flowchartImage: "https://picsum.photos/seed/trueflow/1200/600",
      technologies: ["Flask", "XGBoost", "Azure App Service", "Llama-3"],
      gallery: [
        "https://picsum.photos/seed/true1/1200/800",
        "https://picsum.photos/seed/true2/1200/800"
      ], 
      liveUrl: "#",
      githubUrl: "#",
      role: "AI/ML Engineer",
      year: "2025",
      status: "Finish",
      updates: [
        { date: "December 10, 2025", version: "v1.0.0", description: "Llama-3 integration and Azure App Service production deployment." },
        { date: "October 22, 2025", version: "v0.5.0", description: "Completed model training pipeline with XGBoost." }
      ]
    },
    "interactive-story": {
      title: "Interactive Story Web",
      coverImage: "https://picsum.photos/seed/story/1920/1080",
      overview: "A digital storytelling web experience featuring dynamic narrative progression.",
      flowchartImage: "https://picsum.photos/seed/storyflow/1200/600",
      technologies: ["JavaScript", "CSS3", "Digital Storytelling"],
      gallery: [
        "https://picsum.photos/seed/story1/1200/800",
        "https://picsum.photos/seed/story2/1200/800",
        "https://picsum.photos/seed/story3/1200/800"
      ], 
      liveUrl: "#",
      githubUrl: "#",
      role: "Frontend Developer",
      year: "2025",
      status: "Idle", // <-- CONTOH STATUS Idle
      updates: [
        { date: "February 14, 2026", version: "v1.0.0", description: "Valentine's Day release with dynamic narrative progression." },
        { date: "January 20, 2026", version: "v0.8.0", description: "Finalized core narrative engine and CSS custom animations." }
      ]
    },
    "network-topology": {
      title: "Enterprise Network Topology",
      coverImage: "https://picsum.photos/seed/network/1920/1080",
      overview: "Automated provisioning script for multi-router lab environments.",
      flowchartImage: "https://picsum.photos/seed/netflow/1200/600",
      technologies: ["Python", "Cisco IOS", "MikroTik"],
      gallery: [
        "https://picsum.photos/seed/net1/1200/800",
        "https://picsum.photos/seed/net2/1200/800"
      ], 
      liveUrl: "#",
      githubUrl: "#",
      role: "Network Engineer",
      year: "2025",
      status: "Finish",
      updates: [
        { date: "December 05, 2025", version: "v1.0.0", description: "Finalized automated provisioning scripts for multi-router environments." },
        { date: "November 18, 2025", version: "v0.5.0", description: "Physical lab setup established with 5 Cisco/MikroTik routers and 100m CAT6 cabling." }
      ]
    }
  };
  
  const defaultFallback = { 
    title: "Project Not Found", 
    coverImage: "https://picsum.photos/seed/error/1920/1080",
    overview: "Data detail untuk proyek ini belum tersedia.",
    flowchartImage: "https://picsum.photos/seed/errorflow/1200/600",
    technologies: [], 
    gallery: [],      
    liveUrl: "#", 
    githubUrl: "#",
    role: "N/A", 
    year: "2026",
    status: "Idle",
    updates: []
  };

  return allProjects[slug] || defaultFallback;
};