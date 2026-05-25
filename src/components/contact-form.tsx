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
      <div className="m-form-success">
        <span className="ok">Message received</span>
        <h3>Thanks for reaching out.</h3>
        <p>We&rsquo;ll get back to you within two business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="m-form">
      <div className="m-form-row">
        <div className="m-field">
          <label>Your name</label>
          <input
            type="text"
            placeholder="Your name"
            value={fields.name}
            onChange={update("name")}
          />
        </div>
        <div className="m-field">
          <label>
            Your email <span className="req">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="email@company.com"
            value={fields.email}
            onChange={update("email")}
          />
        </div>
      </div>

      <div className="m-field">
        <label>Topic</label>
        <select value={fields.topic} onChange={update("topic")}>
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="m-field">
        <label>
          Message <span className="req">*</span>
        </label>
        <textarea
          required
          rows={6}
          placeholder="What can we help you with?"
          value={fields.message}
          onChange={update("message")}
        />
      </div>

      <p className="m-form-disclaimer">
        Aura FHE will use the information you provide to respond to your
        inquiry. You can unsubscribe at any time.
      </p>

      <div>
        <button type="submit" className="m-btn-primary">
          Send message <span className="arr">→</span>
        </button>
      </div>
    </form>
  );
}
