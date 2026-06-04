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
  title: "Mamba VT Mentality LLC",
  description:
    "A scalable Vermont brand built around personal development, performance, wellness, recovery, and professional services.",
  openGraph: {
    title: "Mamba VT Mentality LLC",
    description:
      "Mindset. Discipline. Purpose. A multi-division brand built for performance, wellness, and premium service.",
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
