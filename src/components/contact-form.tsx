"use client";

import { useState, type FormEvent } from "react";

type Fields = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  topic: "General",
  message: "",
};

const TOPICS = [
  "General",
  "Partnerships",
  "Press / Media",
  "Technical / Integration",
];

const inputClass =
  "w-full rounded-lg border border-dark/15 bg-white px-3.5 py-2.5 text-p16 text-dark placeholder:text-dark/35 transition-colors focus:border-accent-1 focus:outline-none";

const labelClass = "flex flex-col gap-2 text-p14 font-medium text-dark";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update =
    (key: keyof Fields) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 px-8 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-1/10 text-accent-1">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h3 className="text-h3-24 text-dark">Message received</h3>
        <p className="text-p16 max-w-[420px] text-dark/70">
          Thanks for reaching out. We&rsquo;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 p-8 md:p-10"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <label className={labelClass}>
          Your Name
          <input
            type="text"
            placeholder="Your name"
            value={fields.name}
            onChange={update("name")}
            className={inputClass}
          />
        </label>
        <label className={labelClass}>
          Your Email <span className="text-accent-2">*</span>
          <input
            type="email"
            required
            placeholder="email@company.com"
            value={fields.email}
            onChange={update("email")}
            className={inputClass}
          />
        </label>
      </div>

      <label className={labelClass}>
        Topic
        <select
          value={fields.topic}
          onChange={update("topic")}
          className={inputClass}
        >
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className={labelClass}>
        Message <span className="text-accent-2">*</span>
        <textarea
          required
          rows={6}
          placeholder="What can we help you with?"
          value={fields.message}
          onChange={update("message")}
          className={`${inputClass} resize-y`}
        />
      </label>

      <p className="text-p14 text-dark/55">
        Aura FHE will use the information you provide to respond to your
        inquiry. You can unsubscribe at any time.
      </p>

      <button
        type="submit"
        className="text-button self-start rounded-[10px] bg-dark px-5 py-4 text-dark-text transition-colors hover:bg-dark/85"
      >
        Send message
      </button>
    </form>
  );
}
