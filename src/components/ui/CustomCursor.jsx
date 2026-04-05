"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if hovering over interactive element
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Dot */}
      <div
        className="fixed pointer-events-none z-cursor mix-blend-difference hidden md:block"
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "var(--accent-mint)",
          borderRadius: "50%",
          left: position.x - 4,
          top: position.y - 4,
          transition: "opacity 200ms ease",
          opacity: 1,
        }}
      />
      {/* Ring */}
      <div
        className="fixed pointer-events-none z-cursor hidden md:block"
        style={{
          border: "1px solid var(--accent-mint)",
          borderRadius: "50%",
          left: position.x,
          top: position.y,
          width: isHovering ? "56px" : "36px",
          height: isHovering ? "56px" : "36px",
          transform: isHovering ? "translate(-28px, -28px)" : "translate(-18px, -18px)",
          transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1), width 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275), height 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 200ms",
          opacity: isHovering ? 0.6 : 1,
        }}
      />
    </>
  );
}
