import { services } from "@/data";
import { Button, Eyebrow, HandNote, Panel, Reveal } from "./ui";

export default function Services() {
  return (
    <section id="services" className="mx-auto grid max-w-[1032px] gap-12 px-4 py-28 md:grid-cols-2">
      <div>
        <Reveal className="md:sticky md:top-32">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="h-section mt-4">
            Services built
            <br />
            to drive impact
          </h2>
          <div className="relative mt-6 inline-block">
            <Button>Discuss your ideas</Button>
            <HandNote className="absolute -right-24 top-6">Let’s get started</HandNote>
          </div>
        </Reveal>
      </div>
      <Panel className="flex flex-col gap-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <article className="rounded-lg bg-white p-5">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <h3 className="text-[22px] font-medium tracking-[-0.03em]">{s.title}</h3>
                <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md border border-line">
                  <img src={s.icon} alt="" className="h-full w-full object-cover" />
                </span>
              </div>
              <p className="mt-4 max-w-[380px] text-[15px] font-medium leading-[1.3] text-muted">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full bg-page px-4 pb-2 pt-2.5 text-xs font-semibold uppercase leading-none tracking-[0.15em] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </Panel>
    </section>
  );
}
