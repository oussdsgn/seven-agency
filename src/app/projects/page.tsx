import type { Metadata } from "next";
import LoadMore from "@/components/LoadMore";
import { PageHero, ProjectCard } from "@/components/cards";
import { projectList } from "@/content";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  // Right-column cards are taller, like the original's staggered layout.
  const cards = projectList.map((p, i) => <ProjectCard key={p.slug} p={p} tall={i % 2 === 1} />);
  return (
    <>
      <PageHero title="Project Showcase" />
      <section className="mx-auto max-w-[1032px] px-4 pb-16">
        <LoadMore items={cards} initial={4} className="grid items-start gap-4 md:grid-cols-2" />
      </section>
    </>
  );
}
