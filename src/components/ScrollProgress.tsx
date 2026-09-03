import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const mainEl = document.getElementById('main-content');
      
      if (mainEl) {
        const rect = mainEl.getBoundingClientRect();
        const mainHeight = mainEl.offsetHeight;
        const viewportHeight = window.innerHeight;
        
        // Distance scrolled into the main content
        const scrolledDistance = Math.max(0, -rect.top);
        // Total scrollable distance within main content area
        const totalDistance = mainHeight - viewportHeight;

        if (totalDistance > 0) {
          const currentPct = Math.min(100, Math.max(0, (scrolledDistance / totalDistance) * 100));
          setProgress(currentPct);
          setIsVisible(window.scrollY > 10);
        } else {
          // Fallback to full document height
          const docHeight = document.documentElement.scrollHeight - viewportHeight;
          const currentPct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
          setProgress(Math.min(100, Math.max(0, currentPct)));
          setIsVisible(window.scrollY > 10);
        }
      } else {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentPct = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        setProgress(Math.min(100, Math.max(0, currentPct)));
        setIsVisible(window.scrollY > 10);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    // Initial calculation
    updateScrollProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      id="reading-progress-container"
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 h-[3px] pointer-events-none transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background track (subtle neutral line) */}
      <div className="w-full h-full bg-slate-200/40 dark:bg-black/40 backdrop-blur-xs">
        {/* Active progress fill */}
        <div
          id="reading-progress-bar"
          role="progressbar"
          aria-label="Reading progress"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: `${progress}%` }}
          className="h-full bg-gradient-to-r from-[#F27D26] via-[#ff8f3d] to-[#F27D26] shadow-[0_0_8px_rgba(242,125,38,0.5)] transition-[width] duration-100 ease-out"
        />
      </div>
    </div>
  );
};
