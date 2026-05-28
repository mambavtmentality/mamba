import Image from "next/image";
import logo from "@/sources/e71acb2e-b9f8-45a2-a501-49109a6db133_removalai_preview.png";

type LogoEmblemProps = {
  className?: string;
  priority?: boolean;
};

export function LogoEmblem({ className, priority = false }: LogoEmblemProps) {
  return (
    <div className={className}>
      <Image
        src={logo}
        alt="Mamba VT Mentality LLC logo"
        priority={priority}
        className="h-full w-full object-contain drop-shadow-[0_16px_42px_rgba(21,9,34,0.35)]"
      />
    </div>
  );
}
