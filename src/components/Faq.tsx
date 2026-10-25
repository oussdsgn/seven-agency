"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { faqs } from "@/data";
import { Button, Panel, Reveal, SectionHead } from "./ui";

export default function Faq({ showMore = true }: { showMore?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="mx-auto max-w-[632px] px-4 py-28">
      <SectionHead eyebrow="Got questions" title="We’ve got answers" note="Let’s clear things up" />
      <Reveal className="mt-12">
        <Panel className="flex flex-col gap-2 p-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-lg bg-white">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-3 py-4 text-left text-[17px] font-medium tracking-[-0.03em] md:text-[20px]"
                >
                  {i + 1}. {f.q}
                  <span className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-ink text-sm leading-none text-white transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="px-3 pb-4 text-[15px] font-medium leading-[1.4] text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Panel>
      </Reveal>
      {showMore && (
      <Reveal className="mt-10 flex flex-col items-center">
        <div className="flex">
          {["f1.png", "f2.png", "f3.png"].map((a, k) => (
            <img key={a} src={`/img/${a}`} alt="" className={`h-9 w-9 rounded-full border-2 border-page object-cover ${k ? "-ml-2" : ""}`} />
          ))}
        </div>
        <p className="mt-3 text-[20px] font-medium tracking-[-0.03em]">Still have questions?</p>
        <Button className="mt-4">Let’s talk</Button>
      </Reveal>
      )}
    </section>
  );
}
