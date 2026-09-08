import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  Github,
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { LazyImage } from './LazyImage';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'iot', label: 'IoT & Hardware' },
    { id: 'fullstack', label: 'Web & Systems' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Category filter
      const categoryMatch =
        activeCategory === 'all' || project.category === activeCategory;

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      if (!query) return categoryMatch;

      const titleMatch = project.title.toLowerCase().includes(query);
      const taglineMatch = project.tagline.toLowerCase().includes(query);
      const techMatch = project.technologies.some((tech) =>
        tech.toLowerCase().includes(query)
      );

      return categoryMatch && (titleMatch || taglineMatch || techMatch);
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="projects"
      aria-label="Featured Projects Showcase"
      className="py-20 sm:py-28 bg-white dark:bg-[#0A0A0B] border-b border-slate-200 dark:border-[#2A2A2B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-3">
              <span className="w-6 h-px bg-[#F27D26]" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-slate-900 dark:text-white tracking-tight">
              Featured Work & Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#A0A0A0] mt-2">
              Hardware architectures, embedded IoT prototypes, and high-performance web platforms engineered with real-world impact.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 relative">
            <label htmlFor="projects-search-input" className="sr-only">
              Search projects by title or technology
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#808080] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
              <input
                id="projects-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or tech..."
                className="w-full pl-9 pr-4 py-2.5 rounded text-xs font-mono bg-slate-50 dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] text-slate-900 dark:text-white placeholder-[#808080] focus:outline-none focus:border-[#F27D26]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono uppercase text-[#808080] hover:text-[#F27D26]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
          role="tablist"
          aria-label="Project Categories"
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded text-[10px] uppercase tracking-widest font-bold whitespace-nowrap transition-all focus:outline-none ${
                  isSelected
                    ? 'bg-white text-black shadow-sm'
                    : 'bg-slate-100 dark:bg-[#151516] text-slate-600 dark:text-[#A0A0A0] hover:text-[#F27D26] dark:hover:text-white border border-slate-200 dark:border-[#2A2A2B]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Responsive Grid with Lazy Loading Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              className="group flex flex-col justify-between rounded bg-white dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] hover:border-[#F27D26] transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Lazy Loaded Thumbnail Image with click to open modal */}
                <div
                  className="relative cursor-pointer overflow-hidden border-b border-slate-200 dark:border-[#2A2A2B]"
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedProject(project);
                    }
                  }}
                  aria-label={`Open detailed case study for ${project.title}`}
                >
                  <LazyImage
                    src={project.thumbnail}
                    alt={`${project.title} screenshot`}
                    aspectRatio="aspect-[16/10]"
                    priority={index < 2} // Eager load top 2 for instant LCP performance
                  />
                  <div className="absolute inset-0 bg-[#0A0A0B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white text-black text-[10px] font-mono uppercase tracking-widest font-bold shadow-lg">
                      <Info className="w-3.5 h-3.5 text-[#F27D26]" aria-hidden="true" />
                      View Spec
                    </span>
                  </div>

                  {/* Category Pill on image */}
                  <span className="absolute top-3 left-3 text-[9px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#0A0A0B]/85 text-[#D0D0D0] border border-[#2A2A2B] backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg sm:text-xl font-serif italic font-bold text-slate-900 dark:text-white group-hover:text-[#F27D26] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs font-mono text-[#F27D26] mb-2.5 font-semibold">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-[#808080] leading-relaxed line-clamp-3 mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B] text-slate-700 dark:text-[#A0A0A0]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B] text-[#808080]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Bottom Links */}
              <div className="px-5 py-3.5 bg-slate-50 dark:bg-[#0A0A0B] border-t border-slate-200 dark:border-[#2A2A2B] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-[10px] uppercase tracking-widest font-mono font-bold text-slate-900 dark:text-white hover:text-[#F27D26] dark:hover:text-[#F27D26] inline-flex items-center gap-1.5 focus:outline-none"
                  aria-label={`Read case study about ${project.title}`}
                >
                  <span>Read Spec</span>
                  <ArrowUpRight className="w-3 h-3 text-[#F27D26]" aria-hidden="true" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-[#808080] hover:text-[#F27D26] transition-colors focus:outline-none"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-[#808080] hover:text-[#F27D26] transition-colors focus:outline-none"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-50 dark:bg-[#151516] rounded border border-slate-200 dark:border-[#2A2A2B]">
            <p className="text-slate-600 dark:text-[#808080] text-sm">
              No projects found matching your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded bg-white text-black uppercase tracking-widest text-[10px] font-bold hover:bg-[#F27D26] hover:text-white"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
