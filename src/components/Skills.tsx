import React, { useState, useMemo } from 'react';
import {
  Layout,
  Server,
  Database,
  Cloud,
  Search,
  CheckCircle2,
  Sparkles,
  Code,
  SlidersHorizontal,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4 text-[#F27D26]" aria-hidden="true" />;
      case 'Server':
        return <Server className="w-4 h-4 text-[#F27D26]" aria-hidden="true" />;
      case 'Database':
        return <Database className="w-4 h-4 text-[#F27D26]" aria-hidden="true" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-[#F27D26]" aria-hidden="true" />;
      default:
        return <Code className="w-4 h-4 text-[#F27D26]" aria-hidden="true" />;
    }
  };

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      // Filter by category tab
      if (activeCategory !== 'all' && cat.id !== activeCategory) {
        return null;
      }

      // Filter by search query
      const filteredSkills = cat.skills.filter((skill) => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return true;
        const nameMatch = skill.name.toLowerCase().includes(query);
        const tagMatch = skill.tags?.some((t) => t.toLowerCase().includes(query));
        return nameMatch || tagMatch;
      });

      if (filteredSkills.length === 0) return null;

      return {
        ...cat,
        skills: filteredSkills,
      };
    }).filter(Boolean);
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Competencies"
      className="py-20 sm:py-28 bg-[#FAFAFA] dark:bg-[#0A0A0B] border-b border-slate-200 dark:border-[#2A2A2B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#F27D26] mb-3">
              <span className="w-6 h-px bg-[#F27D26]" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-slate-900 dark:text-white tracking-tight">
              Core Skills & Technologies
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#A0A0A0] mt-2">
              Comprehensive expertise developed over 7+ years of building resilient production software.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 relative">
            <label htmlFor="skills-search-input" className="sr-only">
              Search skills and technologies
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#808080] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
              <input
                id="skills-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter (e.g. React, SQL, Cloud)..."
                className="w-full pl-9 pr-4 py-2.5 rounded text-xs font-mono bg-white dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] text-slate-900 dark:text-white placeholder-[#808080] focus:outline-none focus:border-[#F27D26] transition-all"
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

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar" role="tablist" aria-label="Skill categories">
          <button
            role="tab"
            aria-selected={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded text-[10px] uppercase tracking-widest font-bold whitespace-nowrap transition-all focus:outline-none ${
              activeCategory === 'all'
                ? 'bg-white text-black shadow-sm'
                : 'bg-slate-100 dark:bg-[#151516] text-slate-600 dark:text-[#A0A0A0] hover:text-[#F27D26] dark:hover:text-white border border-slate-200 dark:border-[#2A2A2B]'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((category) => {
            const isSelected = activeCategory === category.id;
            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded text-[10px] uppercase tracking-widest font-bold whitespace-nowrap transition-all focus:outline-none ${
                  isSelected
                    ? 'bg-white text-black shadow-sm'
                    : 'bg-slate-100 dark:bg-[#151516] text-slate-600 dark:text-[#A0A0A0] hover:text-[#F27D26] dark:hover:text-white border border-slate-200 dark:border-[#2A2A2B]'
                }`}
              >
                {getCategoryIcon(category.iconName)}
                <span>{category.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            if (!category) return null;
            return (
              <div
                key={category.id}
                className="p-6 sm:p-7 rounded bg-white dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] flex flex-col justify-between hover:border-[#F27D26] transition-colors"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3.5 mb-2">
                    <div className="p-2 rounded bg-slate-100 dark:bg-[#1A1A1B] border border-slate-200 dark:border-[#2A2A2B]">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-base font-serif italic text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-[#808080]">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List with Progress & Tags */}
                  <div className="mt-6 space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-800 dark:text-[#D0D0D0] font-mono group-hover:text-[#F27D26] transition-colors">
                              {skill.name}
                            </span>
                            {skill.featured && (
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-100 dark:bg-[#1A1A1B] border border-slate-200 dark:border-[#2A2A2B] text-[#F27D26] uppercase tracking-wider font-bold">
                                Core
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-[#808080]">
                            <span>{skill.experienceYears}</span>
                            <span className="text-slate-300 dark:text-[#2A2A2B]">•</span>
                            <span className="font-semibold text-slate-700 dark:text-white">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Accessible Progress Bar */}
                        <div
                          className="h-1.5 w-full bg-slate-100 dark:bg-[#0A0A0B] rounded-full overflow-hidden border border-slate-200 dark:border-[#2A2A2B]"
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency: ${skill.level}%`}
                        >
                          <div
                            className="h-full bg-[#F27D26] rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        {/* Tags */}
                        {skill.tags && skill.tags.length > 0 && (
                          <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                            {skill.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0A0A0B] border border-slate-200 dark:border-[#2A2A2B] text-slate-600 dark:text-[#808080]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-[#151516] rounded border border-slate-200 dark:border-[#2A2A2B]">
            <p className="text-slate-600 dark:text-[#808080] text-sm">
              No skills found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 px-4 py-2 rounded bg-white text-black uppercase tracking-widest text-[10px] font-bold hover:bg-[#F27D26] hover:text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
