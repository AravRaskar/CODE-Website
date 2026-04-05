"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { TerminalWidget } from "@/components/ui/TerminalWidget";
import { DomainCard } from "@/components/ui/DomainCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Cpu, Globe, Smartphone, PenTool, ArrowRight } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";

/* ─── Animation helpers ───────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return [ref, isInView];
}

/* ─── Marquee tape items ──────────────────────────── */
const MARQUEE_ITEMS = [
  { text: "AI & Machine Learning" }, { text: "Web Development" },
  { text: "Android"               }, { text: "UI / UX Design" },
  { text: "Est. 2021"             }, { text: "MMCOE, Pune"    },
  { text: "60+ Members"           }, { text: "30+ Projects"   },
  { text: "Real Consultancy"      }, { text: "Industry Ready" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="w-full">

      {/* ── FIXED AMBIENT BACKGROUND ──────────────────── */}
      <div aria-hidden className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <div style={{
          position: "absolute", left: "-5%", bottom: "-5%",
          width: "50vw", height: "50vw", maxWidth: "640px", maxHeight: "640px",
          background: "radial-gradient(circle at center, rgba(0,255,148,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
        }} />
        <div style={{
          position: "absolute", right: "-5%", top: "-5%",
          width: "40vw", height: "40vw", maxWidth: "560px", maxHeight: "560px",
          background: "radial-gradient(circle at center, rgba(77,159,255,0.055) 0%, transparent 70%)",
          filter: "blur(50px)",
        }} />
      </div>

      {/* ═══════════════════════════════════════════════
          01  HERO — Full-width, edge-to-edge content
      ═══════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-center">
        <div className="section-container flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-28">

          {/* --- Left copy --- */}
          <div className="flex-1 min-w-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[10px] uppercase tracking-[0.18em] mb-6"
              style={{ color: "var(--accent-mint-text)" }}>
              [ Club of Developers and Engineers · MMCOE · Est. 2021 ]
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-extrabold leading-[1.06] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(38px, 5.5vw, 80px)", color: "var(--text-primary)" }}>
              We don&apos;t just<br />
              learn to code.<br />
              <span style={{ color: "var(--accent-mint)" }}>We build</span>
              <span style={{ color: "var(--accent-mint)", animation: "blink 1s step-end infinite" }}>█</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-normal leading-relaxed mb-10"
              style={{ fontSize: "15px", color: "var(--text-secondary)", maxWidth: "440px", lineHeight: 1.65 }}>
              MMCOE&apos;s exclusive Computer Engineering technical club. Real consultancy
              projects. Production software. Engineers ready from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-wrap gap-3">
              <Link href="/projects">
                <HeroBtn primary>View Our Projects</HeroBtn>
              </Link>
              <Link href="/about">
                <HeroBtn>About C.O.D.E ↗</HeroBtn>
              </Link>
            </motion.div>

            {/* Inline micro-stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex flex-wrap gap-8 mt-12 pt-8"
              style={{ borderTop: "1px solid var(--border-subtle)" }}>
              {[
                { val: "60+", lbl: "Members" },
                { val: "30+", lbl: "Projects Shipped" },
                { val: "8+",  lbl: "Clients" },
                { val: "4",   lbl: "Domains" },
              ].map(({ val, lbl }) => (
                <div key={lbl} className="flex flex-col gap-0.5">
                  <span className="font-sans font-bold leading-none"
                    style={{ fontSize: "clamp(20px, 2.5vw, 30px)", color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
                    {val}
                  </span>
                  <span className="font-sans font-medium uppercase tracking-widest"
                    style={{ fontSize: "9px", color: "var(--text-muted)" }}>
                    {lbl}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* --- Right: terminal --- */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full flex justify-center lg:justify-end min-w-0"
          >
            {mounted && <TerminalWidget className="w-full max-w-[520px]" />}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          02  MARQUEE TICKER — Full-width horizontal scroll
      ═══════════════════════════════════════════════ */}
      <div className="w-full overflow-hidden border-y" style={{ borderColor: "var(--border-subtle)", background: "var(--bg-surface)" }}>
        <div className="flex" style={{ animation: "marquee 28s linear infinite" }}>
          {/* Duplicated twice for seamless loop */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-6 px-8 py-4">
              <span className="font-sans font-semibold uppercase tracking-[0.12em] whitespace-nowrap"
                style={{ fontSize: "11px", color: "var(--text-secondary)" }}>
                {item.text}
              </span>
              <span className="text-xs flex-shrink-0" style={{ color: "var(--accent-mint)", opacity: 0.5 }}>◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          03  DOMAINS — Full-width alternating layout
      ═══════════════════════════════════════════════ */}
      <RevealSection className="section-container py-24">
        <SectionEyebrow>What We Build</SectionEyebrow>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <h2 className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: "clamp(26px, 3.5vw, 46px)", color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
            Four domains.<br />One team.
          </h2>
          <p className="font-sans font-normal leading-relaxed max-w-sm"
            style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
            Members specialise in a domain, but projects are staffed across domains — giving clients full-stack solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-4">
          <DomainCard icon={Cpu} title="AI & Machine Learning" subtitle="Predictive models & Generative AI"
            description="Training models, deploying inference APIs, and building computer vision applications for real industrial clients."
            tags={["Python", "PyTorch", "TensorFlow", "FastAPI"]} colorVar="--domain-ai" href="/domains#ai-ml" />
          <DomainCard icon={Globe} title="Web Development" subtitle="Full-stack & Cloud Architecture"
            description="Scalable web applications, real-time dashboards, and robust backends deployed to production."
            tags={["React", "Next.js", "Node.js", "PostgreSQL"]} colorVar="--domain-web" href="/domains#web-dev" />
          <DomainCard icon={Smartphone} title="Android Development" subtitle="Native & Cross-platform"
            description="High-performance mobile applications with native integrations and clean architecture."
            tags={["Kotlin", "Jetpack Compose", "Flutter", "Firebase"]} colorVar="--domain-android" href="/domains#android" />
          <DomainCard icon={PenTool} title="UI/UX Design" subtitle="Research, Prototyping & Systems"
            description="Interfaces rooted in real user research, shipped as complete handoff-ready design systems."
            tags={["Figma", "Usability Testing", "Design Systems"]} colorVar="--domain-uiux" href="/domains#ui-ux" />
        </div>
        <div className="mt-8 flex justify-end">
          <InlineLink href="/domains">Explore all domains <ArrowRight size={13} className="inline" /></InlineLink>
        </div>
      </RevealSection>

      {/* ═══════════════════════════════════════════════
          04  ABOUT — Large quote + objectives, full-bleed bg
      ═══════════════════════════════════════════════ */}
      <section className="w-full py-24" style={{ background: "var(--bg-surface)" }}>
        <div className="section-container">
          <SectionEyebrow>Who We Are</SectionEyebrow>

          {/* Big pull-quote */}
          <RevealSection>
            <blockquote
              className="font-sans font-bold leading-tight tracking-tight mb-16"
              style={{
                fontSize: "clamp(22px, 3vw, 40px)",
                color: "var(--text-primary)",
                letterSpacing: "-0.025em",
                maxWidth: "780px",
                borderLeft: "3px solid var(--accent-mint)",
                paddingLeft: "2rem",
              }}>
              &ldquo;A club built to close the gap between college curriculum and what industry actually needs.&rdquo;
            </blockquote>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Industry Alignment", desc: "We work in the domains employers hire for. Python, AI, React, Kotlin — we stay current." },
              { num: "02", title: "Real Execution", desc: "Practical teamwork through actual projects and national-level hackathons, not case studies." },
              { num: "03", title: "Culture of Craft", desc: "A curiosity-driven environment where quality of work is the primary measure of success." },
            ].map((obj, i) => (
              <motion.div
                key={obj.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="p-7 rounded-xl border relative overflow-hidden group"
                style={{ background: "var(--bg-elevated)", borderColor: "var(--border-default)" }}>
                {/* Animated top accent */}
                <div className="absolute top-0 left-0 h-[2px] w-8 transition-all duration-500 group-hover:w-full"
                  style={{ background: "var(--accent-mint)", opacity: 0.5 }} />
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase block mb-4"
                  style={{ color: "var(--accent-mint-text)" }}>
                  {obj.num}
                </span>
                <h3 className="font-sans font-semibold mb-2"
                  style={{ fontSize: "15px", color: "var(--text-primary)" }}>
                  {obj.title}
                </h3>
                <p className="font-sans font-normal leading-relaxed"
                  style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                  {obj.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <InlineLink href="/about">Full story →</InlineLink>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          05  PROJECTS — 3-col full-width
      ═══════════════════════════════════════════════ */}
      <RevealSection className="section-container py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <SectionEyebrow>Selected Work</SectionEyebrow>
            <h2 className="font-sans font-bold leading-tight tracking-tight"
              style={{ fontSize: "clamp(26px, 3.5vw, 46px)", color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
              Projects that shipped.
            </h2>
          </div>
          <InlineLink href="/projects">All projects →</InlineLink>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((p, i) => (
            <motion.div key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}>
              <ProjectCard {...p} href={`/projects/${p.slug}`} />
            </motion.div>
          ))}
        </div>
      </RevealSection>

      {/* ═══════════════════════════════════════════════
          06  CONSULTANCY — Edge-to-edge dark statement
      ═══════════════════════════════════════════════ */}
      <section className="w-full py-24 relative overflow-hidden" style={{ background: "var(--bg-surface)" }}>
        {/* Faint glow */}
        <div aria-hidden className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,255,148,0.06) 0%, transparent 70%)" }} />
        <div className="section-container relative z-10">
          <SectionEyebrow>Consultancy</SectionEyebrow>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <RevealSection>
              <h2 className="font-sans font-bold leading-tight tracking-tight mb-5"
                style={{ fontSize: "clamp(26px, 3.5vw, 46px)", color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
                Real briefs.<br />Real results.
              </h2>
              <p className="font-sans font-normal leading-relaxed mb-8"
                style={{ fontSize: "14px", color: "var(--text-secondary)", maxWidth: "420px" }}>
                We take on external projects from companies and research organisations — genuinely scoped work with real deliverables.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Newton's Software", "Ellicium", "ARAI", "Pune GPU Community"].map((c) => (
                  <span key={c} className="font-sans font-medium px-3 py-1.5 rounded border"
                    style={{ fontSize: "12px", background: "var(--bg-elevated)", borderColor: "var(--border-default)", color: "var(--text-secondary)" }}>
                    {c}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact"><PrimaryBtn>Start an Enquiry →</PrimaryBtn></Link>
                <Link href="/consultancy"><GhostBtn>See Consultancy Work</GhostBtn></Link>
              </div>
            </RevealSection>

            {/* Terminal log */}
            <div className="rounded-2xl border p-7 relative overflow-hidden"
              style={{ background: "var(--bg-elevated)", borderColor: "var(--border-default)" }}>
              <div aria-hidden className="absolute inset-0 texture-dot-grid opacity-20" />
              <div className="relative z-10">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-5 pb-4" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
                  <span className="font-mono text-[11px] ml-auto" style={{ color: "var(--text-muted)" }}>git log</span>
                </div>
                <div className="font-mono leading-[1.75]" style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                  {[
                    { sha: "a3f91c2", msg: "ARAI: shipped ML inference pipeline" },
                    { sha: "7e8d441", msg: "Ellicium: data ingestion complete" },
                    { sha: "2b3f109", msg: "Newton\u2019s: capability tracker v2" },
                    { sha: "4c9a221", msg: "UI/UX cohort \u2014 final showcase" },
                    { sha: "9d2b108", msg: "Hacksprint: first place" },
                  ].map(({ sha, msg }) => (
                    <div key={sha} className="flex gap-3">
                      <span style={{ color: "var(--accent-orange)", flexShrink: 0 }}>{sha}</span>
                      <span style={{ color: "var(--text-secondary)" }}>{msg}</span>
                    </div>
                  ))}
                  <div className="mt-3">
                    <span style={{ color: "var(--accent-mint)" }}>$</span>
                    <span className="ml-2" style={{ animation: "blink 1s step-end infinite", color: "var(--accent-mint)" }}>█</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          07  EVENTS — Narrow horizontal timeline
      ═══════════════════════════════════════════════ */}
      <RevealSection className="section-container py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <SectionEyebrow>Recent Activity</SectionEyebrow>
            <h2 className="font-sans font-bold leading-tight tracking-tight"
              style={{ fontSize: "clamp(26px, 3.5vw, 46px)", color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
              What we&apos;ve been up to.
            </h2>
          </div>
          <InlineLink href="/events">All events →</InlineLink>
        </div>
        {/* Horizontal timeline list */}
        <div className="flex flex-col divide-y" style={{ borderColor: "var(--border-subtle)" }}>
          {[
            { title: "Workshop on UI/UX Design", type: "WORKSHOP", date: "Dec 2024", domain: "UI/UX" },
            { title: "AI Cohort 2024 — Launch Session", type: "COHORT", date: "Sep 2024", domain: "AI/ML" },
            { title: "ARAI Industrial Visit", type: "VISIT", date: "Oct 2024", domain: "AI/ML" },
            { title: "Hacksprint v2.0", type: "HACKATHON", date: "Aug 2024", domain: "Web Dev" },
          ].map((ev, i) => (
            <EventRow key={ev.title} {...ev} index={i} />
          ))}
        </div>
      </RevealSection>

      {/* ═══════════════════════════════════════════════
          08  CTA — Full-width join statement
      ═══════════════════════════════════════════════ */}
      <section className="w-full py-28 relative overflow-hidden" style={{ background: "var(--bg-surface)" }}>
        <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] rounded-full blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(0,255,148,0.05) 0%, transparent 70%)" }} />
        </div>
        <div className="section-container text-center flex flex-col items-center relative z-10">
          <RevealSection>
            <h2 className="font-sans font-extrabold leading-tight tracking-tight mb-5 max-w-2xl"
              style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
              Ready to build with us?
            </h2>
            <p className="font-sans font-normal leading-relaxed mb-10 mx-auto"
              style={{ fontSize: "15px", color: "var(--text-secondary)", maxWidth: "460px" }}>
              Whether you&apos;re a student who builds, or a company with a real problem — we&apos;d like to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"><PrimaryBtn large>Get In Touch →</PrimaryBtn></Link>
              <a href="https://www.instagram.com/code_mmcoe" target="_blank" rel="noopener noreferrer">
                <GhostBtn large>Follow @code_mmcoe ↗</GhostBtn>
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

    </div>
  );
}

/* ─── Reusable atoms ──────────────────────────────── */

function SectionEyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-4 h-[1.5px] block" style={{ background: "var(--accent-mint)" }} />
      <span className="font-mono font-medium uppercase tracking-[0.14em]"
        style={{ fontSize: "10px", color: "var(--accent-mint-text)" }}>
        {children}
      </span>
    </div>
  );
}

