
import React from 'react';
import { ArrowRight } from 'lucide-react';

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
  // Determine if the card is active/primary (orange) or inactive (gray)
  const isOrangeBg = bgColor === "bg-drewverse-primary" || bgColor === "bg-gradient-to-br from-orange-500 to-red-500";
  
  return (
    <div 
      className="group h-full rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out"
    >
      <div className={`h-full flex flex-col ${isOrangeBg ? 
        "bg-gradient-to-br from-orange-500 to-red-500 text-white ring-2 ring-orange-400" : 
        "bg-gray-800 text-gray-400"}`}
      >
        <div className="p-6 pb-4 flex justify-between items-start">
          <div>
            <div className="text-xs uppercase tracking-wide mb-1">
              Service
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${isOrangeBg ? "text-white" : "text-gray-300"}`}>
              {title}
            </h3>
          </div>
          <div className="flex">
            {icon}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mx-6"></div>
        
        <div className="px-6 pb-6 flex-grow">
          <p className={`mt-4 text-sm ${isOrangeBg ? "text-white/90" : "text-gray-400"}`}>
            {description}
          </p>
        </div>
        
        <div className={`flex justify-end mt-4 px-6 pb-6 ${isOrangeBg ? "opacity-100" : "opacity-60"}`}>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
            isOrangeBg ? 
            "bg-white text-orange-500 hover:bg-orange-100" : 
            "bg-gray-700 text-gray-400"
          }`}>
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
