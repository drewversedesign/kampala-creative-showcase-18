
import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { springAnimation, getCardOpacity, getCardScale, getCardZIndex } from '../utils/cardAnimation';
import { useSwipe } from '../hooks/use-swipe';
import { useIsMobile } from '../hooks/use-mobile';

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
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [positions, setPositions] = useState<number[]>([]);
  const [velocities, setVelocities] = useState<number[]>([]);
  const animationRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Initialize positions and velocities
  useEffect(() => {
    setPositions(blogData.map((_, i) => i - activeCardIndex));
    setVelocities(blogData.map(() => 0));
    
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Update positions when active card changes
  useEffect(() => {
    setVelocities(blogData.map(() => 0)); // Reset velocities
    
    // Start spring animation loop
    const animate = () => {
      setPositions(prevPositions => 
        prevPositions.map((pos, i) => {
          const targetPosition = i - activeCardIndex;
          return springAnimation(pos, targetPosition, velocities[i]);
        })
      );
      
      setVelocities(prevVelocities => 
        prevVelocities.map((vel, i) => {
          const targetPosition = i - activeCardIndex;
          const force = (targetPosition - positions[i]) * 0.1;
          return (vel + force) * 0.8; // Apply damping
        })
      );
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeCardIndex]);

  // Focus the container when component mounts
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index);
  };

  const handleNextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % blogData.length);
  };

  const handlePrevCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex - 1 + blogData.length) % blogData.length);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        handleNextCard();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        handlePrevCard();
        break;
      case 'Home':
        e.preventDefault();
        setActiveCardIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setActiveCardIndex(blogData.length - 1);
        break;
      case 'Enter':
      case ' ': // Space key
        e.preventDefault();
        // If focused on a dot, change to that card
        // Otherwise, go to next card
        handleNextCard();
        break;
      default:
        break;
    }
  };

  // Configure swipe handlers
  const swipeHandlers = useSwipe({
    onSwipeLeft: handleNextCard,
    onSwipeRight: handlePrevCard
  }, {
    threshold: 30, // Lower threshold for more responsive swiping
    preventDefaultTouchmove: false // Allow scrolling on mobile
  });

  // Prepare touch event handlers only for mobile devices
  const touchProps = isMobile ? {
    ...swipeHandlers,
    "aria-label": "Swipe left or right to navigate between blog posts"
  } : {};

  return (
    <div className="relative w-full overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1F2C]">
      <div className="max-w-7xl mx-auto">
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
        
        {/* Interactive area - keyboard navigable and swipe enabled */}
        <div 
          ref={containerRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="relative h-[500px] w-full outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-lg"
          role="region"
          aria-label="Blog post carousel"
          aria-roledescription="carousel"
          {...touchProps}
        >
          {/* Previous button for keyboard navigation, visually hidden */}
          <button 
            className="sr-only"
            onClick={handlePrevCard}
            aria-label="Previous blog post"
          >
            Previous
          </button>

          {/* Card Stack */}
          <div className="absolute inset-0 flex items-center justify-center">
            {blogData.map((card, index) => {
              const position = positions[index] || index - activeCardIndex;
              const isActive = index === activeCardIndex;
              const opacity = getCardOpacity(position);
              const scale = getCardScale(position);
              const zIndex = getCardZIndex(isActive, position);
              
              // Calculate transform based on position
              let translateX = `${position * 40}%`;
              
              return (
                <div
                  key={card.id}
                  className={cn(
                    "absolute w-full max-w-md transition-all duration-500 ease-out",
                    isActive ? "cursor-pointer" : "pointer-events-none"
                  )}
                  style={{
                    transform: `translateX(${translateX}) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                  onClick={() => isActive && handleNextCard()}
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
                    <div className="p-6 pb-4">
                      <div className="text-xs uppercase tracking-wide mb-1">
                        {card.category}
                      </div>
                      <h3 className={cn(
                        "text-2xl font-bold mb-2",
                        isActive ? "text-white" : "text-gray-300"
                      )}>
                        {card.title}
                      </h3>
                      <div className="h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-20 my-4"></div>
                    </div>
                    
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
                          className="w-full h-full object-cover object-center transform transition-transform hover:scale-110 duration-700"
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
            })}
          </div>
          
          {/* Next button for keyboard navigation, visually hidden */}
          <button 
            className="sr-only"
            onClick={handleNextCard}
            aria-label="Next blog post"
          >
            Next
          </button>
          
          {/* Navigation Dots */}
          <div 
            className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2"
            role="tablist"
            aria-label="Select a blog post"
          >
            {blogData.map((card, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === activeCardIndex ? 
                    "bg-orange-500 w-8" : 
                    "bg-gray-600 hover:bg-gray-500"
                )}
                aria-label={`Go to blog post ${index + 1}: ${card.title}`}
                aria-selected={index === activeCardIndex}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
