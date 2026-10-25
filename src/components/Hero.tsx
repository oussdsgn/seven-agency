"use client";

import { motion } from "motion/react";
import { clients } from "@/data";
import { Button, Eyebrow, HandNote } from "./ui";

const tiles = [
  { icon: "h7.svg", cls: "left-[9%] top-[6%] rotate-[-18deg]" },
  { icon: "h2.svg", cls: "right-[22%] top-[6%] rotate-[22deg] max-md:right-[6%]" },
  { icon: "h4.svg", cls: "left-[24%] top-[57%] rotate-[-8deg] max-md:hidden" },
  { icon: "h6.svg", cls: "right-[24%] top-[57%] rotate-[10deg] max-md:hidden" },
];

function Arcs() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
      {[0, 1, 2, 3].map((i) => (
        <g key={i} stroke="#e9e6e3" strokeWidth="2">
          <ellipse cx={-180 + i * 110} cy="450" rx="560" ry="760" />
          <ellipse cx={1620 - i * 110} cy="450" rx="560" ry="760" />
        </g>
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 md:pt-[200px]">
      <Arcs />
      {tiles.map((t, i) => (
        <motion.div
          key={t.icon}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 120 }}
          className={`absolute ${t.cls}`}
        >
          <div className="float flex h-[72px] w-[72px] items-center justify-center rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]" style={{ animationDelay: `${i * 0.7}s` }}>
            <img src={`/img/${t.icon}`} alt="" className="h-7 w-7" />
          </div>
        </motion.div>
      ))}

      <div className="relative mx-auto flex max-w-[900px] flex-col items-center px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Eyebrow>Digital Agency</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-[44px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[64px] md:text-[72px]"
        >
          We design brands
          <br />
          that move <span className="text-brand">people</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-[520px] text-base font-medium leading-[1.2] text-muted"
        >
          We combine strategy, design, and technology to help ambitious brands stand out &amp; create meaningful digital experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button>Discuss your ideas</Button>
          <Button href="/#services" variant="dark">
            View services
          </Button>
          <HandNote className="absolute -left-14 top-9 max-sm:hidden" flip>
            Schedule a free call now
          </HandNote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 w-full max-w-[580px]"
        >
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#dcd8d4]" />
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              Trusted by 40+ national an and international leaders
            </p>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#dcd8d4]" />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 opacity-60 sm:gap-10 grayscale">
            {clients.map((c) => (
              <img key={c.alt} src={c.src} alt={c.alt} style={{ width: c.w }} className="h-auto" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
