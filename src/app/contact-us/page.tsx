import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { PageHero } from "@/components/cards";
import { Panel, Reveal } from "@/components/ui";
import { MAPS_URL } from "@/content";
import { contact } from "@/data";

export const metadata: Metadata = { title: "Contact us" };

export default function ContactPage() {
  const rows = [
    ["Call on:", contact.phone, `tel:${contact.phone.replace(/[^+\d]/g, "")}`],
    ["Email on:", contact.email, `mailto:${contact.email}`],
    ["Address:", "Rue Djilali Bounnama, El Biar", MAPS_URL],
  ];
  return (
    <>
      <PageHero eyebrow="Let’s connect" title="Contact us" />
      <section className="mx-auto max-w-[1032px] px-4">
        <Reveal>
          <Panel className="grid gap-2 p-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-5">
              <h2 className="text-[22px] font-semibold tracking-[-0.03em]">Start a Conversation</h2>
              <dl className="mt-5 space-y-2.5">
                {rows.map(([k, v, href]) => (
                  <div key={k} className="flex flex-wrap items-baseline gap-2">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">{k}</dt>
                    <dd>
                      <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-[15px] font-medium hover:text-brand">
                        {v}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <ContactForm />
          </Panel>
        </Reveal>
      </section>
      <Faq showMore={false} />
    </>
  );
}
