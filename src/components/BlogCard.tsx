
import React from 'react';
import { ArrowRight, Bookmark, BookmarkCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import { SocialShareButtons } from './SocialShareButtons';

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
        <div className="p-6 pb-4 flex justify-between items-start">
          <div>
            <div className="text-xs uppercase tracking-wide mb-1">
              {card.category}
            </div>
            <h3 className={cn(
              "text-2xl font-bold mb-2",
              isActive ? "text-white" : "text-gray-300"
            )}>
              {card.title}
            </h3>
          </div>
          
          {isActive && (
            <div className="flex space-x-2">
              <button
                onClick={(e) => onToggleBookmark(e, card.id)}
                className={cn(
                  "w-8 h-8 flex items-center justify-center rounded-full transition-all",
                  isBookmarked(card.id) 
                    ? "bg-orange-600 text-white" 
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
                aria-label={isBookmarked(card.id) ? "Remove from bookmarks" : "Add to bookmarks"}
              >
                {isBookmarked(card.id) ? (
                  <BookmarkCheck size={16} strokeWidth={2.5} />
                ) : (
                  <Bookmark size={16} strokeWidth={2.5} />
                )}
              </button>
              
              <SocialShareButtons 
                title={card.title} 
                description={card.description} 
              />
            </div>
          )}
        </div>
        
        <div className="h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-20 my-4"></div>
        
        <div className="px-6 pb-6 space-y-4">
          <p className={cn(
            "text-sm",
            isActive ? "text-white/90" : "text-gray-400"
          )}>
            {card.description}
          </p>
          
          <div className="relative overflow-hidden rounded-lg h-48">
            <img 
              src={card.image} 
              alt={`${card.title} illustration`}
              className={cn(
                "w-full h-full object-cover object-center transform transition-transform",
                isActive ? "hover:scale-110 duration-700" : ""
              )}
            />
          </div>
          
          <div className={cn(
            "flex justify-end mt-4",
            isActive ? "opacity-100" : "opacity-60"
          )}>
            <div className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
              isActive ? 
                "bg-white text-orange-500 hover:bg-orange-100" : 
                "bg-gray-700 text-gray-400"
            )}>
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </div>
          </div>
        </div>
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
