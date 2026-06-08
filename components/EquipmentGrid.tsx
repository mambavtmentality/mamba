import { EquipmentImage } from "@/components/EquipmentImage";
import { SectionBanner } from "@/components/SectionBanner";

type EquipmentItem = {
  title: string;
  description: string;
  image: string;
};

const performanceEquipment: EquipmentItem[] = [
  {
    title: "Adaptive Strength Training",
    description: "Efficient, guided strength sessions using adaptive resistance technology.",
    image: "/equipment/arx.png",
  },
  {
    title: "Oxygen Conditioning",
    description: "Breath and conditioning sessions designed to support performance routines.",
    image: "/equipment/liveo2.png",
  },
  {
    title: "Vibration Recovery",
    description: "Vibration plate sessions for movement, circulation, and recovery routines.",
    image: "/equipment/vibration-plate.png",
  },
];

const recoveryEquipment: EquipmentItem[] = [
  {
    title: "Heat Recovery",
    description: "Sauna sessions to support relaxation, recovery routines, and reset.",
    image: "/equipment/sauna.png",
  },
  {
    title: "Cold Exposure",
    description: "Cold plunge sessions built into structured recovery protocols.",
    image: "/equipment/cold-plunge.png",
  },
  {
    title: "Mobility & Reset",
    description: "Mobility tools, stretching, and guided reset work.",
    image: "/equipment/mobility.png",
  },
  {
    title: "Recovery Products",
    description: "In-house hydration, protein, electrolytes, and recovery-focused products.",
    image: "/equipment/recovery-fridge.png",
  },
];

function EquipmentCards({ items }: { items: EquipmentItem[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="aion-card overflow-hidden transition hover:border-white/15">
          <EquipmentImage src={item.image} alt={item.title} />
          <div className="p-5">
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm leading-relaxed text-aion-muted">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function EquipmentGrid() {
  return (
    <section id="equipment" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4 md:mb-16">
          <p className="text-xs uppercase tracking-[0.28em] text-aion-purple-soft">Equipment</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Performance & Recovery Systems</h2>
          <p className="max-w-2xl text-aion-muted">
            A focused stack of performance and recovery tools, designed for structured sessions—not
            open-floor guesswork.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          <div>
            <SectionBanner
              src="/equipment/performance.png"
              alt="Aion performance equipment including ARX, LiveO2, and Power Plate"
              title="Performance"
              description="Guided strength, conditioning, and efficient training protocols."
            />
            <EquipmentCards items={performanceEquipment} />
          </div>

          <div>
            <SectionBanner
              src="/equipment/recovery.png"
              alt="Aion recovery suite with sauna, cold plunge, and mobility tools"
              title="Recovery"
              description="Heat, cold, mobility, and reset—built into every recovery routine."
            />
            <EquipmentCards items={recoveryEquipment} />
          </div>
        </div>
      </div>
    </section>
  );
}
