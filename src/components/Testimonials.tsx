"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { testimonials } from "@/data";
import { SectionHead } from "./ui";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const max = testimonials.length - 1;
  return (
    <section className="overflow-hidden py-28">
      <SectionHead eyebrow="Testimonials" title="What clients say" className="px-4" />
      <div className="mx-auto mt-12 max-w-[1032px] px-4">
        <motion.div
          className="flex gap-4"
          animate={{ x: `calc(${-i} * (min(100vw - 32px, 500px) + 16px))` }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          {testimonials.map((t) => (
            <figure key={t.name} className="w-[min(calc(100vw-32px),500px)] shrink-0 rounded-2xl border border-[#e7e2dd] bg-line p-2">
              <div className="flex h-[240px] flex-col justify-between rounded-lg bg-white p-5">
                <blockquote className="text-[18px] font-medium leading-[1.35] tracking-[-0.02em] md:text-[20px]">{t.quote}</blockquote>
                <figcaption className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <img src={t.img} alt="" className="h-7 w-7 rounded-full object-cover" />
                    {t.name}
                    <span className="text-muted">— {t.role}</span>
                  </span>
                  <img src="/img/stars.svg" alt="5 stars" className="h-3 w-auto" />
                </figcaption>
              </div>
            </figure>
          ))}
        </motion.div>
        <div className="mt-8 flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#dcd8d4]" />
          {[-1, 1].map((d) => (
            <button
              key={d}
              aria-label={d < 0 ? "Previous" : "Next"}
              disabled={(d < 0 && i === 0) || (d > 0 && i === max)}
              onClick={() => setI(Math.max(0, Math.min(max, i + d)))}
              className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-muted shadow-sm hover:text-ink disabled:opacity-40"
            >
              {d < 0 ? "‹" : "›"}
            </button>
          ))}
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#dcd8d4]" />
        </div>
      </div>
    </section>
  );
}
