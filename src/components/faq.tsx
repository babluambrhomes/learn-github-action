"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Just sign up for a free account and follow the three-step guide. Most people go live in under ten minutes.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Upgrade, downgrade, or cancel your plan at any time. No lock-in, no hidden fees.",
  },
  {
    question: "Is there a student discount?",
    answer:
      "Absolutely. Students get 50% off any paid plan with a valid academic email address.",
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight">
        Frequently asked questions
      </h2>
      <div className="mt-12 space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-zinc-200 p-6"
          >
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="flex w-full items-center justify-between text-left font-semibold"
              aria-expanded={openFaq === i}
            >
              {faq.question}
              <span className="ml-4 text-lg">{openFaq === i ? "−" : "+"}</span>
            </button>
            {openFaq === i && (
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}