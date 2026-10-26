"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { compare } from "@/data";
import { Button, Reveal } from "./ui";

type Token = { t: string; hl?: boolean; toggle?: boolean; br?: boolean };

const copy: Token[] = [
  ..."We know choosing the right agency is hard because few".split(" ").map((t) => ({ t })),
  { t: "truly", hl: true },
  { t: "deliver.", hl: true },
  { t: "", br: true },
  ..."So we made it simple".split(" ").map((t) => ({ t })),
  { t: "to", hl: true },
  { t: "compare", hl: true },
  { t: "how" },
  { t: "we" },
  { t: "work" },
  { t: "", toggle: true },
  ..."versus what you usually get".split(" ").map((t) => ({ t })),
  { t: "in", hl: true },
  { t: "the", hl: true },
  { t: "market.", hl: true },
];

function Word({ tok, i, total, progress }: { tok: Token; i: number; total: number; progress: MotionValue<number> }) {
  const start = i / total;
  const opacity = useTransform(progress, [start, start + 1 / total], [0.4, 1]);
  if (tok.br) return <span className="block h-6 w-full" />;
  if (tok.toggle)
    return (
      <motion.span style={{ opacity }} className="mx-1 inline-flex h-[26px] w-[46px] translate-y-[3px] items-center rounded-full bg-brand p-[3px]">
        <span className="ml-auto h-5 w-5 rounded-full bg-white" />
      </motion.span>
    );
  return (
    <motion.span style={{ opacity }} className={`mr-[0.25em] ${tok.hl ? "text-brand-ink" : ""}`}>
      {tok.t}
    </motion.span>
  );
}

export default function Compare() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  return (
    <section className="mx-auto max-w-[680px] px-4 py-28 md:py-36">
      <p ref={ref} className="flex flex-wrap text-[26px] font-medium leading-[1.3] tracking-[-0.03em] md:text-[34px]">
        {copy.map((tok, i) => (
          <Word key={i} tok={tok} i={i} total={copy.length} progress={scrollYProgress} />
        ))}
      </p>

      <Reveal className="mt-12 grid grid-cols-2 overflow-hidden rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
        <div className="bg-white">
          <h3 className="border-b border-line px-5 py-5 text-[18px] font-semibold tracking-[-0.03em] md:text-[22px]">Other agencies</h3>
          {compare.others.map((t) => (
            <p key={t} className="flex items-center gap-2 border-b border-line px-5 py-[14px] text-sm font-medium text-muted last:border-0 md:text-base">
              <span aria-hidden="true" className="text-muted">›</span>
              {t}
            </p>
          ))}
        </div>
        <div className="orange-grad text-white">
          <h3 className="border-b border-white/25 px-5 py-5 text-[18px] font-semibold tracking-[-0.03em] text-ink md:text-[22px]">Seven Agency</h3>
          {compare.us.map((t) => (
            <p key={t} className="flex items-center gap-2 border-b border-white/25 px-5 py-[14px] text-sm font-medium text-ink last:border-0 md:text-base">
              <span>›</span>
              {t}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-8 flex flex-wrap items-center gap-5">
        <Button href="/about-us">Read our story</Button>
        <div className="flex items-center">
          {["av1.jpg", "av2.jpg", "av3.jpg"].map((a) => (
            <img key={a} src={`/img/${a}`} alt="" className="-mr-2 h-9 w-9 rounded-full border-2 border-page object-cover" />
          ))}
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-page bg-white text-xs font-semibold">+54</span>
        </div>
        <div className="text-sm">
          <div className="flex items-center gap-2">
            <img src="/img/stars.svg" alt="5 stars" className="h-3.5 w-auto" />
            <span className="font-medium">4.9/5</span>
          </div>
          <p className="text-muted">
            Trusted by <span className="text-brand-ink">54+</span> visionary brands
          </p>
        </div>
      </Reveal>
    </section>
  );
}
