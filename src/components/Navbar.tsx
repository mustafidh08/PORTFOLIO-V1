import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileDown, Code2, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const { theme, resolvedTheme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section spy
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Accessible Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#F27D26] focus:text-white focus:rounded focus:shadow-lg focus:outline-none font-mono text-xs uppercase tracking-widest"
      >
        Skip to main content
      </a>

      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAFAFA]/90 dark:bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#E5E5E5] dark:border-[#2A2A2B] shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo / Monogram */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex items-center gap-3.5 focus:outline-none focus:ring-1 focus:ring-[#F27D26] rounded p-1"
              aria-label="Alex Morgan - Home"
            >
              <div className="w-9 h-9 rounded bg-slate-100 dark:bg-[#151516] border border-slate-300 dark:border-[#2A2A2B] flex items-center justify-center text-[#F27D26] group-hover:border-[#F27D26] group-hover:scale-105 transition-all">
                <Code2 className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif italic text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#F27D26] transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 dark:text-[#808080] font-mono -mt-1 hidden sm:inline">
                  Senior Design & Systems Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-[10px] uppercase tracking-widest font-semibold transition-colors relative py-1.5 ${
                      isActive
                        ? 'text-[#F27D26] dark:text-[#F27D26]'
                        : 'text-slate-600 dark:text-[#808080] hover:text-slate-900 dark:hover:text-white'
                    } focus:outline-none focus:text-[#F27D26]`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F27D26] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons: Resume & Theme Toggle & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              {/* Quick Resume Button */}
              <button
                id="navbar-resume-btn"
                type="button"
                onClick={onOpenResumeModal}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded bg-slate-100 hover:bg-slate-200 dark:bg-[#1A1A1B] dark:hover:bg-[#2A2A2B] text-slate-800 dark:text-[#D0D0D0] hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-[#2A2A2B] hover:border-[#F27D26] dark:hover:border-[#F27D26] text-[10px] uppercase tracking-widest font-bold transition-all focus:outline-none focus:ring-1 focus:ring-[#F27D26]"
                aria-label="View and Download Resume"
              >
                <FileDown className="w-3.5 h-3.5 text-[#F27D26]" aria-hidden="true" />
                <span>Resume</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                id="theme-toggle-btn"
                type="button"
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded border border-slate-300 dark:border-[#2A2A2B] bg-slate-100 hover:bg-slate-200 dark:bg-[#151516] dark:hover:bg-[#2A2A2B] text-slate-700 dark:text-[#A0A0A0] hover:text-slate-900 dark:hover:text-white focus:outline-none focus:border-[#F27D26] transition-colors"
                aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#F27D26] transition-transform hover:rotate-45" aria-hidden="true" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-800 transition-transform hover:-rotate-12" aria-hidden="true" />
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded border border-slate-300 dark:border-[#2A2A2B] bg-slate-100 dark:bg-[#151516] text-slate-700 dark:text-[#A0A0A0] hover:text-slate-900 dark:hover:text-white focus:outline-none focus:border-[#F27D26]"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden fixed inset-x-0 top-16 sm:top-20 bg-white/95 dark:bg-[#0A0A0B]/95 backdrop-blur-xl border-b border-slate-200 dark:border-[#2A2A2B] px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded text-xs uppercase tracking-widest font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'bg-slate-100 dark:bg-[#151516] border border-slate-200 dark:border-[#2A2A2B] text-[#F27D26]'
                      : 'text-slate-600 dark:text-[#808080] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#151516]'
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-[#2A2A2B] flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-slate-900 text-white dark:bg-white dark:text-black hover:bg-[#F27D26] hover:text-white uppercase tracking-widest text-[11px] font-bold shadow-md transition-colors"
                >
                  <FileDown className="w-4 h-4" aria-hidden="true" />
                  <span>Download / View Resume</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
