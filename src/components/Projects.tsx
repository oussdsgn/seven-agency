"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { getProject, type Project } from "@/content";
import { Button, SectionHead } from "./ui";

const projects = ["haven-living", "orion-fitness", "amsgroupe", "nova-studio"].map((s) => getProject(s) as Project);

export default function Projects() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % projects.length), 6000);
    return () => clearInterval(t);
  }, [i, paused, reduce]);

  return (
    <section id="projects" className="py-28">
      <SectionHead
        eyebrow="Featured projects"
        title={
          <>
            Refined projects
            <br />
            with purpose
          </>
        }
        note="Where ideas take shape"
        className="px-4"
      />
      <div
        className="relative mt-14 overflow-hidden border-y border-[#e7e2dd] bg-line py-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-4"
          animate={{ x: `calc(50vw - min(46vw, 460px) - ${i} * (min(92vw, 920px) + 16px))` }}
          transition={{ type: "spring", stiffness: 70, damping: 18 }}
        >
          {projects.map((p, k) => (
            <article
              key={p.title}
              onClick={() => setI(k)}
              className={`grid w-[min(92vw,920px)] shrink-0 cursor-pointer gap-6 rounded-2xl bg-white p-5 transition-opacity duration-500 md:grid-cols-2 ${
                k === i ? "opacity-100" : "opacity-40"
              }`}
            >
              <div className="flex flex-col">
                <h3 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.03em] md:text-[36px]">{p.title}</h3>
                <dl className="mt-4 space-y-1 text-sm font-medium">
                  <div className="flex gap-1.5">
                    <dt className="text-muted">Industry:</dt>
                    <dd>{p.industry}</dd>
                  </div>
                  <div className="flex gap-1.5">
                    <dt className="text-muted">Scope:</dt>
                    <dd>{p.scope}</dd>
                  </div>
                </dl>
                <div className="flex-1" />
                <p className="mt-8 border-t border-line pt-5 text-[15px] font-medium leading-[1.3] text-muted">{p.summary}</p>
                <div className="mt-5">
                  <Button href={`/projects/${p.slug}`}>View project detail</Button>
                </div>
              </div>
              <div className="aspect-[4/3.6] overflow-hidden rounded-lg md:aspect-auto md:h-[420px]">
                <img src={p.cover} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </article>
          ))}
        </motion.div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-1">
        <button
          aria-label="Previous project"
          onClick={() => setI((i - 1 + projects.length) % projects.length)}
          className="mr-2 flex h-8 w-8 items-center justify-center rounded-md bg-white text-muted shadow-sm hover:text-ink"
        >
          ‹
        </button>
        {projects.map((p, k) => (
          <button
            key={p.title}
            aria-label={`Show ${p.title}`}
            aria-current={k === i}
            onClick={() => setI(k)}
            className="flex h-6 min-w-6 items-center justify-center"
          >
            <span className={`block h-2 rounded-full transition-all ${k === i ? "w-5 bg-ink" : "w-2 bg-[#a9a6a2]"}`} />
          </button>
        ))}
        <button
          aria-label="Next project"
          onClick={() => setI((i + 1) % projects.length)}
          className="ml-2 flex h-8 w-8 items-center justify-center rounded-md bg-white text-muted shadow-sm hover:text-ink"
        >
          ›
        </button>
      </div>
    </section>
  );
}
