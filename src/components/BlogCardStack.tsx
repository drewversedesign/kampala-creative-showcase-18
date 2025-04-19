
import React, { KeyboardEvent } from 'react';
import { useSwipe } from '../hooks/use-swipe';
import { useIsMobile } from '../hooks/use-mobile';
import { useBookmarks } from '../hooks/use-bookmarks';
import { useCardStack } from '../hooks/use-card-stack';
import { BlogCard } from './BlogCard';
import { BlogCardNavigation } from './BlogCardNavigation';
import { BlogSectionTitle } from './blog/BlogSectionTitle';
import { BlogCardContainer } from './blog/BlogCardContainer';
import { blogPosts } from '../data/blogData';
import { toast } from '@/components/ui/sonner';
import { BlogCardData } from '../data/types';
import { useBlogPosts } from '@/hooks/use-query';
import { useNavigate } from 'react-router-dom';

export default function BlogCardStack() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks<BlogCardData>('blog-bookmarks');
  const { data: dbPosts, isLoading } = useBlogPosts();

  // Combine database posts with static posts
  const blogCardData = React.useMemo(() => {
    // Start with static posts as fallback
    const staticCards = blogPosts.map((post, index) => ({
      id: index,
      title: post.title,
      category: post.category,
      image: post.image,
      description: post.excerpt,
      excerpt: post.excerpt,
      date: post.date,
      readTime: post.readTime,
      imageUrl: post.image,
      slug: post.id || post.slug // Ensure slug is properly set
    }));

    // If database posts are loaded, prioritize them
    if (dbPosts && dbPosts.length > 0) {
      return dbPosts.slice(0, 5).map((post, index) => ({
        id: index,
        title: post.title,
        category: post.category,
        image: post.image_url || '/placeholder.svg',
        description: post.excerpt,
        excerpt: post.excerpt,
        date: post.published_at || post.created_at,
        readTime: "5 min read",
        imageUrl: post.image_url || '/placeholder.svg',
        slug: post.slug // Use the database post slug
      }));
    }

    return staticCards;
  }, [dbPosts]);
  
  const { 
    activeCardIndex, 
    positions, 
    isAnimating, 
    goToNextCard, 
    goToPrevCard, 
    goToCard 
  } = useCardStack(blogCardData.length);

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
        goToCard(blogCardData.length - 1);
        break;
      case 'Enter':
      case ' ': // Space key
        e.preventDefault();
        const activeCard = blogCardData[activeCardIndex];
        if (activeCard && activeCard.slug) {
          navigate(`/blog/${activeCard.slug}`);
        } else {
          goToNextCard();
        }
        break;
      default:
        break;
    }
  };

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
  
  const handleToggleBookmark = (e: React.MouseEvent, cardId: number) => {
    e.stopPropagation();
    toggleBookmark(cardId);
    const action = isBookmarked(cardId) ? 'removed from' : 'added to';
    toast.success(`Post ${action} bookmarks`);
  };

  const handleCardClick = (card: BlogCardData) => {
    if (card.slug) {
      navigate(`/blog/${card.slug}`);
    } else {
      goToNextCard();
    }
  };

  if (isLoading) {
    return (
      <div className="relative w-full overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1F2C]">
        <div className="max-w-7xl mx-auto text-center text-white">
          <p>Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1F2C]">
      <div className="max-w-7xl mx-auto">
        <BlogSectionTitle isMobile={isMobile} />
        
        <BlogCardContainer
          isMobile={isMobile}
          isAnimating={isAnimating}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onKeyDown={handleKeyDown}
        >
          {blogCardData.map((card, index) => (
            <BlogCard
              key={card.id}
              card={card}
              position={positions[index] || index - activeCardIndex}
              isActive={index === activeCardIndex}
              isAnimating={isAnimating}
              velocityX={velocity.x}
              isBookmarked={isBookmarked}
              onToggleBookmark={handleToggleBookmark}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </BlogCardContainer>
        
        <BlogCardNavigation 
          cards={blogCardData}
          activeIndex={activeCardIndex}
          onSelect={goToCard}
        />
      </div>
    </div>
  );
}
