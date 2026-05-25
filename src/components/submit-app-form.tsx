"use client";

import { useState, type FormEvent } from "react";

type Fields = {
  name: string;
  email: string;
  projectName: string;
  website: string;
  xProfile: string;
  github: string;
  description: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  projectName: "",
  website: "",
  xProfile: "",
  github: "",
  description: "",
};

export function SubmitAppForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));

  if (submitted) {
    return (
      <div className="m-form-success">
        <span className="ok">Submission received</span>
        <h3>Thanks. We&rsquo;ll be in touch.</h3>
        <p>
          Expect integration support, technical resources, and ecosystem
          opportunities within two business days.
        </p>
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
            placeholder="0xFHExBuilder"
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

        <div className="m-field">
          <label>Project name</label>
          <input
            type="text"
            placeholder="0xMyFHEapp"
            value={fields.projectName}
            onChange={update("projectName")}
          />
        </div>
        <div className="m-field">
          <label>Project website / GitHub</label>
          <input
            type="url"
            placeholder="github.com/0xMyFHEapp"
            value={fields.website}
            onChange={update("website")}
          />
        </div>

        <div className="m-field">
          <label>X profile</label>
          <input
            type="url"
            placeholder="https://x.com/0xFHExBuilder"
            value={fields.xProfile}
            onChange={update("xProfile")}
          />
        </div>
        <div className="m-field">
          <label>GitHub profile</label>
          <input
            type="url"
            placeholder="https://github.com/0xFHExBuilder"
            value={fields.github}
            onChange={update("github")}
          />
        </div>
      </div>

      <div className="m-field">
        <label>Tell us about your project</label>
        <textarea
          rows={5}
          placeholder="What are you building, and how does Aura FHE fit in?"
          value={fields.description}
          onChange={update("description")}
        />
      </div>

      <p className="m-form-disclaimer">
        Aura FHE will use the information you provide to contact you about your
        project and the ecosystem. You can unsubscribe at any time.
      </p>

      <div>
        <button type="submit" className="m-btn-primary">
          Submit <span className="arr">→</span>
        </button>
      </div>
    </form>
  );
}
