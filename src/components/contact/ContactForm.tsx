"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Option A: Next.js API route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      <div>
        <label htmlFor="name" className="block text-sm text-muted mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3
                     text-white focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-muted mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3
                     text-white focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-muted mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3
                     text-white focus:outline-none focus:border-primary transition-colors
                     resize-none"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "sending"}
        className="px-8 py-3 bg-primary text-white rounded-lg font-medium
                   hover:bg-primary/90 transition-colors disabled:opacity-50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
      </motion.button>

      {status === "error" && (
        <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}