import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, PostCard } from "@/components/cards";
import { Eyebrow, Panel, Reveal } from "@/components/ui";
import { getPost, postList } from "@/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return postList.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPost((await params).slug);
  return p ? { title: p.title } : {};
}

export default async function PostPage({ params }: Props) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const others = ["why-storytelling-shapes-brand-success", "the-future-of-scalable-design-systems-in-2025", "built-for-high-performance-in-framer"]
    .filter((s) => s !== p.slug)
    .slice(0, 2)
    .map((s) => getPost(s)!);

  return (
    <>
      <PageHero title={p.title}>
        <div className="mt-5 flex items-center gap-3">
          <Eyebrow>{p.tag}</Eyebrow>
          <span className="text-sm font-medium text-muted">{p.date}</span>
        </div>
      </PageHero>

      <section className="mx-auto max-w-[1032px] px-4">
        <Reveal>
          <Panel className="p-4">
            <img src={p.img} alt="" className="h-[260px] w-full rounded-lg object-cover md:h-[520px]" />
          </Panel>
        </Reveal>
      </section>

      <article className="mx-auto max-w-[664px] px-4 py-16">
        {p.body.map((b) => (
          <Reveal key={b.h} className="mt-10 first:mt-0">
            <h2 className="text-[28px] font-medium tracking-[-0.03em]">{b.h}</h2>
            {b.p && <p className="mt-3 text-[15px] font-medium leading-[1.4] text-muted">{b.p}</p>}
            {b.list && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] font-medium text-muted">
                {b.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
        <div className="mt-14 flex items-center gap-3 rounded-lg border border-[#e7e2dd] bg-line p-2">
          <img src={p.avatar} alt="" className="h-10 w-10 rounded-md object-cover" />
          <span className="text-[15px] font-medium">{p.author}</span>
        </div>
      </article>

      <section className="mx-auto max-w-[1032px] px-4 pb-16">
        <h2 className="h-section text-center">Other Blogs</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {others.map((o) => (
            <div key={o.slug} className="grid">
              <PostCard p={o} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
