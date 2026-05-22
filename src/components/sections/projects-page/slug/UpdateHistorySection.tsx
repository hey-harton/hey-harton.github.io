import { Activity, CalendarClock } from "lucide-react";

interface UpdateItem {
  date: string;
  version: string;
  description: string;
}

interface UpdateHistoryProps {
  updates: UpdateItem[];
}

export default function UpdateHistorySection({ updates }: UpdateHistoryProps) {
  return (
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1400px] mx-auto mb-32 pt-10 border-t border-white/5">
      <div className="max-w-4xl">
        
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Lifecycle.</h2>
          <p className="text-lg text-gray-400 font-light">Development history and deployment paths.</p>
        </div>

        {/* Timeline Updates */}
        {updates && updates.length > 0 ? (
          <div className="relative border-l border-white/10 ml-2 md:ml-4 space-y-12 pb-6">
            {updates.map((update, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                
                {/* Node / Titik Timeline yang lebih modern dan presisi */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,0.5)] ring-4 ring-[#070709] group-hover:bg-brand-green group-hover:shadow-[0_0_12px_rgba(16,185,129,0.6)] transition-all duration-300"></div>
                
                {/* Meta Data: Version & Date */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-5">
                  <span className="text-brand-blue font-mono font-bold border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-sm w-max tracking-wide group-hover:border-brand-green/40 group-hover:text-brand-green group-hover:bg-brand-green/10 transition-colors">
                    {update.version}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-mono">
                    <CalendarClock size={15} />
                    <span>{update.date}</span>
                  </div>
                </div>
                
                {/* Kartu Deskripsi Update */}
                <div className="bg-white/[0.02] border border-white/5 p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg font-light">
                    {update.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-3 text-gray-500 bg-white/5 border border-white/10 p-6">
            <Activity size={20} />
            <p>No deployment path records available yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}