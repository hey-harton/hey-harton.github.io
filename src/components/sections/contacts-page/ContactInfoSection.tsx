import { MapPin, Mail } from "lucide-react"; // Github dan Linkedin dihapus dari sini

// --- Komponen SVG Custom untuk Brand Icons ---
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function ContactInfoSection() {
  return (
    <div className="flex flex-col gap-10">
      
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
        <p className="text-gray-400">Reach out directly through any of these channels.</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Email */}
        <a href="mailto:contact@htn.com" className="group flex items-center gap-5 p-4 bg-white/[0.02] border border-white/5 hover:border-brand-blue/50 hover:bg-white/[0.04] transition-all rounded-xl">
          <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-colors">
            <Mail size={24} />
          </div>
          <div>
            <span className="block text-xs text-gray-500 uppercase tracking-widest mb-1">Email</span>
            <span className="text-white font-mono font-semibold">contact@htn.com</span>
          </div>
        </a>

        {/* Location */}
        <div className="flex items-center gap-5 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
          <div className="p-3 bg-white/5 text-gray-400 rounded-lg">
            <MapPin size={24} />
          </div>
          <div>
            <span className="block text-xs text-gray-500 uppercase tracking-widest mb-1">Location</span>
            <span className="text-white font-semibold">Yogyakarta, Indonesia</span>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <span className="block text-xs text-gray-500 uppercase tracking-widest mb-4">Social Profiles</span>
        <div className="flex gap-4">
          <a href="#" className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-brand-blue hover:border-brand-blue text-gray-400 hover:text-white transition-all group">
            {/* Menggunakan Custom SVG Icon untuk GitHub */}
            <GithubIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </a>
          <a href="#" className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-brand-blue hover:border-brand-blue text-gray-400 hover:text-white transition-all group">
            {/* Menggunakan Custom SVG Icon untuk LinkedIn */}
            <LinkedinIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

    </div>
  );
}