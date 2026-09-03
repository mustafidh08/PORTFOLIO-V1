import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Quote,
  ArrowUpRight,
} from 'lucide-react';
import {
  WORK_EXPERIENCE,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  TESTIMONIALS,
} from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Professional Experience and Education"
      className="py-20 sm:py-28 bg-[#F5F5F7] dark:bg-[#0A0A0B] border-b border-slate-200 dark:border-[#2A2A2B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-3">
            <span className="w-6 h-px bg-[#F27D26]" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-slate-900 dark:text-white tracking-tight">
            Work Experience & Background
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-[#A0A0A0] mt-2">
            A proven track record of engineering leadership, high-concurrency architectures, and reliable product launches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left 7 Columns: Work Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-serif italic font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-8">
              <div className="p-2 rounded bg-slate-100 dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] text-[#F27D26]">
                <Briefcase className="w-4 h-4" aria-hidden="true" />
              </div>
              <span>Employment History</span>
            </h3>

            {/* Timeline track */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-[#2A2A2B] space-y-10">
              {WORK_EXPERIENCE.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline bullet */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full border-2 transition-transform group-hover:scale-125 ${
                      item.current
                        ? 'bg-[#F27D26] border-white dark:border-[#0A0A0B] ring-4 ring-[#F27D26]/20'
                        : 'bg-[#151516] border-[#2A2A2B]'
                    }`}
                    aria-hidden="true"
                  />

                  {/* Card Container */}
                  <div className="p-6 rounded bg-white dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] transition-all hover:border-[#F27D26]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-base sm:text-lg font-serif italic font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B] text-slate-700 dark:text-[#D0D0D0]">
                        <Calendar className="w-3 h-3 text-[#F27D26]" aria-hidden="true" />
                        {item.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-[#808080] mb-4 font-mono">
                      <span className="text-[#F27D26] font-bold uppercase tracking-wider">
                        {item.company}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#808080]" aria-hidden="true" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A0A0A0] mb-4 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Bullet Achievements */}
                    <ul className="space-y-2 mb-5">
                      {item.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-[#A0A0A0] leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] mt-1.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-[#2A2A2B]">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B] text-slate-600 dark:text-[#808080]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 5 Columns: Education, Certifications & Testimonials */}
          <div className="lg:col-span-5 space-y-10">
            {/* Education Block */}
            <div>
              <h3 className="text-xl font-serif italic font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
                <div className="p-2 rounded bg-slate-100 dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] text-[#F27D26]">
                  <GraduationCap className="w-4 h-4" aria-hidden="true" />
                </div>
                <span>Education</span>
              </h3>

              <div className="space-y-4">
                {EDUCATION_DATA.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-5 rounded bg-white dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] hover:border-[#F27D26] transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-serif italic font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-[#808080]">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-xs font-mono font-semibold text-[#F27D26] mb-2 uppercase tracking-wider">
                      {edu.institution}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-[#808080] leading-relaxed mb-2">
                      {edu.details}
                    </p>
                    {edu.honors && (
                      <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B] text-[#00FF00] font-medium">
                        {edu.honors}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Block */}
            <div>
              <h3 className="text-xl font-serif italic font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
                <div className="p-2 rounded bg-slate-100 dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] text-[#F27D26]">
                  <Award className="w-4 h-4" aria-hidden="true" />
                </div>
                <span>Verified Credentials</span>
              </h3>

              <div className="space-y-3">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded bg-white dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] flex items-start gap-3.5 hover:border-[#F27D26] transition-all"
                  >
                    <div className="p-1.5 rounded bg-slate-100 dark:bg-[#0A0A0B] text-[#F27D26] shrink-0 mt-0.5 border border-slate-200 dark:border-[#2A2A2B]">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white font-serif leading-snug">
                        {cert.name}
                      </h4>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-[#808080] mt-1 font-mono">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                      {cert.credentialId && (
                        <div className="text-[9px] font-mono text-[#808080] mt-0.5">
                          ID: {cert.credentialId}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-xl font-serif italic font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
                <div className="p-2 rounded bg-slate-100 dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] text-[#F27D26]">
                  <Quote className="w-4 h-4" aria-hidden="true" />
                </div>
                <span>Endorsements</span>
              </h3>

              <div className="space-y-4">
                {TESTIMONIALS.map((t) => (
                  <div
                    key={t.id}
                    className="p-5 rounded bg-white dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] hover:border-[#F27D26] transition-all relative"
                  >
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A0A0A0] italic leading-relaxed mb-4">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={`${t.author} photo`}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-[#2A2A2B]"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white font-serif">
                          {t.author}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 dark:text-[#808080]">
                          {t.title} • {t.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
