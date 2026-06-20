"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending (replace with real API later)
    setTimeout(() => {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  }

  const inputClass = (field: string) =>
    `w-full bg-surface-light border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all duration-300 placeholder:text-muted/50 ${
      focused === field
        ? "border-primary shadow-sm shadow-primary/10"
        : "border-border hover:border-muted/30"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs text-muted mb-2 font-mono">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass("name")}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs text-muted mb-2 font-mono">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className={inputClass("email")}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs text-muted mb-2 font-mono">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What's this about?"
          className={inputClass("subject")}
          onFocus={() => setFocused("subject")}
          onBlur={() => setFocused(null)}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs text-muted mb-2 font-mono">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell me about your project or idea..."
          className={`${inputClass("message")} resize-none`}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
          status === "sent"
            ? "bg-green-500 text-white"
            : status === "error"
            ? "bg-red-500 text-white"
            : "bg-primary text-background hover:opacity-90"
        } disabled:opacity-70`}
        whileHover={{ scale: status === "idle" ? 1.01 : 1 }}
        whileTap={{ scale: status === "idle" ? 0.99 : 1 }}
      >
        {status === "idle" && (
          <>
            Send Message <FiSend size={14} />
          </>
        )}
        {status === "sending" && (
          <>
            <motion.div
              className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            Sending...
          </>
        )}
        {status === "sent" && (
          <>
            <FiCheck size={16} /> Message Sent!
          </>
        )}
        {status === "error" && (
          <>
            <FiAlertCircle size={16} /> Failed. Try again.
          </>
        )}
      </motion.button>
    </form>
  );
}