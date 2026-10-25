import type { Metadata } from "next";
import Counter from "@/components/Counter";
import { PageHero } from "@/components/cards";
import { Button, Eyebrow, Panel, Reveal } from "@/components/ui";

export const metadata: Metadata = { title: "About us" };

const values = ["Strategy-Led", "Detail-Driven", "Transparent Process", "Long-Term Partnership", "High-Quality Execution"];

const stats = [
  { title: "Client Satisfaction", value: 98, suffix: "%", text: "Recognized for reliable, scalable, and impactful digital work." },
  { title: "Successful Projects", value: 25, suffix: "+", text: "Driven by clarity, quality, and a strong execution process." },
  { title: "Years of Experience", value: 8, suffix: "+", text: "Built on years of refined skills and proven industry knowledge." },
];

export default function AboutPage() {
  return (
    <>
      <div className="relative">
        <svg className="pointer-events-none absolute inset-x-0 top-0 h-[700px] w-full" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMin slice" fill="none">
          {[0, 1, 2].map((i) => (
            <ellipse key={i} cx="720" cy={-80 - i * 40} rx={620 + i * 120} ry={720 + i * 60} stroke="#e9e6e3" strokeWidth="2" />
          ))}
        </svg>
        <PageHero eyebrow="About us" title="Who we are" />
        <section className="relative mx-auto max-w-[1032px] px-4">
          <Reveal>
            <Panel className="grid gap-2 p-4 md:grid-cols-2">
              <div className="flex flex-col rounded-lg bg-white p-5">
                <h2 className="max-w-[380px] text-[28px] font-medium leading-[1.2] tracking-[-0.03em] md:text-[36px]">
                  A studio built on clarity, craft and commitment
                </h2>
                <div className="min-h-16 flex-1" />
                <p className="max-w-[420px] text-[15px] font-medium leading-[1.35] text-muted">
                  We’re a multidisciplinary agency creating thoughtful, scalable digital solutions, starting every project clear understanding of your
                  goals, audience, and challenges.
                </p>
                <div className="mt-5">
                  <Button>Start a project</Button>
                </div>
              </div>
              <div className="h-[320px] overflow-hidden rounded-lg md:h-[384px]">
                <img src="/img/about-studio.jpg" alt="The Seven Agency team at work" className="h-full w-full object-cover" />
              </div>
            </Panel>
          </Reveal>
        </section>
      </div>

      <section className="mx-auto max-w-[1032px] px-4 py-28">
        <Reveal>
          <Eyebrow>Our mission</Eyebrow>
          <h2 className="h-section mt-4 max-w-[520px]">Designed to elevate brands with meaning</h2>
        </Reveal>
        <Reveal className="relative mt-8 overflow-hidden rounded-xl">
          <img src="/img/mission.jpg" alt="" className="h-[520px] w-full object-cover md:h-[330px]" />
          <div className="absolute inset-x-4 bottom-4 rounded-lg bg-white p-5 md:inset-x-auto md:bottom-auto md:right-5 md:top-5 md:w-[300px]">
            <h3 className="border-b border-line pb-3 text-[22px] font-medium tracking-[-0.03em]">Core Values</h3>
            <ul className="mt-4 space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-2 text-sm font-medium">
                  <img src="/img/value-check.svg" alt="" className="h-4 w-4" />
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-3 text-sm font-medium">© 2026 Seven Agency Creatives</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1032px] px-4 pb-20">
        <Reveal>
          <Eyebrow>Stats</Eyebrow>
          <h2 className="h-section mt-4">Impact in numbers</h2>
        </Reveal>
        <Reveal className="mt-8">
          <Panel className="grid gap-2 p-4 md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.title} className="flex flex-col rounded-lg bg-white p-5">
                <h3 className="text-[20px] font-medium tracking-[-0.03em]">{s.title}</h3>
                <p className="mt-10 text-[64px] font-medium leading-none tracking-[-0.04em]">
                  <Counter to={s.value} />
                  <span className="text-brand">{s.suffix}</span>
                </p>
                <p className="mt-6 border-t border-line pt-4 text-[15px] font-medium leading-[1.35] text-muted">{s.text}</p>
              </div>
            ))}
          </Panel>
        </Reveal>
      </section>
    </>
  );
}
