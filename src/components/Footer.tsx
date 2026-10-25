import { contact } from "@/data";

const links = [
  ["Home", "#top"],
  ["About us", "#about"],
  ["Projects", "#projects"],
  ["Blog", "#blog"],
  ["Contact us", "#contact"],
  ["Privacy Policy", "#"],
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1032px] px-4 pb-10 pt-8">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <img src="/img/logo.png" alt="Seven Agency" className="h-14 w-auto" />
          <p className="mt-4 max-w-[230px] text-sm font-medium text-muted">Crafting digital solutions that move your business forward.</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">Quick links</p>
          <ul className="mt-5 grid grid-flow-col grid-rows-4 gap-x-10 gap-y-2.5 text-sm font-medium">
            {links.map(([l, h], i) => (
              <li key={l}>
                <a href={h} className={`hover:text-brand ${i === 0 ? "text-brand" : ""}`}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">Get in touch</p>
          <div className="mt-5 space-y-2.5 text-sm font-medium">
            <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="block hover:text-brand">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="block hover:text-brand">
              {contact.email}
            </a>
            <p className="max-w-[200px]">{contact.address}</p>
          </div>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">Follow us on</p>
          <div className="mt-3 flex gap-2">
            {[
              ["s1.svg", "Instagram"],
              ["s2.svg", "LinkedIn"],
              ["s3.svg", "X"],
            ].map(([i, l]) => (
              <a key={i} href="#" aria-label={l} className="flex h-6 w-6 items-center justify-center rounded bg-ink hover:bg-brand">
                <img src={`/img/${i}`} alt="" className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-14 rounded-lg border border-[#e7e2dd] bg-line px-5 py-3 text-sm font-medium text-muted">
        © 2026 Seven Agency. All rights reserved
      </p>
    </footer>
  );
}
