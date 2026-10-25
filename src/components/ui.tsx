"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded bg-chip px-2.5 py-1.5 text-xs font-semibold uppercase leading-none tracking-[0.15em] text-muted ${className}`}
    >
      <img src="/img/chev-l.svg" alt="" className="h-2.5 w-auto" />
      {children}
      <img src="/img/chev-r.svg" alt="" className="h-2.5 w-auto" />
    </span>
  );
}

type BtnProps = { children: ReactNode; href?: string; variant?: "orange" | "dark" | "light"; className?: string };

export function Button({ children, href = "#contact", variant = "orange", className = "" }: BtnProps) {
  const styles = {
    orange: "bg-brand text-white shadow-[inset_0_-2px_0_rgba(0,0,0,0.12)] hover:bg-brand-dark",
    dark: "bg-ink text-white hover:bg-black",
    light: "bg-white text-ink hover:bg-chip",
  }[variant];
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-[22px] py-2.5 text-base font-medium leading-[1.2] transition-colors ${styles} ${className}`}
    >
      <span className="block transition-transform duration-300 group-hover:-translate-y-[150%]">{children}</span>
      <span className="absolute inset-0 flex translate-y-[150%] items-center justify-center transition-transform duration-300 group-hover:translate-y-0">
        {children}
      </span>
    </a>
  );
}

export function HandNote({ children, className = "", flip = false }: { children: ReactNode; className?: string; flip?: boolean }) {
  return (
    <div className={`pointer-events-none flex flex-col items-start ${className}`}>
      <img src="/img/arrow-curve.svg" alt="" className={`h-6 w-8 ${flip ? "-scale-x-100" : ""} -rotate-[25deg]`} />
      <span className="font-hand text-lg leading-none text-brand">{children}</span>
    </div>
  );
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ eyebrow, title, note, className = "" }: { eyebrow: string; title: ReactNode; note?: string; className?: string }) {
  return (
    <Reveal className={`relative mx-auto flex flex-col items-center gap-4 text-center ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="h-section">{title}</h2>
      {note && <HandNote className="absolute -right-16 bottom-[-10px] max-md:hidden">{note}</HandNote>}
    </Reveal>
  );
}

export function Check({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${light ? "bg-white text-brand" : "bg-chip text-ink"}`}
    >
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2.5 6.2 5 8.5l4.5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-[#e7e2dd] bg-line p-2 ${className}`}>{children}</div>;
}
