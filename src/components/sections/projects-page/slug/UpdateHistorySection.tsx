import { GitCommit, Activity } from "lucide-react";

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
    <section className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 border-t border-white/5">
      <div className="max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Project Lifecycle</h2>
          <p className="text-gray-400">Development history and deployment paths.</p>
        </div>

        {/* Timeline Updates */}
        {updates && updates.length > 0 ? (
          <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-10">
            {updates.map((update, index) => (
              <div key={index} className="relative pl-8 md:pl-10">
                {/* Ikon Titik Timeline */}
                <div className="absolute -left-[17px] top-1 bg-[#070709] p-1">
                  <GitCommit className="text-brand-blue" size={24} />
                </div>
                
                {/* Konten Update */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <span className="text-brand-blue font-mono font-bold border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-xs w-max">
                    {update.version}
                  </span>
                  <span className="text-sm text-gray-500 font-mono">{update.date}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {update.description}
                </p>
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