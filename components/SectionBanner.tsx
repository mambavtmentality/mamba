import Image from "next/image";

type SectionBannerProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export function SectionBanner({ src, alt, title, description }: SectionBannerProps) {
  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 md:mb-10">
      <div className="relative aspect-[21/9] w-full md:aspect-[21/8]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 1152px" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
          <p className="mb-2 text-xs uppercase tracking-[0.28em] text-aion-yellow-soft">{title}</p>
          <h3 className="max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">{description}</h3>
        </div>
      </div>
    </div>
  );
}
