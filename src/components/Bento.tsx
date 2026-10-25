"use client";

import { AnimatePresence, animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CAL_URL } from "@/content";
import { strategySlides } from "@/data";
import { Button, Panel, Reveal } from "./ui";

function Gauge({ value, label, big = false }: { value: number; label: string; big?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  const size = big ? 104 : 74;
  const r = size / 2 - 3;
  const len = 2 * Math.PI * r;
  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} fill="#ffe8de" stroke="#ffd6c4" strokeWidth="3" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="#ff6321"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={len}
            strokeDashoffset={len * (1 - n / 100)}
          />
        </svg>
        <span className={`absolute inset-0 flex items-center justify-center font-medium ${big ? "text-base" : "text-xs"}`}>{n}%</span>
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">{label}</span>
    </div>
  );
}

function Csat() {
  const [active, setActive] = useState(4);
  const labels = ["Terrible", "Bad", "Okay", "Good", "Excellent"];
  return (
    <div className="flex flex-col items-center justify-between rounded-lg bg-white p-5 text-center">
      <div>
        <h3 className="text-[22px] font-semibold tracking-[-0.03em]">CSAT</h3>
        <p className="mt-1 text-sm font-medium text-muted">Measures and improves client satisfaction.</p>
      </div>
      <div className="mt-10">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand">{labels[active]}</p>
        <div className="flex gap-1.5">
          {[2, 1, 3, 4, 5].map((f, i) => (
            <button
              key={f}
              aria-label={labels[i]}
              onMouseEnter={() => setActive(i)}
              className={`transition ${active === i ? "scale-110" : "opacity-40 grayscale-[30%]"}`}
            >
              <img src={`/img/face${f}.svg`} alt="" className="h-6 w-6" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Strategy() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((i + d + strategySlides.length) % strategySlides.length);
  const s = strategySlides[i];
  return (
    <div className="flex flex-col rounded-lg bg-white p-5 sm:col-span-3">
      <div className="h-[150px] overflow-hidden rounded-md">
        <img src="/img/strategy.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <span className="mt-4 flex h-8 w-8 items-center justify-center rounded-md bg-chip">
        <img src="/img/knight.svg" alt="" className="h-4 w-4" />
      </span>
      <div className="mt-3 flex items-end justify-between gap-4">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            <h3 className="text-[22px] font-semibold tracking-[-0.03em]">{s.title}</h3>
            <p className="mt-1 text-sm font-medium text-muted">{s.text}</p>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-1.5">
          {[-1, 1].map((d) => (
            <button
              key={d}
              aria-label={d < 0 ? "Previous" : "Next"}
              onClick={() => go(d)}
              className="flex h-7 w-7 items-center justify-center rounded bg-chip text-muted hover:text-ink"
            >
              {d < 0 ? "‹" : "›"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Bento() {
  return (
    <section className="mx-auto max-w-[1032px] px-4 pb-28">
      <Reveal>
        <Panel className="grid gap-2 p-4 sm:grid-cols-4">
          <Csat />
          <Strategy />
          <div className="orange-grad flex flex-col items-center rounded-lg p-5 text-center sm:col-span-2">
            <h3 className="text-[22px] font-semibold tracking-[-0.03em]">Discuss your project</h3>
            <Button href={CAL_URL} className="mt-8 !text-sm">Schedule a call - 15 mins free</Button>
            <p className="mt-2 text-sm font-medium text-ink/70">No pressure, just a thoughtful chat.</p>
            <div className="min-h-12 flex-1" />
          </div>
          <div className="rounded-lg bg-white p-5 text-center sm:col-span-2">
            <h3 className="text-[22px] font-semibold tracking-[-0.03em]">SEO ready &amp; fast performance</h3>
            <p className="mt-1 text-sm font-medium text-muted">Optimized for search rankings and blazing-fast speed.</p>
            <div className="mt-8 flex items-end justify-around">
              <Gauge value={99} label="Performance" />
              <Gauge value={100} label="SEO" big />
              <Gauge value={98} label="Accessibility" />
            </div>
          </div>
        </Panel>
      </Reveal>
    </section>
  );
}
