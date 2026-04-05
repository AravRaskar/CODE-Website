"use client";

import React from "react";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";

const DOMAIN_DATA = {
  "ai-ml": {
    name: "AI & Machine Learning",
    tagline: "From data to decisions.",
    colorClass: "var(--domain-ai)",
    textClass: "text-domain-ai",
    whatWeBuild: "Members work on supervised and unsupervised learning models, natural language processing, computer vision, and end-to-end deployment. We maintain an active HuggingFace organization where pipeline outputs are published.",
    whyItMatters: "General compute is transitioning toward accelerated architectures. Operating with massive, ambiguous datasets is critical to next-generation software. We focus on training and deploying efficient inference APIs.",
    tools: ["Python", "TensorFlow", "PyTorch", "HuggingFace", "FastAPI"],
    learningPath: ["Python Basics", "Data Analysis", "ML Fundamentals", "Deep Learning", "Deployment"],
    projects: [
      { slug: "arai-consultancy", title: "ARAI Consultancy Project", domainLabel: "AI/ML", typeLabel: "Consultancy", year: "2024", techStack: ["Python", "ML", "Web"], description: "Developed advanced data analysis inference pipelines.", href: "/projects/arai-consultancy" },
      { slug: "ellicium-project", title: "Ellicium Engagement", domainLabel: "AI/ML", typeLabel: "Consultancy", year: "2023", techStack: ["Python", "Data"], description: "Automated massive dataset ingestion scaling bottlenecks.", href: "/projects/ellicium-project" }
    ]
  },
  "web-dev": {
    name: "Web Development",
    tagline: "Full-stack. Fully shipped.",
    colorClass: "var(--domain-web)",
    textClass: "text-domain-web",
    whatWeBuild: "Responsive web applications, fully integrated REST architectures, robust databases, and distributed backend pipelines. No component handoffs.",
    whyItMatters: "Cloud presence encapsulates 90% of current interaction. Understanding server rendering against client hydration ensures products we ship don't just look good, they perform across thousands of concurrent calls.",
    tools: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CLS"],
    learningPath: ["HTML/CSS/JS", "React", "Node + APIs", "Databases", "Full-Stack MVP"],
    projects: [
      { slug: "newtons-software", title: "Newton's Software Capability", domainLabel: "Web Dev", typeLabel: "Consultancy", year: "2023", techStack: ["React", "Node"], description: "Architecture for complete capability map distribution.", href: "/projects/newtons-software" },
      { slug: "hacksprint", title: "Hacksprint v2 Web App", domainLabel: "Web Dev", typeLabel: "Internal", year: "2023", techStack: ["Next.js", "Sockets"], description: "Infrastructure running the internal 24-hr sprint event.", href: "/projects/hacksprint" }
    ]
  },
  "android": {
    name: "Android Development",
    tagline: "Native. Performant. Yours.",
    colorClass: "var(--domain-android)",
    textClass: "text-domain-android",
    whatWeBuild: "Native-first, explicitly optimized mobile clients taking direct advantage of local system hardware. We prioritize Kotlin and Jetpack Compose against cross-platform fallbacks.",
    whyItMatters: "Building for a constrained memory envelope instills discipline. Navigating explicit device states, permissions, and variable hardware creates much tighter, reactive engineering.",
    tools: ["Kotlin", "Jetpack Compose", "Firebase", "Room DB", "Flutter"],
    learningPath: ["Kotlin Specs", "Android SDK", "Jetpack", "Firebase API", "Play Store Pipeline"],
    projects: []
  },
  "ui-ux": {
    name: "UI / UX Design",
    tagline: "Design that thinks first.",
    colorClass: "var(--domain-uiux)",
    textClass: "text-domain-uiux",
    whatWeBuild: "Information architecture flows, intensive wireframing arrays, high-fidelity prototypes, and design-to-development handoff token systems.",
    whyItMatters: "Good code solving the wrong problem is useless. Prototyping heavily before establishing a repository ensures that we build what users actually need, cutting waste significantly.",
    tools: ["Figma", "Design Systems", "Usability Testing", "Wireframing"],
    learningPath: ["Design Principles", "Figma Competency", "User Research", "Prototyping", "Design Token Handoff"],
    projects: [
      { slug: "ui-ux-workshop", title: "UI/UX Workshop Showcase", domainLabel: "UI/UX", typeLabel: "Internal", year: "2024", techStack: ["Figma"], description: "Complete end-to-end design system validation tests.", href: "#" }
    ]
  }
};

