import React, { useState } from 'react';
import {
  FileDown,
  Eye,
  Check,
  Copy,
  Printer,
  FileCode,
  Sparkles,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'info') => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  onOpenResumeModal,
  onShowToast,
}) => {
  const [copied, setCopied] = useState(false);

  const handleQuickDownload = () => {
    // Generate text document resume
    const content = `${PERSONAL_INFO.name.toUpperCase()} - ${PERSONAL_INFO.title.toUpperCase()}
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
GitHub: https://github.com/${PERSONAL_INFO.githubUsername}
LinkedIn: https://linkedin.com/in/${PERSONAL_INFO.linkedinUsername}

SUMMARY:
${PERSONAL_INFO.shortBio}

CORE CAPABILITIES:
- Embedded & IoT Systems: ESP32, Arduino C/C++, NFC/PN532, DF2301QG Voice, pH/EC Sensors, MQTT, SinricPro
- AI & Systems: Python, Multi-Agent Architectures, Machine Learning Foundations, Prompt Engineering
- Web & Frontend: Next.js, React, TypeScript, Tailwind CSS, Sanity.io, 100/100 Lighthouse Performance
- DevOps & Security: Vercel, PANDI DNS (.sch.id), OWASP Top 10:2025 Audit, Git, Media Production
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Muhammad_Azzam_Mustafidh_Resume_${new Date().getFullYear()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    onShowToast('Resume Downloaded', 'The resume file has been downloaded.', 'success');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    onShowToast('Portfolio Link Copied', 'Shareable portfolio URL copied to clipboard.', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="resume"
      aria-label="Downloadable Resume and Curriculum Vitae"
      className="py-16 sm:py-24 bg-white dark:bg-[#0A0A0B] border-b border-slate-200 dark:border-[#2A2A2B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded bg-[#151516] text-white p-8 sm:p-12 lg:p-14 border border-[#2A2A2B] overflow-hidden shadow-2xl">
          {/* Subtle Accent Glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-[#F27D26]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Pitch & Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A0A0B] border border-[#2A2A2B] text-[#F27D26] text-[10px] font-mono uppercase tracking-widest font-bold">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Formal Qualifications</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif italic text-white tracking-tight">
                Curriculum Vitae & Technical Resume
              </h2>

              <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed max-w-xl">
                Evaluating my architectural background for an upcoming engineering leadership role or complex technical challenge? Access the interactive document preview or download a verified plain-text ATS copy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-[11px] text-[#A0A0A0]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00FF00] shrink-0" aria-hidden="true" />
                  <span>ATS-Optimized TXT / Markdown</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-[#F27D26] shrink-0" aria-hidden="true" />
                  <span>AWS & GCP Cloud Certified</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Action Card */}
            <div className="lg:col-span-5 bg-[#0A0A0B] rounded border border-[#2A2A2B] p-6 sm:p-7 flex flex-col gap-3.5">
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F27D26]">
                Format Options
              </h3>

              <div className="space-y-2.5">
                <button
                  id="resume-section-preview-btn"
                  type="button"
                  onClick={onOpenResumeModal}
                  className="w-full flex items-center justify-between p-3 rounded bg-[#F27D26] hover:bg-[#ff8c3a] text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-md focus:outline-none group"
                >
                  <span className="flex items-center gap-2">
                    <Eye className="w-4 h-4" aria-hidden="true" />
                    <span>View Interactive CV</span>
                  </span>
                  <span className="text-[10px] text-white/80 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </button>

                <button
                  id="resume-section-download-btn"
                  type="button"
                  onClick={handleQuickDownload}
                  className="w-full flex items-center justify-between p-3 rounded bg-[#151516] hover:bg-[#1f1f20] text-white font-mono text-xs uppercase tracking-widest border border-[#2A2A2B] transition-all focus:outline-none"
                >
                  <span className="flex items-center gap-2">
                    <FileDown className="w-4 h-4 text-[#F27D26]" aria-hidden="true" />
                    <span>Download TXT (ATS)</span>
                  </span>
                  <span className="text-[10px] text-[#808080]">Instant</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full flex items-center justify-between p-3 rounded bg-transparent hover:bg-white/5 text-[#A0A0A0] hover:text-white font-mono text-xs uppercase tracking-widest border border-[#2A2A2B] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {copied ? (
                      <Check className="w-4 h-4 text-[#00FF00]" aria-hidden="true" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#808080]" aria-hidden="true" />
                    )}
                    <span>{copied ? 'Link Copied!' : 'Copy Portfolio URL'}</span>
                  </span>
                  <span className="text-[10px] text-[#808080]">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
