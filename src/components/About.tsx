import React from 'react';
import {
  Zap,
  ShieldCheck,
  HeartHandshake,
  Users,
  CheckCircle2,
  FileDown,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { BIOGRAPHY_SECTIONS, PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenResumeModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResumeModal }) => {
  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-4 h-4 text-[#F27D26]" aria-hidden="true" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#F27D26]" aria-hidden="true" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4 text-[#F27D26]" aria-hidden="true" />;
      case 'Users':
        return <Users className="w-4 h-4 text-[#F27D26]" aria-hidden="true" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#F27D26]" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="about"
      aria-label="About and Biography"
      className="py-20 sm:py-28 bg-[#F5F5F7] dark:bg-[#0A0A0B] border-b border-slate-200 dark:border-[#2A2A2B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-3">
            <span className="w-6 h-px bg-[#F27D26]" />
            <span>Biography & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-slate-900 dark:text-white tracking-tight">
            {BIOGRAPHY_SECTIONS.headline}
          </h2>
        </div>

        {/* 2-Column Story and Key Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-[#A0A0A0] text-sm sm:text-base leading-relaxed">
            {BIOGRAPHY_SECTIONS.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Quick Technical Values List */}
            <div className="pt-6 border-t border-slate-200 dark:border-[#2A2A2B]">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white font-mono mb-4">
                Core Engineering Commitments
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-[#D0D0D0]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] shrink-0" aria-hidden="true" />
                  <span>Strict Type Safety & Schema Contracts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] shrink-0" aria-hidden="true" />
                  <span>WCAG 2.1 AA Accessibility Compliant</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] shrink-0" aria-hidden="true" />
                  <span>Automated CI/CD & Test Automation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] shrink-0" aria-hidden="true" />
                  <span>Telemetry, Observability & SLO Tracking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Engineering Highlights & Resume Callout */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {BIOGRAPHY_SECTIONS.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded bg-white dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] flex items-start gap-4 transition-all hover:border-[#F27D26]"
                >
                  <div className="p-2 rounded bg-slate-100 dark:bg-[#1A1A1B] border border-slate-200 dark:border-[#2A2A2B] shrink-0">
                    {getHighlightIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-[#808080] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Callout Card */}
            <div className="mt-2 p-6 rounded bg-slate-900 dark:bg-[#151516] text-white shadow-xl relative overflow-hidden border border-slate-700 dark:border-[#2A2A2B] hover:border-[#F27D26] transition-all">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F27D26] font-bold">
                    Curriculum Vitae
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/40 border border-[#2A2A2B] text-[#A0A0A0]">
                    Updated 2026
                  </span>
                </div>
                <h3 className="text-lg font-serif italic font-bold text-white mb-2">
                  Looking for detailed experience & credentials?
                </h3>
                <p className="text-xs text-[#A0A0A0] mb-5 leading-relaxed">
                  Download the formatted resume or inspect complete employment history, technical competencies, and verified cloud certifications.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    id="about-view-resume-btn"
                    type="button"
                    onClick={onOpenResumeModal}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-white text-black hover:bg-[#F27D26] hover:text-white text-[11px] font-bold uppercase tracking-widest transition-all shadow-md focus:outline-none"
                  >
                    <FileDown className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Download / View Resume</span>
                  </button>
                  <a
                    href="#experience"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D0D0D0] hover:text-[#F27D26] transition-colors"
                  >
                    <span>View Timeline</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