export default function Domains() {
  return (
    <div className="w-full flex-col pb-32">
      <div className="pt-24 px-8 max-w-7xl mx-auto w-full mb-16">
        <div className="font-label text-text-muted text-[12px] tracking-[0.04em] flex gap-2">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span className="text-border-emphasis">/</span>
          <span>Domains</span>
        </div>
      </div>

      {Object.entries(DOMAIN_DATA).map(([key, domain]) => (
        <section key={key} id={key} className="relative pt-8 pb-24 px-8 max-w-7xl mx-auto w-full mb-12 border-b border-border-default/30 scroll-mt-24">
          
          <div className="absolute top-0 right-10 w-[400px] h-[400px] rounded-full opacity-5 blur-[100px] pointer-events-none -z-10" style={{ background: domain.colorClass }} />
          
          <div className="mb-16">
            <h2 className={`font-display text-[48px] md:text-[64px] font-extrabold leading-tight tracking-tight mb-2 ${domain.textClass}`}>
              {domain.name}
            </h2>
            <p className="font-mono text-[14px] text-text-secondary tracking-wide uppercase mt-4 border-l-2 pl-4" style={{ borderColor: domain.colorClass }}>
              {domain.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT COLUMN - TEXT */}
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="font-heading text-[18px] font-bold text-text-primary mb-3">What We Build</h3>
                <p className="font-body text-body-lg text-text-secondary leading-relaxed">
                  {domain.whatWeBuild}
                </p>
              </div>

              <div>
                <h3 className="font-heading text-[18px] font-bold text-text-primary mb-3">Why This Domain Matters</h3>
                <p className="font-body text-[15px] text-text-secondary leading-[1.7]">
                  {domain.whyItMatters}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN - TECHNICALS */}
            <div className="flex flex-col gap-10 bg-bg-surface p-8 rounded-lg border border-border-default h-fit">
              <div>
                <h3 className="font-heading text-[14px] uppercase tracking-wider font-bold text-text-muted mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {domain.tools.map(tool => (
                     <span key={tool} className="font-code text-[12px] px-3 py-1.5 bg-bg-elevated border border-border-subtle rounded-md text-text-primary">
                       {tool}
                     </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-[14px] uppercase tracking-wider font-bold text-text-muted mb-4">Learning Progression</h3>
                <div className="flex flex-col gap-3 relative">
                  <div className="absolute left-2.5 top-3 bottom-3 w-px bg-border-subtle" />
                  {domain.learningPath.map((step, i) => (
                    <div key={i} className="flex flex-row items-center gap-4 relative z-10">
                      <div className="w-5 h-5 rounded-full bg-bg-base border-2 border-border-subtle flex items-center justify-center">
                         <div className="w-1.5 h-1.5 rounded-full" style={{ background: domain.colorClass }} />
                      </div>
                      <span className="font-body text-[14px] text-text-secondary">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* DOMAIN PROJECTS */}
          {domain.projects.length > 0 && (
            <div className="mt-16 pt-8">
              <h3 className="font-heading text-[18px] font-bold text-text-primary mb-6">Recent Shipped Work</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {domain.projects.map(project => (
                   <ProjectCard key={project.slug} {...project} />
                ))}
              </div>
            </div>
          )}

        </section>
      ))}

    </div>
  );
}
