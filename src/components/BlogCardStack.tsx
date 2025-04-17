
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface BlogCard {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const blogData: BlogCard[] = [
  {
    id: 1,
    title: "Web Design",
    category: "Design",
    image: "/lovable-uploads/57ad8728-a549-49bd-b575-6f0b556c02c2.png",
    description: "Creating responsive, beautiful web experiences that engage and convert visitors."
  },
  {
    id: 2,
    title: "UI/UX Design",
    category: "Design",
    image: "/lovable-uploads/81439078-5641-41e3-ab47-9bd3397ff27b.png",
    description: "Crafting intuitive user interfaces with focused attention to user experience."
  },
  {
    id: 3,
    title: "Landing Page",
    category: "Design",
    image: "/lovable-uploads/71afe6c7-556e-4ada-b77b-25668af67c5e.png",
    description: "Building high-converting landing pages that drive results and engagement."
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "Branding",
    image: "/lovable-uploads/9bb5f335-3cd6-4e63-8267-8ff59e757076.png",
    description: "Developing cohesive brand identities that resonate with target audiences."
  },
  {
    id: 5,
    title: "Mobile App Design",
    category: "Development",
    image: "/lovable-uploads/4855fe53-09dc-4c21-9e07-3ef21384d89f.png",
    description: "Designing intuitive mobile experiences that users love to engage with."
  }
];

export default function BlogCardStack() {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(1); // Default to Web Design card

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index);
  };

  const handleNextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % blogData.length);
  };

  // Calculate positions and styles for each card
  const getCardStyle = (index: number) => {
    const isActive = index === activeCardIndex;
    const position = index - activeCardIndex;

    // Base styles
    let transform = '';
    let zIndex = 50 - Math.abs(position);
    let opacity = 1;
    let scale = 1;

    // Position cards based on their relation to active card
    if (position === 0) {
      // Active card
      transform = 'translateX(0)';
      zIndex = 50;
    } else if (position < 0) {
      // Cards to the left
      transform = `translateX(-${Math.abs(position) * 40}%) scale(${1 - Math.abs(position) * 0.05})`;
      opacity = 1 - Math.abs(position) * 0.2;
      if (position < -2) opacity = 0; // Hide cards too far to the left
    } else {
      // Cards to the right
      transform = `translateX(${position * 40}%) scale(${1 - position * 0.05})`;
      opacity = 1 - position * 0.2;
      if (position > 2) opacity = 0; // Hide cards too far to the right
    }

    return {
      transform,
      zIndex,
      opacity
    };
  };

  return (
    <div className="relative w-full overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1F2C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">From Our Blog</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest insights, tutorials, and case studies from our design experts
          </p>
        </div>
        
        <div className="relative h-[500px] w-full">
          {/* Card Stack */}
          <div className="absolute inset-0 flex items-center justify-center">
            {blogData.map((card, index) => (
              <div
                key={card.id}
                className={cn(
                  "absolute w-full max-w-md transition-all duration-500 ease-out cursor-pointer",
                  index === activeCardIndex ? "pointer-events-auto" : "pointer-events-none"
                )}
                style={getCardStyle(index)}
                onClick={() => index === activeCardIndex && handleNextCard()}
              >
                <div 
                  className={cn(
                    "rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out h-full",
                    index === activeCardIndex ? 
                      "bg-gradient-to-br from-orange-500 to-red-500 text-white ring-2 ring-orange-400 hover:scale-105" : 
                      "bg-gray-800 text-gray-400 filter grayscale"
                  )}
                >
                  <div className="p-6 pb-4">
                    <div className="text-xs uppercase tracking-wide mb-1">
                      {card.category}
                    </div>
                    <h3 className={cn(
                      "text-2xl font-bold mb-2",
                      index === activeCardIndex ? "text-white" : "text-gray-300"
                    )}>
                      {card.title}
                    </h3>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-20 my-4"></div>
                  </div>
                  
                  <div className="px-6 pb-6 space-y-4">
                    <p className={cn(
                      "text-sm",
                      index === activeCardIndex ? "text-white/90" : "text-gray-400"
                    )}>
                      {card.description}
                    </p>
                    
                    <div className="relative overflow-hidden rounded-lg h-48">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover object-center transform transition-transform hover:scale-110 duration-700"
                      />
                    </div>
                    
                    <div className={cn(
                      "flex justify-end mt-4",
                      index === activeCardIndex ? "opacity-100" : "opacity-60"
                    )}>
                      <div className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                        index === activeCardIndex ? 
                          "bg-white text-orange-500 hover:bg-orange-100" : 
                          "bg-gray-700 text-gray-400"
                      )}>
                        <ArrowRight size={18} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
            {blogData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === activeCardIndex ? 
                    "bg-orange-500 w-8" : 
                    "bg-gray-600 hover:bg-gray-500"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
