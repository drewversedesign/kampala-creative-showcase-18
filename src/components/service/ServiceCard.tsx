
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  buttonColor: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  bgColor,
  buttonColor
}: ServiceCardProps) {
  return (
    <div 
      className={`rounded-3xl overflow-hidden border-none ${bgColor} text-white shadow-lg group transition-all duration-300 h-full flex flex-col`}
    >
      <div className="flex-grow p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          {icon}
        </div>
        
        <div className="border-t border-gray-700 my-3"></div>
        
        <p className="mt-4 text-gray-300">{description}</p>
        
        <div className="mt-auto pt-6 flex justify-end">
          <button className={`${buttonColor} p-2 rounded-full`}>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45">
              <path d="M3.33398 8.00033H12.6673M12.6673 8.00033L8.00065 3.33366M12.6673 8.00033L8.00065 12.667" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
