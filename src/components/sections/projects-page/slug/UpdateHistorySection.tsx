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
    // PERBAIKAN: Hapus transform-gpu untuk optimasi scroll
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1600px] mx-auto mb-32 pt-16 border-t border-white/10 relative">
      
      <div className="max-w-4xl relative z-10 pl-0 lg:pl-10">
        
        {/* Header ala Terminal */}
        <div className="mb-14">
          <p className="text-brand-blue font-mono text-xs tracking-widest mb-3 uppercase">
            &gt; INDEX_03: SYSTEM_LOGS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">Siklus Log Proyek<span className="text-brand-blue">_</span></h2>
          <p className="text-sm md:text-base text-gray-500 font-mono tracking-wide">
            {hasGithubCommits 
              ? "Riwayat deployment dan pipeline pengembangan ditarik langsung dari repositori GitHub." 
              : "Riwayat pengembangan manual dan pencapaian arsitektural."}
          </p>
        </div>

        {/* Timeline Updates */}
        <div className="relative border-l border-white/10 ml-2 md:ml-4 space-y-10 pb-6">
          {timelineData.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-12 group">
              
              {/* Node / Titik Timeline (Diubah menjadi kotak tajam) */}
              <div className="absolute -left-[4.5px] top-2.5 w-2 h-2 border border-brand-blue bg-[#050505] group-hover:bg-brand-blue transition-colors duration-300 rounded-none shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"></div>
              
              {/* Meta Data: Version & Date */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-4">
                <span className="flex items-center gap-2 text-brand-blue font-mono font-bold border border-brand-blue/30 bg-brand-blue/5 px-3 py-1 text-[10px] uppercase w-max tracking-widest group-hover:border-brand-blue transition-colors rounded-none">
                  <GitCommit size={14} />
                  {item.version}
                </span>
                <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase font-mono tracking-widest">
                  <CalendarClock size={14} />
                  <span>{item.date}</span>
                </div>
              </div>
              
              {/* Kartu Deskripsi Update */}
              <div className="bg-[#050505] border border-white/5 p-6 group-hover:border-brand-blue/30 transition-all duration-300 flex flex-col gap-5 rounded-none relative">
                
                {/* Efek aksen di sisi kiri kartu */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-brand-blue transition-colors"></div>

                <p className="text-gray-400 font-mono text-xs md:text-sm font-light text-left leading-relaxed">
                  {item.description}
                </p>
                
                {/* Link GitHub hanya muncul jika data ditarik dari GitHub */}
                {item.link && (
                  <Link 
                    href={item.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 hover:text-brand-blue transition-colors w-max pb-1 border-b border-transparent hover:border-brand-blue"
                  >
                    INSPECT_COMMIT_DATA <ExternalLink size={14} />
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