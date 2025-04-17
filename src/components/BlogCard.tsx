
import React from 'react';
import { cn } from '../lib/utils';
import { BlogCardHeader } from './BlogCardHeader';
import { BlogCardBody } from './BlogCardBody';
import { BlogCardFooter } from './BlogCardFooter';
import { BlogCardDivider } from './BlogCardDivider';

interface BlogCardProps {
  card: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
  };
  position: number;
  isActive: boolean;
  isAnimating: boolean;
  velocityX: number;
  isBookmarked: (id: number) => boolean;
  onToggleBookmark: (e: React.MouseEvent, id: number) => void;
  onClick: () => void;
}

export function BlogCard({
  card,
  position,
  isActive,
  isAnimating,
  velocityX,
  isBookmarked,
  onToggleBookmark,
  onClick
}: BlogCardProps) {
  // Calculate visual properties based on position
  const opacity = getCardOpacity(position);
  const scale = getCardScale(position);
  const zIndex = getCardZIndex(isActive, position);
  
  // Calculate transform based on position with added velocity for more natural feel
  const translateX = `${position * 40 + (isActive ? velocityX * 5 : 0)}%`;
  
  // Rotation effect based on position
  const rotation = position * -2; // slight rotation based on position

  return (
    <div
      className={cn(
        "absolute w-full max-w-md transition-all duration-500 ease-out",
        isActive ? "cursor-pointer" : "pointer-events-none",
        isAnimating ? "animate-in" : ""
      )}
      style={{
        transform: `translateX(${translateX}) scale(${scale}) rotate(${rotation}deg)`,
        opacity,
        zIndex,
        transition: isAnimating 
          ? 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-out' 
          : 'none'
      }}
      onClick={isActive ? onClick : undefined}
      role={isActive ? "button" : "presentation"}
      aria-hidden={!isActive}
      aria-label={isActive ? `Current blog post: ${card.title}. Press Enter to view next post.` : undefined}
    >
      <div 
        className={cn(
          "rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out h-full",
          isActive ? 
            "bg-gradient-to-br from-orange-500 to-red-500 text-white ring-2 ring-orange-400 hover:scale-105" : 
            "bg-gray-800 text-gray-400 filter grayscale"
        )}
      >
        <BlogCardHeader 
          card={card}
          isActive={isActive}
          isBookmarked={isBookmarked}
          onToggleBookmark={onToggleBookmark}
        />
        
        <BlogCardDivider />
        
        <BlogCardBody 
          card={card}
          isActive={isActive}
        />
        
        <BlogCardFooter 
          isActive={isActive}
        />
      </div>
    </div>
  );
}

// Helper functions for card animation
function getCardOpacity(distance: number): number {
  return Math.max(0, 1 - Math.abs(distance) * 0.3);
}

function getCardScale(distance: number): number {
  return Math.max(0.8, 1 - Math.abs(distance) * 0.1);
}

function getCardZIndex(isActive: boolean, position: number): number {
  if (isActive) return 50;
  return 40 - Math.abs(position);
}
