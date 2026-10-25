"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/data";

const input =
  "mt-2 w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm font-medium text-ink outline-none transition placeholder:text-[#a9a7a5] focus:border-brand";
const label = "text-[11px] font-semibold uppercase tracking-[0.15em] text-ink";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // No backend: open the visitor's mail app with the message filled in.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [`Name: ${f.get("name")}`, `Email: ${f.get("email")}`, `Phone: ${f.get("phone")}`, `Company: ${f.get("company") || "-"}`, "", `${f.get("message") || ""}`].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`New project inquiry from ${f.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-4 rounded-lg bg-white p-5">
      <label className={label}>
        Name*
        <input name="name" required placeholder="Seven" className={input} />
      </label>
      <label className={label}>
        Email*
        <input name="email" type="email" required placeholder="seven@7agency.com" className={input} />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          Phone*
          <input name="phone" type="tel" required placeholder="+213 (0) 20 254 885" className={input} />
        </label>
        <label className={label}>
          Company
          <input name="company" placeholder="Seven Agency" className={input} />
        </label>
      </div>
      <label className={label}>
        Message
        <textarea name="message" rows={3} placeholder="Write what’s on your mind" className={`${input} resize-y`} />
      </label>
      <div className="flex items-center gap-4">
        <button type="submit" className="rounded-lg bg-brand px-[22px] py-2.5 font-medium text-white transition-colors hover:bg-brand-dark">
          Send a message
        </button>
        {sent && <p className="text-sm font-medium text-muted">Your mail app should open with the message ready to send.</p>}
      </div>
    </form>
  );
}
