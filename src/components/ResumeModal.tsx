import React, { useEffect, useRef } from 'react';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  FileText,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  WORK_EXPERIENCE,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  SKILL_CATEGORIES,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'info') => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [copied, setCopied] = React.useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title}
Location: ${PERSONAL_INFO.location} | Email: ${PERSONAL_INFO.email}
Portfolio: https://portfolio.dev | GitHub: https://github.com/${PERSONAL_INFO.githubUsername}

SUMMARY:
${PERSONAL_INFO.shortBio}

EXPERIENCE:
${WORK_EXPERIENCE.map(
  (w) => `
${w.role} - ${w.company} (${w.period})
Location: ${w.location}
${w.summary}
Key Accomplishments:
${w.responsibilities.map((r) => ` • ${r}`).join('\n')}
Technologies: ${w.technologies.join(', ')}
`
).join('\n')}

EDUCATION:
${EDUCATION_DATA.map(
  (e) => `${e.degree} - ${e.institution} (${e.period})
${e.details} | ${e.honors || ''}`
).join('\n')}

CERTIFICATIONS:
${CERTIFICATIONS_DATA.map((c) => ` • ${c.name} (${c.issuer}, ${c.date})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    onShowToast('Resume Copied', 'Plain text resume copied to clipboard for ATS submission.', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadFile = () => {
    const resumeContent = `=====================================================
${PERSONAL_INFO.name.toUpperCase()} - RESUME / CURRICULUM VITAE
${PERSONAL_INFO.title}
=====================================================
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
GitHub: https://github.com/${PERSONAL_INFO.githubUsername}
LinkedIn: https://linkedin.com/in/${PERSONAL_INFO.linkedinUsername}

EXECUTIVE SUMMARY
-----------------
${PERSONAL_INFO.shortBio}

CORE TECHNICAL COMPETENCIES
---------------------------
Frontend: TypeScript, React 19, Next.js, Tailwind CSS, Accessibility (WCAG 2.1 AA)
Backend: Node.js, Express, Go, Python, REST & GraphQL APIs, Distributed Systems
Databases: PostgreSQL, Redis, MongoDB, Vector Databases, Query Tuning
Cloud & DevOps: Docker, AWS, GCP, Kubernetes, CI/CD, Terraform, Prometheus

PROFESSIONAL EXPERIENCE
-----------------------
${WORK_EXPERIENCE.map(
  (exp) => `
* ${exp.role.toUpperCase()} | ${exp.company}
  Period: ${exp.period} | Location: ${exp.location}
  Summary: ${exp.summary}
  Key Contributions:
  ${exp.responsibilities.map((r) => `  - ${r}`).join('\n')}
  Stack: ${exp.technologies.join(', ')}
`
).join('')}

EDUCATION & CREDENTIALS
-----------------------
${EDUCATION_DATA.map(
  (edu) => `* ${edu.degree} - ${edu.institution} (${edu.period})
  ${edu.details} (${edu.honors})`
).join('\n')}

Certifications:
${CERTIFICATIONS_DATA.map((c) => `* ${c.name} - ${c.issuer} (${c.date}) [ID: ${c.credentialId || 'N/A'}]`).join('\n')}
`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Alex_Morgan_Resume_${new Date().getFullYear()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    onShowToast('Download Started', 'Resume file downloaded successfully.', 'success');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-heading"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-white dark:bg-[#151516] rounded border border-slate-200 dark:border-[#2A2A2B] shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col">
        {/* Header toolbar */}
        <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between px-6 py-4 bg-white dark:bg-[#151516] border-b border-slate-200 dark:border-[#2A2A2B] gap-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#F27D26]" aria-hidden="true" />
            <h2 id="resume-modal-heading" className="text-base sm:text-lg font-serif italic font-bold text-slate-900 dark:text-white">
              Curriculum Vitae Document
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {/* Print button */}
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-slate-100 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B] hover:border-[#F27D26] text-slate-700 dark:text-[#A0A0A0] hover:text-[#F27D26] transition-colors focus:outline-none"
              title="Print or Save as PDF via Browser Print"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            {/* Copy plain text for ATS */}
            <button
              type="button"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-slate-100 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B] hover:border-[#F27D26] text-slate-700 dark:text-[#A0A0A0] hover:text-[#F27D26] transition-colors focus:outline-none"
              title="Copy ATS formatted text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#00FF00]" aria-hidden="true" />
                  <span className="text-[#00FF00]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            {/* Direct download */}
            <button
              type="button"
              onClick={handleDownloadFile}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-mono font-bold uppercase tracking-widest bg-[#F27D26] hover:bg-[#ff8c3a] text-white transition-colors shadow-sm focus:outline-none"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Download</span>
            </button>

            {/* Close button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-1.5 rounded text-[#808080] hover:text-slate-900 dark:hover:text-white focus:outline-none ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-100 dark:bg-[#0A0A0B]">
          <div
            id="printable-resume-sheet"
            className="max-w-3xl mx-auto bg-white dark:bg-[#121214] p-8 sm:p-12 rounded border border-slate-200 dark:border-[#2A2A2B] text-slate-900 dark:text-white print:shadow-none print:border-none print:p-0 print:m-0"
          >
            {/* Header / Contact Info */}
            <div className="border-b border-slate-200 dark:border-[#2A2A2B] pb-6 mb-6">
              <h1 className="text-3xl sm:text-4xl font-serif italic font-bold tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono font-semibold text-[#F27D26] mt-1">
                {PERSONAL_INFO.title}
              </p>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 dark:text-[#A0A0A0] mt-3 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F27D26]" aria-hidden="true" />
                  {PERSONAL_INFO.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#F27D26]" aria-hidden="true" />
                  {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-[#F27D26]" aria-hidden="true" />
                  github.com/{PERSONAL_INFO.githubUsername}
                </span>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="mb-6">
              <h2 className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#F27D26] border-b border-slate-200 dark:border-[#2A2A2B] pb-1 mb-2">
                Executive Profile
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-[#C0C0C0] leading-relaxed">
                {PERSONAL_INFO.shortBio}
              </p>
            </div>

            {/* Key Skills */}
            <div className="mb-6">
              <h2 className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#F27D26] border-b border-slate-200 dark:border-[#2A2A2B] pb-1 mb-2">
                Technical Proficiencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <strong className="text-slate-900 dark:text-white">Languages & Frameworks:</strong>{' '}
                  <span className="text-slate-600 dark:text-[#A0A0A0]">
                    TypeScript, React 19, Next.js, Node.js, Express, Go, Python
                  </span>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Architecture & DevOps:</strong>{' '}
                  <span className="text-slate-600 dark:text-[#A0A0A0]">
                    Docker, AWS, GCP, Kubernetes, CI/CD, Microservices, WebSockets
                  </span>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Data & Storage:</strong>{' '}
                  <span className="text-slate-600 dark:text-[#A0A0A0]">
                    PostgreSQL, Redis, Vector Embeddings, SQL Query Tuning
                  </span>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Standards & Quality:</strong>{' '}
                  <span className="text-slate-600 dark:text-[#A0A0A0]">
                    WCAG 2.1 AA a11y, Vitest, Playwright, Zero-CLS Optimization
                  </span>
                </div>
              </div>
            </div>

            {/* Work History */}
            <div className="mb-6">
              <h2 className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#F27D26] border-b border-slate-200 dark:border-[#2A2A2B] pb-1 mb-4">
                Professional Experience
              </h2>
              <div className="space-y-5">
                {WORK_EXPERIENCE.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <div>
                        <span className="font-bold text-sm text-slate-900 dark:text-white font-mono">
                          {exp.role}
                        </span>{' '}
                        <span className="text-[#F27D26] font-mono text-xs">
                          • {exp.company}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#808080]">
                        {exp.period} | {exp.location}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-[#A0A0A0] mb-2 italic">
                      {exp.summary}
                    </p>

                    <ul className="space-y-1 pl-4 list-disc text-xs text-slate-700 dark:text-[#C0C0C0]">
                      {exp.responsibilities.map((r, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certs */}
            <div>
              <h2 className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#F27D26] border-b border-slate-200 dark:border-[#2A2A2B] pb-1 mb-3">
                Education & Credentials
              </h2>
              <div className="space-y-3 text-xs font-mono">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </span>{' '}
                      — {edu.institution} ({edu.honors})
                    </div>
                    <span className="text-[#808080]">{edu.period}</span>
                  </div>
                ))}

                <div className="pt-2 text-slate-600 dark:text-[#A0A0A0]">
                  <strong className="text-slate-900 dark:text-white">Certifications:</strong>{' '}
                  {CERTIFICATIONS_DATA.map((c) => c.name).join(' • ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
