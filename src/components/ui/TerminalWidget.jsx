"use client";

import React, { useState, useEffect } from 'react';
import { cn } from './Button';

const TERMINAL_LINES = [
  { prompt: "$", command: "whoami", output: "C.O.D.E — Club of Developers and Engineers", delay: 1000 },
  { prompt: "$", command: "cat mission.txt", output: "Elevate technical knowledge to meet industrial demands.", delay: 2000 },
  { prompt: "$", command: "ls domains/", output: "ai-ml/     web-dev/     android/     ui-ux/", delay: 3500 },
  { prompt: "$", command: "git log --oneline | head -3", output: "a3f91c2 shipped consultancy project for ARAI\n7e8d441 completed AI cohort session\n2b3f109 hacksprint — 1st place", delay: 5000 },
  { prompt: "$", command: "status", output: "ACTIVE ████████░░ 80% toward next milestone", delay: 6500 },
];

export function TerminalWidget({ className }) {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Start sequence after mount
    if (currentLineIndex >= TERMINAL_LINES.length) return;

    const currentAction = TERMINAL_LINES[currentLineIndex];
    let typeTimeout;
    
    // Fake typing effect for the command
    if (!isTyping) {
      typeTimeout = setTimeout(() => {
        setIsTyping(true);
        let charIndex = 0;
        
        const typeInterval = setInterval(() => {
          if (charIndex <= currentAction.command.length) {
            setTypedCommand(currentAction.command.slice(0, charIndex));
            charIndex++;
          } else {
            clearInterval(typeInterval);
            setIsTyping(false);
            
            // Add the completed line with output to history
            setTimeout(() => {
              setLines(prev => [...prev, currentAction]);
              setTypedCommand("");
              setCurrentLineIndex(prev => prev + 1);
            }, 300); // Small pause before showing output
          }
        }, 80); // Typing speed
        
        return () => clearInterval(typeInterval);
      }, currentAction.delay - (currentLineIndex === 0 ? 0 : TERMINAL_LINES[currentLineIndex - 1].delay));
    }

    return () => clearTimeout(typeTimeout);
  }, [currentLineIndex, isTyping]);

  return (
    <div className={cn("bg-[#0D1117] border border-border-default rounded-lg overflow-hidden font-mono text-[13px] shadow-lg max-w-[520px] w-full", className)}>
      {/* Chrome Header */}
      <div className="bg-bg-elevated px-4 py-2.5 flex items-center gap-2 border-b border-border-subtle">
        <div className="w-3 h-3 rounded-full bg-[#2A2A2A]" />
        <div className="w-3 h-3 rounded-full bg-[#2A2A2A]" />
        <div className="w-3 h-3 rounded-full bg-[#2A2A2A]" />
        <span className="font-label text-[11px] text-text-muted mx-auto">
          bash — team@code-mmcoe
        </span>
      </div>

      {/* Terminal Body */}
      <div className="p-5 flex flex-col gap-1 min-h-[280px]">
        {/* Render History */}
        {lines.map((line, i) => (
          <div key={i} className="mb-2">
            <div className="flex">
              <span className="text-accent-mint mr-2 select-none">{line.prompt}</span>
              <span className="text-text-primary">{line.command}</span>
            </div>
            <div className="text-text-secondary pl-5 whitespace-pre-line mt-1">
              {line.output}
            </div>
          </div>
        ))}
        
        {/* Active Typing Line */}
        {currentLineIndex < TERMINAL_LINES.length && (
          <div className="flex">
            <span className="text-accent-mint mr-2 select-none">$</span>
            <span className="text-text-primary">
              {typedCommand}
              <span className="inline-block w-2 h-3.5 bg-accent-mint animate-[blink_1s_step-end_infinite] align-text-bottom ml-0.5" />
            </span>
          </div>
        )}
        
        {/* Blinking cursor waiting after completion */}
        {currentLineIndex >= TERMINAL_LINES.length && (
          <div className="flex">
            <span className="text-accent-mint mr-2 select-none">$</span>
            <span className="inline-block w-2 h-3.5 bg-accent-mint animate-[blink_1s_step-end_infinite] align-text-bottom mt-1 ml-0.5" />
          </div>
        )}
      </div>
    </div>
  );
}
