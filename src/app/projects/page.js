"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS_DATA } from "@/data/projects";

const DOMAINS = ["All", "AI/ML", "Web Dev", "Android", "UI/UX"];
const TYPES = ["All Types", "Consultancy", "Internal", "Competition"];

export default function Projects() {
  const [activeDomain, setActiveDomain] = useState("All");
  const [activeType, setActiveType] = useState("All Types");

  const filtered = PROJECTS_DATA.filter((p) => {
    const domainOk = activeDomain === "All" || p.domainLabel === activeDomain;
    const typeOk = activeType === "All Types" || p.typeLabel === activeType;
    return domainOk && typeOk;
  });

  return (
    <div className="w-full">

      {/* PAGE HERO */}
      <div className="section-container page-hero">
        <nav className="breadcrumb">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span style={{ color: "var(--border-emphasis)" }}>/</span>
          <span>Projects</span>
        </nav>
        <h1 className="font-display font-extrabold leading-tight tracking-tight mb-4"
          style={{ fontSize: "var(--text-display-lg)", color: "var(--text-primary)" }}>
          Projects.
        </h1>
        <p className="font-body leading-relaxed max-w-2xl mb-6"
          style={{ fontSize: "var(--text-body-lg)", color: "var(--text-secondary)" }}>
          Everything we&apos;ve built — from internal experiments to client-facing deliverables.
        </p>
        <p className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
          Showing <span style={{ color: "var(--accent-mint)" }}>{filtered.length}</span> project{filtered.length !== 1 ? "s" : ""}
          {activeDomain !== "All" ? ` in ${activeDomain}` : ""}
          {activeType !== "All Types" ? ` · ${activeType}` : ""}
        </p>
      </div>

      {/* STICKY FILTER BAR */}
      <div className="sticky top-16 w-full border-b z-40 backdrop-blur-md"
        style={{ background: "rgba(10,10,10,0.92)", borderColor: "var(--border-subtle)", zIndex: 150 }}>
        <div className="section-container py-4 flex flex-wrap gap-6">
          <div className="flex flex-wrap gap-2">
            {DOMAINS.map((d) => (
              <FilterBtn key={d} label={d} active={activeDomain === d} onClick={() => setActiveDomain(d)} />
            ))}
          </div>
          <div className="w-px self-stretch" style={{ background: "var(--border-default)" }} />
          <div className="flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <FilterBtn key={t} label={t} active={activeType === t} onClick={() => setActiveType(t)} />
            ))}
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="section-container py-12 pb-24 min-h-96">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div key={project.slug} layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}>
                <ProjectCard href={`/projects/${project.slug}`} {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="font-mono text-4xl mb-4">📡</div>
            <p className="font-heading font-medium mb-2" style={{ color: "var(--text-primary)" }}>No matching projects</p>
            <p className="font-body text-sm" style={{ color: "var(--text-muted)" }}>Try removing a filter to see more.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterBtn({ label, active, onClick }) {
  return (
    <button onClick={onClick}
      className="font-mono text-[11px] tracking-[0.06em] uppercase px-3 py-1.5 rounded transition-all duration-150"
      style={{
        border: `1px solid ${active ? "var(--border-mint)" : "var(--border-subtle)"}`,
        color: active ? "var(--accent-mint)" : "var(--text-muted)",
        background: active ? "var(--accent-mint-pale)" : "transparent",
      }}>
      {label}
    </button>
  );
}
