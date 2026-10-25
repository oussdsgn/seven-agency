import Link from "next/link";
import { getPost, type Post } from "@/content";
import { Panel, Reveal, SectionHead } from "./ui";

export default function Blog() {
  const [main, ...rest] = [
    "why-storytelling-shapes-brand-success",
    "the-future-of-scalable-design-systems-in-2025",
    "built-for-high-performance-in-framer",
  ].map((s) => getPost(s) as Post);
  return (
    <section className="mx-auto max-w-[1032px] px-4 py-28">
      <SectionHead eyebrow="Blog" title="Latest blog" />
      <Reveal className="mt-12">
        <Panel className="grid gap-2 p-4 md:grid-cols-[1.6fr_1fr]">
          <Link href={`/blog/${main.slug}`} className="group grid gap-4 rounded-lg bg-white p-4 sm:grid-cols-2">
            <div className="flex flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">{main.tag}</p>
              <h3 className="mt-3 text-[20px] font-medium leading-[1.2] tracking-[-0.03em]">{main.title}</h3>
              <p className="mt-3 text-sm font-medium text-muted">{main.date}</p>
              <div className="flex-1" />
              <p className="mt-6 flex items-center gap-2 text-sm font-medium">
                <img src={main.avatar} alt="" className="h-7 w-7 rounded-full object-cover" />
                {main.author}
              </p>
            </div>
            <div className="h-[260px] overflow-hidden rounded-md">
              <img src={main.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </Link>
          <div className="flex flex-col gap-2">
            {rest.map((p) => (
              <Link key={p.title} href={`/blog/${p.slug}`} className="group flex flex-1 flex-col rounded-lg bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">{p.tag}</p>
                <h3 className="mt-3 max-w-[220px] text-[20px] font-medium leading-[1.2] tracking-[-0.03em]">{p.title}</h3>
                <div className="mt-3 flex items-end justify-between">
                  <p className="text-sm font-medium text-muted">{p.date}</p>
                  <div className="h-[56px] w-[88px] overflow-hidden rounded-md">
                    <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Panel>
      </Reveal>
    </section>
  );
}
