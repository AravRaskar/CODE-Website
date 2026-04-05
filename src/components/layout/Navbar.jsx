"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button, cn } from "../ui/Button";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Domains", href: "/domains" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Consultancy", href: "/consultancy" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-sticky w-full border-b transition-all duration-300 ease-out",
          isScrolled
            ? "h-[68px] bg-[rgba(10,10,10,0.92)] backdrop-blur-[24px] backdrop-saturate-[180%] border-[var(--border-subtle)]"
            : "h-[80px] bg-transparent border-transparent"
        )}
      >
        <div className="section-container h-full flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="font-sans font-black tracking-tight group flex-shrink-0"
            style={{ fontSize: "20px", color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            C<span style={{ color: "var(--accent-mint)" }}>·</span>O
            <span style={{ color: "var(--accent-mint)" }}>·</span>D
            <span style={{ color: "var(--accent-mint)" }}>·</span>E
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group transition-colors duration-150"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "-0.005em",
                    color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "var(--text-primary)"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "var(--text-secondary)"; }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-[1.5px] transition-transform duration-200 origin-left"
                    style={{
                      width: "100%",
                      background: "var(--accent-mint)",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <Link href="/contact">
              <button
                className="font-heading font-medium transition-all duration-150"
                style={{
                  fontSize: "13px",
                  padding: "7px 20px",
                  border: "1px solid var(--border-mint)",
                  borderRadius: "var(--radius-md)",
                  color: "var(--accent-mint)",
                  background: "var(--accent-mint-pale)",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,255,148,0.18)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent-mint-pale)"; }}
              >
                Contact Us →
              </button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 -mr-2"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex flex-col items-center justify-center"
            style={{ background: "var(--bg-base)", zIndex: 400, top: 0 }}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ color: "var(--text-muted)" }}
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="font-display font-bold transition-colors"
                    style={{ fontSize: "32px", color: "var(--text-primary)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-mint)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.06 }}
                className="pt-4"
              >
                <Link href="/contact">
                  <Button variant="primary">Contact Us →</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
