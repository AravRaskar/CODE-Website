import React from "react";

/**
 * Consistent section header used across all pages.
 * label: small all-caps eyebrow text (e.g. "WHAT WE BUILD")
 * title: main heading
 * subtitle: optional supporting text
 * centered: center-align everything
 */
export function SectionHeader({ label, title, subtitle, centered = false, className = "" }) {
  return (
    <div className={`mb-12 ${centered ? "text-center flex flex-col items-center" : ""} ${className}`}>
      {label && (
        <div className="section-label">
          {label}
        </div>
      )}
      <h2 className="font-display font-bold text-text-primary leading-tight tracking-tight mb-4"
        style={{ fontSize: "var(--text-display-md)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-text-secondary leading-relaxed max-w-2xl"
          style={{ fontSize: "var(--text-body-lg)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
