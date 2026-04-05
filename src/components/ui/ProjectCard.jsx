import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "./Button";

export function ProjectCard({ 
  title, 
  description, 
  imageSrc, 
  domainLabel, 
  typeLabel, 
  year, 
  techStack = [], 
  href = "#" 
}) {
  const getTypeBadgeStyles = (type) => {
    switch (type.toLowerCase()) {
      case 'consultancy':
        return "text-accent-orange border-accent-orange bg-[#FF8C4214]";
      case 'internal':
        return "text-accent-blue border-accent-blue bg-[#4D9FFF14]";
      case 'competition':
        return "text-accent-purple border-accent-purple bg-[#BF5FFF14]";
      default:
        return "text-text-muted border-border-default bg-bg-elevated";
    }
  };

  const getDomainColorText = (domain) => {
    switch (domain.toLowerCase()) {
      case 'ai/ml': return "text-domain-ai";
      case 'web dev': return "text-domain-web";
      case 'android': return "text-domain-android";
      case 'ui/ux': return "text-domain-uiux";
      default: return "text-text-muted";
    }
  };

  return (
    <Link 
      href={href}
      className="group relative flex flex-col bg-bg-surface border border-border-default rounded-lg overflow-hidden transition-all duration-slow ease-spring hover:-translate-y-1 hover:border-border-mint hover:shadow-mintMd z-base hover:z-raised"
    >
      {/* Image Container with 16:9 aspect ratio */}
      <div className="relative w-full aspect-video overflow-hidden bg-bg-elevated border-b border-border-default">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-30 bg-texture-scanline">
            <span className="font-mono text-text-muted text-sm">NO IMAGE</span>
          </div>
        )}
        
        {/* Glow Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-base pointer-events-none mix-blend-overlay bg-gradient-to-tr from-accent-mint/20 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col p-6 flex-grow">
        
        {/* Meta Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className={cn("font-label text-[10px] tracking-wider uppercase font-bold", getDomainColorText(domainLabel))}>
              ● {domainLabel}
            </span>
            <span className={cn("font-label text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-sm border", getTypeBadgeStyles(typeLabel))}>
              {typeLabel}
            </span>
          </div>
          <span className="font-mono text-[12px] text-text-muted">{year}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-h3 font-semibold text-text-primary mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-body-sm text-text-secondary leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Footer / Tech Stack */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border-subtle">
          <div className="flex items-center gap-2 overflow-hidden flex-wrap">
            {techStack.slice(0, 3).map((tech, i) => (
              <span key={i} className="font-code text-[12px] text-text-muted">
                {tech}
                {i < Math.min(techStack.length, 3) - 1 ? " ·" : ""}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="font-code text-[12px] text-text-muted border border-border-default px-1 rounded-sm">
                +{techStack.length - 3}
              </span>
            )}
          </div>
          
          <ArrowUpRight 
            size={20} 
            className="text-text-muted opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-base ease-out group-hover:text-accent-mint flex-shrink-0" 
          />
        </div>
      </div>
    </Link>
  );
}
