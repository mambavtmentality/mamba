const faqs = [
  {
    question: "Is this a gym?",
    answer:
      "It is a performance and recovery studio, not a traditional open-floor gym.",
  },
  {
    question: "Do I need to be an athlete?",
    answer:
      "No. It is for active adults, athletes, busy professionals, and anyone serious about recovery and consistency.",
  },
  {
    question: "What will founding members get?",
    answer:
      "Priority booking, early access, launch pricing, and first access to protocols.",
  },
  {
    question: "Are sessions guided?",
    answer: "Yes. The goal is a structured, appointment-based experience.",
  },
  {
    question: "Is this medical treatment?",
    answer:
      "No. Aion is a wellness and performance studio. It does not diagnose, treat, cure, or prevent medical conditions.",
  },
  {
    question: "When will it open?",
    answer: "Coming soon. Join the founding list for updates.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-aion-gray/40">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-aion-purple-soft">FAQ</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Common Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="aion-card group p-5 md:p-6">
              <summary className="cursor-pointer list-none text-base font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-aion-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
