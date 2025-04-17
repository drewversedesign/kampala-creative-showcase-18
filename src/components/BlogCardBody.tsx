
import React from 'react';
import { cn } from '../lib/utils';

interface BlogCardBodyProps {
  card: {
    title: string;
    image: string;
    description: string;
  };
  isActive: boolean;
}

export function BlogCardBody({ card, isActive }: BlogCardBodyProps) {
  return (
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
    </div>
  );
}
