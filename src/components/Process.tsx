"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { steps } from "@/data";
import { Button, Eyebrow } from "./ui";

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setStep(Math.min(steps.length - 1, Math.floor(v * steps.length))));

  const jump = (k: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.offsetTop + ((el.offsetHeight - window.innerHeight) * (k + 0.5)) / steps.length;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const s = steps[step];
  return (
    <section id="process" ref={ref} style={{ height: `${steps.length * 70 + 30}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16">
        <div className="text-center">
          <Eyebrow>Process</Eyebrow>
          <h2 className="h-section mt-4">A collaborative approach</h2>
        </div>

        <div className="relative mt-10 w-full max-w-[1100px]">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">Step</p>
          <div className="relative z-10 mx-auto mt-2 flex h-10 w-10 items-center justify-center rounded-md bg-brand text-base font-medium text-white shadow-[0_6px_16px_rgba(255,99,33,0.35)]">
            <AnimatePresence mode="wait">
              <motion.span key={step} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
                {pad(step)}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* arc */}
          <div className="absolute left-1/2 top-[52px] h-[1100px] w-[1100px] -translate-x-1/2 rounded-full border-[3px] border-[#e4e1dd] bg-gradient-to-b from-[#ecebe9] via-page to-page max-md:h-[700px] max-md:w-[700px]" />
          <motion.div
            className="absolute left-1/2 top-[52px] h-[1100px] w-[1100px] -translate-x-1/2 max-md:h-[700px] max-md:w-[700px]"
            animate={{ rotate: -step * 24 }}
            transition={{ type: "spring", stiffness: 60, damping: 16 }}
          >
            {steps.map((_, k) => (
              <div key={k} className="absolute inset-0" style={{ transform: `rotate(${k * 24}deg)` }}>
                {k !== step && (
                  <span
                    className="absolute left-1/2 top-0 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center rounded-md border border-line bg-white text-sm font-medium text-muted shadow-sm"
                    onClick={() => jump(k)}
                  >
                    <span className="-rotate-45">{pad(k)}</span>
                  </span>
                )}
              </div>
            ))}
          </motion.div>

          <div className="relative mx-auto mt-16 flex min-h-[260px] max-w-[460px] flex-col items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center"
              >
                <h3 className="text-[28px] font-medium tracking-[-0.03em]">{s.title}</h3>
                <p className="mt-2 max-w-[340px] text-[15px] font-medium leading-[1.3] text-muted">{s.desc}</p>
                <p className="mt-5 border-t border-[#e4e1dd] px-4 pt-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
                  {s.tags.join("  •  ")}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6">
              <Button>Start your project</Button>
            </div>
            <p className="mt-6 text-xs font-semibold tracking-[0.1em] text-muted">
              {pad(step)}/{pad(steps.length - 1)}
            </p>
            <div className="mt-2 flex gap-1">
              {steps.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Step ${k + 1}`}
                  onClick={() => jump(k)}
                  className={`h-1.5 w-1.5 rounded-full ${k === step ? "bg-brand" : "bg-[#d7d4d0]"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
