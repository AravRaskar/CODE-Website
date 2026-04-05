"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const TIMELINE = [
  { year: "2021", text: "Club founded in June. First 15 members selected across 4 domains." },
  { year: "2022", text: "First hackathon participation. Domain structure solidified." },
  { year: "2023", text: "First external consultancy projects — Newton's Software & Ellicium." },
  { year: "2024", text: "ARAI project. Pune GPU Community collaboration. AI Cohort launched." },
  { year: "2025", text: "UI/UX & Prompt Engineering workshops. Expanded member base." },
];

const OBJECTIVES = [
  { num: "01", title: "Industry Alignment", desc: "Align members' skills with latest industrial demands by working across diverse domains. Python, AI, React, Kotlin — we stay current." },
  { num: "02", title: "Practical Execution", desc: "Foster teamwork and practical learning through real projects and national-level hackathons and competitions." },
  { num: "03", title: "Targeted Discovery", desc: "Organize diverse activities catering to specific student interests, allowing members to specialize in their niche." },
  { num: "04", title: "Culture of Craft", desc: "Enhance technical knowledge while ensuring an enjoyable learning environment driven by curiosity and maker culture." },
  { num: "05", title: "Real Impact", desc: "Provide opportunities for students to contribute to industry through impactful, production-quality consultancy deliverables." },
];

const VALUES = [
  { name: "Craft", desc: "We make things that are made well." },
  { name: "Curiosity", desc: "We learn by doing, then doing better." },
  { name: "Collaboration", desc: "The team is the product." },
  { name: "Impact", desc: "We build for results, not GPA." },
];

export default function About() {
  return (
    <div className="w-full">

      {/* PAGE HERO */}
      <div className="section-container page-hero">
        <nav className="breadcrumb">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span style={{ color: "var(--border-emphasis)" }}>/</span>
          <span>About</span>
        </nav>
        <div className="section-label">About C.O.D.E</div>
        <h1 className="font-display font-extrabold leading-tight tracking-tight mb-4"
          style={{ fontSize: "var(--text-display-lg)", color: "var(--text-primary)" }}>
          Who we are.
        </h1>
        <p className="font-body leading-relaxed max-w-2xl"
          style={{ fontSize: "var(--text-body-lg)", color: "var(--text-secondary)" }}>
          The story behind MMCOE&apos;s most project-focused technical club.
        </p>
      </div>

      {/* DIVIDER */}
      <div className="section-container"><div className="h-px" style={{ background: "var(--border-subtle)" }} /></div>

      {/* ORIGIN STORY + TIMELINE */}
      <section className="section-container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader label="The Beginning" title={<>From a classroom idea<br />to real client work.</>} />
            <div className="flex flex-col gap-6 font-body leading-relaxed"
              style={{ fontSize: "var(--text-body-md)", color: "var(--text-secondary)" }}>
              <p>C.O.D.E was founded in June 2021 by students in the Computer Engineering Department at MMCOE, Pune. The founding idea was direct: the gap between what engineers learn in lectures and what companies actually need was too large. We were going to close it — not by adding more theory, but by building things.</p>
              <p>The club started with a small group of selected members working across four domains: AI and Machine Learning, Web Development, Android, and UI/UX Design. From the start, the focus was on work that mattered — not academic projects filed away after assessment, but functional software delivered to real users.</p>
              <p>By 2023, C.O.D.E had taken on its first external consultancy projects, working with companies like Newton&apos;s Software, Ellicium, and ARAI. Today, the club continues to be selective, collaborative, and committed to shipping work that reflects genuine engineering quality.</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-10 pt-2">
            <div className="absolute left-[9px] top-3 bottom-3 w-px"
              style={{ background: "linear-gradient(to bottom, var(--accent-mint), var(--border-subtle))" }} />
            {TIMELINE.map((item, i) => (
              <motion.div key={item.year}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative mb-8 last:mb-0">
                <div className="absolute -left-[33px] top-[6px] w-[10px] h-[10px] rounded-full"
                  style={{ background: "var(--accent-mint)", boxShadow: "var(--shadow-mint-sm)" }} />
                <p className="font-mono text-[11px] tracking-[0.12em] mb-1" style={{ color: "var(--accent-mint-text)" }}>{item.year}</p>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AIMS & OBJECTIVES */}
      <section className="w-full py-24" style={{ background: "var(--bg-surface)" }}>
        <div className="section-container">
          <SectionHeader label="Our Purpose" title="What C.O.D.E is here to do." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 border-t" style={{ borderColor: "var(--border-subtle)" }}>
            {OBJECTIVES.map((obj) => (
              <div key={obj.num} className="grid grid-cols-[44px_1fr] gap-4 py-6 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <span className="font-mono text-[11px] tracking-[0.1em] mt-1" style={{ color: "var(--accent-mint-text)" }}>{obj.num}</span>
                <div>
                  <p className="font-heading font-semibold mb-1.5" style={{ fontSize: "var(--text-body-md)", color: "var(--text-primary)" }}>{obj.title}</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="section-container py-24">
        <SectionHeader label="Why Different" title="What sets us apart." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Selected Membership", body: "Not open to everyone. Members are chosen based on demonstrated capability and attitude." },
            { title: "Real Consultancy", body: "We work on actual client projects with real deliverables, timelines, and stakeholders." },
            { title: "Multi-Domain", body: "Four technical domains under one club. Cross-domain projects produce complete solutions." },
          ].map((item) => (
            <div key={item.title} className="p-8 rounded-xl border transition-colors hover:border-opacity-70"
              style={{ background: "var(--bg-surface)", borderColor: "var(--border-default)" }}>
              <h3 className="font-heading font-semibold mb-3" style={{ fontSize: "var(--text-body-lg)", color: "var(--text-primary)" }}>{item.title}</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="w-full py-24" style={{ background: "var(--bg-surface)" }}>
        <div className="section-container">
          <SectionHeader label="Our Values" title="What we stand for." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <div key={v.name} className="p-8 rounded-xl border relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--bg-elevated)", borderColor: "var(--border-default)" }}>
                <div className="absolute top-0 left-0 h-[2px] w-10 group-hover:w-full transition-all duration-500" style={{ background: "var(--accent-mint)", opacity: 0.4 }} />
                <p className="font-mono text-[11px] tracking-widest uppercase mb-3" style={{ color: "var(--accent-mint-text)" }}>0{i + 1}</p>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: "var(--text-h3)", color: "var(--text-primary)" }}>{v.name}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