function InlineLink({ href, children }) {
  return (
    <Link href={href}
      className="font-sans font-semibold inline-flex items-center gap-2 transition-colors hover:opacity-80"
      style={{ fontSize: "13px", color: "var(--accent-mint-text)" }}>
      {children}
    </Link>
  );
}

function PrimaryBtn({ children, large }) {
  return (
    <button className="font-sans font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
      style={{
        fontSize: large ? "14px" : "13px",
        padding: large ? "13px 28px" : "10px 22px",
        background: "var(--accent-mint)",
        color: "var(--text-invert)",
        borderRadius: "var(--radius-lg)",
        border: "none",
        letterSpacing: "-0.01em",
      }}>
      {children}
    </button>
  );
}

function GhostBtn({ children, large }) {
  return (
    <button className="font-sans font-medium transition-all hover:opacity-80"
      style={{
        fontSize: large ? "14px" : "13px",
        padding: large ? "13px 28px" : "10px 22px",
        border: "1px solid var(--border-emphasis)",
        borderRadius: "var(--radius-lg)",
        color: "var(--text-secondary)",
        background: "transparent",
        letterSpacing: "-0.01em",
      }}>
      {children}
    </button>
  );
}

function HeroBtn({ children, primary }) {
  return primary ? (
    <button className="font-sans font-semibold transition-opacity hover:opacity-90"
      style={{
        fontSize: "14px", padding: "12px 26px",
        background: "var(--accent-mint)", color: "var(--text-invert)",
        borderRadius: "var(--radius-lg)", border: "none", letterSpacing: "-0.01em",
      }}>
      {children}
    </button>
  ) : (
    <button className="font-sans font-medium transition-opacity hover:opacity-80"
      style={{
        fontSize: "14px", padding: "12px 26px",
        border: "1px solid var(--border-emphasis)", borderRadius: "var(--radius-lg)",
        color: "var(--text-secondary)", background: "transparent", letterSpacing: "-0.01em",
      }}>
      {children}
    </button>
  );
}

