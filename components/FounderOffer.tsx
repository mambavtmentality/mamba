"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const foundingBenefits = [
  "Priority booking",
  "Early access",
  "Locked-in launch pricing",
  "First access to recovery and performance protocols",
  "Founder-only intro assessment",
  "Optional recovery product perks",
];

const mainInterests = [
  "Recovery",
  "Strength & Performance",
  "Athlete Support",
  "General Wellness",
  "Not Sure Yet",
];

const membershipInterests = ["Recovery", "Performance", "Elite", "Just want updates"];
const formSubmitEndpoint = "https://formsubmit.co/ajax/mambavtmentality@gmail.com";

type FormState = {
  name: string;
  email: string;
  phone: string;
  mainInterest: string;
  membershipInterest: string;
  commentsOrQuestions: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  mainInterest: "",
  membershipInterest: "",
  commentsOrQuestions: "",
};

export function FounderOffer() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: "Mamba VT Founding Member Inquiry",
          _template: "table",
          name: form.name,
          email: form.email,
          phone: form.phone,
          main_interest: form.mainInterest,
          membership_interest: form.membershipInterest,
          comments_or_questions: form.commentsOrQuestions,
          message: [
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Phone: ${form.phone}`,
            `Main interest: ${form.mainInterest}`,
            `Membership interest: ${form.membershipInterest}`,
            `Comments or questions: ${form.commentsOrQuestions || "None"}`,
          ].join("\n"),
        }),
      });

      if (!response.ok) throw new Error("Submission failed");
      const result = (await response.json()) as { success?: boolean };

      if (result.success === false) throw new Error("Submission failed");

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="founder-offer" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-aion-purple-soft">Founder Offer</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Founding Memberships Are Opening Soon
            </h2>
            <p className="leading-relaxed text-aion-muted">
              We are building a guided performance and recovery studio for people who want a more
              efficient, structured, and premium alternative to a traditional gym. Before launch, we
              are accepting early interest from founding members.
            </p>
            <ul className="space-y-3">
              {foundingBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aion-yellow" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="aion-card p-6 md:p-8">
            <h3 className="mb-1 text-lg font-semibold">Join the Founding Member List</h3>
            <p className="mb-6 text-sm text-aion-muted">
              Share your interest and we will reach out with launch updates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-aion-gray px-4 py-3 text-sm outline-none transition focus:border-aion-purple/50 focus:ring-2 focus:ring-aion-purple/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-aion-gray px-4 py-3 text-sm outline-none transition focus:border-aion-purple/50 focus:ring-2 focus:ring-aion-purple/20"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-aion-gray px-4 py-3 text-sm outline-none transition focus:border-aion-purple/50 focus:ring-2 focus:ring-aion-purple/20"
                />
              </div>
              <div>
                <label htmlFor="mainInterest" className="mb-1.5 block text-sm font-medium">
                  Main interest
                </label>
                <select
                  id="mainInterest"
                  required
                  value={form.mainInterest}
                  onChange={(e) => setForm({ ...form, mainInterest: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-aion-gray px-4 py-3 text-sm outline-none transition focus:border-aion-purple/50 focus:ring-2 focus:ring-aion-purple/20"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {mainInterests.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="membershipInterest" className="mb-1.5 block text-sm font-medium">
                  Preferred membership interest
                </label>
                <select
                  id="membershipInterest"
                  required
                  value={form.membershipInterest}
                  onChange={(e) => setForm({ ...form, membershipInterest: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-aion-gray px-4 py-3 text-sm outline-none transition focus:border-aion-purple/50 focus:ring-2 focus:ring-aion-purple/20"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {membershipInterests.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="commentsOrQuestions" className="mb-1.5 block text-sm font-medium">
                  Comments or Questions
                </label>
                <textarea
                  id="commentsOrQuestions"
                  value={form.commentsOrQuestions}
                  onChange={(e) => setForm({ ...form, commentsOrQuestions: e.target.value })}
                  className="min-h-28 w-full resize-y rounded-xl border border-white/10 bg-aion-gray px-4 py-3 text-sm outline-none transition focus:border-aion-purple/50 focus:ring-2 focus:ring-aion-purple/20"
                />
              </div>

              <Button type="submit" className="w-full" disabled={status === "loading"}>
                {status === "loading" ? "Submitting..." : "Request Founding Access"}
              </Button>

              {status === "success" && (
                <p className="text-center text-sm text-aion-yellow-soft">
                  Thank you. You are on the founding list.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
