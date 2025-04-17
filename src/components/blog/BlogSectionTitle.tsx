
import React from 'react';

interface BlogSectionTitleProps {
  isMobile: boolean;
}

export function BlogSectionTitle({ isMobile }: BlogSectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-white mb-2">From Our Blog</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Explore our latest insights, tutorials, and case studies from our design experts
      </p>
      {isMobile && (
        <p className="text-orange-400 text-sm mt-2" aria-live="polite">
          <span aria-hidden="true">← </span>
          Swipe to navigate
          <span aria-hidden="true"> →</span>
        </p>
      )}
    </div>
  );
}
