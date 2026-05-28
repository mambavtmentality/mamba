import { BrandStatement } from "@/components/BrandStatement";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Services } from "@/components/Services";
import { TopNav } from "@/components/TopNav";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <TopNav />
      <Hero />
      <BrandStatement />
      <Services />
      <Pillars />
      <CTA />
      <Footer />
    </main>
  );
}
