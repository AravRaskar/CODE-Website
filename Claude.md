# C.O.D.E — Club of Developers and Engineers
## Master Website Design & Development Specification
### Version 3.0 — JavaScript + React.js Edition

> **Club:** C.O.D.E — Club of Developers and Engineers  
> **College:** Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune  
> **Department:** Computer Engineering  
> **Established:** June 2021  
> **Email:** team_code@mmcoe.edu.in  
> **LinkedIn:** https://www.linkedin.com/company/team-code  
> **Instagram:** https://www.instagram.com/code_mmcoe  
> **GitHub:** https://github.com/Club-of-Developers-and-Engineers  
> **HuggingFace:** https://huggingface.co/code-mmcoe  
> **Document Status:** Primary Reference — All design, development, and content decisions must trace back to this document.

---
>CODEX will be reviewing the code always so maintain all the security measures and dont hallucinate 
## TABLE OF CONTENTS

1. [Project Vision & Philosophy](#1-project-vision--philosophy)
2. [Design System — Complete Token Spec](#2-design-system--complete-token-spec)
3. [Typography System](#3-typography-system)
4. [Component Library — Every Component Defined](#4-component-library--every-component-defined)
5. [Animation & Motion System](#5-animation--motion-system)
6. [Page-by-Page Full Specification](#6-page-by-page-full-specification)
7. [Layout System & Grid Rules](#7-layout-system--grid-rules)
8. [Technical Architecture](#8-technical-architecture)
9. [Folder & File Structure](#9-folder--file-structure)
10. [Content & Copy — Full Text](#10-content--copy--full-text)
11. [Responsive Design — Breakpoint Rules](#11-responsive-design--breakpoint-rules)
12. [Accessibility Specification](#12-accessibility-specification)
13. [SEO — Full Configuration](#13-seo--full-configuration)
14. [Performance Budget](#14-performance-budget)
15. [Forms — Full Specification](#15-forms--full-specification)
16. [Phase 2 Features — Detailed](#16-phase-2-features--detailed)
17. [Brand Guidelines](#17-brand-guidelines)
18. [Launch & QA Checklist](#18-launch--qa-checklist)
19. [Content Management Reference](#19-content-management-reference)
20. [Quick Reference](#20-quick-reference)

---

## 1. Project Vision & Philosophy

### 1.1 What This Website Must Communicate

The C.O.D.E website is not a college club brochure. It is the digital studio presence of a team of engineers who build real things. Every design decision — the dark palette, the monospaced labels, the dense project showcase — must serve one unspoken message:

> *"These people are serious. They ship."*

A first-time visitor — whether a prospective member, a company considering a consultancy engagement, or a faculty member — should feel the difference within the first 3 seconds of landing on the page. The website should feel closer to a Y Combinator company's site than a college club's notice board.

### 1.2 The Three Audiences

| Audience | What They Want | What the Site Must Do |
|---|---|---|
| **Prospective Members** (MMCOE CS students) | "Is this worth applying to?" | Show real projects, real people, real learning |
| **Potential Clients / Consultancy Partners** | "Can they actually deliver?" | Show past work, process, credibility, easy contact |
| **College/Faculty/Admin** | "What does this club do?" | Show structured information, clear objectives, event history |

### 1.3 Anti-Patterns to Actively Avoid

The following are explicitly forbidden in this design:

- Purple/blue gradient on white background (generic AI aesthetic)
- Rounded pill cards with emoji headers
- Generic "Our Mission / Our Vision / Our Values" 3-column layout with flat icons
- Cookie-cutter Bootstrap-style grid with zero personality
- Hero section with a stock photo of "people working on laptops"
- Centered everything with equal padding everywhere
- Navigation with a generic "hamburger that does nothing creative"
- Times New Roman, Georgia, Arial, Roboto, or Inter as the primary typeface
- Confetti animations, cursor sparkles, rainbow gradients
- Any component that looks like it came from a free Figma UI kit

### 1.4 Aesthetic Reference Points

When making any design decision, ask: "Does this look like one of these?"

- **Vercel.com** — Terminal-dark aesthetic, precision typography, no noise
- **Linear.app** — Dense information, functional elegance, muted tones
- **Resend.com** — Black+white with mint/teal accent, editorial
- **Raycast.com** — Glassmorphism done right, gradient blobs, grid textures
- **Basement.studio** — Brutalist confidence, unexpected layouts
- **The Browser Company** — Human + technical fusion
- **Liveblocks.io** — Dark backgrounds, glowing elements, developer-first feel

If it looks like any of those — it's on the right track.

---

## 2. Design System — Complete Token Spec

### 2.1 Color Tokens

All colors are defined as CSS custom properties on `:root`. Every component references tokens, never hardcoded hex values.

```css
:root {

  /* ─── BACKGROUNDS ─────────────────────────────── */
  --bg-base:          #0A0A0A;   /* Primary canvas — the darkest level */
  --bg-surface:       #111111;   /* Cards, modals, elevated surfaces */
  --bg-elevated:      #1A1A1A;   /* Hover states, dropdowns, tooltips */
  --bg-overlay:       #242424;   /* Active states, selected items */
  --bg-invert:        #F0F0F0;   /* Inverted sections (rare, used for contrast) */

  /* ─── TEXT ────────────────────────────────────── */
  --text-primary:     #F0F0F0;   /* Main headings, body on dark bg */
  --text-secondary:   #AAAAAA;   /* Descriptions, card body */
  --text-muted:       #666666;   /* Timestamps, labels, metadata */
  --text-disabled:    #333333;   /* Disabled inputs, placeholder text */
  --text-invert:      #0A0A0A;   /* Text on mint/light backgrounds */
  --text-code:        #00FF94;   /* Monospaced accent text */
  --text-link:        #4D9FFF;   /* Inline links */
  --text-link-hover:  #7FBAFF;   /* Hovered inline links */

  /* ─── ACCENT — PRIMARY (Mint Green) ───────────── */
  --accent-mint:      #00FF94;   /* Primary CTA, highlights, glow source */
  --accent-mint-dim:  #00CC77;   /* Pressed/active state of mint buttons */
  --accent-mint-pale: #00FF9420; /* Backgrounds, tinted surfaces */
  --accent-mint-glow: #00FF9440; /* Box shadow glow source */
  --accent-mint-text: #00E882;   /* Mint text on dark backgrounds */

  /* ─── ACCENT — SECONDARY (Blue) ───────────────── */
  --accent-blue:      #4D9FFF;   /* Links, web dev domain, info badges */
  --accent-blue-dim:  #3A88EE;
  --accent-blue-pale: #4D9FFF18;
  --accent-blue-glow: #4D9FFF35;

  /* ─── ACCENT — TERTIARY (Red/Orange) ──────────── */
  --accent-red:       #FF4D4D;   /* Error states, badges, warnings */
  --accent-orange:    #FF8C42;   /* AI/ML domain badge */
  --accent-purple:    #BF5FFF;   /* UI/UX domain badge */

  /* ─── DOMAIN COLORS ───────────────────────────── */
  --domain-ai:        #FF8C42;   /* AI / Machine Learning */
  --domain-web:       #4D9FFF;   /* Web Development */
  --domain-android:   #00FF94;   /* Android Development */
  --domain-uiux:      #BF5FFF;   /* UI / UX Design */

  /* ─── BORDERS ─────────────────────────────────── */
  --border-subtle:    #1E1E1E;   /* Barely visible dividers */
  --border-default:   #2A2A2A;   /* Standard card borders */
  --border-emphasis:  #404040;   /* Hovered, focused borders */
  --border-mint:      #00FF9430; /* Mint-tinted glow border */
  --border-focus:     #00FF94;   /* Keyboard focus ring */

  /* ─── SHADOWS ─────────────────────────────────── */
  --shadow-sm:        0 1px 3px rgba(0,0,0,0.5);
  --shadow-md:        0 4px 16px rgba(0,0,0,0.6);
  --shadow-lg:        0 8px 32px rgba(0,0,0,0.7);
  --shadow-mint-sm:   0 0 12px rgba(0,255,148,0.2);
  --shadow-mint-md:   0 0 24px rgba(0,255,148,0.25);
  --shadow-mint-lg:   0 0 48px rgba(0,255,148,0.15);

  /* ─── SPACING SCALE ───────────────────────────── */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;
  --space-32:  128px;

  /* ─── RADIUS ──────────────────────────────────── */
  --radius-none:  0px;
  --radius-sm:    2px;
  --radius-md:    4px;
  --radius-lg:    8px;
  --radius-xl:    12px;
  --radius-full:  9999px;   /* Pill — use sparingly */

  /* ─── TRANSITIONS ─────────────────────────────── */
  --ease-default:   cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in:        cubic-bezier(0.4, 0, 1, 1);
  --ease-out:       cubic-bezier(0, 0, 0.2, 1);
  --ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast:  120ms;
  --duration-base:  200ms;
  --duration-slow:  350ms;
  --duration-lazy:  500ms;

  /* ─── Z-INDEX SCALE ───────────────────────────── */
  --z-below:    -1;
  --z-base:      0;
  --z-raised:   10;
  --z-dropdown: 100;
  --z-sticky:   200;
  --z-overlay:  300;
  --z-modal:    400;
  --z-toast:    500;
  --z-cursor:   9999;
}
```

### 2.2 Gradient Definitions

```css
/* Hero mesh gradient — background atmosphere */
--gradient-hero-blob-1: radial-gradient(ellipse 800px 600px at 10% 80%, #00FF9408 0%, transparent 70%);
--gradient-hero-blob-2: radial-gradient(ellipse 600px 400px at 90% 20%, #4D9FFF06 0%, transparent 70%);

/* Section fade-out — content to background */
--gradient-fade-top:    linear-gradient(to bottom, var(--bg-base) 0%, transparent 100%);
--gradient-fade-bottom: linear-gradient(to top, var(--bg-base) 0%, transparent 100%);

/* Accent gradient for special text/buttons */
--gradient-mint:        linear-gradient(135deg, #00FF94 0%, #00CC77 100%);
--gradient-blue:        linear-gradient(135deg, #4D9FFF 0%, #2266CC 100%);

/* Card shimmer (loading skeleton) */
--gradient-shimmer:     linear-gradient(90deg, transparent 0%, #ffffff08 50%, transparent 100%);
```

### 2.3 Texture Definitions

All textures are CSS-only unless noted:

```css
/* Dot grid overlay — applied to bg-base sections */
.texture-dot-grid {
  background-image: radial-gradient(circle, #ffffff08 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Line grid — alternative to dot grid */
.texture-line-grid {
  background-image: 
    linear-gradient(to right, #ffffff04 1px, transparent 1px),
    linear-gradient(to bottom, #ffffff04 1px, transparent 1px);
  background-size: 48px 48px;
}

/* Scanline — ultra-thin horizontal lines on hero */
.texture-scanline {
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 2px,
    rgba(0,0,0,0.08) 2px,
    rgba(0,0,0,0.08) 3px
  );
}

/* Noise grain — SVG-based, layered via pseudo-element */
/* Apply via ::before with a base64-encoded SVG turbulence filter */
.texture-noise::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,..."); /* SVG feTurbulence */
  pointer-events: none;
  z-index: 0;
}
```

---

## 3. Typography System

### 3.1 Font Stack

```css
/* Import in <head> — self-host for performance */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Syne+Mono&family=DM+Sans:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500;600&display=swap');

:root {
  --font-display:   'Syne', sans-serif;        /* Hero, section titles */
  --font-heading:   'DM Sans', sans-serif;     /* Card titles, sub-headings */
  --font-body:      'IBM Plex Sans', sans-serif; /* Paragraphs, descriptions */
  --font-mono:      'JetBrains Mono', monospace; /* Code, tags, badges */
  --font-label:     'Syne Mono', monospace;    /* Meta labels, category markers */
}
```

### 3.2 Type Scale

All sizes use `clamp()` for fluid scaling between mobile and desktop:

```css
/* ─── DISPLAY (Syne) ─────────────────────────────── */
--text-display-2xl: clamp(56px, 8vw, 120px);   /* Hero title — largest */
--text-display-xl:  clamp(40px, 6vw, 80px);    /* Hero sub-title */
--text-display-lg:  clamp(32px, 4vw, 56px);    /* Page hero headings */
--text-display-md:  clamp(24px, 3vw, 40px);    /* Section headings */

/* ─── HEADINGS (DM Sans) ─────────────────────────── */
--text-h1:          clamp(28px, 3.5vw, 48px);
--text-h2:          clamp(22px, 2.5vw, 36px);
--text-h3:          clamp(18px, 2vw, 26px);
--text-h4:          clamp(16px, 1.5vw, 20px);

/* ─── BODY (IBM Plex Sans) ───────────────────────── */
--text-body-lg:     18px;
--text-body-md:     16px;
--text-body-sm:     14px;
--text-body-xs:     12px;

/* ─── MONO / LABELS (JetBrains Mono / Syne Mono) ─── */
--text-mono-lg:     16px;
--text-mono-md:     14px;
--text-mono-sm:     12px;
--text-mono-xs:     11px;

/* ─── LINE HEIGHTS ───────────────────────────────── */
--leading-tight:    1.1;    /* Display text */
--leading-snug:     1.25;   /* Headings */
--leading-normal:   1.5;    /* Body */
--leading-relaxed:  1.7;    /* Long-form prose */
--leading-mono:     1.4;    /* Code / mono */

/* ─── LETTER SPACING ─────────────────────────────── */
--tracking-tight:   -0.03em;  /* Large display text */
--tracking-normal:   0em;
--tracking-wide:     0.05em;  /* Labels, uppercase tags */
--tracking-wider:    0.1em;   /* Section markers */
--tracking-widest:   0.2em;   /* Tiny all-caps metadata */
```

### 3.3 Typographic Classes (Utility)

```css
/* Hero headline — massive, tight */
.type-hero {
  font-family: var(--font-display);
  font-size: var(--text-display-2xl);
  font-weight: 800;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
}

/* Section title */
.type-section-title {
  font-family: var(--font-display);
  font-size: var(--text-display-md);
  font-weight: 700;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
}

/* Section label — above title, monospace */
.type-section-label {
  font-family: var(--font-label);
  font-size: var(--text-mono-sm);
  font-weight: 400;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--accent-mint-text);
}

/* Card title */
.type-card-title {
  font-family: var(--font-heading);
  font-size: var(--text-h3);
  font-weight: 600;
  line-height: var(--leading-snug);
}

/* Body paragraph */
.type-body {
  font-family: var(--font-body);
  font-size: var(--text-body-md);
  font-weight: 400;
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
}

/* Inline code / tag */
.type-code {
  font-family: var(--font-mono);
  font-size: var(--text-mono-md);
  color: var(--text-code);
}

/* Pull quote */
.type-pullquote {
  font-family: var(--font-display);
  font-size: clamp(20px, 2.5vw, 32px);
  font-weight: 500;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--text-primary);
}
```

---

## 4. Component Library — Every Component Defined

This section defines every reusable UI component. Each component entry includes: purpose, variants, anatomy, CSS/class rules, interaction states, and accessibility requirements.

---

### 4.1 NAVBAR

**Purpose:** Site-wide navigation. Sticky on scroll. Transparent at top, opaque after 60px scroll.

**Desktop anatomy (left → right):**
```
[C.O.D.E LOGO] ············· [Home] [About] [Projects] [Team] [Events] [Contact] ····· [Contact Us →]
```

**Mobile anatomy:**
```
[C.O.D.E LOGO] ············································· [≡ MENU]
```

**CSS Behavior:**
```css
.navbar {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  height: 64px;
  padding: 0 var(--space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background var(--duration-slow) var(--ease-out),
              border-color var(--duration-slow) var(--ease-out);
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom-color: var(--border-subtle);
}
```

**Logo:**
- Text-based wordmark: `C.O.D.E`
- Font: `Syne 800`
- Size: `22px`
- The four dots between letters are colored `var(--accent-mint)`
- Example: `C` + `·` + `O` + `·` + `D` + `·` + `E` where `·` = mint
- On hover: the dots pulse with a very subtle glow

**Nav Links:**
- Font: `DM Sans 500`, `14px`
- Color: `var(--text-secondary)` default, `var(--text-primary)` on hover
- Active state: `var(--text-primary)` + mint underline `2px` extending from left
- Underline animation: `scaleX(0) → scaleX(1)`, origin `left`, `200ms ease-out`
- Spacing: `24px` gap between links

**CTA Button (Navbar):**
- Label: `Contact Us →`
- Variant: Ghost — border `1px solid var(--border-default)`, transparent background
- Font: `DM Sans 600`, `13px`
- Padding: `8px 16px`
- Radius: `var(--radius-md)`
- Hover: `background var(--bg-elevated)`, `border-color var(--border-emphasis)`
- Transition: `200ms ease`

**Mobile Menu:**
- Trigger: hamburger icon (3 lines → X on open)
- Animation: lines morph smoothly to X, not jump
- Menu: fullscreen overlay, `background: var(--bg-base)`, `z-index: var(--z-overlay)`
- Entry animation: overlay fades in (`opacity 0→1`, `300ms`), links enter staggered from bottom (`translateY(20px)→0`, `80ms stagger`)
- Links: large (`28px`, `Syne 700`), stacked vertically, centered
- Exit: reverse of entry

**Accessibility:**
- `role="navigation"` on `<nav>`
- `aria-label="Main navigation"`
- Mobile trigger: `aria-expanded`, `aria-controls="mobile-menu"`
- Skip link: `<a href="#main" class="skip-link">Skip to content</a>` — visible on focus

---

### 4.2 HERO SECTION

**Purpose:** First impression. Full viewport. Immediately signals what C.O.D.E is.

**Layout:** CSS Grid, 2 columns on desktop, 1 on mobile.

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   [ EST. 2021 — MMCOE, PUNE ]                           │
│                                                         │
│   We don't just                                         │
│   learn to code.          ┌──────────────────────┐      │
│   We build.               │  > TERMINAL WIDGET   │      │
│                           │  > or 3D mesh visual │      │
│   Club of Developers      │  > or orbit canvas   │      │
│   and Engineers at MMCOE. └──────────────────────┘      │
│                                                         │
│   [→ See Our Work]   [Meet the Team ↗]                  │
│                                                         │
│   ──────────────────────────────────                    │
│   Scroll or use arrow keys ↓                            │
└─────────────────────────────────────────────────────────┘
```

**CSS:**
```css
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--space-16);
  padding: var(--space-24) var(--space-8);
  position: relative;
  overflow: hidden;
}

/* Background layers (bottom to top): */
/* 1. var(--bg-base) — solid canvas */
/* 2. .texture-dot-grid — opacity 5% */
/* 3. .texture-scanline — opacity 3% */
/* 4. gradient blob 1 (mint, bottom-left) */
/* 5. gradient blob 2 (blue, top-right) */
/* 6. content */
```

**Pre-heading badge:**
```
[ EST. 2021 — MMCOE, PUNE ]
```
- Font: `JetBrains Mono 400`, `12px`
- Color: `var(--accent-mint-text)`
- Letter-spacing: `0.12em`
- No background — text only with brackets
- Entry animation: fade in, `200ms`, first element to appear

**Hero Headline:**
```
We don't just
learn to code.
We build.
```
- Font: `Syne 800`
- Size: `clamp(48px, 7vw, 96px)`
- Color: `var(--text-primary)`
- Line-height: `1.05`
- Letter-spacing: `-0.03em`
- Each word enters separately: `translateY(30px) opacity(0) → 0 opacity(1)`, `80ms stagger`
- "build." ends with a blinking cursor `█` in mint green

**Sub-description:**
```
C.O.D.E is the exclusive technical club of MMCOE's Computer Engineering 
Department. We take on real consultancy projects, build production software, 
and create engineers who are ready for industry on day one.
```
- Font: `IBM Plex Sans 400`, `17px`
- Color: `var(--text-secondary)`
- Max-width: `500px`
- Entry: after headline finishes, fade in + `translateY(16px)→0`, `300ms`

**CTA Row:**
- Two buttons side by side, `16px` gap
- Primary: `→ See Our Work` — filled mint background, dark text (see Button component)
- Secondary: `Meet the Team ↗` — ghost border
- Entry: after sub-description, stagger `100ms` between buttons

**Scroll Hint:**
- Bottom of hero, centered
- Text: `Scroll to explore ↓`
- Font: `Syne Mono`, `11px`, `var(--text-muted)`
- The `↓` arrow bounces on a 2s loop (`translateY(0)→(6px)→(0)`)
- Fades out when user starts scrolling (IntersectionObserver or scroll listener)

**Right Column Visual — 3 Options (pick one):**

**Option A: Animated Terminal**
- Window chrome: dark rounded box, 3 traffic-light dots (use `#2A2A2A` for all three — no color)
- Content: terminal session plays on loop with `typed.js` or CSS animation
- Terminal session:
  ```
  > whoami
  C.O.D.E — Club of Developers and Engineers
  
  > cat mission.txt
  Elevate technical knowledge to meet industrial demands.
  
  > ls domains/
  ai-ml/     web-dev/     android/     ui-ux/
  
  > git log --oneline | head -3
  a3f91c2 shipped consultancy project for ARAI
  7e8d441 completed AI cohort session
  2b3f109 hacksprint — 1st place
  
  > status
  ACTIVE ████████░░ 80% toward next milestone
  █ _
  ```
- Cursor blinks in mint green (`1s` blink cycle)
- After loop completes, 3s pause then restarts

**Option B: Animated Domain Orbit**
- SVG or canvas-based
- Center: `C.O.D.E` wordmark
- 4 orbiting icons (one per domain) at different radii and speeds
- Subtle connecting lines, gradient from center outward
- Mouse hover pauses orbit

**Option C: Reactive Dot Grid**
- Canvas element, 40×30 dots
- Dots are `#2A2A2A` default
- Dots near mouse cursor light up in mint green, fading by distance
- Movement creates a ripple of mint across the grid

---

### 4.3 STATS BAR

**Purpose:** Immediate social proof. Numbers that signal scale and activity.

**Layout:** Horizontal flex row, `justify-content: space-around`, `48px` vertical padding. Dark strip with `1px` top and bottom borders (`var(--border-subtle)`).

**Stats to display:**
| # | Number | Label |
|---|---|---|
| 1 | `2021` | `Year Founded` |
| 2 | `[N]+` | `Active Members` |
| 3 | `[N]+` | `Projects Completed` |
| 4 | `[N]+` | `Consultancy Clients` |
| 5 | `4` | `Technical Domains` |

**Stat item anatomy:**
```css
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.stat-number {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 56px);
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.04em;
}

.stat-label {
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
}
```

**Animation:**
- On first viewport entry (IntersectionObserver, threshold 0.5):
- Numbers count up from `0` to final value
- Duration: `1500ms` with `easeOutExpo` easing
- Numbers with `+` suffix: add `+` only after count completes
- Stagger: `100ms` between each stat

**Dividers between stats:**
- Vertical `1px` line, `var(--border-subtle)`, height `40px`, centered

---

### 4.4 SECTION HEADER COMPONENT

Reused across all pages and sections. Always the same structure.

**Anatomy:**
```
[ SECTION — LABEL ]
──────────────────
Section Title Text Here
Optional sub-description paragraph text below the heading.
```

**Variants:**
- `left-aligned` (default for most sections)
- `center-aligned` (used for CTA sections, join section)
- `right-aligned` (used for alternating layouts)

**Classes:**
```css
.section-label {
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent-mint-text);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.section-label::before {
  content: '';
  display: block;
  width: 20px;
  height: 1px;
  background: var(--accent-mint);
}

.section-title {
  font-family: var(--font-display);
  font-size: var(--text-display-md);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
  max-width: 640px;
}

.section-description {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 560px;
}
```

---

### 4.5 BUTTON COMPONENT

**Variants:**

**A. Primary (Filled Mint)**
```css
.btn-primary {
  background: var(--accent-mint);
  color: var(--text-invert);
  border: 1px solid var(--accent-mint);
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 600;
  padding: 11px 22px;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--duration-base) var(--ease-default);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  letter-spacing: 0.01em;
}

.btn-primary:hover {
  background: var(--accent-mint-dim);
  border-color: var(--accent-mint-dim);
  box-shadow: var(--shadow-mint-md);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-mint-sm);
}
```

**B. Ghost (Outlined)**
```css
.btn-ghost {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-default);
  /* Same sizing as btn-primary */
}
.btn-ghost:hover {
  background: var(--bg-elevated);
  border-color: var(--border-emphasis);
}
```

**C. Ghost Mint (Outlined, Mint Color)**
```css
.btn-ghost-mint {
  background: transparent;
  color: var(--accent-mint);
  border: 1px solid var(--border-mint);
}
.btn-ghost-mint:hover {
  background: var(--accent-mint-pale);
  box-shadow: var(--shadow-mint-sm);
}
```

**D. Text Link Button**
```css
.btn-text {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  cursor: pointer;
}
.btn-text:hover {
  color: var(--text-primary);
}
.btn-text:hover .btn-arrow {
  transform: translateX(4px);
}
.btn-arrow {
  transition: transform var(--duration-base) var(--ease-spring);
}
```

**Sizes:**
- `sm`: `padding: 7px 14px`, `font-size: 13px`
- `md` (default): `padding: 11px 22px`, `font-size: 14px`
- `lg`: `padding: 14px 28px`, `font-size: 15px`

**States for all variants:**
- Default, Hover, Active/Pressed, Focus (mint outline), Disabled (50% opacity, no pointer-events), Loading (spinner replaces text)

---

### 4.6 PROJECT CARD

**Full anatomy:**
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ┌──────────────────────────────────────────────┐  │
│   │                                              │  │
│   │   [Project image / dark placeholder with     │  │
│   │    project name as large watermark text]     │  │
│   │                                              │  │
│   └──────────────────────────────────────────────┘  │
│                                                      │
│   [● AI-ML]  [CONSULTANCY]               [2024]      │
│                                                      │
│   Project Name Here                                  │
│   One-line description of what this project does     │
│   and why it matters. Keep to two lines max.         │
│                                                      │
│   [Python] [TensorFlow] [FastAPI]                    │
│                                                      │
│   [→ View Project]              [👤 4 members]       │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**CSS:**
```css
.project-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: 
    transform var(--duration-slow) var(--ease-spring),
    border-color var(--duration-base) var(--ease-default),
    box-shadow var(--duration-slow) var(--ease-default);
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-mint);
  box-shadow: var(--shadow-mint-md), var(--shadow-lg);
}

.project-card-image {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--bg-elevated);
  position: relative;
}

.project-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-lazy) var(--ease-out);
}

.project-card:hover .project-card-image img {
  transform: scale(1.04);
}

.project-card-body {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex: 1;
}

.project-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
}

.project-card-title {
  font-family: var(--font-heading);
  font-size: var(--text-h4);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.project-card-description {
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  color: var(--text-secondary);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: var(--space-3);
  border-top: 1px solid var(--border-subtle);
}
```

**Tech Stack Tags:**
```css
.tech-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
  color: var(--text-muted);
  border: 1px solid var(--border-subtle);
  white-space: nowrap;
}
```

---

### 4.7 DOMAIN BADGE

Used everywhere a domain needs to be labeled.

```css
.domain-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
  border: 1px solid;
}

/* The leading dot */
.domain-badge::before {
  content: '●';
  font-size: 7px;
}

/* Domain variants */
.domain-badge.ai-ml {
  color: var(--domain-ai);
  border-color: var(--domain-ai);
  background: color-mix(in srgb, var(--domain-ai) 8%, transparent);
}
.domain-badge.web-dev {
  color: var(--domain-web);
  border-color: var(--domain-web);
  background: color-mix(in srgb, var(--domain-web) 8%, transparent);
}
.domain-badge.android {
  color: var(--domain-android);
  border-color: var(--domain-android);
  background: color-mix(in srgb, var(--domain-android) 8%, transparent);
}
.domain-badge.ui-ux {
  color: var(--domain-uiux);
  border-color: var(--domain-uiux);
  background: color-mix(in srgb, var(--domain-uiux) 8%, transparent);
}
```

**Type Badge (Consultancy / Internal / Competition):**
```css
.type-badge {
  font-family: var(--font-label);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
  color: var(--text-muted);
  border: 1px solid var(--border-subtle);
}
.type-badge.consultancy {
  color: var(--accent-orange);
  border-color: var(--accent-orange);
  background: rgba(255, 140, 66, 0.08);
}
.type-badge.internal {
  color: var(--accent-blue);
  border-color: var(--accent-blue);
  background: rgba(77, 159, 255, 0.08);
}
.type-badge.competition {
  color: var(--accent-purple);
  border-color: var(--accent-purple);
  background: rgba(191, 95, 255, 0.08);
}
```

---

### 4.8 TEAM MEMBER CARD

**Two sizes — Featured (leadership) and Grid (all members)**

**Featured Card:**
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   ┌────────────────────────────────────────────┐   │
│   │                                            │   │
│   │            [Photo — 3:4 ratio]             │   │
│   │                                            │   │
│   └────────────────────────────────────────────┘   │
│                                                     │
│   Full Name                             [● DOMAIN]  │
│   Role / Position                                   │
│   Batch — Year                                      │
│                                                     │
│   Short one-liner about them or what they do.       │
│                                                     │
│   [LinkedIn ↗]  [GitHub ↗]                          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Grid Card (compact):**
```
┌──────────────────────────────┐
│  [Photo — circle, 80px]      │
│                              │
│  Full Name                   │
│  Role                        │
│  [● Domain Badge]            │
│  [LinkedIn] [GitHub]         │
└──────────────────────────────┘
```

**Hover behavior on grid card:**
- Card lifts `translateY(-4px)`
- Photo scales up slightly `scale(1.05)`
- Border becomes `var(--border-mint)`
- Social icons become visible (opacity `0→1`, `150ms`)

---

### 4.9 DOMAIN CARD (Homepage + Domains Page)

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│   [Domain Icon SVG — 32px, domain color]               │
│                                                        │
│   Domain Name                              [→]         │
│   Sub-label: what we do                               │
│                                                        │
│   One to two sentences describing the domain          │
│   and what members build within it.                   │
│                                                        │
│   ── ── ── ── ── ── ── ── ── ── ── ── ── ──           │
│                                                        │
│   [Python]  [TensorFlow]  [PyTorch]  +2 more          │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**CSS:**
```css
.domain-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: all var(--duration-slow) var(--ease-spring);
  position: relative;
  overflow: hidden;
}

/* Top-left corner accent line */
.domain-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--domain-color); /* Set via inline style / CSS var override */
  transition: width var(--duration-slow) var(--ease-out);
}

.domain-card:hover {
  border-color: var(--domain-color);
  box-shadow: 0 0 30px color-mix(in srgb, var(--domain-color) 15%, transparent);
  transform: translateY(-4px);
}

.domain-card:hover::before {
  width: 100%;
  opacity: 0.15;
}
```

---

### 4.10 TERMINAL WIDGET (Decorative)

Used in hero and about page. Simulates a developer terminal session.

```html
<div class="terminal">
  <div class="terminal-chrome">
    <div class="terminal-dot"></div>
    <div class="terminal-dot"></div>
    <div class="terminal-dot"></div>
    <span class="terminal-title">bash — team@code-mmcoe</span>
  </div>
  <div class="terminal-body">
    <div class="terminal-line">
      <span class="terminal-prompt">$</span>
      <span class="terminal-command typed">whoami</span>
    </div>
    <div class="terminal-output">C.O.D.E — Club of Developers and Engineers, MMCOE</div>
    <!-- ... more lines -->
  </div>
</div>
```

```css
.terminal {
  background: #0D1117;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: 13px;
  box-shadow: var(--shadow-lg);
  max-width: 520px;
}

.terminal-chrome {
  background: var(--bg-elevated);
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--border-subtle);
}

.terminal-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--bg-overlay);
}

.terminal-title {
  font-family: var(--font-label);
  font-size: 11px;
  color: var(--text-muted);
  margin-left: auto;
  margin-right: auto;
}

.terminal-body {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 280px;
}

.terminal-prompt {
  color: var(--accent-mint);
  margin-right: 8px;
  user-select: none;
}

.terminal-command {
  color: var(--text-primary);
}

.terminal-output {
  color: var(--text-secondary);
  padding-left: 20px;
  margin-bottom: 8px;
}

/* Blinking cursor */
.terminal-cursor {
  display: inline-block;
  width: 8px;
  height: 14px;
  background: var(--accent-mint);
  animation: blink 1s step-end infinite;
  vertical-align: text-bottom;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

---

### 4.11 EVENT CARD

```
┌──────────────────────────────────────────────────────┐
│   ┌──────────────────────────────────────────────┐  │
│   │   [Event photo — 16:9]                       │  │
│   └──────────────────────────────────────────────┘  │
│                                                      │
│   [WORKSHOP]              Dec 2024                   │
│                                                      │
│   Workshop on UI/UX Design                          │
│   Hands-on session covering design systems,         │
│   Figma workflows, and user research techniques.    │
│                                                      │
│   [→ View Event]                   [👤 38 attended]  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

Same hover behavior as project card: lift + border glow.

---

### 4.12 CONSULTANCY SECTION CARD (Homepage)

Full-width dark card. This is a "feature banner" not a grid card.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  CONSULTANCY                                                            │
│                                                                         │
│  We take real briefs.                    ┌─────────────────────────┐   │
│  We deliver real results.                │  [Abstract visual —     │   │
│                                          │   circuit, mesh, or     │   │
│  C.O.D.E works with external clients     │   schematic aesthetic]  │   │
│  on genuine consultancy projects —       └─────────────────────────┘   │
│  not simulated case studies.                                            │
│                                                                         │
│  Past clients: Newton's Software · Ellicium · ARAI                     │
│                                                                         │
│  [Partner With Us →]    [See Consultancy Projects →]                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

Background: `var(--bg-surface)` with a subtle mint gradient blob at right edge (`opacity: 0.06`).

---

### 4.13 BREADCRUMB

Used on all inner pages.

```
Home / Projects / ARAI Consultancy Project
```

```css
.breadcrumb {
  font-family: var(--font-label);
  font-size: 12px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.04em;
  margin-bottom: var(--space-8);
}

.breadcrumb a {
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--duration-fast);
}
.breadcrumb a:hover {
  color: var(--text-secondary);
}

.breadcrumb-separator {
  color: var(--border-emphasis);
}
```

---

### 4.14 FILTER BAR

Used on Projects and Events pages.

```
[All ✓]  [AI-ML]  [Web Dev]  [Android]  [UI/UX]    |    [All]  [Consultancy]  [Internal]  [Competition]
```

```css
.filter-bar {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-bottom: var(--space-8);
  padding-bottom: var(--space-6);
  border-bottom: 1px solid var(--border-subtle);
}

.filter-btn {
  font-family: var(--font-label);
  font-size: 12px;
  letter-spacing: 0.06em;
  padding: 6px 14px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: all var(--duration-fast);
}
.filter-btn:hover {
  background: var(--bg-elevated);
  color: var(--text-secondary);
  border-color: var(--border-default);
}
.filter-btn.active {
  background: var(--accent-mint-pale);
  color: var(--accent-mint-text);
  border-color: var(--border-mint);
}
```

---

### 4.15 TOAST / NOTIFICATION

For form submission feedback.

```
┌──────────────────────────────────────────────────┐
│  ✓  Message sent. We'll get back to you soon.    │
└──────────────────────────────────────────────────┘
```

```css
.toast {
  position: fixed;
  bottom: var(--space-8);
  right: var(--space-8);
  z-index: var(--z-toast);
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-6);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-primary);
  box-shadow: var(--shadow-lg);
  animation: toast-enter 300ms var(--ease-spring);
}

.toast.success {
  border-left: 3px solid var(--accent-mint);
}
.toast.error {
  border-left: 3px solid var(--accent-red);
}

@keyframes toast-enter {
  from { transform: translateY(16px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
```

---

### 4.16 SCROLL PROGRESS INDICATOR

```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: var(--accent-mint);
  z-index: calc(var(--z-sticky) + 1);
  transition: width 50ms linear;
  box-shadow: var(--shadow-mint-sm);
  transform-origin: left;
}
```

JS: `width = (scrollY / (documentHeight - windowHeight)) * 100 + '%'`

---

### 4.17 CUSTOM CURSOR

```css
.cursor-dot {
  width: 8px;
  height: 8px;
  background: var(--accent-mint);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: var(--z-cursor);
  transition: transform 80ms var(--ease-out),
              opacity 200ms;
  mix-blend-mode: difference; /* Optional: makes cursor visible on all backgrounds */
}

.cursor-ring {
  width: 36px;
  height: 36px;
  border: 1px solid var(--accent-mint);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: var(--z-cursor);
  transition: transform 150ms var(--ease-out),
              width 200ms var(--ease-spring),
              height 200ms var(--ease-spring),
              opacity 200ms;
  transform: translate(-14px, -14px); /* Center offset */
}

/* On hover over interactive elements */
.cursor-ring.hovering {
  width: 56px;
  height: 56px;
  transform: translate(-24px, -24px);
  opacity: 0.6;
}
```

JS: Track `mousemove`, update `cursor-dot` position instantly, use `requestAnimationFrame` for `cursor-ring` with slight lag.

---

### 4.18 FOOTER

**Layout:** Dark strip, 5 columns on desktop, stacks on mobile.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   C·O·D·E                   NAVIGATE    DOMAINS     CONNECT             │
│   Club of Developers        ─────────   ─────────   ──────              │
│   and Engineers             Home        AI / ML     LinkedIn            │
│   MMCOE, Pune               About       Web Dev     Instagram           │
│                             Projects    Android     GitHub              │
│   We build things that      Team        UI / UX     HuggingFace         │
│   matter.                   Events                  Email               │
│                             Contact                                     │
│                                                                         │
│   ─────────────────────────────────────────────────────────────────    │
│   © 2025 C.O.D.E — MMCOE, Pune.   Built by the team.   [↑ Back to top] │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Footer top section:** `padding: 64px 0` — spacious, dark
**Bottom bar:** `border-top: 1px solid var(--border-subtle)`, `padding: 20px 0`

**"Back to Top" button behavior:**
- Appears only after scrolling > 400px
- Smooth scroll to top on click
- Fade in/out

---

## 5. Animation & Motion System

### 5.1 Philosophy

Motion should feel like physics, not magic. Everything that moves should feel like it has weight, inertia, and intention. No animation exists purely for decoration — each one either reveals content meaningfully or provides feedback to an interaction.

**Three animation categories:**
1. **Reveal animations** — Content entering viewport for the first time
2. **Interaction animations** — Responses to hover, click, focus
3. **Transition animations** — Page changes, modal opens/closes, tab switches

### 5.2 Reveal Animations (Scroll-Triggered)

Use `IntersectionObserver` with `threshold: 0.15`. Add `.is-visible` class when element enters viewport. CSS transitions handle the rest.

```css
/* Base state — all animatable elements start here */
[data-animate] {
  opacity: 0;
  transform: translateY(28px);
  transition: 
    opacity 600ms var(--ease-out),
    transform 600ms var(--ease-out);
}

[data-animate].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
[data-animate-stagger] > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 500ms var(--ease-out), transform 500ms var(--ease-out);
}

[data-animate-stagger].is-visible > *:nth-child(1) { transition-delay: 0ms; }
[data-animate-stagger].is-visible > *:nth-child(2) { transition-delay: 80ms; }
[data-animate-stagger].is-visible > *:nth-child(3) { transition-delay: 160ms; }
[data-animate-stagger].is-visible > *:nth-child(4) { transition-delay: 240ms; }
[data-animate-stagger].is-visible > *:nth-child(5) { transition-delay: 320ms; }
[data-animate-stagger].is-visible > *:nth-child(6) { transition-delay: 400ms; }

[data-animate-stagger].is-visible > * {
  opacity: 1;
  transform: translateY(0);
}
```

**Specific reveal variants:**
- `data-animate="fade"` — opacity only, no transform
- `data-animate="slide-up"` — default (translateY 28px)
- `data-animate="slide-left"` — translateX(-28px)
- `data-animate="slide-right"` — translateX(28px)
- `data-animate="scale"` — scale(0.95) → scale(1) + fade

### 5.3 Hero Entry Sequence

Strict timed sequence on page load:

```
0ms     — Page background renders (#0A0A0A)
100ms   — Navbar fades in (opacity 0→1, 300ms)
300ms   — Pre-heading badge types in or fades in (200ms)
500ms   — Hero line 1 enters (translateY(30px)→0 + fade, 500ms)
650ms   — Hero line 2 enters (stagger +150ms)
800ms   — Hero line 3 enters (stagger +150ms, "We build." with cursor)
1050ms  — Sub-description fades in (400ms)
1350ms  — CTA buttons stagger in (100ms between each)
1600ms  — Right-column visual begins animating in
1800ms  — Scroll hint appears (fade, 300ms)
2500ms+ — Terminal widget begins typing sequence (right column)
```

### 5.4 Counter Animation

```javascript
function animateCounter(element, target, duration = 1500) {
  const start = performance.now();
  const isFloat = target % 1 !== 0;
  
  function update(timestamp) {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    
    // easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.floor(eased * target);
    
    element.textContent = current + (element.dataset.suffix || '');
    
    if (progress < 1) requestAnimationFrame(update);
  }
  
  requestAnimationFrame(update);
}
```

### 5.5 Page Transitions (if using React Router / Next.js)

```css
/* Outgoing page */
.page-exit {
  animation: pageExit 250ms var(--ease-in) forwards;
}

/* Incoming page */
.page-enter {
  animation: pageEnter 350ms var(--ease-out) forwards;
}

@keyframes pageExit {
  to { opacity: 0; transform: translateY(-12px); }
}

@keyframes pageEnter {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### 5.6 Micro-Interactions Catalog

| Element | Trigger | Animation |
|---|---|---|
| Nav link | Hover | Underline `scaleX(0→1)` from left, `200ms` |
| Primary button | Hover | `translateY(-1px)` + mint glow shadow |
| Primary button | Click | `translateY(0)` + slightly dimmer glow |
| Project card | Hover | `translateY(-6px)` + border glow + image scale |
| Team card | Hover | `translateY(-4px)` + social icon reveal |
| Domain card | Hover | `translateY(-4px)` + border tint + top line extends |
| Footer social icons | Hover | `scale(1.15)` + color brightens |
| CTA arrow text | Hover | Arrow `translateX(4px)` |
| Logo dots | Hover | Dots glow pulse 1 cycle |
| Hamburger | Click | Line morph animation to X (300ms) |
| Filter button | Click | Background fill fade + border change |
| Form input | Focus | Border becomes mint + soft mint glow box-shadow |
| Scroll indicator | Constant | Width updates on scroll, `50ms` transition |

---

## 6. Page-by-Page Full Specification

---

### 6.1 HOME PAGE (`/`)

**Complete section sequence:**

```
[NAVBAR]
[01 HERO]
[02 STATS BAR]
[03 ABOUT TEASER]
[04 DOMAINS]
[05 FEATURED PROJECTS]
[06 CONSULTANCY SPOTLIGHT]
[07 TEAM TEASER]
[08 EVENTS TEASER]
[09 JOIN / CTA]
[FOOTER]
```

Each section below is specified at implementation level.

---

#### SECTION 01 — HERO

*(Full spec in Component 4.2. Additional home-specific notes:)*

The hero is the only place on the site where a full-viewport dark background shows with the dot grid texture AND the scanline overlay simultaneously. It creates the deepest "terminal room" atmosphere on the entire site.

The gradient blobs behind the hero:
- Blob 1: centered at `(10%, 85%)`, `radial-gradient`, `800px × 500px`, color `#00FF94`, opacity `0.04`
- Blob 2: centered at `(90%, 15%)`, `radial-gradient`, `600px × 400px`, color `#4D9FFF`, opacity `0.03`

---

#### SECTION 02 — STATS BAR

*(Full spec in Component 4.3)*

Background: `var(--bg-surface)`.  
Vertical padding: `56px` top and bottom.  
Full-bleed width.

On mobile: 2-column grid, 3 rows. Dividers become horizontal lines between rows.

---

#### SECTION 03 — ABOUT TEASER

**Section Label:** `ABOUT US`  
**Section Title:** `Built different. By design.`

**Layout:** 2 columns. Left = large pull quote + CTA link. Right = 3 objective tiles stacked.

**Pull Quote (left):**
```
"A club of the students,
by the students, and 
for the students —
built to close the gap
between college 
and industry."
```
- Font: `Syne 500 italic`, `clamp(20px, 2.5vw, 30px)`
- Color: `var(--text-primary)`
- Left border: `3px solid var(--accent-mint)`, `16px padding-left`

**Objective Tiles (right):**

Tile structure:
```
[─── 01 ─────────────────────────]
 Industry Alignment
 Build in domains that employers actually hire for.
 Python, AI, React, Kotlin — we stay current.
```

```css
.objective-tile {
  padding: var(--space-5) 0;
  border-bottom: 1px solid var(--border-subtle);
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: var(--space-4);
}

.objective-number {
  font-family: var(--font-label);
  font-size: 11px;
  color: var(--accent-mint-text);
  letter-spacing: 0.1em;
  padding-top: 2px;
}

.objective-title {
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.objective-body {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

---

#### SECTION 04 — DOMAINS

**Section Label:** `WHAT WE BUILD`  
**Section Title:** `Four domains. One team.`  
**Description:** `Every member of C.O.D.E works within one of four technical domains. Projects and consultancy work are staffed across domains for complete solutions.`

**Grid:** `2×2` on desktop, `1×4` stacked on tablet/mobile.  
**Gap:** `var(--space-4)`

Domain cards use Component 4.9. Each card has `--domain-color` set via inline style.

**Domain order:**
1. AI / Machine Learning (top-left) — `--domain-color: var(--domain-ai)`
2. Web Development (top-right) — `--domain-color: var(--domain-web)`
3. Android Development (bottom-left) — `--domain-color: var(--domain-android)`
4. UI / UX Design (bottom-right) — `--domain-color: var(--domain-uiux)`

**CTA below grid:** `Explore all domains in depth →` (text link)

---

#### SECTION 05 — FEATURED PROJECTS

**Section Label:** `SELECTED WORK`  
**Section Title:** `Projects that shipped.`  
**Description:** `From consultancy engagements to hackathon wins — these are things we actually built.`

**Layout:** Horizontal scrollable strip on desktop (overflow-x: auto, snap-type: x mandatory), vertical stack on mobile.

**Show:** 4 featured project cards.

**CTA:** `View all projects →` — right-aligned, below the strip.

**Scroll hint for strip (desktop only):** Faded arrow `→` on right edge of strip indicating scrollability.

---

#### SECTION 06 — CONSULTANCY SPOTLIGHT

**No section label**  
**Full-width card section with internal layout**

**Left text block:**
- Eyebrow: `CONSULTANCY WORK`
- Headline: `We take real briefs. We deliver real results.`
- Body: `C.O.D.E works with external clients on genuine projects — not simulated assignments. We've delivered for companies in Pune and beyond, across AI, web, and design domains.`
- Client name pills: `Newton's Software` · `Ellicium` · `ARAI`
- CTAs: `[Become a Client →]` + `[See Our Consultancy Work →]`

**Right visual:** Abstract schematic/circuit SVG illustration in mint/dark. Could be a stylized network graph or architecture diagram illustration.

**Background treatment:**
- `var(--bg-surface)`
- Mint glow blob: `position: absolute; right: -100px; top: 50%; transform: translateY(-50%); width: 300px; height: 300px; background: radial-gradient(circle, #00FF9410, transparent 70%)`

---

#### SECTION 07 — TEAM TEASER

**Section Label:** `THE TEAM`  
**Section Title:** `People who ship.`

**Layout:** Horizontal strip of overlapping avatar circles (CSS `margin-left: -12px` for overlap) with a count indicator.

```
  [Photo1] [Photo2] [Photo3] [Photo4] [Photo5]  +[N] members  →  Meet the Team
```

Each avatar:
- `48px` circle, `border: 2px solid var(--bg-base)` (creates overlap illusion)
- On hover: small tooltip shows name + role

**Domain distribution bar below avatars:**
```
AI/ML   ████████░░░░   40%
Web Dev ██████░░░░░░   30%
Android ████░░░░░░░░   20%
UI/UX   ██░░░░░░░░░░   10%
```
Visual bar, not just numbers.

---

#### SECTION 08 — EVENTS TEASER

**Section Label:** `RECENT ACTIVITIES`  
**Section Title:** `What we've been up to.`

**Layout:** 3-column card grid (masonry or uniform), showing the 6 most recent events.

Event cards use Component 4.11.

**CTA:** `See all events →`

---

#### SECTION 09 — JOIN / CTA SECTION

**Full-width, centered content, high contrast.**

**Background treatment:**
- `var(--bg-surface)` with a very subtle centered radial mint gradient glow
- Horizontal line decorators above and below the text (thin, fading to transparent)

**Content:**
```
──────── ◆ ────────

Think you have what it takes?

C.O.D.E membership is selective. We look for people who 
build, not just people who attend. If you're from MMCOE's 
Computer Engineering department and you're serious, 
we want to hear from you.

   [Get In Touch →]      [Follow Our Work ↗]

──────── ◆ ────────
```

- Decorative `◆` is `var(--accent-mint)`
- Horizontal lines are `var(--border-subtle)` fading to transparent
- Headline: `Syne 800`, `clamp(28px, 4vw, 52px)`, centered
- Body: max-width `520px`, centered
- Buttons: centered, stacked on mobile

---

### 6.2 ABOUT PAGE (`/about`)

**URL:** `/about`  
**Title:** `About — C.O.D.E | MMCOE Pune`

**Section sequence:**

```
[NAVBAR]
[PAGE HERO]
[ORIGIN STORY]
[AIMS & OBJECTIVES]
[WHAT MAKES US DIFFERENT]
[HOW WE OPERATE — PROCESS]
[OUR VALUES]
[FACULTY MENTORSHIP]
[FOOTER]
```

#### PAGE HERO:
- Breadcrumb: `Home / About`
- Section label: `ABOUT C.O.D.E`
- Headline: `Who we are.`
- Sub: `The story behind MMCOE's most project-focused technical club.`
- Background: dot grid, no scanline (hero-lite)

#### ORIGIN STORY:
- Section label: `THE BEGINNING`
- Headline: `From a classroom idea to real client work.`
- Full narrative text (3 paragraphs):

  > **P1:** "C.O.D.E was founded in June 2021 by students in the Computer Engineering Department at MMCOE, Pune. The founding idea was direct: the gap between what engineers learn in lectures and what companies actually need was too large. We were going to close it — not by adding more theory, but by building things."
  
  > **P2:** "The club started with a small group of selected members working across four domains: AI and Machine Learning, Web Development, Android, and UI/UX Design. From the start, the focus was on work that mattered — not academic projects filed away after assessment, but functional software delivered to real users."
  
  > **P3:** "By 2023, C.O.D.E had taken on its first external consultancy projects, working with companies like Newton's Software, Ellicium, and ARAI. Today, the club continues to be selective, collaborative, and committed to shipping work that reflects genuine engineering quality."

- Right side: timeline visualization (vertical, alternating left/right)

#### TIMELINE (visual component):
```
2021  ──●── Club Founded, June. First 15 members selected.
         │
2022  ──●── First hackathon participation. Domain structure solidified.
         │
2023  ──●── First external consultancy projects (Newton's Software, Ellicium).
         │
2024  ──●── ARAI project. Pune GPU Community collaboration. AI Cohort launched.
         │
2025  ──●── UI/UX and Prompt Engineering workshops. Expanded member base.
```

```css
.timeline {
  position: relative;
  padding-left: 32px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: linear-gradient(to bottom, var(--accent-mint), var(--border-subtle));
}
.timeline-item {
  position: relative;
  margin-bottom: var(--space-8);
}
.timeline-dot {
  position: absolute;
  left: -28px;
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent-mint);
  box-shadow: var(--shadow-mint-sm);
}
.timeline-year {
  font-family: var(--font-label);
  font-size: 11px;
  color: var(--accent-mint-text);
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}
.timeline-text {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

#### AIMS & OBJECTIVES:
- Section label: `OUR PURPOSE`
- Headline: `What C.O.D.E is here to do.`
- **Five objectives** displayed as numbered large cards:
  1. Align members' skills with latest industrial demands by working across diverse domains.
  2. Foster teamwork and practical learning through real projects and competitions.
  3. Organize diverse activities catering to specific student interests and engagement.
  4. Enhance technical knowledge while ensuring an enjoyable learning environment.
  5. Provide opportunities for students to contribute to industry through impactful projects.

Each objective: number (`Syne 800`, large, mint), title (`DM Sans 600`), body text.

#### WHAT MAKES US DIFFERENT (3-column):
| | | |
|---|---|---|
| **Selected Membership** | **Real Consultancy** | **Multi-Domain** |
| Not open to everyone. Members are chosen based on demonstrated capability and attitude. | We work on actual client projects with real deliverables, timelines, and stakeholders. | Four technical domains under one club. Cross-domain projects produce complete solutions. |

#### HOW WE OPERATE:
Horizontal process steps with connecting arrows:
```
[Selection] → [Onboarding] → [Domain Assignment] → [Project Work] → [Review] → [Showcase / Delivery]
```

Each step: number, title, 1-sentence description.

#### OUR VALUES (2×2 grid):
```
┌──────────────────────┐  ┌──────────────────────┐
│  CRAFT               │  │  CURIOSITY           │
│  We make things      │  │  We learn by doing,  │
│  that are made well. │  │  then doing better.  │
└──────────────────────┘  └──────────────────────┘
┌──────────────────────┐  ┌──────────────────────┐
│  COLLABORATION       │  │  IMPACT              │
│  The team is         │  │  We build for        │
│  the product.        │  │  results, not GPA.   │
└──────────────────────┘  └──────────────────────┘
```

#### FACULTY MENTORSHIP:
- Section label: `FACULTY MENTORS`
- Headline: `Guided by experience.`
- Brief text acknowledging faculty supervisors from MMCOE's CS Department
- Placeholder card(s) for faculty names, designation, department

---

### 6.3 PROJECTS PAGE (`/projects`)

**URL:** `/projects`  
**Title:** `Projects — C.O.D.E | MMCOE Pune`

**Layout:**
```
[PAGE HERO]
[FILTER BAR — STICKY]
[PROJECT COUNT + SORT]
[PROJECT GRID]
[LOAD MORE / PAGINATION]
```

#### PAGE HERO:
- Headline: `Projects.`
- Sub: `Everything we've built — from internal experiments to client-facing deliverables.`
- Live project count: `[N] projects across 4 domains` — updates with filter

#### FILTER BAR (sticky on scroll):
Two rows:
- Row 1 — Domain: `[All] [AI-ML] [Web Dev] [Android] [UI/UX]`
- Row 2 — Type + Year: `[All Types] [Consultancy] [Internal] [Competition]` + `[All Years] [2025] [2024] [2023] [2022]`

When filter is active: bar gets a subtle `box-shadow: 0 4px 20px var(--bg-base)` below it (fade-out from sticky).

#### PROJECT COUNT LINE:
```
Showing 12 projects   ·   Sorted by: Latest  ▾
```
- Right side: sort dropdown (Latest / Oldest / Domain)

#### PROJECT GRID:
- `3 columns` desktop, `2 columns` tablet, `1 column` mobile
- Gap: `var(--space-5)`
- Filter transitions: use `opacity + scale` transition when items hide/show (avoid layout shift)
- Empty state: "No projects found for this filter. Try a different combination." with a small illustration

#### Full Project Data Table (to populate into CMS or data file):

| Slug | Name | Domain | Type | Year | Tech Stack | Client / Context |
|---|---|---|---|---|---|---|
| `arai-consultancy` | ARAI Consultancy Project | AI-ML, Web | Consultancy | 2024 | Python, ML, Web | Automotive Research Assoc. of India |
| `newtons-software` | Newton's Software Capability | Web Dev | Consultancy | 2023 | React, Node.js | Newton's Software |
| `ellicium-project` | Ellicium Engagement | AI-ML | Consultancy | 2023 | Python, Data | Ellicium |
| `hacksprint` | Hacksprint | Web Dev | Competition | 2023 | React, Node.js, MongoDB | Internal hackathon |
| `gpu-community` | Pune GPU Community Project | AI-ML | Community | 2024 | CUDA, Python | Pune GPU Community |
| `ui-ux-workshop-project` | UI/UX Workshop Showcase | UI/UX | Internal | 2024 | Figma | Workshop output |
| `ai-cohort-project` | AI Cohort Capstone | AI-ML | Internal | 2024 | Python, TensorFlow | Cohort project |
| `ml-code-session` | ML Code Session Project | AI-ML | Internal | 2024 | scikit-learn, Python | Session output |

*(Add more as the club adds actual project data)*

---

### 6.4 PROJECT DETAIL PAGE (`/projects/[slug]`)

**URL:** `/projects/arai-consultancy` (example)

**Layout:**
```
[NAVBAR]
[BREADCRUMB: Home / Projects / Project Name]
[PROJECT HERO]
[PROJECT OVERVIEW]
[PROBLEM & SOLUTION]
[TECH STACK]
[GALLERY]
[TEAM CONTRIBUTORS]
[OUTCOMES & RESULTS]
[RELATED PROJECTS]
[FOOTER]
```

#### PROJECT HERO:
- Project name: `Syne 800`, very large
- Domain badge + Type badge + Year
- One-line description
- Client/context note if consultancy
- Hero image (full-width, 16:9 or 21:9, dark overlay at bottom)

#### PROBLEM & SOLUTION:
Two-column split:
```
┌─────────────────────────────┐  ┌─────────────────────────────┐
│  THE PROBLEM                │  │  OUR APPROACH               │
│  ───────────                │  │  ──────────────             │
│  Describe the challenge     │  │  How C.O.D.E tackled it.    │
│  the client or team faced.  │  │  Methodology and decisions. │
└─────────────────────────────┘  └─────────────────────────────┘
```

#### TECH STACK:
Grid of `tech-tag` badges (larger than inline tags: `14px`, `padding: 6px 14px`), grouped by category:
- Frontend, Backend, AI/ML, Tools, Design

#### GALLERY:
Lightbox-enabled image grid. 3 columns, masonry-style.
On image click: full-screen overlay with prev/next navigation.

#### TEAM CONTRIBUTORS:
Horizontal row of small team cards showing who worked on this project.

#### OUTCOMES:
- Metrics if available (performance numbers, user count, client satisfaction)
- Key learnings (2-3 bullet points)
- Links: GitHub repo (if public), live demo, client mention

---

### 6.5 CONSULTANCY PAGE (`/consultancy`)

**URL:** `/consultancy`  
**Title:** `Consultancy — C.O.D.E | MMCOE Pune`

**Target audience:** Companies and startups looking to engage C.O.D.E. This page must be the most polished, credibility-focused page on the site.

**Section sequence:**
```
[PAGE HERO — BUSINESS-FACING]
[WHAT WE OFFER]
[OUR PROCESS]
[WHY WORK WITH US]
[PAST CLIENTS]
[FEATURED CONSULTANCY PROJECTS]
[ENGAGEMENT ENQUIRY FORM]
[FOOTER]
```

#### PAGE HERO (Business-facing):
- Label: `CONSULTANCY`
- Headline: `Hire a team that ships.`
- Sub: `C.O.D.E takes on external consultancy projects from companies, startups, and research organizations. We deliver production-quality work across AI, web, Android, and design.`
- CTA: `Start an Enquiry →`
- Trust indicators below CTA: `[3+ client engagements]  ·  [MMCOE supervised]  ·  [Multi-domain team]`

#### WHAT WE OFFER:
Service tiles in a 2×3 grid (or 3×2):
1. **Full-Stack Web Development** — Frontend + Backend, REST APIs, database design, deployment. *React, Node.js, PostgreSQL, Next.js*
2. **AI / ML Model Development** — Custom models, data pipelines, integration, inference optimization. *Python, TensorFlow, PyTorch, FastAPI*
3. **Android Application Development** — Native Kotlin or cross-platform Flutter. *Kotlin, Jetpack Compose, Firebase*
4. **UI/UX Research & Design** — User research, wireframing, high-fidelity Figma prototypes, design systems. *Figma, Adobe XD*
5. **Technical Consulting** — Architecture review, technology selection, prototype development. *Any relevant stack*
6. **Data Analysis & Visualization** — Data processing, dashboards, insights. *Python, Pandas, Plotly*

#### OUR PROCESS (Step timeline):
```
[01 Brief]       →  You describe your project need
[02 Discovery]   →  We review, ask questions, assess feasibility
[03 Proposal]    →  We send a scope, timeline, and deliverables document
[04 Development] →  We build, with regular updates and check-ins
[05 Review]      →  You review progress, we iterate
[06 Delivery]    →  Final delivery with documentation and handoff
```

#### WHY WORK WITH US:
Three argument cards:
- **Student-priced, professional quality** — Work done by motivated students supervised by faculty. Competitive rates, serious output.
- **Modern technology stack** — We work in the same stacks industry uses today.
- **Institutional backing** — Projects run under MMCOE's Computer Engineering Department, adding academic credibility and quality oversight.

#### PAST CLIENTS:
Logo/name strip (horizontal, centered):
- Newton's Software
- Ellicium
- ARAI (Automotive Research Association of India)
- Pune GPU Community
- *(More as they come)*

Each shown as a text badge or logo box in `var(--bg-elevated)` with `var(--border-default)` border.

#### FEATURED CONSULTANCY PROJECTS:
3 project cards (filtered to type: Consultancy) linking to their detail pages.

#### ENGAGEMENT ENQUIRY FORM:
*(Full form spec in Section 15.2)*

---

### 6.6 TEAM PAGE (`/team`)

**URL:** `/team`  
**Title:** `Team — C.O.D.E | MMCOE Pune`

**Section sequence:**
```
[PAGE HERO]
[CORE LEADERSHIP]
[ALL MEMBERS GRID]
[ALUMNI]
[JOIN CTA]
[FOOTER]
```

#### PAGE HERO:
- Headline: `The Team.`
- Sub: `C.O.D.E members are selected. What you see here is the result of that selection — people who build.`
- Live stat: `[N] active members across 4 domains`

#### CORE LEADERSHIP (Featured cards — Component 4.8 large):
Roles to feature:
- Club President / Head
- Vice President / Deputy
- AI-ML Domain Lead
- Web Development Domain Lead
- Android Domain Lead
- UI/UX Domain Lead
- Secretary / Operations
- Technical Advisor (Faculty)

Each card: photo, name, role, domain badge, batch year, one-line bio, LinkedIn + GitHub links.

Layout: 2-column grid on desktop, 1-column on mobile.

#### ALL MEMBERS GRID (Compact cards — Component 4.8 small):
- Filter tabs: `All` | `AI-ML` | `Web Dev` | `Android` | `UI/UX` | `[Year]`
- Grid: 4 columns desktop, 3 tablet, 2 mobile
- Each card: circular photo, name, role, domain badge, LinkedIn icon

#### ALUMNI SECTION:
- Section label: `ALUMNI`
- Headline: `Where they went.`
- Horizontal scroll strip or compact grid
- Each alumnus: name, batch, domain worked in, current company/role (if provided)
- Shows the real-world outcome of C.O.D.E membership — strong credibility signal for prospective members

#### JOIN CTA:
```
Applications [OPEN / CLOSED for AY 2025–26]
[Apply Now →]  or  [Follow Our Instagram for Updates →]
```
Status should be a dynamic variable easily changed in the data file.

---

### 6.7 DOMAINS PAGE (`/domains`)

**URL:** `/domains`  
**Title:** `Domains — C.O.D.E | MMCOE Pune`

**Anchor sections** (linked from navbar domain hover or domain badges):
- `#ai-ml`
- `#web-dev`
- `#android`
- `#ui-ux`

Each domain section is a major page section with:

#### Domain Section Structure:
```
[DOMAIN BANNER — full-width, domain color accent]
  ── Domain Icon (large, 64px)
  ── Domain Name (Syne 800, very large)
  ── Domain tagline
  ── Member count in this domain

[TWO-COLUMN CONTENT]
  Left:
    ── What We Build (2-3 paragraphs)
    ── Why This Domain Matters
    
  Right:
    ── Technologies & Tools (badge grid)
    ── Learning Path (horizontal progression bar):
         Fundamentals → Core Skills → Advanced → Production
    ── Domain Lead mini-card

[PROJECTS IN THIS DOMAIN — 2-3 project cards]

[DOMAIN DIVIDER — thin horizontal rule with domain icon]
```

**Domain-specific content:**

**AI / ML:**
- Tagline: `"From data to decisions."`
- What we build: supervised/unsupervised models, NLP pipelines, computer vision, integration with web APIs, HuggingFace model deployment
- Tools: Python, NumPy, Pandas, scikit-learn, TensorFlow, PyTorch, HuggingFace, FastAPI, Jupyter, Google Colab
- Learning path: Python basics → Data Analysis → ML fundamentals → Deep Learning → Deployment
- Note: Club maintains a HuggingFace organization: `huggingface.co/code-mmcoe`

**Web Development:**
- Tagline: `"Full-stack. Fully shipped."`
- What we build: responsive web apps, REST APIs, databases, deployment pipelines, e-commerce, dashboards
- Tools: HTML, CSS, JavaScript, React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Prisma, Tailwind, Vercel
- Learning path: HTML/CSS/JS → React → Node.js + APIs → Databases → Full-Stack Projects

**Android:**
- Tagline: `"Native. Performant. Yours."`
- What we build: native Android apps in Kotlin, cross-platform in Flutter, Firebase integrations, Play Store-ready apps
- Tools: Kotlin, Jetpack Compose, Android Studio, Firebase, Room, Retrofit, Flutter, Dart
- Learning path: Kotlin basics → Android fundamentals → Jetpack → Firebase → Production App

**UI/UX:**
- Tagline: `"Design that thinks first."`
- What we build: user research, information architecture, wireframes, high-fidelity prototypes, design systems, handoff specs
- Tools: Figma, Adobe XD, Maze (user testing), Whimsical, Notion (documentation), FigJam
- Learning path: Design principles → Figma proficiency → User research methods → Prototyping → Design systems

---

### 6.8 EVENTS PAGE (`/events`)

**URL:** `/events`  
**Title:** `Events — C.O.D.E | MMCOE Pune`

**Section sequence:**
```
[PAGE HERO]
[FILTER BAR]
[EVENTS GRID]
[PAST EVENTS ARCHIVE]
[FOOTER]
```

#### PAGE HERO:
- Headline: `Events & Activities.`
- Sub: `Workshops, sessions, hackathons, industrial visits, and consultancy meets — a record of what C.O.D.E does.`

#### FILTER BAR:
`[All] [Workshops] [Hackathons] [Sessions] [Industrial Visits] [Consultancy Meets] [Community]`

#### EVENTS GRID:
3-column grid of event cards (Component 4.11).

**Complete Events Data:**

| Slug | Name | Type | Date | Description | Attendance |
|---|---|---|---|---|---|
| `workshop-ai-prompt-engineering` | Workshop on AI Development in Prompt Engineering | Workshop | Dec 2024 | Hands-on session covering prompt engineering fundamentals, LLM APIs, and building AI-powered tools | [N] |
| `workshop-ui-ux-design` | Workshop on UI/UX Design | Workshop | Dec 2024 | Figma fundamentals, design systems, user research methods, and portfolio development | [N] |
| `ml-code-session` | ML Code Session | Learning Session | 2024 | Live coding session walking through machine learning model development from scratch | [N] |
| `ai-cohort-session` | AI Cohort Session | Learning Series | 2024 | Multi-session cohort covering AI/ML fundamentals for club members | [N] |
| `hacksprint` | Hacksprint | Hackathon | 2023 | Hackathon organized by C.O.D.E team — internal + open teams competing | [N] |
| `pune-gpu-community-meet` | Pune GPU Community Meet | Community Event | 2024 | Collaboration with Pune's GPU computing community — presentations and networking | [N] |
| `arai-industrial-visit` | ARAI Industrial Visit | Industrial Visit | 2024 | Visit to Automotive Research Association of India facility in Pune | [N] |
| `arai-consultancy-demo` | ARAI Consultancy Project Demo | Consultancy Meet | 2024 | Project demonstration session for ARAI engagement | [N] |
| `newtons-software-presentation` | Capability Presentation to Newton's Software | Consultancy Meet | 2023 | C.O.D.E presented project capabilities to Newton's Software | [N] |
| `ellicium-presentation` | Ellicium Presentation | Consultancy Meet | 2023 | Technical presentation for Ellicium engagement | [N] |

#### EVENT DETAIL PAGE (`/events/[slug]`):
- Breadcrumb
- Event title + type badge + date
- Hero image (event photo)
- Event description (2-3 paragraphs)
- Photo gallery (lightbox grid)
- Speakers / Facilitators (if applicable)
- Key takeaways (bulleted list)
- Attendee note (count + domains represented)
- Related events strip

---

### 6.9 CONTACT PAGE (`/contact`)

**URL:** `/contact`  
**Title:** `Contact — C.O.D.E | MMCOE Pune`

**Section sequence:**
```
[PAGE HERO]
[TWO-COLUMN: LEFT = CONTACT INFO, RIGHT = FORM]
[FAQ ACCORDION]
[FOOTER]
```

#### PAGE HERO:
- Headline: `Let's talk.`
- Sub: `Whether you're a prospective member, a company looking to work with us, or just curious — reach out.`

#### CONTACT INFO (left column):

```
REACH US DIRECTLY
─────────────────
📧  team_code@mmcoe.edu.in

📍  Computer Engineering Department
    MMCOE, Karvenagar
    Pune – 411052, Maharashtra

FOLLOW OUR WORK
───────────────
🔗  LinkedIn: /company/team-code
📷  Instagram: @code_mmcoe
💻  GitHub: Club-of-Developers-and-Engineers
🤗  HuggingFace: code-mmcoe
```

Each social link: icon + platform name + handle, links to actual profile.

#### CONTACT FORM (right column):
*(Full spec in Section 15.3)*

#### FAQ ACCORDION:
*(Full spec in Section 15.4)*

---

### 6.10 404 ERROR PAGE

**URL:** Any non-existent route

**Layout:** Full screen, centered, dark background.

```
404

The page you're looking for
doesn't exist — or we moved it.

[← Go Home]    [View Projects →]
```

- `404` in massive `Syne 800`, mint green, with a subtle glow
- Optional: animated terminal that "searches" for the page and returns `Error: path not found`
- Two CTAs: home and projects (most useful destinations)

---

## 7. Layout System & Grid Rules

### 7.1 Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-8);
}

.container-wide {
  max-width: 1400px;
}

.container-narrow {
  max-width: 800px;
}

/* Full bleed (breaks out of container) */
.full-bleed {
  width: 100vw;
  margin-left: calc(50% - 50vw);
}
```

### 7.2 Section Spacing

```css
section {
  padding: var(--space-24) 0; /* 96px top/bottom default */
}

section.section-sm {
  padding: var(--space-16) 0; /* 64px */
}

section.section-lg {
  padding: var(--space-32) 0; /* 128px */
}
```

### 7.3 Grid System

```css
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
}

/* Intentional asymmetry */
.grid-2-3 {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: var(--space-12);
}

.grid-3-2 {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: var(--space-12);
}
```

---

## 8. Technical Architecture

### 8.1 Recommended Stack (detailed)

```
Runtime:           Node.js 20+
Framework:         Next.js 14 (App Router) — React.js
Language:          JavaScript (ES2022+)
Styling:           Tailwind CSS v3 + CSS custom properties (design tokens)
Animation:         Framer Motion v11
Icons:             Lucide React + Phosphor Icons
Fonts:             Self-hosted Google Fonts (next/font)
Forms:             React Hook Form + Yup validation
Email:             Resend (or Nodemailer fallback)
Images:            next/image + Cloudinary (or Vercel Blob)
Analytics:         Vercel Analytics (or Plausible for privacy-first)
Deployment:        Vercel
CMS (Phase 1):     Flat JSON/JS files in /data directory
CMS (Phase 2):     Sanity.io or Contentlayer
Version Control:   Git (GitHub — Club-of-Developers-and-Engineers org)
```

### 8.2 Environment Variables

```
NEXT_PUBLIC_SITE_URL=https://code-mmcoe.tech
RESEND_API_KEY=re_...
NEXT_PUBLIC_GA_ID=G-...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

---

## 9. Folder & File Structure

```
code-website/
│
├── public/
│   ├── fonts/                      # Self-hosted font files
│   ├── images/
│   │   ├── logo/                   # code-logo.svg, code-logo-light.svg
│   │   ├── team/                   # [name].jpg for each member
│   │   ├── projects/               # [slug]/hero.jpg, [slug]/gallery-1.jpg ...
│   │   └── events/                 # [slug]/hero.jpg, [slug]/gallery-1.jpg ...
│   ├── og-image.png                # Default Open Graph image (1200×630)
│   ├── favicon.ico
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   └── site.webmanifest
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.jsx              # Root layout: fonts, metadata, navbar, footer
│   │   ├── page.jsx                # Home page
│   │   ├── about/
│   │   │   └── page.jsx
│   │   ├── projects/
│   │   │   ├── page.jsx            # Projects listing
│   │   │   └── [slug]/
│   │   │       └── page.jsx        # Project detail
│   │   ├── consultancy/
│   │   │   └── page.jsx
│   │   ├── team/
│   │   │   └── page.jsx
│   │   ├── domains/
│   │   │   └── page.jsx
│   │   ├── events/
│   │   │   ├── page.jsx
│   │   │   └── [slug]/
│   │   │       └── page.jsx
│   │   ├── contact/
│   │   │   └── page.jsx
│   │   ├── not-found.jsx           # 404 page
│   │   └── api/
│   │       └── contact/
│   │           └── route.js        # Contact form API handler
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   └── ScrollProgress.jsx
│   │   │
│   │   ├── ui/                     # Atomic/primitive components
│   │   │   ├── Button.jsx
│   │   │   ├── Badge.jsx           # DomainBadge, TypeBadge
│   │   │   ├── Tag.jsx             # TechTag
│   │   │   ├── Toast.jsx
│   │   │   ├── Accordion.jsx       # FAQ
│   │   │   ├── Lightbox.jsx        # Image gallery lightbox
│   │   │   ├── FilterBar.jsx
│   │   │   └── Breadcrumb.jsx
│   │   │
│   │   ├── sections/               # Page section components
│   │   │   ├── home/
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── StatsBar.jsx
│   │   │   │   ├── AboutTeaser.jsx
│   │   │   │   ├── DomainsSection.jsx
│   │   │   │   ├── FeaturedProjects.jsx
│   │   │   │   ├── ConsultancySpotlight.jsx
│   │   │   │   ├── TeamTeaser.jsx
│   │   │   │   ├── EventsTeaser.jsx
│   │   │   │   └── JoinCTA.jsx
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   ├── team/
│   │   │   ├── domains/
│   │   │   ├── events/
│   │   │   ├── consultancy/
│   │   │   └── contact/
│   │   │
│   │   ├── cards/
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── TeamCard.jsx         # Featured + compact variants
│   │   │   ├── EventCard.jsx
│   │   │   ├── DomainCard.jsx
│   │   │   └── ServiceCard.jsx      # Consultancy services
│   │   │
│   │   └── widgets/
│   │       ├── TerminalWidget.jsx
│   │       ├── CounterNumber.jsx
│   │       ├── TimelineItem.jsx
│   │       ├── CustomCursor.jsx
│   │       └── SectionHeader.jsx
│   │
│   ├── data/                       # Static data files (replace with CMS later)
│   │   ├── team.js                 # Team member objects
│   │   ├── projects.js             # Project objects
│   │   ├── events.js               # Event objects
│   │   ├── domains.js              # Domain metadata
│   │   └── config.js               # Site config, social links, club info
│   │
│   ├── lib/
│   │   ├── animations.js           # Framer Motion variants
│   │   ├── constants.js            # Colors, breakpoints, etc.
│   │   ├── utils.js                # Shared utility functions
│   │   └── sendEmail.js            # Email sending logic
│   │
│   ├── hooks/
│   │   ├── useScrollProgress.js
│   │   ├── useIntersectionObserver.js
│   │   └── useCountUp.js
│   │
│   ├── types/
│   │   ├── project.ts
│   │   ├── team.js
│   │   ├── event.ts
│   │   └── domain.ts
│   │
│   └── styles/
│       ├── globals.css             # CSS custom properties, base reset
│       ├── typography.css          # Type scale utility classes
│       └── animations.css          # Keyframes, reveal classes
│
├── .env.local                      # Local environment variables
├── .env.example                    # Committed env template
├── next.config.js
├── tailwind.config.js
├── jsconfig.json
├── package.json
└── README.md
```

---

## 10. Content & Copy — Full Text

### 10.1 Tone Guidelines

The copy for C.O.D.E should sound like a senior engineer who also happens to be a good writer. The voice is:

- **Direct:** No filler phrases. Say what you mean. Cut everything else.
- **Confident without posturing:** Let the work speak. Don't say "we're the best" — show what was built.
- **Technical but accessible:** Don't avoid technical terms, but don't exclude non-technical readers either.
- **Human:** Real people wrote this. There's a personality. Some dry wit is fine. No corporate sterility.

**Good examples of tone:**
- ✅ "We take on real briefs. We deliver real results."
- ✅ "C.O.D.E membership is selective. Not everyone gets in."
- ✅ "These are projects that shipped — to actual clients, real users."
- ❌ "We are a dynamic, student-driven community of passionate learners."
- ❌ "Our mission is to synergize technical excellence with industry-aligned paradigms."
- ❌ "Join us on our journey of innovation and collaboration!"

### 10.2 Homepage Full Copy

**Hero:**
- Pre-label: `[ EST. 2021 — MMCOE, PUNE ]`
- H1: `We don't just learn to code. We build.`
- Sub: `C.O.D.E is the technical club of MMCOE's Computer Engineering Department. We take on real consultancy projects, build production-grade software, and create engineers who are ready for industry from day one.`
- CTA1: `→ See Our Work`
- CTA2: `Meet the Team ↗`

**About teaser:**
- Pull quote: `"A club of the students, by the students, and for the students — built to close the gap between college and industry."`

**Consultancy spotlight:**
- Label: `CONSULTANCY WORK`
- H2: `We take real briefs. We deliver real results.`
- Body: `C.O.D.E works with external clients and industry partners on genuine consultancy projects — not simulated case studies. We've worked with companies in automotive research, software, and data industries. If your company needs a capable, motivated development team, we want to hear from you.`

**Join CTA:**
- H2: `Think you have what it takes?`
- Body: `C.O.D.E membership is selective. We look for people who build, not just people who attend. If you're from MMCOE's Computer Engineering department and you're serious about engineering, we want to find you.`
- CTA: `Get In Touch →`

### 10.3 Copy for Domain Descriptions (Full)

**AI / Machine Learning:**
> C.O.D.E's AI-ML domain is where data becomes decisions. Members work on supervised and unsupervised learning models, natural language processing, computer vision, and end-to-end deployment. We maintain an active HuggingFace organization where models are published and shared. Projects in this domain have included ARAI consultancy work and our AI Cohort series.

**Web Development:**
> Full-stack means the whole stack. Members in the web domain own their projects from database schema to deployed frontend — no handoffs, no excuses. We work in modern frameworks (React, Next.js, Node.js) and build things that are fast, accessible, and maintainable. Consultancy clients have included Newton's Software and more.

**Android Development:**
> Native first, then cross-platform if the project demands it. The Android domain builds apps that behave like apps, not mobile websites. Members learn Kotlin, Jetpack Compose, and the full Android ecosystem. Firebase integrations, background services, local data — we build production-ready Android.

**UI / UX Design:**
> Good design is invisible. Great design is felt. The UI/UX domain starts with users — who they are, what they need, where they fail — and works backward to interfaces. Members work in Figma, conduct real user research, and produce handoff-ready design systems. UX work feeds directly into our web and Android projects.

---

## 11. Responsive Design — Breakpoint Rules

### 11.1 Breakpoint Tokens

```css
--bp-sm:   480px;
--bp-md:   768px;
--bp-lg:   1024px;
--bp-xl:   1280px;
--bp-2xl:  1536px;
```

### 11.2 Component Responsive Behavior

| Component | Mobile (< 768px) | Tablet (768–1023px) | Desktop (1024px+) |
|---|---|---|---|
| Navbar | Logo + hamburger only | Logo + hamburger | Full horizontal nav |
| Hero | Single column, font clamp down | Single column | Two columns |
| Stats bar | 2×3 grid | 3×2 grid | 5-column horizontal |
| Domain cards | Stacked 1 column | 2×2 grid | 2×2 grid |
| Project grid | 1 column | 2 columns | 3 columns |
| Team grid | 2 columns | 3 columns | 4 columns |
| Events grid | 1 column | 2 columns | 3 columns |
| Footer | Stacked, full-width columns | 2-column grid | 5-column horizontal |
| Terminal widget | Hidden or simplified 1-liner | Shown, smaller | Full |
| Custom cursor | Disabled (touch) | Disabled | Enabled |
| Section padding | 64px | 80px | 96px |
| Container padding | 16px | 24px | 32px |

---

## 12. Accessibility Specification

### 12.1 Structural Requirements

- Semantic HTML throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`
- One `<h1>` per page
- Logical heading hierarchy: `h1 → h2 → h3` — no skipping
- All images: descriptive `alt` text or `alt=""` for decorative images
- All icon-only buttons: `aria-label` describing the action
- All form inputs: associated `<label>` elements (not just placeholder)
- Skip link at top of `<body>`: `<a href="#main-content" class="skip-link">Skip to main content</a>`

### 12.2 Color Contrast Ratios

All checked against WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text):

| Foreground | Background | Ratio | Pass |
|---|---|---|---|
| `#F0F0F0` (primary text) | `#0A0A0A` (base bg) | ~18:1 | ✅ |
| `#AAAAAA` (secondary text) | `#0A0A0A` | ~8.6:1 | ✅ |
| `#AAAAAA` (secondary text) | `#111111` (surface) | ~7.9:1 | ✅ |
| `#00FF94` (mint, large text only) | `#0A0A0A` | ~11.5:1 | ✅ |
| `#0A0A0A` (dark text on mint) | `#00FF94` | ~11.5:1 | ✅ |
| `#666666` (muted text) | `#0A0A0A` | ~4.7:1 | ✅ (barely — use only for non-critical text) |

### 12.3 Keyboard Navigation

- Tab order follows visual left-to-right, top-to-bottom flow
- All interactive elements reachable by keyboard
- Focus indicator: `outline: 2px solid var(--border-focus); outline-offset: 3px;` — never `outline: none` without replacement
- Modal/lightbox: focus trapped within while open, returns to trigger on close
- Dropdown/mobile menu: Escape key closes, focus returns to trigger

### 12.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .terminal-cursor {
    animation: none;
    opacity: 1;
  }
  
  [data-animate] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

---

## 13. SEO — Full Configuration

### 13.1 Per-Page Metadata Table

| Page | `<title>` | Meta Description |
|---|---|---|
| Home | `C.O.D.E — Club of Developers and Engineers \| MMCOE Pune` | `C.O.D.E is the technical club of MMCOE's Computer Engineering Department. Real projects, consultancy work, and industry-ready training.` |
| About | `About — C.O.D.E \| MMCOE Pune` | `Learn about C.O.D.E — founded in 2021, working in AI, Web, Android, and UI/UX. A club built to close the gap between college and industry.` |
| Projects | `Projects — C.O.D.E \| MMCOE Pune` | `Explore projects built by C.O.D.E — AI models, full-stack apps, Android apps, and real consultancy deliverables.` |
| Consultancy | `Consultancy — C.O.D.E \| MMCOE Pune` | `C.O.D.E offers consultancy services across AI/ML, web development, Android, and UI/UX. Past clients include Newton's Software, Ellicium, and ARAI.` |
| Team | `Team — C.O.D.E \| MMCOE Pune` | `Meet the developers, engineers, and designers behind C.O.D.E — MMCOE's selective technical club.` |
| Domains | `Domains — C.O.D.E \| MMCOE Pune` | `C.O.D.E operates across four domains: AI/ML, Web Development, Android, and UI/UX Design. Deep-dive into each.` |
| Events | `Events — C.O.D.E \| MMCOE Pune` | `Workshops, sessions, hackathons, industrial visits, and consultancy meets — a full record of C.O.D.E activities.` |
| Contact | `Contact — C.O.D.E \| MMCOE Pune` | `Get in touch with C.O.D.E for consultancy projects, membership enquiries, or partnerships.` |

### 13.2 JSON-LD Structured Data (Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "C.O.D.E — Club of Developers and Engineers",
  "alternateName": "CODE MMCOE",
  "url": "https://code-mmcoe.tech",
  "logo": "https://code-mmcoe.tech/images/logo/code-logo.svg",
  "description": "Technical club of the Computer Engineering Department at MMCOE, Pune. Working in AI/ML, Web Development, Android, and UI/UX since 2021.",
  "foundingDate": "2021-06",
  "memberOf": {
    "@type": "EducationalOrganization",
    "name": "Marathwada Mitra Mandal's College of Engineering",
    "url": "https://mmcoe.edu.in"
  },
  "sameAs": [
    "https://www.linkedin.com/company/team-code",
    "https://www.instagram.com/code_mmcoe",
    "https://github.com/Club-of-Developers-and-Engineers",
    "https://huggingface.co/code-mmcoe"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "team_code@mmcoe.edu.in",
    "contactType": "General Enquiry"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411052",
    "addressCountry": "IN"
  }
}
```

### 13.3 Open Graph Tags

```html
<meta property="og:type"        content="website" />
<meta property="og:url"         content="https://code-mmcoe.tech" />
<meta property="og:title"       content="C.O.D.E — Club of Developers and Engineers | MMCOE Pune" />
<meta property="og:description" content="Technical club of MMCOE's CS Department. Real projects, consultancy work, and industry-ready training." />
<meta property="og:image"       content="https://code-mmcoe.tech/og-image.png" />
<meta property="og:image:width"  content="1200" />
<meta property="og:image:height" content="630" />

<meta name="twitter:card"        content="summary_large_image" />
<meta name="twitter:title"       content="C.O.D.E — Club of Developers and Engineers" />
<meta name="twitter:description" content="Technical club of MMCOE's CS Department." />
<meta name="twitter:image"       content="https://code-mmcoe.tech/og-image.png" />
```

**OG Image Design:** `1200×630px`. Dark background (`#0A0A0A`), dot grid texture, C.O.D.E wordmark centered in Syne 800, subtitle below in DM Sans, four domain color dots in a row, MMCOE credit bottom-right.

---

## 14. Performance Budget

| Metric | Target | Hard Limit |
|---|---|---|
| Lighthouse Performance | ≥ 90 | ≥ 80 |
| First Contentful Paint | < 1.5s | < 2.5s |
| Largest Contentful Paint | < 2.5s | < 4s |
| Cumulative Layout Shift | < 0.05 | < 0.1 |
| Total Blocking Time | < 150ms | < 300ms |
| Total Page Size (initial load) | < 500KB | < 1MB |
| Total Images (lazy included) | < 2MB per page | — |
| JavaScript Bundle | < 200KB gzipped | < 400KB |
| CSS | < 50KB | < 100KB |

**Optimization checklist:**
- [ ] All images in WebP, resized to max display size
- [ ] Fonts self-hosted with `font-display: swap`
- [ ] Critical CSS inlined in `<head>` for above-the-fold
- [ ] Lazy load all images below fold
- [ ] Route-based code splitting (Next.js default)
- [ ] No render-blocking scripts in `<head>`
- [ ] `next/image` for all images (automatic optimization)
- [ ] Vercel Edge Network for CDN delivery

---

## 15. Forms — Full Specification

### 15.1 Form Design Standards

All forms use:
```css
.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}

.form-label {
  font-family: var(--font-label);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.form-input,
.form-textarea,
.form-select {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 11px 14px;
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-primary);
  width: 100%;
  transition: border-color var(--duration-fast),
              box-shadow var(--duration-fast);
  outline: none;
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--accent-mint);
  box-shadow: 0 0 0 3px var(--accent-mint-pale);
}

.form-input::placeholder {
  color: var(--text-disabled);
}

.form-error {
  font-family: var(--font-body);
  font-size: 12px;
  color: var(--accent-red);
  margin-top: var(--space-1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}
```

### 15.2 Consultancy Enquiry Form (Contact page + Consultancy page)

**Fields:**
| Field | Type | Required | Validation |
|---|---|---|---|
| Organization Name | text | ✅ | min 2 chars |
| Contact Person Name | text | ✅ | min 2 chars |
| Email Address | email | ✅ | valid email format |
| Phone Number | tel | ❌ | optional, if provided: valid format |
| Type of Project | select | ✅ | options below |
| Domains Required | checkbox group | ✅ | min 1 selected |
| Project Description | textarea | ✅ | min 50 chars, max 1000 |
| Approximate Timeline | select | ❌ | options below |
| How did you hear about us | select | ❌ | optional |

**Select options — Type of Project:**
- Full Application Development
- AI / ML Integration
- UI/UX Design Only
- Technical Consulting
- Research Project
- Other

**Checkbox — Domains Required:**
- [ ] AI / Machine Learning
- [ ] Web Development
- [ ] Android Development
- [ ] UI/UX Design

**Select — Approximate Timeline:**
- 1–2 weeks
- 1 month
- 2–3 months
- 3–6 months
- Flexible

**Select — How did you hear:**
- LinkedIn
- Instagram
- MMCOE referral
- Through a faculty/student
- Google Search
- Other

**Submission:**
- POST to `/api/contact`
- Email sent to `team_code@mmcoe.edu.in` via Resend
- Show success toast: "Message sent. We'll review your enquiry and respond within 2–3 business days."
- Show error toast if API fails: "Something went wrong. Please email us directly at team_code@mmcoe.edu.in"

### 15.3 General Contact Form

**Fields:**
| Field | Type | Required |
|---|---|---|
| Your Name | text | ✅ |
| Email | email | ✅ |
| Subject | select | ✅ |
| Message | textarea | ✅ |

**Subject options:**
- General Inquiry
- Membership / Joining
- Consultancy Project
- Partnership / Collaboration
- Event Inquiry
- Media / Press
- Other

### 15.4 FAQ Accordion (Contact Page)

Animated accordion — click to expand, one open at a time (or all, config option).

```
Q: How do I become a member of C.O.D.E?
A: C.O.D.E membership is selective — we open applications periodically, 
   typically at the start of an academic year. Applications are announced 
   on our Instagram (@code_mmcoe) and LinkedIn. Selection is based on 
   technical aptitude, domain interest, and attitude toward building.

Q: Do you take consultancy projects from startups or small companies?
A: Yes. We work with organizations of any size — from startups to 
   established companies like ARAI. What matters is the project's 
   substance and fit with our domains. Start with our enquiry form.

Q: What domains does C.O.D.E work in?
A: Four domains: AI/ML, Web Development, Android, and UI/UX Design. 
   Larger projects often involve members from multiple domains.

Q: Can non-MMCOE students collaborate with C.O.D.E?
A: C.O.D.E membership is limited to MMCOE Computer Engineering students. 
   However, for consultancy and community projects, we sometimes 
   collaborate with external teams. Reach out to discuss.

Q: How are projects assigned to members?
A: Projects are assigned based on domain, skill level, and availability. 
   Leadership reviews incoming projects and assembles teams accordingly. 
   Members can also propose internal projects.

Q: Is C.O.D.E affiliated with any external organizations?
A: C.O.D.E is a club under MMCOE's Computer Engineering Department. 
   We've worked with organizations like Newton's Software, Ellicium, 
   and ARAI, and collaborated with the Pune GPU Community. 
   We are open to new partnerships.
```

---

## 16. Phase 2 Features — Detailed

### 16.1 Blog / Articles (`/blog`)

- Members can publish technical articles, project post-mortems, tutorials
- Categories: Tutorial / Project Breakdown / Opinion / Industry / Events
- Author system: each post attributed to a member (links to their team profile)
- Reading time estimate (auto-calculated from word count)
- Code blocks with syntax highlighting (Prism.js or Shiki)
- CMS: Contentlayer or Sanity.io for Phase 2 migration
- RSS feed for subscribers

### 16.2 Member Portal (Authentication Required)

- Login via college email (OAuth or magic link)
- Members can update their own profile info, photo, social links
- Members can submit new projects to the showcase
- Members can log events they attended
- Admin members can approve/reject submissions

### 16.3 GitHub Activity Widget

Pull from GitHub API:
- Recent commits across `Club-of-Developers-and-Engineers` org
- Open issues / PRs
- Most active repositories
- Contribution graph visualization

### 16.4 Dark/Light Theme Toggle

- Dark mode is default and primary
- Light mode is inverted: `--bg-base: #FAFAFA`, `--text-primary: #111111`, etc.
- User preference persisted in `localStorage`
- Respects `prefers-color-scheme` media query on first visit
- Toggle button: sun/moon icon in navbar

---

## 17. Brand Guidelines

### 17.1 Name Usage Rules

| Context | Correct | Incorrect |
|---|---|---|
| Primary mention | C.O.D.E | CODE, Code, code |
| Full expansion | C.O.D.E — Club of Developers and Engineers | "the CODE club" |
| Attribution | Computer Engineering Department, MMCOE, Pune | Just "MMCOE" without department |
| Email reference | team_code@mmcoe.edu.in | Any variation |
| File/URL slugs | `code-mmcoe` | Any other form |

### 17.2 Logo Usage

- Always use the SVG version
- Minimum size: 80px wide
- Clear space: equal to the height of one letter on all sides
- On dark backgrounds: full-color (`#F0F0F0` text + `#00FF94` dots)
- On light backgrounds: inverted (`#111111` text + `#00CC77` dots)
- Never: stretch, rotate, recolor, add drop shadow, or place on a busy background

### 17.3 Color Usage Rules

- Mint green (`#00FF94`) is used for: CTAs, highlights, active states, glow effects. NOT for backgrounds, NOT for body text.
- Red (`#FF4D4D`) is used for: error states, rare urgent badges. NEVER as a decorative accent.
- Blue (`#4D9FFF`) is used for: links, web domain color, informational states.
- Domain colors are exclusively used within domain-related contexts — not decoratively elsewhere.

### 17.4 Tagline Options

Choose one as the primary:

| Option | Use Case |
|---|---|
| `We don't just learn to code. We build.` | Primary hero tagline — most impactful |
| `Code. Create. Consult.` | Compact version for logos, meta descriptions |
| `Built by students. For industry.` | Consultancy context |
| `The club that ships.` | Informal social media |

---

## 18. Launch & QA Checklist

### 18.1 Design QA

- [ ] All components match design tokens (no hardcoded hex values)
- [ ] Typography uses correct fonts at correct weights
- [ ] All hover states implemented and consistent
- [ ] Animations work on first scroll — not pre-revealed
- [ ] Custom cursor works on desktop, disabled on mobile
- [ ] Terminal widget types through its sequence correctly
- [ ] Stats counter animates on scroll into view
- [ ] No layout shift on page load (CLS < 0.1)

### 18.2 Content QA

- [ ] All team member data populated (no placeholder names)
- [ ] All project entries have real descriptions
- [ ] All images are optimized and not pixelated
- [ ] Contact email `team_code@mmcoe.edu.in` is correct everywhere
- [ ] All social links work and point to correct profiles
- [ ] LinkedIn: https://www.linkedin.com/company/team-code ✓
- [ ] Instagram: https://www.instagram.com/code_mmcoe ✓
- [ ] GitHub: https://github.com/Club-of-Developers-and-Engineers ✓
- [ ] HuggingFace: https://huggingface.co/code-mmcoe ✓

### 18.3 Technical QA

- [ ] Lighthouse ≥ 90 on all pages
- [ ] No console errors in production build
- [ ] Form submission tested and email received at `team_code@mmcoe.edu.in`
- [ ] 404 page renders correctly
- [ ] All internal links work (no broken routes)
- [ ] All external links open in new tab (`target="_blank" rel="noopener"`)
- [ ] Images have correct `alt` attributes
- [ ] Meta tags present on all pages
- [ ] robots.txt and sitemap.xml present and valid

### 18.4 Responsive QA (test on actual devices or DevTools)

- [ ] iPhone SE (320px) — no overflow, all text readable
- [ ] iPhone 14 (390px) — hamburger menu works
- [ ] iPad (768px) — tablet layout correct
- [ ] iPad Pro (1024px) — desktop layout begins
- [ ] MacBook 13" (1280px) — full desktop layout
- [ ] 1440px wide — max-width container centered correctly
- [ ] 1920px wide — no elements stretch unusually

### 18.5 Accessibility QA

- [ ] Keyboard-only navigation test: tab through entire home page
- [ ] Screen reader test (VoiceOver on Mac or NVDA on Windows): home page
- [ ] Color contrast audit (Chrome DevTools Accessibility panel)
- [ ] All form inputs have labels
- [ ] Focus indicator visible on all interactive elements
- [ ] Skip link visible on focus

### 18.6 Cross-Browser QA

| Browser | Version | Status |
|---|---|---|
| Chrome | Latest | Test |
| Firefox | Latest | Test |
| Safari | Latest | Test |
| Edge | Latest | Test |
| Chrome (Android) | Latest | Test |
| Safari (iOS) | Latest | Test |

---

## 19. Content Management Reference

### 19.1 Data File Schema — `data/team.js`

```javascript
/**
 * @typedef {Object} TeamMember
 * @property {string} id
 * @property {string} name
 * @property {string} role
 * @property {'ai-ml'|'web-dev'|'android'|'ui-ux'|'core'} domain
 * @property {string} batch          - e.g., "2022–2026"
 * @property {string} bio            - One-liner
 * @property {string} photo          - Path in /public/images/team/
 * @property {string} [linkedin]     - Full URL (optional)
 * @property {string} [github]       - Full URL (optional)
 * @property {boolean} isLead        - Shows in leadership section
 * @property {boolean} isAlumni
 * @property {string} [currentRole]  - Alumni: current company/role (optional)
 */
export const teamMembers = [ /* populate with member objects */ ];
```

### 19.2 Data File Schema — `data/projects.js`

```javascript
/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} name
 * @property {string} tagline             - One-line description
 * @property {string} description         - 2–3 paragraphs (markdown)
 * @property {string[]} domain
 * @property {'consultancy'|'internal'|'competition'|'community'} type
 * @property {number} year
 * @property {string} [client]            - For consultancy (optional)
 * @property {string[]} team              - Array of TeamMember IDs
 * @property {{ category: string, tools: string[] }[]} techStack
 * @property {string} heroImage
 * @property {string[]} gallery
 * @property {{ github?: string, demo?: string }} [links]
 * @property {boolean} featured           - Shows in homepage strip
 * @property {string[]} [outcomes]        - Key results (optional)
 */
export const projects = [ /* populate with project objects */ ];
```

### 19.3 Data File Schema — `data/events.js`

```javascript
/**
 * @typedef {Object} ClubEvent
 * @property {string} slug
 * @property {string} name
 * @property {'workshop'|'hackathon'|'session'|'industrial-visit'|'consultancy-meet'|'community'} type
 * @property {string} date              - ISO date string
 * @property {string} description       - 2–3 paragraphs
 * @property {string} heroImage
 * @property {string[]} gallery
 * @property {number} [attendance]      - Optional
 * @property {string[]} [facilitators]  - Names of speakers/facilitators (optional)
 * @property {string[]} [keyTakeaways]  - Optional
 * @property {string} [relatedProject]  - Project slug if applicable (optional)
 */
export const events = [ /* populate with event objects */ ];
```

### 19.4 Site Config — `data/config.js`

```javascript
export const siteConfig = {
  name: 'C.O.D.E',
  fullName: 'C.O.D.E — Club of Developers and Engineers',
  tagline: "We don't just learn to code. We build.",
  url: 'https://code-mmcoe.tech',
  college: 'Marathwada Mitra Mandal\'s College of Engineering',
  department: 'Computer Engineering',
  location: 'Karvenagar, Pune – 411052, Maharashtra, India',
  email: 'team_code@mmcoe.edu.in',
  established: '2021',
  
  social: {
    linkedin:     'https://www.linkedin.com/company/team-code',
    instagram:    'https://www.instagram.com/code_mmcoe',
    github:       'https://github.com/Club-of-Developers-and-Engineers',
    huggingface:  'https://huggingface.co/code-mmcoe',
  },
  
  stats: {
    members:     '[N]',    // Update manually
    projects:    '[N]',
    clients:     '[N]',
    domains:     4,
  },
  
  applications: {
    open: false,             // Toggle for join CTA section
    openText: 'Applications open for AY 2025–26',
    closedText: 'Applications are currently closed. Follow our Instagram for updates.',
  }
};
```

---

## 20. Quick Reference

### Club Info at a Glance

| Field | Value |
|---|---|
| Full Name | C.O.D.E — Club of Developers and Engineers |
| Abbreviation | C.O.D.E (with dots) |
| Established | June 2021 |
| College | MMCOE (Marathwada Mitra Mandal's College of Engineering) |
| Department | Computer Engineering |
| Location | Karvenagar, Pune – 411052, Maharashtra, India |
| Email | team_code@mmcoe.edu.in |
| LinkedIn | https://www.linkedin.com/company/team-code |
| Instagram | @code_mmcoe |
| GitHub | Club-of-Developers-and-Engineers |
| HuggingFace | code-mmcoe |
| Domains | AI/ML · Web Dev · Android · UI/UX |
| Membership | By selection only |
| Consultancy clients | Newton's Software, Ellicium, ARAI |
| Notable events | Hacksprint, AI Cohort, ML Sessions, UI/UX Workshop, Pune GPU Meet, ARAI Industrial Visit |

### Design Quick Reference

| Token | Value |
|---|---|
| Primary background | `#0A0A0A` |
| Surface | `#111111` |
| Accent (Mint) | `#00FF94` |
| Text primary | `#F0F0F0` |
| Text secondary | `#AAAAAA` |
| Border default | `#2A2A2A` |
| Display font | Syne 800 |
| Body font | IBM Plex Sans 400 |
| Mono font | JetBrains Mono 400 |
| Border radius | 4px (cards: 8px) |
| Transition | `200ms cubic-bezier(0.4, 0, 0.2, 1)` |

---

*Document version 3.0 — JavaScript + React.js Edition*  
*Maintained by: C.O.D.E — Club of Developers and Engineers, MMCOE, Pune*  
*Last updated: 2025*

