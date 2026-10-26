import FooterLinks from "./FooterLinks";
import { MAPS_URL, socials } from "@/content";
import { contact } from "@/data";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1032px] px-4 pb-10 pt-8">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <img src="/img/logo.png" alt="Seven Agency" className="h-14 w-auto" />
          <p className="mt-4 max-w-[230px] text-sm font-medium text-muted">Crafting digital solutions that move your business forward.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Quick links</p>
          <FooterLinks />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Get in touch</p>
          <div className="mt-4 space-y-1 text-sm font-medium">
            <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="block py-1 hover:text-brand-ink">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="block py-1 hover:text-brand-ink">
              {contact.email}
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block max-w-[200px] py-1 hover:text-brand-ink">
              {contact.address}
            </a>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-muted">Follow us on</p>
          <div className="mt-3 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-md bg-ink hover:bg-brand-ink"
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
