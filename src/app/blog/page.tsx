import type { Metadata } from "next";
import LoadMore from "@/components/LoadMore";
import { PageHero, PostCard } from "@/components/cards";
import { Panel } from "@/components/ui";
import { postList } from "@/content";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  const cards = postList.map((p, i) => <PostCard key={p.slug} p={p} big={i === 0} />);
  return (
    <>
      <PageHero title="Our Blogs" />
      <section className="mx-auto max-w-[1032px] px-4 pb-16">
        <Panel className="p-4">
          <LoadMore items={cards} initial={5} className="grid gap-2 md:grid-cols-3" done="That’s everything for now!" />
        </Panel>
      </section>
    </>
  );
}
