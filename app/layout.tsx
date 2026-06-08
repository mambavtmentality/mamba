import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aion Performance & Recovery | Founding Memberships",
  description:
    "A local boutique performance and recovery studio. Guided strength, oxygen conditioning, heat, cold, vibration, and disciplined wellness routines.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aion Performance & Recovery",
    description: "Train smarter. Recover deeper. Evolve daily.",
    type: "website",
    url: siteUrl,
    siteName: "Aion Performance & Recovery",
  },
  icons: {
    icon: "/AION_LOGO_ICON.png",
    apple: "/AION_LOGO_ICON.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} h-full`}>
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
