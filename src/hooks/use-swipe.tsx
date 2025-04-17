
import { useState, TouchEvent, useCallback } from "react";

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
}

interface SwipeOptions {
  threshold?: number; // Minimum distance for a swipe to be registered
  preventDefaultTouchmove?: boolean; // Whether to prevent default touchmove behavior
}

export function useSwipe(handlers: SwipeHandlers, options: SwipeOptions = {}) {
  const { threshold = 50, preventDefaultTouchmove = true } = options;
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  
  // Handle touch start
  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY,
    });
  }, []);
  
  // Handle touch move
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (preventDefaultTouchmove) {
      e.preventDefault();
    }
  }, [preventDefaultTouchmove]);
  
  // Handle touch end
  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchStart) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    
    // Check if the swipe meets the minimum distance threshold
    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
    const isSignificantMovement = isHorizontalSwipe 
      ? Math.abs(deltaX) > threshold 
      : Math.abs(deltaY) > threshold;
    
    if (isSignificantMovement) {
      if (isHorizontalSwipe) {
        // Horizontal swipe detected
        if (deltaX > 0) {
          // Swipe right
          handlers.onSwipeRight?.();
        } else {
          // Swipe left
          handlers.onSwipeLeft?.();
        }
      } else {
        // Vertical swipe detected
        if (deltaY > 0) {
          // Swipe down
          handlers.onSwipeDown?.();
        } else {
          // Swipe up
          handlers.onSwipeUp?.();
        }
      }
    }
    
    // Reset touch start
    setTouchStart(null);
  }, [touchStart, handlers, threshold]);
  
  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };
}
