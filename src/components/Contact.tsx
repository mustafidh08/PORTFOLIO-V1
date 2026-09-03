import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { ContactFormData } from '../types';

interface ContactProps {
  onShowToast: (title: string, message?: string, type?: 'success' | 'error') => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'General Inquiry',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const projectTypes = [
    'Full-Time Engineering Role',
    'Contract / Architecture Consulting',
    'Technical Advisory',
    'Open Source Collaboration',
    'General Inquiry',
  ];

  const validateForm = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format (name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please type a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      onShowToast('Validation Issue', 'Please resolve the highlighted fields in the form.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast(
        'Message Sent Successfully!',
        `Thank you ${formData.name}. I will review your message and reply within 24 hours.`,
        'success'
      );
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    onShowToast('Email Copied', `${PERSONAL_INFO.email} copied to clipboard.`, 'success');
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      projectType: 'General Inquiry',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Inquiries"
      className="py-20 sm:py-28 bg-[#F5F5F7] dark:bg-[#0A0A0B] border-b border-slate-200 dark:border-[#2A2A2B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-3">
            <span className="w-6 h-px bg-[#F27D26]" />
            <span>Direct Transmission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-slate-900 dark:text-white tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-[#A0A0A0] mt-2">
            Have a project, engineering opportunity, or technical question? Send a note or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct channels & Quick Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Direct Contact Box */}
            <div className="p-6 sm:p-7 rounded bg-white dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] space-y-6">
              <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-1">
                  Direct Channel
                </h3>
                <p className="text-xs text-slate-500 dark:text-[#808080]">
                  Feel free to send an email directly or copy the address.
                </p>
              </div>

              {/* Email pill with copy & mailto */}
              <div className="p-4 rounded bg-slate-50 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded bg-slate-100 dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] text-[#F27D26] shrink-0">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-mono text-slate-800 dark:text-[#D0D0D0] truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded text-[#808080] hover:text-[#F27D26] hover:bg-white dark:hover:bg-[#151516] transition-colors"
                    aria-label="Copy email address"
                    title="Copy email address"
                  >
                    {emailCopied ? (
                      <Check className="w-3.5 h-3.5 text-[#00FF00]" aria-hidden="true" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-1.5 rounded text-[#808080] hover:text-[#F27D26] hover:bg-white dark:hover:bg-[#151516] transition-colors"
                    aria-label="Open email client"
                    title="Open mail application"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Meta information items */}
              <div className="space-y-3 font-mono text-xs text-slate-600 dark:text-[#A0A0A0]">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F27D26] shrink-0" aria-hidden="true" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#00FF00] shrink-0" aria-hidden="true" />
                  <span>Response SLA: Under 24 hours</span>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-4 border-t border-slate-100 dark:border-[#2A2A2B]">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#808080] mb-3">
                  Professional Networks
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.id}
                      id={`contact-link-${link.id}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded bg-slate-50 dark:bg-[#0A0A0B] hover:border-[#F27D26] border border-slate-200 dark:border-[#2A2A2B] flex items-center justify-between text-xs font-mono text-slate-700 dark:text-[#A0A0A0] hover:text-[#F27D26] dark:hover:text-white transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#F27D26]" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded bg-white dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B]">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded bg-slate-100 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B] text-[#00FF00] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-serif italic font-bold text-slate-900 dark:text-white">
                    Transmission Received
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-[#A0A0A0] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <strong>{formData.name}</strong>. I've received your note and will get back to you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="mt-6 px-6 py-2.5 rounded bg-slate-900 text-white dark:bg-white dark:text-black hover:bg-[#F27D26] hover:text-white dark:hover:bg-[#F27D26] dark:hover:text-white font-mono uppercase tracking-widest text-[10px] font-bold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 dark:text-[#A0A0A0] mb-2"
                      >
                        Your Name <span className="text-[#F27D26]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="Ada Lovelace"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className={`w-full px-3.5 py-2.5 rounded text-xs font-mono bg-slate-50 dark:bg-[#0A0A0B] border ${
                          errors.name
                            ? 'border-rose-500'
                            : 'border-slate-200 dark:border-[#2A2A2B] focus:border-[#F27D26]'
                        } text-slate-900 dark:text-white placeholder-[#808080] focus:outline-none transition-all`}
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 dark:text-[#A0A0A0] mb-2"
                      >
                        Email Address <span className="text-[#F27D26]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="ada@example.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className={`w-full px-3.5 py-2.5 rounded text-xs font-mono bg-slate-50 dark:bg-[#0A0A0B] border ${
                          errors.email
                            ? 'border-rose-500'
                            : 'border-slate-200 dark:border-[#2A2A2B] focus:border-[#F27D26]'
                        } text-slate-900 dark:text-white placeholder-[#808080] focus:outline-none transition-all`}
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type / Topic */}
                  <div>
                    <label
                      htmlFor="contact-project-type"
                      className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 dark:text-[#A0A0A0] mb-2"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded text-xs font-mono bg-slate-50 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B] text-slate-900 dark:text-white focus:outline-none focus:border-[#F27D26] transition-all cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 dark:text-[#A0A0A0] mb-2"
                    >
                      Subject <span className="text-[#F27D26]">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="e.g., Staff Full-Stack Engineer Role / Consulting"
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      className={`w-full px-3.5 py-2.5 rounded text-xs font-mono bg-slate-50 dark:bg-[#0A0A0B] border ${
                        errors.subject
                          ? 'border-rose-500'
                          : 'border-slate-200 dark:border-[#2A2A2B] focus:border-[#F27D26]'
                      } text-slate-900 dark:text-white placeholder-[#808080] focus:outline-none transition-all`}
                    />
                    {errors.subject && (
                      <p id="contact-subject-error" className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 dark:text-[#A0A0A0] mb-2"
                    >
                      Message <span className="text-[#F27D26]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell me about your project, team, timeline, and goals..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`w-full px-3.5 py-2.5 rounded text-xs font-mono bg-slate-50 dark:bg-[#0A0A0B] border ${
                        errors.message
                          ? 'border-rose-500'
                          : 'border-slate-200 dark:border-[#2A2A2B] focus:border-[#F27D26]'
                      } text-slate-900 dark:text-white placeholder-[#808080] focus:outline-none transition-all resize-y`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded bg-[#F27D26] hover:bg-[#ff8c3a] disabled:opacity-50 text-white font-mono font-bold uppercase tracking-widest text-xs shadow-md transition-all focus:outline-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
