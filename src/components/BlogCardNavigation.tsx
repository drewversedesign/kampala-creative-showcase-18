
import React from 'react';
import { cn } from '../lib/utils';

interface BlogCardNavigationProps {
  cards: Array<{ id: number; title: string }>;
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function BlogCardNavigation({ cards, activeIndex, onSelect }: BlogCardNavigationProps) {
  return (
    <div 
      className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2"
      role="tablist"
      aria-label="Select a blog post"
    >
      {cards.map((card, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={cn(
            "w-2.5 h-2.5 rounded-full transition-all duration-300",
            index === activeIndex ? 
              "bg-orange-500 w-8" : 
              "bg-gray-600 hover:bg-gray-500"
          )}
          aria-label={`Go to blog post ${index + 1}: ${card.title}`}
          aria-selected={index === activeIndex}
          role="tab"
        />
      ))}
    </div>
  );
}
