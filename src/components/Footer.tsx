import Link from "next/link";
import { MAPS_URL, socials } from "@/content";
import { contact } from "@/data";

const links = [
  ["Home", "/"],
  ["About us", "/about-us"],
  ["Projects", "/projects"],
  ["Blog", "/blog"],
  ["Contact us", "/contact-us"],
  ["Privacy Policy", "/legal-pages/privacy-policy"],
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
                <Link href={h} className={`hover:text-brand ${i === 0 ? "text-brand" : ""}`}>
                  {l}
                </Link>
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
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block max-w-[200px] hover:text-brand">
              {contact.address}
            </a>
          </div>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">Follow us on</p>
          <div className="mt-3 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-6 w-6 items-center justify-center rounded bg-ink hover:bg-brand"
              >
                <img src={s.icon} alt="" className="h-3.5 w-3.5" />
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
