import { AudienceSection } from "@/components/AudienceSection";
import { ConceptSection } from "@/components/ConceptSection";
import { EquipmentGrid } from "@/components/EquipmentGrid";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FounderOffer } from "@/components/FounderOffer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MembershipPreview } from "@/components/MembershipPreview";
import { ValidationCTA } from "@/components/ValidationCTA";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <FounderOffer />
      <ConceptSection />
      <EquipmentGrid />
      <MembershipPreview />
      <AudienceSection />
      <ValidationCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
