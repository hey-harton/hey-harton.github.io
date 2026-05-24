import { Activity, CalendarClock, GitCommit, ExternalLink } from "lucide-react";
import Link from "next/link";

interface UpdateItem {
  date: string;
  version: string;
  description?: string;
  log?: string;
}

interface UpdateHistoryProps {
  githubUrl?: string;
  updates?: UpdateItem[];
}

// Cetakan khusus untuk data gabungan (Solusi Error TypeScript)
interface TimelineItem {
  id: string;
  version: string;
  date: string;
  description?: string;
  link: string | null;
}

// Fungsi mesin pencari data ke GitHub (DILENGKAPI SISTEM TOKEN VIP)
async function getGithubCommits(repoPath: string) {
  try {
    const headers: HeadersInit = {};
    
    // Membaca token rahasia dari file .env.local agar bisa masuk ke Repo Private
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/repos/${repoPath}/commits?per_page=5`, {
      headers,
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}

export default async function UpdateHistorySection({ githubUrl, updates = [] }: UpdateHistoryProps) {
  let commits = null;

  // Coba tarik data dari GitHub (Jika ada URL)
  if (githubUrl && githubUrl.includes("github.com")) {
    const match = githubUrl.match(/github\.com\/([^/]+\/[^/]+)/);
    const repoPath = match ? match[1].replace(".git", "") : null;
    
    if (repoPath) {
      commits = await getGithubCommits(repoPath);
    }
  }

  const hasGithubCommits = Array.isArray(commits) && commits.length > 0;
  const hasManualUpdates = updates && updates.length > 0;

  // Jika repo private/gagal diakses AND tidak ada catatan manual di .md, sembunyikan section
  if (!hasGithubCommits && !hasManualUpdates) return null;

  // Normalisasi Data: GitHub vs Manual Markdown
  const timelineData: TimelineItem[] = hasGithubCommits 
    ? commits.map((c: any) => ({
        id: c.sha,
        version: c.sha.substring(0, 7),
        date: new Date(c.commit.author.date).toISOString().split('T')[0],
        description: c.commit.message,
        link: c.html_url
      }))
    : updates.map((u, i) => ({
        id: `manual-${i}`,
        version: u.version,
        date: u.date,
        description: u.description || u.log,
        link: null
      }));

  return (
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1400px] mx-auto mb-32 pt-10 border-t border-white/5 transform-gpu">
      <div className="max-w-4xl">
        
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Lifecycle.</h2>
          <p className="text-lg text-gray-400 font-light">
            {hasGithubCommits 
              ? "Development history and deployment paths directly from GitHub." 
              : "Development history and architectural milestones."}
          </p>
        </div>

        {/* Timeline Updates */}
        <div className="relative border-l border-white/10 ml-2 md:ml-4 space-y-12 pb-6">
          {timelineData.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-12 group">
              
              {/* Node / Titik Timeline */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,0.5)] ring-4 ring-[#070709] group-hover:bg-brand-green group-hover:shadow-[0_0_12px_rgba(16,185,129,0.6)] transition-all duration-300"></div>
              
              {/* Meta Data: Version & Date */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-5">
                <span className="flex items-center gap-2 text-brand-blue font-mono font-bold border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-sm w-max tracking-wide group-hover:border-brand-green/40 group-hover:text-brand-green group-hover:bg-brand-green/10 transition-colors">
                  <GitCommit size={15} />
                  {item.version}
                </span>
                <div className="flex items-center gap-2 text-gray-500 text-sm font-mono">
                  <CalendarClock size={15} />
                  <span>{item.date}</span>
                </div>
              </div>
              
              {/* Kartu Deskripsi Update */}
              <div className="bg-white/[0.02] border border-white/5 p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 flex flex-col gap-5">
                <p className="text-gray-300 leading-relaxed text-base md:text-lg font-light text-justify">
                  {item.description}
                </p>
                
                {/* Link GitHub hanya muncul jika data ditarik dari GitHub */}
                {item.link && (
                  <Link 
                    href={item.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-brand-blue transition-colors w-max"
                  >
                    LIHAT KODE DI GITHUB <ExternalLink size={14} />
                  </Link>
                )}
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}