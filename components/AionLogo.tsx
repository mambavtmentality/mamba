import Image from "next/image";

type LogoVariant = "icon" | "text" | "full";

type AionLogoProps = {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
};

const logoSources: Record<LogoVariant, string> = {
  icon: "/AION_LOGO_ICON.png",
  text: "/AION_LOGO_TEXT.png",
  full: "/AION_LOGO_FULL.png",
};

export function AionLogo({ variant = "full", className, priority = false }: AionLogoProps) {
  return (
    <div className={className}>
      <Image
        src={logoSources[variant]}
        alt="Aion Performance & Recovery"
        width={variant === "icon" ? 256 : variant === "text" ? 640 : 512}
        height={variant === "icon" ? 256 : variant === "text" ? 128 : 640}
        priority={priority}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
