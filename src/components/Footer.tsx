import React from 'react';
import {
  ArrowUp,
  Code2,
  Heart,
  Github,
  Linkedin,
  Instagram,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" aria-hidden="true" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" aria-hidden="true" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" aria-hidden="true" />;
      case 'mail':
        return <Mail className="w-4 h-4" aria-hidden="true" />;
      default:
        return <Mail className="w-4 h-4" aria-hidden="true" />;
    }
  };

  return (
    <footer
      id="site-footer"
      className="bg-slate-100 dark:bg-[#0A0A0B] text-slate-700 dark:text-[#A0A0A0] border-t border-slate-200 dark:border-[#2A2A2B] transition-colors"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-[#2A2A2B]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#F27D26] flex items-center justify-center text-white font-mono font-bold text-xs shadow-md">
                MAM
              </div>
              <span className="font-serif italic font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-[#808080] max-w-sm leading-relaxed font-sans">
              {PERSONAL_INFO.title} • {PERSONAL_INFO.tagline}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#00FF00] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#00FF00] inline-block animate-pulse" />
              <span>{PERSONAL_INFO.availabilityStatus}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-4">
              Index
            </h3>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#F27D26] dark:hover:text-white transition-colors"
                >
                  Biography & Overview
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-[#F27D26] dark:hover:text-white transition-colors"
                >
                  Technical Matrix
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#F27D26] dark:hover:text-white transition-colors"
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-[#F27D26] dark:hover:text-white transition-colors"
                >
                  Career Progression
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#F27D26] dark:hover:text-white transition-colors"
                >
                  Transmission Channel
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Documents */}
          <div>
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-4">
              Documents
            </h3>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="text-left text-[#F27D26] hover:underline transition-colors"
                >
                  Curriculum Vitae (Interactive)
                </button>
              </li>
              <li>
                <a
                  href={`https://github.com/${PERSONAL_INFO.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F27D26] dark:hover:text-white transition-colors"
                >
                  Open Source Repositories
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#F27D26] dark:hover:text-white transition-colors"
                >
                  System Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Networks */}
          <div>
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-4">
              Networks
            </h3>
            <div className="flex flex-col space-y-2.5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs font-mono text-slate-700 dark:text-[#A0A0A0] hover:text-[#F27D26] dark:hover:text-white transition-colors group"
                  aria-label={`Visit my ${link.name} profile`}
                >
                  <span className="p-1 rounded bg-slate-200/80 dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] text-slate-700 dark:text-[#D0D0D0] group-hover:text-[#F27D26] transition-colors">
                    {getSocialIcon(link.iconName)}
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, a11y badge & Back to top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-[#808080]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F27D26]" aria-hidden="true" />
            <span>Built with React 19, TypeScript & Tailwind CSS • WCAG 2.1 AA</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>

            <button
              id="back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-200/70 hover:bg-slate-300 dark:bg-[#151516] dark:hover:bg-[#1f1f20] border border-slate-200 dark:border-[#2A2A2B] text-slate-700 dark:text-[#D0D0D0] hover:text-[#F27D26] transition-colors focus:outline-none"
              aria-label="Scroll back to top of the page"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
