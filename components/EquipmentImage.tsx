"use client";

import Image from "next/image";
import { useState } from "react";

type EquipmentImageProps = {
  src: string;
  alt: string;
};

export function EquipmentImage({ src, alt }: EquipmentImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-aion-gray-soft">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,58,237,0.15),rgba(245,185,66,0.08))]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-aion-muted">
            Image coming soon
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-aion-gray-soft">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
