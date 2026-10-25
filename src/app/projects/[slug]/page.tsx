import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, ProjectCard } from "@/components/cards";
import { Button, Panel, Reveal } from "@/components/ui";
import { getProject, projectList } from "@/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectList.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p ? { title: p.title, description: p.summary } : {};
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-1 pl-5 text-[15px] font-medium text-muted">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const others = projectList.filter((o) => o.slug !== p.slug && ["amsgroupe", "nova-studio", "wesh-kayen-app"].includes(o.slug)).slice(0, 2);

  return (
    <>
      <PageHero title={p.title}>
        <p className="mt-5 max-w-[440px] text-[15px] font-medium leading-[1.35] text-muted">{p.summary}</p>
      </PageHero>

      <section className="mx-auto max-w-[1032px] px-4">
        <Reveal>
          <Panel className="p-4">
            <img src={p.hero} alt={p.title} className="h-[320px] w-full rounded-lg object-cover md:h-[940px]" />
          </Panel>
        </Reveal>
        <Reveal className="mt-8">
          <Panel className="p-4">
            <div className="grid grid-cols-2 items-center gap-5 rounded-lg bg-white px-5 py-4 text-center text-sm font-medium md:grid-cols-4">
              <div>
                <p className="text-muted">Services:</p>
                <p className="mt-1">{p.scope}</p>
              </div>
              <div>
                <p className="text-muted">Industry:</p>
                <p className="mt-1">{p.industry}</p>
              </div>
              <div>
                <p className="text-muted">Timeline</p>
                <p className="mt-1">{p.timeline}</p>
              </div>
              {p.live && (
                <div className="md:text-right">
                  <Button href={p.live} className="!px-4 !py-2 !text-sm">
                    View live site
                  </Button>
                </div>
              )}
            </div>
          </Panel>
        </Reveal>
      </section>

      <article className="mx-auto max-w-[664px] px-4 py-16">
        <Reveal>
          <h2 className="text-[28px] font-semibold tracking-[-0.03em]">The Challenge</h2>
          <p className="mt-3 text-[15px] font-medium leading-[1.4] text-muted">{p.challenge.text}</p>
          <Points items={p.challenge.points} />
        </Reveal>
        <Reveal className="mt-12">
          <h2 className="text-[28px] font-semibold tracking-[-0.03em]">The Solution</h2>
          <p className="mt-3 text-[15px] font-medium leading-[1.4] text-muted">{p.solution}</p>
          <Panel className={`mt-8 grid gap-2 p-2 ${p.gallery.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
            {p.gallery.map((g) => (
              <img key={g} src={g} alt="" className="h-[160px] w-full rounded-md bg-white object-cover object-top" loading="lazy" />
            ))}
          </Panel>
        </Reveal>
        <Reveal className="mt-12">
          <h2 className="text-[28px] font-semibold tracking-[-0.03em]">The Result</h2>
          <p className="mt-3 text-[15px] font-medium leading-[1.4] text-muted">{p.result.text}</p>
          <Points items={p.result.points} />
        </Reveal>
        <Reveal className="mt-12">
          <Panel className="p-2">
            <figure className="rounded-lg bg-white p-6">
              <blockquote className="text-[20px] font-medium leading-[1.3] tracking-[-0.02em]">{p.quote.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-2 text-sm font-medium">
                <img src={p.quote.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
                {p.quote.name}
                <span className="text-muted">— {p.quote.role}</span>
              </figcaption>
            </figure>
          </Panel>
        </Reveal>
      </article>

      <section className="mx-auto max-w-[1032px] px-4 pb-16">
        <h2 className="h-section text-center">Other Projects</h2>
        <div className="mt-10 grid items-start gap-4 md:grid-cols-2">
          {others.map((o, i) => (
            <ProjectCard key={o.slug} p={o} tall={i === 0} />
          ))}
        </div>
      </section>
    </>
  );
}
