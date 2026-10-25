import { CAL_URL } from "@/content";
import { Button, Panel, Reveal } from "./ui";

export default function Cta() {
  return (
    <section className="relative mx-auto max-w-[1032px] px-4 pb-20 pt-8">
      <Reveal>
        <Panel className="p-4">
          <div className="orange-grad relative overflow-hidden rounded-lg px-6 py-12 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -top-[340px] left-[16%] h-[500px] w-[500px] rounded-full border-[6px] border-brand/80" />
            <div className="pointer-events-none absolute -bottom-[380px] right-[2%] h-[500px] w-[500px] rounded-full border-[6px] border-brand/80" />
            <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/70">Let’s build something great</p>
                <h2 className="h-section mt-3">Ready to start your next project?</h2>
                <Button variant="dark" className="mt-8">
                  Get started
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-xl border-4 border-white/60 bg-page p-5 shadow-[0_20px_50px_rgba(207,78,23,0.25)]">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                    <span className="flex h-3 w-3 items-center justify-center rounded-full border border-ink">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink" />
                    </span>
                    Available for project
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <img src="/img/mark.jpg" alt="Seven" className="h-11 w-11 rounded-full bg-white object-contain p-1.5" />
                    <span className="text-muted">+</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-medium text-white">You</span>
                  </div>
                  <p className="mt-4 text-[20px] font-semibold tracking-[-0.03em]">Quick 15-minute call</p>
                  <p className="text-sm font-medium text-muted">Pick a time that works for you.</p>
                  <Button href={CAL_URL} className="mt-5 w-full">
                    Book a free call
                  </Button>
                </div>
                <img src="/img/cursor.svg" alt="" className="float absolute -right-6 bottom-16 w-[88px]" />
              </div>
            </div>
          </div>
        </Panel>
      </Reveal>
    </section>
  );
}
