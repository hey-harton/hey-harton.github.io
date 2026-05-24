import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeCTASection() {
  return (
    <section className="w-full border-t border-white/10 bg-[#050505] mt-12">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          <div className="hidden lg:block absolute top-0 bottom-0 left-[58%] w-[1px] bg-white/10"></div>

          <div className="lg:col-span-7 lg:pr-10">
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-white leading-[1.05] tracking-tight">
              Siap merancang <br />
              <span className="font-semibold text-brand-blue">masa depan?</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-start lg:pl-4">
            <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed">
              Baik itu meningkatkan skala jaringan enterprise, memusatkan data organisasi, maupun mengimplementasikan pipeline machine learning, mari bangun sesuatu yang luar biasa bersama-sama.
            </p>

            <Link 
              href="/contact" 
              className="group flex items-center justify-between bg-brand-blue text-white p-5 font-semibold hover:bg-blue-600 transition-colors w-full sm:w-[300px] border border-transparent hover:border-white/20"
            >
              <span className="tracking-wide">Hubungi saya</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}