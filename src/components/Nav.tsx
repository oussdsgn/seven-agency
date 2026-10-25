"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["About us", "/about-us"],
  ["Services", "/#services"],
  ["Projects", "/projects"],
  ["Pricing", "/#pricing"],
  ["Blog", "/blog"],
  ["Contact us", "/contact-us"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-[400px] rounded-lg bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex h-[52px] items-center">
          <Link href="/" className="flex h-full items-center px-4">
            <img src="/img/logo.png" alt="Seven Agency" className="h-6 w-auto" />
          </Link>
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-full w-14 flex-col items-center justify-center gap-[5px] border-x border-line"
          >
            <span className={`h-[1.5px] w-4 bg-ink transition-transform ${open ? "translate-y-[3.25px] rotate-45" : ""}`} />
            <span className={`h-[1.5px] w-4 bg-ink transition-transform ${open ? "-translate-y-[3.25px] -rotate-45" : ""}`} />
          </button>
          <div className="flex flex-1 justify-end px-1.5">
            <Link href="/contact-us" className="rounded bg-ink px-3 py-1.5 text-sm text-white transition-colors hover:bg-black">
              Get started
            </Link>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-line"
            >
              <ul className="grid grid-cols-2 gap-1 p-3">
                {links.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-[15px] font-medium hover:bg-chip"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
