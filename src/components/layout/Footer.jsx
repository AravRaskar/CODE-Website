"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = {
  NAVIGATE: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ],
  DOMAINS: [
    { label: "AI / ML", href: "/domains/ai-ml" },
    { label: "Web Dev", href: "/domains/web-dev" },
    { label: "Android", href: "/domains/android" },
    { label: "UI / UX", href: "/domains/ui-ux" },
  ],
  CONNECT: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/team-code", external: true },
    { label: "Instagram", href: "https://www.instagram.com/code_mmcoe", external: true },
    { label: "GitHub", href: "https://github.com/Club-of-Developers-and-Engineers", external: true },
    { label: "HuggingFace", href: "https://huggingface.co/code-mmcoe", external: true },
    { label: "Email", href: "mailto:team_code@mmcoe.edu.in", external: true },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-bg-base border-t border-border-subtle pt-16 mt-32 relative z-base">
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="font-display font-extrabold text-[22px] tracking-tight text-text-primary group">
              C<span className="text-accent-mint group-hover:drop-shadow-mintSm transition-all">·</span>O<span className="text-accent-mint group-hover:drop-shadow-mintSm transition-all">·</span>D<span className="text-accent-mint group-hover:drop-shadow-mintSm transition-all">·</span>E
            </Link>
            
            <div className="font-body text-[16px] leading-relaxed text-text-secondary max-w-[280px]">
              <p>Club of Developers and Engineers</p>
              <p>MMCOE, Pune</p>
            </div>
            
            <p className="font-heading text-[18px] font-medium text-text-primary mt-2">
              We build things that matter.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h4 className="font-label text-[12px] tracking-wider uppercase text-text-muted mb-2 relative inline-block">
                {category}
                <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-border-emphasis"></span>
              </h4>
              
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="font-body text-[15px] text-text-secondary hover:text-accent-mint transition-colors duration-fast inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      {link.external && (
                        <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-base" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-default/50 bg-bg-surface py-5 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] font-body text-text-muted">
          <p>&copy; {new Date().getFullYear()} C.O.D.E — MMCOE, Pune.</p>
          <p>Built by the team.</p>
          <button 
            onClick={scrollToTop}
            className="font-mono text-[13px] hover:text-text-primary transition-colors flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-y-1 transition-transform">↑</span>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
