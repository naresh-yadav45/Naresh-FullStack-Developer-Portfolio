import { useState, type FormEvent, type ReactNode } from "react";
import { profile, socials } from "@/data/content";
import { SocialIcon } from "@/components/portfolio/icons";

type Fields = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", topic: "", message: "" };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.topic) errors.topic = "Choose what this is about.";
  if (values.message.trim().length < 20) {
    errors.message = "Write at least 20 characters so I know what you need.";
  }
  return errors;
}

export function SocialRow() {
  return (
    <ul className="flex flex-wrap gap-2">
      {socials.map((item) => (
        <li key={item.label}>
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-3 text-sm text-fg"
            >
              <SocialIcon name={item.label} className="size-4" />
              {item.label}
            </a>
          ) : (
            <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-dashed border-line px-3 text-sm text-muted">
              <SocialIcon name={item.label} className="size-4" />
              YouTube · link coming soon
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("Fix the highlighted fields, then try again.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name.trim()}`);
    const body = encodeURIComponent(
      `${values.message.trim()}\n\nTopic: ${values.topic}\nFrom: ${values.name.trim()}\nEmail: ${values.email.trim()}`,
    );
    const href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    const link = document.createElement("a");
    link.href = href;
    link.rel = "noreferrer";
    link.click();
    setStatus(
      "Your email app should open with this message addressed to me. Nothing is stored on this site.",
    );
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">Contact</p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-fg md:text-5xl">
            Have an Idea? Let's Build Something Amazing.
          </h2>
          <p className="mt-6 font-display text-2xl font-semibold text-fg">{profile.name}</p>
          <p className="text-base text-muted">{profile.title}</p>
          <dl className="mt-6 space-y-3 text-sm">
            <div>
              <dt className="text-muted">Email</dt>
              <dd>
                <a className="text-fg underline decoration-primary underline-offset-4" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Phone</dt>
              <dd>
                <a className="text-fg underline decoration-primary underline-offset-4" href={profile.phoneHref}>
                  {profile.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">LinkedIn</dt>
              <dd>
                <a
                  className="break-all text-fg underline decoration-primary underline-offset-4"
                  href="https://linkedin.com/in/naresh-yadav045"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/naresh-yadav045
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Location</dt>
              <dd className="text-fg">{profile.location}</dd>
            </div>
          </dl>
          <div className="mt-8">
            <SocialRow />
          </div>
        </div>
        <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-surface p-5 sm:p-7">
          <p className="text-sm leading-relaxed text-muted">
            The form checks your message, then opens your email app. There is no mail server connected, so
            the message is not sent or stored by this website. If nothing opens, email {profile.email}{" "}
            directly.
          </p>
          <div className="mt-6 grid gap-4">
            <Field label="Name" error={errors.name} htmlFor="contact-name">
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(event) => update("name", event.target.value)}
                aria-invalid={Boolean(errors.name)}
                className="min-h-11 w-full rounded-xl border border-line bg-bg px-3 text-fg"
              />
            </Field>
            <Field label="Email" error={errors.email} htmlFor="contact-email">
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => update("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                className="min-h-11 w-full rounded-xl border border-line bg-bg px-3 text-fg"
              />
            </Field>
            <Field label="Topic" error={errors.topic} htmlFor="contact-topic">
              <select
                id="contact-topic"
                name="topic"
                value={values.topic}
                onChange={(event) => update("topic", event.target.value)}
                aria-invalid={Boolean(errors.topic)}
                className="min-h-11 w-full rounded-xl border border-line bg-bg px-3 text-fg"
              >
                <option value="">Select one</option>
                <option>A new project</option>
                <option>Freelance work</option>
                <option>An internship or role</option>
                <option>Something else</option>
              </select>
            </Field>
            <Field label="Message" error={errors.message} htmlFor="contact-message">
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(event) => update("message", event.target.value)}
                aria-invalid={Boolean(errors.message)}
                className="w-full rounded-xl border border-line bg-bg px-3 py-3 text-fg"
              />
            </Field>
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-bg"
          >
            Open in email
          </button>
          <p className="mt-4 min-h-6 text-sm text-fg" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: ReactNode;
}) {
  const errorId = `${htmlFor}-error`;
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-fg">
        {label}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-glow">
          {error}
        </p>
      ) : null}
    </div>
  );
}
