"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EVENTS_DATA } from "@/data/events";

const EVENT_TYPES = ["All", "WORKSHOP", "COHORT", "HACKATHON", "VISIT"];

const TYPE_COLORS = {
  WORKSHOP: "var(--accent-blue)",
  COHORT: "var(--accent-mint)",
  HACKATHON: "var(--accent-orange)",
  VISIT: "var(--accent-purple)",
};

export default function Events() {
  const [activeType, setActiveType] = useState("All");

  const filtered = EVENTS_DATA.filter(
    (e) => activeType === "All" || e.typeLabel === activeType
  );

  return (
    <div className="w-full">

      {/* PAGE HERO */}
      <div className="section-container page-hero">
        <nav className="breadcrumb">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span style={{ color: "var(--border-emphasis)" }}>/</span>
          <span>Events</span>
        </nav>
        <h1 className="font-display font-extrabold leading-tight tracking-tight mb-4"
          style={{ fontSize: "var(--text-display-lg)", color: "var(--text-primary)" }}>
          Events &amp; Activities.
        </h1>
        <p className="font-body leading-relaxed max-w-2xl mb-8"
          style={{ fontSize: "var(--text-body-lg)", color: "var(--text-secondary)" }}>
          Workshops, sessions, hackathons, industrial visits, and consultancy meets — a full record of what C.O.D.E does.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {EVENT_TYPES.map((t) => (
            <button key={t} onClick={() => setActiveType(t)}
              className="font-mono text-[11px] tracking-[0.06em] uppercase px-3 py-1.5 rounded transition-all duration-150"
              style={{
                border: `1px solid ${activeType === t ? "var(--border-mint)" : "var(--border-subtle)"}`,
                color: activeType === t ? "var(--accent-mint)" : "var(--text-muted)",
                background: activeType === t ? "var(--accent-mint-pale)" : "transparent",
              }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="section-container"><div className="h-px" style={{ background: "var(--border-subtle)" }} /></div>

      {/* EVENTS GRID */}
      <section className="section-container py-16 pb-28">
        <p className="font-mono text-sm mb-8" style={{ color: "var(--text-muted)" }}>
          Showing <span style={{ color: "var(--accent-mint)" }}>{filtered.length}</span> events
        </p>
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((event, i) => (
              <motion.div key={event.slug} layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}>
                <EventCard event={event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body" style={{ color: "var(--text-muted)" }}>No events found.</p>
          </div>
        )}
      </section>
    </div>
  );
}

function EventCard({ event }) {
  const typeColor = TYPE_COLORS[event.typeLabel] || "var(--text-muted)";

  return (
    <div className="group flex flex-col gap-4 p-6 rounded-xl border h-full transition-all duration-300 hover:-translate-y-1"
      style={{ background: "var(--bg-surface)", borderColor: "var(--border-default)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = typeColor;
        e.currentTarget.style.boxShadow = `0 0 20px ${typeColor}22`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-default)";
        e.currentTarget.style.boxShadow = "none";
      }}>
      {/* Header row */}
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded border"
          style={{ background: "var(--bg-elevated)", borderColor: typeColor, color: typeColor }}>
          {event.typeLabel}
        </span>
        <span className="font-mono text-[12px]" style={{ color: "var(--text-muted)" }}>{event.year}</span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-heading font-semibold mb-2 leading-snug"
          style={{ fontSize: "var(--text-body-md)", color: "var(--text-primary)" }}>
          {event.title}
        </h3>
        <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {event.description}
        </p>
      </div>

      {/* Domain badge */}
      {event.domainLabel && (
        <div className="font-mono text-[10px] tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>
          ● {event.domainLabel}
        </div>
      )}
    </div>
  );
}
