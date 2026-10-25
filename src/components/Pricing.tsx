import { plans } from "@/data";
import { Button, Check, Panel, Reveal, SectionHead } from "./ui";

export default function Pricing() {
  const { starter, growth } = plans;
  return (
    <section id="pricing" className="mx-auto max-w-[1032px] px-4 py-28">
      <SectionHead eyebrow="Pricing" title="Plan that fits" />
      <Reveal className="mt-12">
        <Panel className="mx-auto grid max-w-[1000px] gap-2 p-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg bg-white p-4">
            <div className="rounded-lg border border-line bg-page p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{starter.name}</p>
              <p className="mt-3 text-[36px] font-semibold tracking-[-0.03em]">
                {starter.price} <span className="text-base tracking-normal">/ project</span>
              </p>
              <p className="mt-3 max-w-[260px] text-[15px] font-medium leading-[1.3] text-muted">{starter.desc}</p>
            </div>
            <ul className="mt-6 space-y-3 px-1">
              {starter.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm font-medium">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button>{starter.cta}</Button>
            </div>
            <img src="/img/rocket.svg" alt="" className="absolute -bottom-2 right-5 h-24 opacity-70" />
          </div>
          <div className="orange-grad relative overflow-hidden rounded-lg !bg-[linear-gradient(180deg,#ff8a4c,#ff6a2a)] p-4 text-white">
            <div className="rounded-lg bg-white p-5 text-ink">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{growth.name}</p>
                <span className="rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">Popular</span>
              </div>
              <p className="mt-3 text-[36px] font-semibold tracking-[-0.03em]">
                {growth.price} <span className="text-base tracking-normal">/ project</span>
              </p>
              <p className="mt-3 max-w-[260px] text-[15px] font-medium leading-[1.3] text-muted">{growth.desc}</p>
            </div>
            <ul className="mt-6 space-y-3 px-1">
              {growth.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm font-medium">
                  <Check light />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button variant="dark">{growth.cta}</Button>
            </div>
            <img src="/img/fire.svg" alt="" className="absolute -bottom-1 right-5 h-24" />
          </div>
        </Panel>
        <p className="mx-auto mt-6 max-w-[240px] text-center text-sm font-medium text-muted">
          For agencies and enterprises needing custom strategy and execution.
        </p>
        <p className="mt-1 text-center">
          <a href="#contact" className="text-sm font-medium text-brand hover:underline">
            Contact us ›
          </a>
        </p>
      </Reveal>
    </section>
  );
}
