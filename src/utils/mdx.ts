import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  thumbnail: string;
  tags: string[];
  content: string;
  // TAMBAHAN: Memberitahu TypeScript bahwa ada data tambahan tak terbatas di Markdown
  frontmatter: Record<string, any>; 
}

export function getAllProjects(): Omit<ProjectData, 'content'>[] {
  if (!fs.existsSync(projectsDirectory)) return [];
  
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        category: data.category,
        date: data.date,
        thumbnail: data.thumbnail,
        tags: data.tags || [],
        frontmatter: data, // Memasukkan semua sisa data ke sini
      };
    });

  return allProjects.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProjectBySlug(slug: string): ProjectData | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      category: data.category,
      date: data.date,
      thumbnail: data.thumbnail,
      tags: data.tags || [],
      content,
      frontmatter: data, 
    };
  } catch {
    return null;
  }
}