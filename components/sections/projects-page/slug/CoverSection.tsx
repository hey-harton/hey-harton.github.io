import Image from "next/image";

interface CoverSectionProps {
  coverImage: string;
  title: string;
}

export default function CoverSection({ coverImage, title }: CoverSectionProps) {
  return (
    <section className="w-full px-4 md:px-12 lg:px-16 max-w-[1600px] mx-auto mb-24">
      {/* PERUBAHAN: bg-[#0d1117] diubah menjadi bg-transparent */}
      <div className="relative w-full bg-transparent border border-white/10">
        <Image 
          src={coverImage} 
          alt={`${title} Cover`} 
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-contain select-none pointer-events-none" 
        />
      </div>
    </section>
  );
}