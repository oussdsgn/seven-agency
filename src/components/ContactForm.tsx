"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/data";

// FormSubmit forwards each message to this inbox. The first submission sends a
// one-time activation email to the address; messages arrive after it's confirmed.
const ENDPOINT = `https://formsubmit.co/ajax/${contact.email}`;

const input =
  "mt-2 w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm font-medium text-ink outline-none transition placeholder:text-[#8a8886] focus:border-brand-ink focus:ring-2 focus:ring-brand/20";
const label = "text-xs font-semibold uppercase tracking-[0.15em] text-ink";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    if (f.get("_honey")) return; // bot filled the hidden field
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: f.get("name"),
          email: f.get("email"),
          phone: f.get("phone"),
          company: f.get("company") || "-",
          message: f.get("message") || "-",
          _subject: `New project inquiry from ${f.get("name")}`,
          _replyto: f.get("email"),
          _template: "table",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false || data.success === "false") throw new Error(data.message || res.statusText);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent")
    return (
      <div role="status" className="flex flex-col items-start justify-center rounded-lg bg-white p-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffe8de] text-brand-ink">
          <svg viewBox="0 0 12 12" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2.5 6.2 5 8.5l4.5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.03em]">Thanks, message sent!</h3>
        <p className="mt-2 max-w-[340px] text-[15px] font-medium leading-[1.4] text-muted">
          We’ll get back to you within one business day. Need something sooner? Call us on {contact.phone}.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-5 text-sm font-semibold text-brand-ink hover:underline">
          Send another message
        </button>
      </div>
    );

  return (
    <form onSubmit={submit} className="flex flex-col gap-4 rounded-lg bg-white p-5">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className={label}>
        Name*
        <input name="name" required autoComplete="name" placeholder="Seven" className={input} />
      </label>
      <label className={label}>
        Email*
        <input name="email" type="email" required autoComplete="email" placeholder="seven@7agency.com" className={input} />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          Phone*
          <input name="phone" type="tel" required autoComplete="tel" placeholder="+213 (0) 20 254 885" className={input} />
        </label>
        <label className={label}>
          Company
          <input name="company" autoComplete="organization" placeholder="Seven Agency" className={input} />
        </label>
      </div>
      <label className={label}>
        Message
        <textarea name="message" rows={3} placeholder="Write what’s on your mind" className={`${input} resize-y`} />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-brand-ink px-[22px] py-2.5 font-medium text-white transition-colors hover:bg-brand-dark disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send a message"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm font-medium text-[#b42318]">
            Something went wrong. Please email us at{" "}
            <a href={`mailto:${contact.email}`} className="underline">
              {contact.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
