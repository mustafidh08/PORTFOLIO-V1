import React from 'react';
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Instagram,
  Mail,
  CheckCircle2,
  Terminal,
  Layers,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5" aria-hidden="true" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" aria-hidden="true" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" aria-hidden="true" />;
      case 'mail':
        return <Mail className="w-5 h-5" aria-hidden="true" />;
      default:
        return <Mail className="w-5 h-5" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200 dark:border-[#2A2A2B]"
    >
      {/* Subtle geometric dot matrix background */}
      <div
        className="absolute inset-0 bg-dot-pattern-light dark:bg-dot-pattern opacity-40 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline, Bio summary & Action CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#1A1A1B] border border-slate-300 dark:border-[#2A2A2B] text-slate-800 dark:text-[#D0D0D0] text-[10px] font-mono uppercase tracking-widest font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00FF00] inline-block animate-pulse" />
              <span>{PERSONAL_INFO.availabilityStatus}</span>
            </div>

            {/* Micro Eyebrow */}
            <div className="text-[10px] uppercase text-[#F27D26] font-bold tracking-widest mb-2 font-mono">
              AI/ML Engineering & IoT Systems Builder
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
              {PERSONAL_INFO.tagline}
            </h1>

            {/* Subheadline / Intro Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#A0A0A0] leading-relaxed max-w-2xl mb-6">
              Hi, I’m <strong className="font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.name}</strong> ({PERSONAL_INFO.preferredName}). {PERSONAL_INFO.shortBio}
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-slate-100 dark:bg-[#1A1A1B] border border-slate-200 dark:border-[#2A2A2B] rounded-full text-[10px] text-slate-800 dark:text-[#D0D0D0] font-mono">
                ESP32 & IoT Embedded Firmware
              </span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-[#1A1A1B] border border-slate-200 dark:border-[#2A2A2B] rounded-full text-[10px] text-slate-800 dark:text-[#D0D0D0] font-mono">
                Next.js & TypeScript
              </span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-[#1A1A1B] border border-slate-200 dark:border-[#2A2A2B] rounded-full text-[10px] text-slate-800 dark:text-[#D0D0D0] font-mono">
                Multi-Agent & AI Systems
              </span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-[#1A1A1B] border border-slate-200 dark:border-[#2A2A2B] rounded-full text-[10px] text-slate-800 dark:text-[#D0D0D0] font-mono">
                Smart Agriculture & Fail-Safe Logic
              </span>
            </div>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-[#808080] mb-8 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F27D26]" aria-hidden="true" />
                {PERSONAL_INFO.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                FILKOM Universitas Brawijaya
              </span>
            </div>

            {/* CTAs: Projects, Contact & Resume */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white dark:bg-white dark:text-black text-[11px] font-bold uppercase tracking-widest text-center rounded hover:bg-[#F27D26] hover:text-white dark:hover:bg-[#F27D26] dark:hover:text-white transition-all shadow-md"
              >
                <span>Explore Works</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <button
                id="hero-resume-modal-btn"
                type="button"
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded bg-slate-100 hover:bg-slate-200 dark:bg-[#151516] dark:hover:bg-[#2A2A2B] border border-slate-300 dark:border-[#2A2A2B] hover:border-[#F27D26] dark:hover:border-[#F27D26] text-slate-800 dark:text-[#E8E8E8] hover:text-slate-900 dark:hover:text-white text-[11px] font-bold uppercase tracking-widest transition-all"
              >
                <FileDown className="w-3.5 h-3.5 text-[#F27D26]" aria-hidden="true" />
                <span>Curriculum Vitae</span>
              </button>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded text-xs uppercase tracking-widest font-semibold text-slate-700 dark:text-[#A0A0A0] hover:text-[#F27D26] dark:hover:text-white transition-colors"
              >
                <span>Get In Touch —&gt;</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-[#2A2A2B] w-full">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#808080] mr-1">
                Networks:
              </span>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  id={`hero-social-${link.id}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.name} profile (${link.username})`}
                  className="w-9 h-9 flex items-center justify-center rounded bg-slate-100 dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] text-slate-700 dark:text-[#D0D0D0] hover:border-[#F27D26] hover:text-[#F27D26] dark:hover:text-white transition-all focus:outline-none focus:border-[#F27D26]"
                >
                  {getSocialIcon(link.iconName)}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code Snapshot & Architecture Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded bg-slate-50 dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] p-6 sm:p-7 shadow-2xl transition-all hover:border-[#F27D26]">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-[#2A2A2B]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2B] dark:bg-[#2A2A2B] border border-slate-400 dark:border-[#404040] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2B] dark:bg-[#2A2A2B] border border-slate-400 dark:border-[#404040] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F27D26] inline-block" />
                  <span className="ml-2 text-[11px] font-mono text-slate-500 dark:text-[#808080] flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-[#F27D26]" aria-hidden="true" />
                    iot-ai-engineer.ts
                  </span>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-[#1A1A1B] text-slate-800 dark:text-[#D0D0D0] border border-slate-300 dark:border-[#2A2A2B] uppercase tracking-wider font-semibold">
                  TypeScript 5.8
                </span>
              </div>

              {/* Code Preview Block */}
              <div className="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-800 dark:text-[#D0D0D0] overflow-x-auto select-none space-y-1">
                <div>
                  <span className="text-[#F27D26]">const</span>{' '}
                  <span className="text-slate-900 dark:text-white font-bold">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#808080]">name:</span>{' '}
                  <span className="text-slate-900 dark:text-white">'{PERSONAL_INFO.name}'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#808080]">focus:</span> [
                  <span className="text-[#D0D0D0]">'IoT & Embedded'</span>,{' '}
                  <span className="text-[#D0D0D0]">'AI / ML Systems'</span>,{' '}
                  <span className="text-[#D0D0D0]">'Next.js & TypeScript'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#808080]">mindset:</span>{' '}
                  <span className="text-slate-900 dark:text-white">'Terbentur, terbentur, terbentuk'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#808080]">principles:</span> &#123;
                </div>
                <div className="pl-8 text-slate-600 dark:text-[#A0A0A0]">
                  scalableIoT: <span className="text-[#F27D26]">true</span>,
                </div>
                <div className="pl-8 text-slate-600 dark:text-[#A0A0A0]">
                  failSafeProtection: <span className="text-[#F27D26]">true</span>,
                </div>
                <div className="pl-8 text-slate-600 dark:text-[#A0A0A0]">
                  lighthouse100Score: <span className="text-[#F27D26]">true</span>,
                </div>
                <div className="pl-4">&#125;,</div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#808080]">status:</span>{' '}
                  <span className="text-[#F27D26] font-semibold">'{PERSONAL_INFO.availabilityStatus}'</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Bottom Quick Stats Bento Grid */}
              <div className="grid grid-cols-3 gap-2.5 mt-6 pt-5 border-t border-slate-200 dark:border-[#2A2A2B] text-center">
                <div className="p-3 rounded bg-white dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B]">
                  <div className="text-lg sm:text-xl font-serif italic font-bold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.yearsOfExperience}
                  </div>
                  <div className="text-[9px] text-[#808080] uppercase font-bold tracking-widest mt-0.5 font-mono">
                    Years Exp.
                  </div>
                </div>
                <div className="p-3 rounded bg-white dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B]">
                  <div className="text-lg sm:text-xl font-serif italic font-bold text-[#F27D26]">
                    {PERSONAL_INFO.completedProjects}
                  </div>
                  <div className="text-[9px] text-[#808080] uppercase font-bold tracking-widest mt-0.5 font-mono">
                    Shipped
                  </div>
                </div>
                <div className="p-3 rounded bg-white dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B]">
                  <div className="text-lg sm:text-xl font-serif italic font-bold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.codeContributions}
                  </div>
                  <div className="text-[9px] text-[#808080] uppercase font-bold tracking-widest mt-0.5 font-mono">
                    Contributions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
