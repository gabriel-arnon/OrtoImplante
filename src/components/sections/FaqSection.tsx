"use client";

import { useState } from "react";
import type { FaqItem } from "@/content/faq";
import { homeFaqItems } from "@/content/faq";

type FaqSectionProps = {
  items?: FaqItem[];
};

export function FaqSection({ items = homeFaqItems }: FaqSectionProps) {
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set());

  if (!items.length) {
    return null;
  }

  function toggleQuestion(index: number) {
    setOpenQuestions((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <section className="section-y bg-white">
      <div id="faq" className="section-shell max-w-4xl">
        <p className="eyebrow">Perguntas frequentes</p>
        <h2 className="section-title mt-3">
          Dúvidas frequentes
        </h2>
        <div className="surface-card mt-8 divide-y divide-light-gray overflow-hidden">
          {items.map((item, index) => {
            const isOpen = openQuestions.has(index);
            const answerId = `faq-answer-${index}`;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleQuestion(index)}
                  className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-4 px-4 py-5 text-left text-lg font-semibold text-navy transition hover:bg-mist focus-visible:bg-mist"
                >
                  <span>{item.question}</span>
                  <span
                    data-state={isOpen ? "open" : "closed"}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-accent text-accent transition duration-150 ${
                      isOpen ? "rotate-180 bg-accent-soft" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 20 20" className="h-5 w-5">
                      <path
                        d="m5 7.5 5 5 5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 pt-1 text-[1rem] leading-8 text-graphite-soft">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
