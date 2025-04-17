
import React, { useRef, KeyboardEvent, ReactNode } from 'react';

interface BlogCardContainerProps {
  isMobile: boolean;
  isAnimating: boolean;
  children: ReactNode;
  onTouchStart?: (e: React.TouchEvent) => void;
  onTouchMove?: (e: React.TouchEvent) => void;
  onTouchEnd?: (e: React.TouchEvent) => void;
  onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
}

export function BlogCardContainer({
  isMobile,
  isAnimating,
  children,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onKeyDown
}: BlogCardContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus the container when component mounts
  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  // Prepare touch event handlers only for mobile devices
  const touchProps = isMobile ? {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    "aria-label": "Swipe left or right to navigate between blog posts"
  } : {};

  return (
    <div 
      ref={containerRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="relative h-[500px] w-full outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-lg"
      role="region"
      aria-label="Blog post carousel"
      aria-roledescription="carousel"
      {...touchProps}
    >
      {/* Screen reader navigation buttons */}
      <button 
        className="sr-only"
        onClick={() => {
          const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
          if (containerRef.current) {
            onKeyDown(event as unknown as KeyboardEvent<HTMLDivElement>);
          }
        }}
        aria-label="Previous blog post"
      >
        Previous
      </button>

      {/* Card Stack */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
      
      {/* Screen reader next button */}
      <button 
        className="sr-only"
        onClick={() => {
          const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
          if (containerRef.current) {
            onKeyDown(event as unknown as KeyboardEvent<HTMLDivElement>);
          }
        }}
        aria-label="Next blog post"
      >
        Next
      </button>
    </div>
  );
}
