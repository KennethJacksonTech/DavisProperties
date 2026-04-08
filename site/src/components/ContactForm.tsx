"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_hp")) return;
    data.delete("_hp");
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mjgpjnyr", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot */}
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        className="absolute opacity-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-body text-[14px] font-medium text-foreground-primary">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="bg-white border border-border-subtle font-body text-[15px] text-foreground-primary px-4 py-3 outline-none focus:border-accent-primary transition-colors"
            style={{ borderRadius: 8 }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-body text-[14px] font-medium text-foreground-primary">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
            className="bg-white border border-border-subtle font-body text-[15px] text-foreground-primary px-4 py-3 outline-none focus:border-accent-primary transition-colors"
            style={{ borderRadius: 8 }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="font-body text-[14px] font-medium text-foreground-primary">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="bg-white border border-border-subtle font-body text-[15px] text-foreground-primary px-4 py-3 outline-none focus:border-accent-primary transition-colors"
          style={{ borderRadius: 8 }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-body text-[14px] font-medium text-foreground-primary">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="bg-white border border-border-subtle font-body text-[15px] text-foreground-primary px-4 py-3 outline-none focus:border-accent-primary transition-colors resize-vertical"
          style={{ borderRadius: 8 }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-accent-primary text-white font-body text-[13px] font-semibold uppercase tracking-[1.5px] px-8 py-3 transition-colors hover:bg-accent-hover disabled:opacity-60"
        style={{ borderRadius: 8 }}
      >
        {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
      </button>

      {status === "success" && (
        <p className="font-body text-[14px] text-green-700">
          Thank you! We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="font-body text-[14px] text-red-600">
          Something went wrong. Please try again or call us at (806) 681-1251.
        </p>
      )}
    </form>
  );
}
