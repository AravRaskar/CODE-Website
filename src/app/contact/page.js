"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

const SOCIAL_LINKS = [
  { label: "LinkedIn", handle: "/company/team-code", href: "https://www.linkedin.com/company/team-code" },
  { label: "Instagram", handle: "@code_mmcoe", href: "https://www.instagram.com/code_mmcoe" },
  { label: "GitHub", handle: "Club-of-Developers-and-Engineers", href: "https://github.com/Club-of-Developers-and-Engineers" },
  { label: "HuggingFace", handle: "code-mmcoe", href: "https://huggingface.co/code-mmcoe" },
];

const SUBJECTS = [
  "General Inquiry",
  "Membership / Joining",
  "Consultancy Project",
  "Partnership / Collaboration",
  "Event Inquiry",
  "Media / Press",
  "Other",
];

const FAQ = [
  { q: "How do I become a member of C.O.D.E?", a: "C.O.D.E membership is selective — we open applications periodically, typically at the start of an academic year. Applications are announced on our Instagram (@code_mmcoe) and LinkedIn. Selection is based on technical aptitude, domain interest, and attitude toward building." },
  { q: "Do you take consultancy projects from startups?", a: "Yes. We work with organizations of any size — from startups to established companies like ARAI. What matters is the project's substance and fit with our domains. Start with the enquiry form on our Consultancy page." },
  { q: "What domains does C.O.D.E work in?", a: "Four domains: AI/ML, Web Development, Android, and UI/UX Design. Larger projects often involve members from multiple domains working together." },
  { q: "Can non-MMCOE students join C.O.D.E?", a: "C.O.D.E membership is limited to MMCOE Computer Engineering students. However, for consultancy and community projects, we sometimes collaborate with external teams." },
  { q: "How are projects assigned to members?", a: "Projects are assigned based on domain, skill level, and availability. Leadership reviews incoming projects and assembles teams accordingly. Members can also propose internal projects." },
];

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(null);

  const onSubmit = (data) => {
    setSubmitted(true);
    setTimeout(() => { reset(); setSubmitted(false); }, 5000);
  };

  return (
    <div className="w-full">

      {/* PAGE HERO */}
      <div className="section-container page-hero">
        <nav className="breadcrumb">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span style={{ color: "var(--border-emphasis)" }}>/</span>
          <span>Contact</span>
        </nav>
        <h1 className="font-display font-extrabold leading-tight tracking-tight mb-4"
          style={{ fontSize: "var(--text-display-lg)", color: "var(--text-primary)" }}>
          Let&apos;s talk.
        </h1>
        <p className="font-body leading-relaxed max-w-xl"
          style={{ fontSize: "var(--text-body-lg)", color: "var(--text-secondary)" }}>
          Whether you&apos;re a prospective member, a company looking to work with us, or just curious — reach out.
        </p>
      </div>

      {/* DIVIDER */}
      <div className="section-container"><div className="h-px" style={{ background: "var(--border-subtle)" }} /></div>

      {/* TWO COLUMN */}
      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT: contact info */}
          <div>
            <div className="mb-10">
              <p className="font-mono text-[11px] tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>Reach Us Directly</p>
              <a href="mailto:team_code@mmcoe.edu.in"
                className="font-heading font-semibold transition-colors hover:text-accent-mint"
                style={{ fontSize: "var(--text-body-lg)", color: "var(--text-primary)" }}>
                team_code@mmcoe.edu.in
              </a>
              <p className="font-body text-sm mt-2 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Computer Engineering Department<br />
                MMCOE, Karvenagar<br />
                Pune – 411052, Maharashtra
              </p>
            </div>

            <div>
              <p className="font-mono text-[11px] tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)" }}>Follow Our Work</p>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-3 transition-colors hover:text-accent-mint"
                    style={{ color: "var(--text-secondary)" }}>
                    <span className="font-heading font-medium text-sm w-24" style={{ color: "var(--text-primary)" }}>{link.label}</span>
                    <span className="font-mono text-xs">{link.handle}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="rounded-xl border p-8" style={{ background: "var(--bg-surface)", borderColor: "var(--border-default)" }}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <FormField label="Your Name" error={errors.name?.message}>
                <input {...register("name", { required: "Name is required" })}
                  placeholder="Jane Doe"
                  className="form-input" />
              </FormField>

              <FormField label="Email" error={errors.email?.message}>
                <input type="email" {...register("email", { required: "Email is required" })}
                  placeholder="jane@example.com"
                  className="form-input" />
              </FormField>

              <FormField label="Subject" error={errors.subject?.message}>
                <select {...register("subject", { required: "Please choose a subject" }) }
                  className="form-input" style={{ color: "var(--text-primary)" }}>
                  <option value="">Select a subject...</option>
                  {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </FormField>

              <FormField label="Message" error={errors.message?.message}>
                <textarea {...register("message", { required: "Message is required" })}
                  placeholder="How can we help?"
                  rows={5}
                  className="form-input resize-none" />
              </FormField>

              <Button type="submit" variant="primary" className="w-full mt-2">Send Message</Button>

              {submitted && (
                <div className="px-4 py-3 rounded-lg text-sm font-body flex items-center gap-2"
                  style={{ background: "var(--accent-mint-pale)", border: "1px solid var(--border-mint)", color: "var(--accent-mint-text)" }}>
                  ✓ Message sent successfully. We&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-16 pb-24 border-t" style={{ background: "var(--bg-surface)", borderColor: "var(--border-subtle)" }}>
        <div className="section-container">
          <SectionHeader label="FAQ" title="Common questions." />
          <div className="max-w-2xl flex flex-col divide-y" style={{ borderColor: "var(--border-subtle)" }}>
            {FAQ.map((item, i) => (
              <div key={i} className="py-5">
                <button
                  className="w-full text-left flex items-start justify-between gap-4 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-heading font-medium leading-snug" style={{ fontSize: "var(--text-body-md)", color: "var(--text-primary)" }}>
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 font-mono text-lg transition-transform duration-200 mt-0.5"
                    style={{
                      color: "var(--accent-mint)",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p className="font-body text-sm leading-relaxed mt-3"
                    style={{ color: "var(--text-secondary)" }}>
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, children, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[11px] tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
        {label}
      </label>
      {children}
      {error && <p className="text-xs font-body" style={{ color: "var(--accent-red)" }}>{error}</p>}
    </div>
  );
}
