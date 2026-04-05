"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { TEAM_MEMBERS } from "@/data/team";

const DOMAINS = ["All", "AI/ML", "Web Dev", "Android", "UI/UX"];

const DOMAIN_COLORS = {
  "AI/ML": "var(--domain-ai)",
  "Web Dev": "var(--domain-web)",
  "Android": "var(--domain-android)",
  "UI/UX": "var(--domain-uiux)",
};

export default function Team() {
  const [activeDomain, setActiveDomain] = useState("All");

  const filtered = TEAM_MEMBERS.filter(
    (m) => activeDomain === "All" || m.domain === activeDomain
  );

  return (
    <div className="w-full">

      {/* PAGE HERO */}
      <div className="section-container page-hero">
        <nav className="breadcrumb">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span style={{ color: "var(--border-emphasis)" }}>/</span>
          <span>Team</span>
        </nav>
        <h1 className="font-display font-extrabold leading-tight tracking-tight mb-4"
          style={{ fontSize: "var(--text-display-lg)", color: "var(--text-primary)" }}>
          The Team.
        </h1>
        <p className="font-body leading-relaxed max-w-2xl mb-8"
          style={{ fontSize: "var(--text-body-lg)", color: "var(--text-secondary)" }}>
          C.O.D.E members are selected. What you see here is the result of that selection — people who build.
        </p>
        <p className="font-mono text-sm mb-8" style={{ color: "var(--text-muted)" }}>
          <span style={{ color: "var(--accent-mint)" }}>{TEAM_MEMBERS.length}</span> active members across 4 domains
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {DOMAINS.map((d) => (
            <button key={d} onClick={() => setActiveDomain(d)}
              className="font-mono text-[11px] tracking-[0.06em] uppercase px-3 py-1.5 rounded transition-all duration-150"
              style={{
                border: `1px solid ${activeDomain === d ? "var(--border-mint)" : "var(--border-subtle)"}`,
                color: activeDomain === d ? "var(--accent-mint)" : "var(--text-muted)",
                background: activeDomain === d ? "var(--accent-mint-pale)" : "transparent",
              }}>
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="section-container"><div className="h-px" style={{ background: "var(--border-subtle)" }} /></div>

      {/* MEMBER GRID */}
      <section className="section-container py-16 pb-28">
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filtered.map((member, i) => (
            <motion.div key={member.name} layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="group flex flex-col items-center gap-3 p-5 rounded-xl border transition-all duration-300 cursor-default hover:-translate-y-1"
              style={{ background: "var(--bg-surface)", borderColor: "var(--border-default)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = DOMAIN_COLORS[member.domain] || "var(--border-mint)";
                e.currentTarget.style.boxShadow = `0 0 20px ${DOMAIN_COLORS[member.domain] || "var(--accent-mint)"}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-default)";
                e.currentTarget.style.boxShadow = "none";
              }}>
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-display font-bold flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: "var(--bg-elevated)",
                  border: "2px solid var(--border-default)",
                  color: DOMAIN_COLORS[member.domain] || "var(--accent-mint)",
                }}>
                {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>

              {/* Info */}
              <div className="text-center flex flex-col gap-1">
                <p className="font-heading font-semibold text-sm leading-tight" style={{ color: "var(--text-primary)" }}>{member.name}</p>
                <p className="font-body text-xs leading-snug" style={{ color: "var(--text-secondary)" }}>{member.role}</p>
                <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-sm self-center"
                  style={{
                    background: "var(--bg-elevated)",
                    border: `1px solid ${DOMAIN_COLORS[member.domain] || "var(--border-default)"}`,
                    color: DOMAIN_COLORS[member.domain] || "var(--text-muted)",
                  }}>
                  {member.domain}
                </span>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
                {member.linkedin && member.linkedin !== "#" && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                    className="transition-colors hover:text-accent-blue" style={{ color: "var(--text-muted)" }}>
                    <LinkedinLogo size={16} weight="fill" />
                  </a>
                )}
                {member.github && member.github !== "#" && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer"
                    className="transition-colors hover:text-text-primary" style={{ color: "var(--text-muted)" }}>
                    <GithubLogo size={16} weight="fill" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body" style={{ color: "var(--text-muted)" }}>No members found in this domain.</p>
          </div>
        )}
      </section>

      {/* JOIN CTA */}
      <section className="w-full py-16 border-t" style={{ background: "var(--bg-surface)", borderColor: "var(--border-subtle)" }}>
        <div className="section-container text-center">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>
            Applications · 2025–26
          </p>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: "var(--text-display-md)", color: "var(--text-primary)" }}>
            Want to join?
          </h2>
          <p className="font-body mb-8 max-w-md mx-auto" style={{ fontSize: "var(--text-body-md)", color: "var(--text-secondary)" }}>
            Applications are announced on our Instagram. We look for people who build, not just attend.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact"><Button variant="primary">Get In Touch →</Button></Link>
            <a href="https://www.instagram.com/code_mmcoe" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost">Follow @code_mmcoe ↗</Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
