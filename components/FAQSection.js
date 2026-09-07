"use client";

import { useState } from "react";
import { faqSchema, jsonLd } from "@/lib/schema";

/**
 * Acordeón de preguntas frecuentes. Incluye FAQ Schema (JSON-LD).
 * @param {{faqs: {question:string, answer:string}[], title?: string, withSchema?: boolean}} props
 */
export default function FAQSection({
  faqs = [],
  title = "Preguntas frecuentes",
  withSchema = true,
}) {
  const [openIndex, setOpenIndex] = useState(0);
  if (!faqs.length) return null;

  return (
    <section className="section bg-sand-50">
      <div className="container-base">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-center">Resolvemos tus dudas</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-ink sm:text-4xl">
            {title}
          </h2>

          {withSchema ? (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))}
            />
          ) : null}

          <dl className="mt-10 divide-y divide-sand-200 rounded-lg border border-sand-200 bg-white shadow-sm shadow-ink/5">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.question} className="p-2">
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 rounded-md px-4 py-4 text-left transition hover:bg-sand-50"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-ink">
                        {faq.question}
                      </span>
                      <svg
                        className={`h-5 w-5 flex-none text-clay-600 transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </button>
                  </dt>
                  {isOpen ? (
                    <dd className="px-4 pb-5 pt-1 text-sm leading-7 text-ink/70">
                      {faq.answer}
                    </dd>
                  ) : null}
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
