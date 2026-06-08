import { Button } from "@/components/ui/Button";

export function ValidationCTA() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(124,58,237,0.2),rgba(17,17,20,0.95),rgba(245,185,66,0.1))] p-8 text-center aion-card md:p-14">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Help Shape the First Aion Memberships
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-aion-muted">
          We are using early interest to finalize equipment, scheduling, membership tiers, and
          launch capacity. If you want early access, join the founding list.
        </p>
        <Button href="#founder-offer">Join the Founding List</Button>
      </div>
    </section>
  );
}
