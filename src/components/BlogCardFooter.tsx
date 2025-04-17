
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface BlogCardFooterProps {
  isActive: boolean;
}

export function BlogCardFooter({ isActive }: BlogCardFooterProps) {
  return (
    <div className={cn(
      "flex justify-end mt-4 px-6 pb-6",
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
  );
}
