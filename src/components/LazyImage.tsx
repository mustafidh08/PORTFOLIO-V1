import React, { useState, useEffect, useRef } from 'react';
import { ImageIcon } from 'lucide-react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  onLoadComplete?: () => void;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-video',
  priority = false,
  onLoadComplete,
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(priority);
  const [hasError, setHasError] = useState<boolean>(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    if (!imgRef.current) return;

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '200px 0px', // Preload when within 200px of viewport
          threshold: 0.01,
        }
      );

      observer.observe(imgRef.current);

      return () => {
        observer.disconnect();
      };
    } else {
      // Fallback for older browsers
      setIsInView(true);
    }
  }, [priority]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoadComplete) {
      onLoadComplete();
    }
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden bg-slate-200 dark:bg-[#151516] ${aspectRatio} ${className}`}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-[#151516] dark:via-[#222224] dark:to-[#151516] animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Actual Image */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105 blur-sm'
          }`}
        />
      )}

      {/* Error Fallback State */}
      {hasError && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800/80 text-slate-400 p-4 text-center"
          role="img"
          aria-label={`Failed to load image for: ${alt}`}
        >
          <ImageIcon className="w-8 h-8 mb-2 opacity-50" aria-hidden="true" />
          <span className="text-xs font-mono">{alt}</span>
        </div>
      )}
    </div>
  );
};
