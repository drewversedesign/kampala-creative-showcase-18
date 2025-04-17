
import React, { useRef, KeyboardEvent } from 'react';
import { useSwipe } from '../hooks/use-swipe';
import { useIsMobile } from '../hooks/use-mobile';
import { useBookmarks } from '../hooks/use-bookmarks';
import { useCardStack } from '../hooks/use-card-stack';
import { BlogCard } from './BlogCard';
import { BlogCardNavigation } from './BlogCardNavigation';
import { toast } from '@/components/ui/sonner';

interface BlogCardData {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const blogData: BlogCardData[] = [
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
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { isBookmarked, toggleBookmark } = useBookmarks<BlogCardData>('blog-bookmarks');
  
  const { 
    activeCardIndex, 
    positions, 
    isAnimating, 
    goToNextCard, 
    goToPrevCard, 
    goToCard 
  } = useCardStack(blogData.length);

  // Focus the container when component mounts
  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isAnimating) return;
    
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        goToNextCard();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        goToPrevCard();
        break;
      case 'Home':
        e.preventDefault();
        goToCard(0);
        break;
      case 'End':
        e.preventDefault();
        goToCard(blogData.length - 1);
        break;
      case 'Enter':
      case ' ': // Space key
        e.preventDefault();
        goToNextCard();
        break;
      default:
        break;
    }
  };

  // Configure swipe handlers with enhanced velocity feedback
  const { onTouchStart, onTouchMove, onTouchEnd, velocity } = useSwipe(
    {
      onSwipeLeft: goToNextCard,
      onSwipeRight: goToPrevCard
    }, 
    {
      threshold: 30,
      preventDefaultTouchmove: false,
      velocityMultiplier: 1.2
    }
  );

  // Prepare touch event handlers only for mobile devices
  const touchProps = isMobile ? {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    "aria-label": "Swipe left or right to navigate between blog posts"
  } : {};
  
  // Handle bookmark toggle
  const handleToggleBookmark = (e: React.MouseEvent, cardId: number) => {
    e.stopPropagation();
    toggleBookmark(cardId);
    const action = isBookmarked(cardId) ? 'removed from' : 'added to';
    toast.success(`Post ${action} bookmarks`);
  };

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
          {/* Screen reader navigation buttons */}
          <button 
            className="sr-only"
            onClick={goToPrevCard}
            aria-label="Previous blog post"
          >
            Previous
          </button>

          {/* Card Stack */}
          <div className="absolute inset-0 flex items-center justify-center">
            {blogData.map((card, index) => (
              <BlogCard
                key={card.id}
                card={card}
                position={positions[index] || index - activeCardIndex}
                isActive={index === activeCardIndex}
                isAnimating={isAnimating}
                velocityX={velocity.x}
                isBookmarked={isBookmarked}
                onToggleBookmark={handleToggleBookmark}
                onClick={goToNextCard}
              />
            ))}
          </div>
          
          {/* Screen reader next button */}
          <button 
            className="sr-only"
            onClick={goToNextCard}
            aria-label="Next blog post"
          >
            Next
          </button>
          
          {/* Navigation Dots */}
          <BlogCardNavigation 
            cards={blogData}
            activeIndex={activeCardIndex}
            onSelect={goToCard}
          />
        </div>
      </div>
    </div>
  );
}
