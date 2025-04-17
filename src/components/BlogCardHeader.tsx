
import React from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import { SocialShareButtons } from './SocialShareButtons';

interface BlogCardHeaderProps {
  card: {
    id: number;
    title: string;
    category: string;
  };
  isActive: boolean;
  isBookmarked: (id: number) => boolean;
  onToggleBookmark: (e: React.MouseEvent, id: number) => void;
}

export function BlogCardHeader({
  card,
  isActive,
  isBookmarked,
  onToggleBookmark
}: BlogCardHeaderProps) {
  return (
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
            description={card.category} 
          />
        </div>
      )}
    </div>
  );
}
