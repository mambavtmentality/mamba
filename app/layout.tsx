import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const bodyFont = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mamba VT Recovery & Performance Center",
  description:
    "A technology-driven Vermont wellness center combining adaptive strength training, oxygen conditioning, sauna, cold plunge, and recovery systems.",
  openGraph: {
    title: "Mamba VT Recovery & Performance Center",
    description:
      "Mindset. Discipline. Purpose. A complete recovery and performance experience built around measurable results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} h-full`}>
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
