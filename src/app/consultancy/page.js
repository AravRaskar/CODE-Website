"use client";

import React from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS_DATA } from "@/data/projects";

const SERVICES = [
  { title: "Full-Stack Web Development", stack: "React · Next.js · Node.js · PostgreSQL", desc: "Frontend + Backend, REST APIs, database design, and production deployment." },
  { title: "AI / ML Model Development", stack: "Python · FastAPI · PyTorch · HuggingFace", desc: "Custom models, data pipelines, integration, and inference optimization." },
  { title: "Android Development", stack: "Kotlin · Jetpack Compose · Firebase", desc: "Native high-performance mobile applications integrated with modern backends." },
  { title: "UI/UX Prototyping", stack: "Figma · Design Systems · Usability Testing", desc: "Research-first wireframes, high-fidelity prototypes, and handoff-ready specs." },
  { title: "Technical Consulting", stack: "Architecture Review · Stack Selection", desc: "Codebase audits, technology review, and architecture recommendations." },
  { title: "Data Analysis & Visualization", stack: "Python · Pandas · D3.js · Plotly", desc: "Pipeline automation and dashboards for complex large-scale datasets." },
];

const PROCESS = [
  { num: "01", title: "Brief", desc: "You describe your project need." },
  { num: "02", title: "Discovery", desc: "We review, ask questions, assess feasibility." },
  { num: "03", title: "Proposal", desc: "We send a scope, timeline, and deliverables doc." },
  { num: "04", title: "Development", desc: "We build, with regular updates and check-ins." },
  { num: "05", title: "Review", desc: "You review progress, we iterate on feedback." },
  { num: "06", title: "Delivery", desc: "Final handoff with full documentation." },
];

const consultancyProjects = PROJECTS_DATA.filter((p) => p.typeLabel === "Consultancy");

export default function Consultancy() {
  return (
    <div className="w-full">

      {/* PAGE HERO — business-facing, left-aligned */}
      <section className="relative w-full py-28 overflow-hidden" style={{ background: "var(--bg-surface)" }}>
        <div aria-hidden className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,140,66,0.08) 0%, transparent 70%)" }} />
        <div className="section-container relative z-10">
          <nav className="breadcrumb mb-8">
            <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
            <span style={{ color: "var(--border-emphasis)" }}>/</span>
            <span>Consultancy</span>
          </nav>
          <div className="section-label">Consultancy</div>
          <h1 className="font-sans font-extrabold leading-tight tracking-tight mb-6 max-w-2xl"
            style={{ fontSize: "var(--text-display-xl)", color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
            Hire a team that ships.
          </h1>
          <p className="font-sans font-normal leading-relaxed mb-10 max-w-xl"
            style={{ fontSize: "var(--text-body-lg)", color: "var(--text-secondary)" }}>
            C.O.D.E takes on external consultancy projects from companies, startups, and research organizations. We deliver production-quality work across AI, web, Android, and design.
          </p>
          <Link href="/contact">
            <button className="font-sans font-semibold transition-all hover:opacity-90"
              style={{
                fontSize: "14px", padding: "13px 28px",
                background: "var(--accent-mint)", color: "var(--text-invert)",
                borderRadius: "var(--radius-lg)", border: "none",
              }}>
              Start an Enquiry →
            </button>
          </Link>
          <div className="flex flex-wrap gap-6 mt-10 font-mono text-[10px] tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
            <span>[ 5+ Client Engagements ]</span>
            <span>·</span>
            <span>[ MMCOE Supervised ]</span>
            <span>·</span>
            <span>[ Multi-Domain Team ]</span>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="section-container py-24">
        <SectionHeader label="Services" title="What we offer." subtitle="Full-spectrum development across four technical domains." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="group p-7 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:border-opacity-60"
              style={{ background: "var(--bg-surface)", borderColor: "var(--border-default)" }}>
              <h3 className="font-heading font-semibold mb-2 leading-snug"
                style={{ fontSize: "var(--text-body-lg)", color: "var(--text-primary)" }}>
                {s.title}
              </h3>
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                {s.desc}
              </p>
              <p className="font-mono text-xs transition-colors" style={{ color: "var(--text-muted)" }}>
                {s.stack}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="w-full py-24" style={{ background: "var(--bg-surface)" }}>
        <div className="section-container">
          <SectionHeader label="How It Works" title="Our process." subtitle="Six clear steps from your first message to final delivery." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map((step, i) => (
              <div key={step.num} className="p-6 rounded-xl border relative overflow-hidden"
                style={{ background: "var(--bg-elevated)", borderColor: "var(--border-default)" }}>
                <div className="absolute top-0 left-0 h-[2px] transition-all duration-500"
                  style={{ width: "100%", background: `linear-gradient(to right, var(--accent-mint) ${(i / PROCESS.length) * 100}%, transparent 100%)`, opacity: 0.3 }} />
                <p className="font-mono text-[11px] tracking-widest uppercase mb-2" style={{ color: "var(--accent-mint-text)" }}>{step.num}</p>
                <h3 className="font-heading font-semibold mb-1" style={{ fontSize: "var(--text-body-md)", color: "var(--text-primary)" }}>{step.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST CLIENTS */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <p className="font-mono text-[11px] tracking-widest uppercase mb-6" style={{ color: "var(--text-muted)" }}>Past Clients</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Newton's Software", "Ellicium", "ARAI", "Pune GPU Community"].map((client) => (
              <span key={client} className="font-heading font-medium px-6 py-3 rounded-xl border"
                style={{ background: "var(--bg-surface)", borderColor: "var(--border-default)", color: "var(--text-secondary)", fontSize: "var(--text-body-md)" }}>
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CONSULTANCY PROJECTS */}
      {consultancyProjects.length > 0 && (
        <section className="w-full py-24 border-t" style={{ background: "var(--bg-surface)", borderColor: "var(--border-subtle)" }}>
          <div className="section-container">
            <SectionHeader label="Featured Work" title="Consultancy projects." subtitle="Real client engagements, production deliverables." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {consultancyProjects.map((p) => (
                <ProjectCard key={p.slug} {...p} href={`/projects/${p.slug}`} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-container py-24">
        <h2 className="font-sans font-bold mb-4 leading-tight"
          style={{ fontSize: "var(--text-display-md)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
          Ready to work with us?
        </h2>
        <p className="font-sans font-normal mb-10 max-w-lg"
          style={{ fontSize: "var(--text-body-lg)", color: "var(--text-secondary)" }}>
          Start with a message. We&apos;ll review your brief and respond within 2–3 business days.
        </p>
        <Link href="/contact">
          <button className="font-sans font-semibold transition-all hover:opacity-90"
            style={{
              fontSize: "14px", padding: "13px 28px",
              background: "var(--accent-mint)", color: "var(--text-invert)",
              borderRadius: "var(--radius-lg)", border: "none",
            }}>
            Start an Enquiry →
          </button>
        </Link>
      </section>

    </div>
  );
}