function RevealSection({ children, className = "" }) {
  const [ref, inView] = useScrollReveal();
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
      className={className}>
      {children}
    </motion.div>
  );
}

const TYPE_COLORS = {
  WORKSHOP: "var(--accent-blue)", COHORT: "var(--accent-mint)",
  HACKATHON: "var(--accent-orange)", VISIT: "var(--accent-purple)",
};

function EventRow({ title, type, date, domain, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group flex flex-col sm:flex-row sm:items-center gap-4 py-5 sm:gap-8 transition-colors cursor-default hover:bg-bg-surface"
      style={{ padding: "20px 0" }}>
      <span className="font-mono font-medium text-[9px] uppercase tracking-[0.14em] px-2 py-1 rounded border flex-shrink-0 self-start"
        style={{
          borderColor: TYPE_COLORS[type] || "var(--border-default)",
          color: TYPE_COLORS[type] || "var(--text-muted)",
          background: `${TYPE_COLORS[type]}15` || "transparent",
        }}>
        {type}
      </span>
      <div className="flex-1 font-sans font-semibold"
        style={{ fontSize: "15px", color: "var(--text-primary)" }}>
        {title}
      </div>
      <span className="font-sans text-[12px] flex-shrink-0" style={{ color: "var(--text-muted)" }}>{domain}</span>
      <span className="font-mono text-[12px] flex-shrink-0" style={{ color: "var(--text-muted)" }}>{date}</span>
    </motion.div>
  );
}
