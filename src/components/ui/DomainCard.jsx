import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DomainCard({ icon: Icon, title, subtitle, description, tags, colorVar, href = "#" }) {
  return (
    <Link 
      href={href}
      className="group relative flex flex-col gap-4 bg-bg-surface border border-border-default rounded-lg p-8 overflow-hidden transition-all duration-slow ease-spring hover:-translate-y-1 hover:border-[color:var(--domain-color)]"
      style={{
        "--domain-color": `var(${colorVar})`,
        boxShadow: "0 0 0 0 transparent"
      }}
    >
      {/* Top-left corner accent line */}
      <div 
        className="absolute top-0 left-0 h-[2px] w-10 bg-[color:var(--domain-color)] transition-all duration-slow ease-out group-hover:w-full group-hover:opacity-15"
      />

      {/* Hover glow effect via CSS */}
      <style jsx>{`
        .group:hover {
          box-shadow: 0 0 30px color-mix(in srgb, var(--domain-color) 15%, transparent);
        }
      `}</style>
      
      {/* Icon */}
      {Icon && (
        <div className="text-[color:var(--domain-color)]">
          <Icon size={32} />
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-start mt-2">
        <div>
          <h3 className="font-heading text-h3 font-semibold text-text-primary leading-snug">
            {title}
          </h3>
          <p className="font-mono text-[13px] text-text-secondary mt-1">
            {subtitle}
          </p>
        </div>
        <ArrowRight 
          size={20} 
          className="text-text-muted transition-colors duration-fast group-hover:text-[color:var(--domain-color)] -rotate-45 group-hover:rotate-0" 
        />
      </div>

      {/* Description */}
      <p className="font-body text-body-md text-text-secondary leading-relaxed mt-2" style={{ "--leading-relaxed": "1.7" }}>
        {description}
      </p>

      {/* Divider */}
      <div className="w-full h-[1px] bg-border-subtle my-2" />

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="font-label text-[11px] tracking-wider uppercase bg-bg-elevated border border-border-default text-text-muted px-2.5 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
