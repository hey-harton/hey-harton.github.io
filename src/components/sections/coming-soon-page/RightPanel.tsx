'use client';

import { Clock, GitCommit } from "lucide-react";

interface RightPanelProps {
  commits: any[];
  loadingCommits: boolean;
}

export default function RightPanel({ commits, loadingCommits }: RightPanelProps) {
  return (
    <section className="lg:col-span-5 bg-[#0a0a0e]/60 p-8 md:p-10 lg:p-12 flex flex-col h-full overflow-y-auto custom-scrollbar backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4 shrink-0">
        <GitCommit size={18} className="text-yellow-500" />
        <h2 className="text-xs md:text-sm font-mono text-white uppercase tracking-widest">SYS_LOG: DEV_UPDATES</h2>
      </div>
      
      <div className="flex flex-col gap-6 font-mono flex-1">
        {loadingCommits ? (
          <div className="flex items-center gap-3 text-yellow-500/70 text-[10px] md:text-xs mt-4">
            <Clock size={14} className="animate-spin" />
            ESTABLISHING SECURE CONNECTION...
          </div>
        ) : commits.length > 0 ? (
          commits.map((commitData, index) => (
            <div key={index} className="flex flex-col gap-2 border-l border-white/10 pl-4 relative group hover:border-yellow-500 transition-colors">
              <div className="absolute top-1.5 -left-[4.5px] w-2 h-2 rounded-full bg-[#050505] border border-white/30 group-hover:border-yellow-500 transition-colors"></div>
              
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <span className="text-[#050505] bg-yellow-500 font-bold text-[9px] px-1.5 py-0.5">
                  {commitData.sha.substring(0, 7)}
                </span>
                <span className="text-gray-500 text-[9px] tracking-wider">
                  {new Date(commitData.commit.author.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute:'2-digit' })}
                </span>
              </div>
              
              <p className="text-gray-300 text-[11px] md:text-xs leading-relaxed">
                {commitData.commit.message.split('\n')[0]}
              </p>
              
              <span className="text-gray-600 text-[8px] md:text-[9px] mt-1 uppercase">
                AUTHOR: {commitData.commit.author.name}
              </span>
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-[10px] md:text-xs mt-4 border border-white/5 bg-white/[0.02] p-6 text-center">
            [ EMPTY_RESPONSE ]<br/>NO RECENT ACTIVITY DETECTED IN THE SPECIFIED BRANCH.
          </div>
        )}
      </div>
    </section>
  );
}