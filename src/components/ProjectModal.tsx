import React, { useEffect, useRef } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { Project } from '../types';
import { LazyImage } from './LazyImage';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    // Focus trap & ESC listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Save previous scroll position and prevent background scrolling
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    // Initial focus on close button
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop click listener */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-white dark:bg-[#151516] rounded border border-slate-200 dark:border-[#2A2A2B] shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
      >
        {/* Modal Top Header / Actions */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white dark:bg-[#151516] border-b border-slate-200 dark:border-[#2A2A2B]">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F27D26]">
              System Specification
            </span>
            <span className="text-[#808080] font-mono">•</span>
            <span className="text-[10px] font-mono text-[#808080] uppercase tracking-widest">
              {project.category}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-1.5 rounded text-[#808080] hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-[#0A0A0B] dark:hover:bg-[#2A2A2B] border border-slate-200 dark:border-[#2A2A2B] transition-colors focus:outline-none"
            aria-label="Close project modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual Image with Lazy Loading */}
          <div className="rounded overflow-hidden border border-slate-200 dark:border-[#2A2A2B]">
            <LazyImage
              src={project.gallery?.[0] || project.thumbnail}
              alt={`${project.title} detailed screenshot preview`}
              aspectRatio="aspect-[16/9]"
              priority={true}
            />
          </div>

          {/* Title & Tagline */}
          <div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-serif italic font-bold text-slate-900 dark:text-white"
            >
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#F27D26] mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Metrics Bento Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded bg-slate-50 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B]">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center p-2">
                  <div className="text-xl sm:text-2xl font-serif italic font-bold text-slate-900 dark:text-white">
                    {m.value}
                  </div>
                  <div className="text-[10px] font-mono text-[#808080] uppercase tracking-widest">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Full Narrative & Solution Architecture */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F27D26] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Project Scope & Implementation</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-[#C0C0C0] leading-relaxed">
              {project.fullStory || project.description}
            </p>
          </div>

          {/* Key Features List */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F27D26] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF00]" aria-hidden="true" />
                <span>Key Deliverables & Specifications</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs font-mono text-slate-700 dark:text-[#D0D0D0] p-2.5 rounded bg-slate-50 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architectural Deep-Dive Highlights */}
          {project.architecturalHighlights && project.architecturalHighlights.length > 0 && (
            <div className="space-y-3 p-5 rounded bg-slate-50 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B]">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F27D26] flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Architectural Decisions</span>
              </h3>
              <ul className="space-y-2 text-xs font-mono text-slate-700 dark:text-[#C0C0C0]">
                {project.architecturalHighlights.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-[#F27D26]">›</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h3 className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#808080] mb-3">
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-[#0A0A0B] text-slate-800 dark:text-[#D0D0D0] border border-slate-200 dark:border-[#2A2A2B]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with External Links */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-[#121214] border-t border-slate-200 dark:border-[#2A2A2B] flex flex-wrap items-center justify-between gap-4">
          <div className="text-[11px] text-[#808080] font-mono">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-[#151516] border border-slate-300 dark:border-[#2A2A2B] text-slate-700 dark:text-[#D0D0D0]">ESC</kbd> to close
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white dark:bg-[#0A0A0B] hover:border-[#F27D26] text-slate-800 dark:text-white text-xs font-mono border border-slate-200 dark:border-[#2A2A2B] transition-colors focus:outline-none"
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Source Code</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#F27D26] hover:bg-[#ff8c3a] text-white text-xs font-mono font-bold uppercase tracking-widest shadow-md transition-colors focus:outline-none"
              >
                <span>Live Deployment</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
