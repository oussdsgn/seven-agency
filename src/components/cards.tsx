import Link from "next/link";
import type { ReactNode } from "react";
import type { Post, Project } from "@/content";
import { Button, Eyebrow, Reveal } from "./ui";

export function PageHero({ eyebrow, title, children }: { eyebrow?: string; title: ReactNode; children?: ReactNode }) {
  return (
    <Reveal className="mx-auto flex max-w-[760px] flex-col items-center px-4 pb-14 pt-36 text-center md:pt-[170px]">
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h1 className="text-[44px] font-semibold leading-[1.1] tracking-[-0.04em] md:text-[64px]">{title}</h1>
      {children}
    </Reveal>
  );
}

export function ProjectCard({ p, tall = false }: { p: Project; tall?: boolean }) {
  return (
    <article className="flex flex-col rounded-2xl bg-white p-5">
      <Link href={`/projects/${p.slug}`} className={`block overflow-hidden rounded-lg ${tall ? "h-[400px] md:h-[556px]" : "h-[300px] md:h-[432px]"}`}>
        <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
      </Link>
      <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.03em]">{p.title}</h3>
      <dl className="mt-3 space-y-1 text-sm font-medium">
        <div className="flex gap-1.5">
          <dt className="text-muted">Industry:</dt>
          <dd>{p.industry}</dd>
        </div>
        <div className="flex gap-1.5">
          <dt className="text-muted">Scope:</dt>
          <dd>{p.scope}</dd>
        </div>
      </dl>
      <div className="mt-4">
        <Button href={`/projects/${p.slug}`} className="!px-3.5 !py-2 !text-sm">
          View project detail
        </Button>
      </div>
    </article>
  );
}

export function PostCard({ p, big = false }: { p: Post; big?: boolean }) {
  if (big)
    return (
      <Link href={`/blog/${p.slug}`} className="group grid gap-4 rounded-lg bg-white p-5 sm:grid-cols-2 md:col-span-2">
        <div className="flex flex-col">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">{p.tag}</p>
          <h3 className="mt-3 max-w-[260px] text-[20px] font-semibold leading-[1.2] tracking-[-0.03em]">{p.title}</h3>
          <p className="mt-3 text-sm font-medium text-muted">{p.date}</p>
          <div className="flex-1" />
          <p className="mt-6 flex items-center gap-2 text-sm font-medium">
            <img src={p.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
            {p.author}
          </p>
        </div>
        <div className="h-[300px] overflow-hidden rounded-md">
          <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      </Link>
    );
  return (
    <Link href={`/blog/${p.slug}`} className="group flex min-h-[200px] flex-col rounded-lg bg-white p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">{p.tag}</p>
      <h3 className="mt-3 max-w-[220px] text-[20px] font-semibold leading-[1.2] tracking-[-0.03em]">{p.title}</h3>
      <div className="flex-1" />
      <div className="mt-4 flex items-end justify-between">
        <p className="text-sm font-medium text-muted">{p.date}</p>
        <div className="h-[60px] w-[90px] overflow-hidden rounded-md">
          <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
      </div>
    </Link>
  );
}
