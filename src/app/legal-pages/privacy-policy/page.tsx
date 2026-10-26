import type { Metadata } from "next";
import { PageHero } from "@/components/cards";
import { contact } from "@/data";

export const metadata: Metadata = { title: "Privacy Policy" };

const sections: { h: string; p?: string; list?: [string, string][] | string[]; after?: string }[] = [
  {
    h: "1. Information we collect",
    p: "We may collect the following types of information:",
    list: [
      ["Personal Information", " (e.g., name, email address, phone number) — provided voluntarily through forms, contact requests, or newsletters."],
      ["Project Information", " — details you share with us regarding your brand, business, or project requirements."],
      ["Usage Data", " — such as IP address, browser type, pages visited, and time spent on the site (collected automatically via cookies or analytics tools)."],
    ],
  },
  {
    h: "2. How we use your information",
    p: "We use the information we collect to:",
    list: [
      "Respond to your inquiries or project requests",
      "Provide and improve our services",
      "Communicate important updates or offers",
      "Analyze website performance and user behavior",
      "Ensure legal compliance and prevent misuse",
    ],
  },
  {
    h: "3. Sharing your information",
    p: "We do not sell or trade your personal data. We may share your information with:",
    list: [
      "Trusted third-party service providers (e.g., hosting, analytics, CRM tools) who assist in operating our business",
      "Law enforcement or government agencies if required by law",
    ],
    after: "All third-party services comply with applicable data protection laws.",
  },
  {
    h: "4. Cookies & tracking technologies",
    p: "Our website uses cookies and similar technologies to enhance user experience and gather usage statistics. You can manage or disable cookies in your browser settings.",
  },
  {
    h: "5. Data security",
    p: "We implement appropriate technical and organizational measures to safeguard your personal data from unauthorized access, alteration, or disclosure.",
  },
  {
    h: "6. Your rights",
    p: "You have the right to:",
    list: ["Access or update your personal information", "Request the deletion of your data", "Withdraw consent or opt out of communications"],
  },
  {
    h: "7. Third-Party links",
    p: "Our website may contain links to third-party websites. We are not responsible for their content or privacy practices. We encourage you to review their privacy policies before sharing any data.",
  },
  {
    h: "8. Changes to this policy",
    p: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. We recommend checking back periodically to stay informed.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy">
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-muted">Last updated: Dec 2025</p>
      </PageHero>
      <article className="mx-auto max-w-[664px] px-4 pb-24 text-[16px] font-medium leading-[1.4] text-muted">
        <p>
          At <strong className="text-ink">Seven Agency</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and
          safeguard your information when you visit our website or engage with our services.
        </p>
        {sections.map((s) => (
          <section key={s.h} className="mt-12">
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-ink">{s.h}</h2>
            {s.p && <p className="mt-3">{s.p}</p>}
            {s.list && (
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {s.list.map((item) =>
                  Array.isArray(item) ? (
                    <li key={item[0]}>
                      <strong className="text-ink">{item[0]}</strong>
                      {item[1]}
                    </li>
                  ) : (
                    <li key={item}>{item}</li>
                  ),
                )}
              </ul>
            )}
            {s.after && <p className="mt-3">{s.after}</p>}
          </section>
        ))}
        <section className="mt-12">
          <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-ink">9. Contact us</h2>
          <p className="mt-3">If you have any questions about this Privacy Policy or how we handle your data, please contact us at:</p>
          <p className="mt-3">
            Email:{" "}
            <a href={`mailto:${contact.email}`} className="text-ink hover:text-brand-ink">
              {contact.email}
            </a>
          </p>
        </section>
      </article>
    </>
  );
}
