import { showcaseBottom, showcaseTop } from "@/data";
import { Button } from "./ui";

function Row({ imgs, dir }: { imgs: string[]; dir: "l" | "r" }) {
  const all = [...imgs, ...imgs];
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-4 ${dir === "l" ? "marquee-l" : "marquee-r"}`}>
        {all.map((src, i) => (
          <div key={i} className="h-[180px] w-[290px] shrink-0 overflow-hidden rounded-lg border-4 border-white bg-white shadow-sm md:h-[230px] md:w-[380px]">
            <img src={`/img/${src}`} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="relative border-y border-[#e7e2dd] bg-line py-4">
      <div className="flex flex-col gap-4">
        <Row imgs={showcaseTop} dir="l" />
        <Row imgs={showcaseBottom} dir="r" />
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 rounded-full border-8 border-white/70 bg-page shadow-[0_20px_60px_rgba(0,0,0,0.15)] md:h-[360px] md:w-[360px]">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
          <img src="/img/mark-small.svg" alt="" className="h-4 w-auto" />
        </span>
        <p className="text-center text-[24px] font-semibold leading-[1.2] tracking-[-0.03em] md:text-[36px]">
          50+ Premium
          <br />
          Designs
        </p>
        <Button href="/projects">Explore all Projects</Button>
      </div>
    </section>
  );
}
