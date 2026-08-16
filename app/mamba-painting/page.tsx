import type { Metadata } from "next";
import { MambaPaintingPage } from "@/components/mamba-painting/MambaPaintingPage";

export const metadata: Metadata = {
  title: "Mamba Painting & Property Services | Mamba VT LLC",
  description:
    "Professional painting, staining, carpentry, repairs, power washing, and property maintenance services in Vermont.",
  alternates: {
    canonical: "/mamba-painting",
  },
  openGraph: {
    title: "Mamba Painting & Property Services",
    description:
      "Professional Vermont painting, repair, and property services from Mamba VT LLC.",
    type: "website",
    url: "/mamba-painting",
  },
};

export default function Page() {
  return <MambaPaintingPage />;
}
