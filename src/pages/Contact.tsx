import { useEffect, useId, useState } from "react";
import type { FormEvent } from "react";
import { useSearchParams } from "react-router";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { company } from "../content/site";

const interests = [
  { value: "website", label: "A website" },
  { value: "mobile-app", label: "A mobile app" },
  { value: "custom-software", label: "Custom software" },
  { value: "edusmart360", label: "EduSmart360 for my school" },
  { value: "cloud", label: "Cloud, hosting or security" },
  { value: "other", label: "Something else" },
] as const;

const budgets = ["Under ₦500,000", "₦500,000 to ₦2,000,000", "₦2,000,000 to ₦10,000,000", "Above ₦10,000,000", "Not sure yet"] as const;

interface FormState {
  name: string;
  email: string;
  organisation: string;
  interest: string;
  budget: string;
  message: string;
}

const empty: FormState = { name: "", email: "", organisation: "", interest: "", budget: "", message: "" };

function labelFor(value: string): string {
  return interests.find((i) => i.value === value)?.label ?? "A project";
}

function compose(f: FormState): { subject: string; body: string } {
  const subject = `${labelFor(f.interest)}: ${f.organisation || f.name}`;
  const lines = [
    f.message,
    "",
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    f.organisation ? `Organisation: ${f.organisation}` : null,
    `Interested in: ${labelFor(f.interest)}`,
    f.budget ? `Budget: ${f.budget}` : null,
  ].filter((l): l is string => l !== null);
  return { subject, body: lines.join("\n") };
}

const field = "mt-2 w-full rounded-control border border-line bg-bg px-4 py-3 text-base transition-colors focus:border-primary focus:outline-none";

export function Contact() {
  const [params] = useSearchParams();
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);
  const id = useId();

  // The prerendered page has no query string, so read it after hydration to keep server and client markup identical.
  useEffect(() => {
    const wanted = params.get("interest");
    if (wanted && interests.some((i) => i.value === wanted)) {
      setForm((f) => ({ ...f, interest: wanted }));
    }
  }, [params]);

  const update = (key: keyof FormState) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { subject, body } = compose(form);
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const whatsappHref = () => {
    const { body } = compose(form);
    const text = form.message ? `Hello E-Prime,\n\n${body}` : "Hello E-Prime, I would like to talk about a project.";
    return `${company.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const direct = [
    { icon: MessageCircle, label: "WhatsApp", value: company.phoneDisplay, href: company.whatsapp, external: true },
    { icon: Phone, label: "Phone", value: company.phoneDisplay, href: `tel:${company.phoneE164}`, external: false },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}`, external: false },
  ];

  return (
    <section className="ep-ink relative overflow-hidden" aria-labelledby="contact-title">
      <div aria-hidden="true" className="ep-grid-bg ep-grid-fade absolute inset-0" />
      <div className="ep-container relative grid gap-14 pb-24 pt-16 md:pb-32 md:pt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="ep-rise ep-eyebrow">Contact</p>
          <h1 id="contact-title" className="ep-hero ep-rise mt-6 text-[clamp(44px,6.5vw,88px)]" style={{ animationDelay: "80ms" }}>
            Tell us what it has to do<span className="text-accent">.</span>
          </h1>
          <p className="ep-rise ep-lede mt-6" style={{ animationDelay: "160ms" }}>
            A paragraph is enough to start. We come back with questions, a rough timeline and a price range in naira. No calls you did not
            ask for.
          </p>

          <ul className="ep-rise mt-12 divide-y divide-line border-y border-line" style={{ animationDelay: "240ms" }}>
            {direct.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 py-5 transition-colors hover:text-primary"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-control border border-line text-muted transition-colors group-hover:border-primary group-hover:text-primary">
                    <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block font-medium">{value}</span>
                  </span>
                  <ArrowRight size={16} className="ml-auto opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <p className="ep-rise mt-8 text-sm text-muted" style={{ animationDelay: "300ms" }}>
            {company.legalName}
            <br />
            {company.city}, {company.region}, {company.country} · RC {company.rc}
          </p>
        </div>

        <Reveal>
          <form onSubmit={onSubmit} className="rounded-card border border-line bg-surface p-6 md:p-10" aria-describedby={`${id}-note`}>
            <p className="font-display text-2xl font-bold tracking-tight">Start a project</p>
            <p id={`${id}-note`} className="mt-2 text-sm text-muted">
              Sending opens your email app with everything filled in. Prefer WhatsApp? Use the button below the form.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Your name
                <input required autoComplete="name" value={form.name} onChange={update("name")} className={field} />
              </label>
              <label className="block text-sm font-medium">
                Email
                <input required type="email" autoComplete="email" value={form.email} onChange={update("email")} className={field} />
              </label>
              <label className="block text-sm font-medium sm:col-span-2">
                School, company or organisation <span className="font-normal text-muted">(optional)</span>
                <input autoComplete="organization" value={form.organisation} onChange={update("organisation")} className={field} />
              </label>
            </div>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium">What do you need?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {interests.map((i) => (
                  <label key={i.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value={i.value}
                      checked={form.interest === i.value}
                      onChange={update("interest")}
                      className="peer sr-only"
                      required
                    />
                    <span className="inline-block rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-on-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface">
                      {i.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="mt-6 block text-sm font-medium">
              Budget <span className="font-normal text-muted">(optional)</span>
              <select value={form.budget} onChange={update("budget")} className={field}>
                <option value="">Choose a range</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-6 block text-sm font-medium">
              What should it do, and who is it for?
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={update("message")}
                className={`${field} resize-y`}
                placeholder={
                  form.interest === "edusmart360"
                    ? "How many students, which term you would like to start, and what you use today."
                    : "The problem, the people who will use it, and any deadline."
                }
              />
            </label>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button type="submit" className="ep-btn ep-btn-solid">
                Send by email
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </button>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="ep-btn ep-btn-ghost">
                <MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />
                Send on WhatsApp
              </a>
            </div>

            <p role="status" className="mt-5 min-h-5 text-sm text-primary">
              {sent ? `Your email app should have opened. If it did not, write to ${company.email} directly.` : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
