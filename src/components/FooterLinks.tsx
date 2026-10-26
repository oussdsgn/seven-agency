"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["Home", "/"],
  ["About us", "/about-us"],
  ["Projects", "/projects"],
  ["Blog", "/blog"],
  ["Contact us", "/contact-us"],
  ["Privacy Policy", "/legal-pages/privacy-policy"],
];

export default function FooterLinks() {
  const path = usePathname();
  const isActive = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <ul className="mt-4 grid grid-flow-col grid-rows-4 gap-x-10 text-sm font-medium">
      {links.map(([l, h]) => (
        <li key={l}>
          <Link
            href={h}
            aria-current={isActive(h) ? "page" : undefined}
            className={`inline-block py-1 hover:text-brand-ink ${isActive(h) ? "text-brand-ink" : ""}`}
          >
            {l}
          </Link>
        </li>
      ))}
    </ul>
  );
}
