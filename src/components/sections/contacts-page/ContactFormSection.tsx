"use client";

import { Send } from "lucide-react";

export default function ContactFormSection() {
  return (
    <div className="bg-[#0a0a0e] border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none"></div>

      <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

      <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-400">Full Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="John Doe"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-400">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="john@example.com"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-semibold text-gray-400">Subject</label>
          <input 
            type="text" 
            id="subject" 
            placeholder="How can I help you?"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-semibold text-gray-400">Message</label>
          <textarea 
            id="message" 
            rows={5}
            placeholder="Tell me about your project or inquiry..."
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="mt-2 flex items-center justify-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors w-full sm:w-max group"
        >
          Send Message 
          <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

      </form>
    </div>
  );
}