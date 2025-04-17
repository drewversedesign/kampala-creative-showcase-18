
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
  velocityMultiplier?: number; // Multiplier for swipe velocity feedback
}

export function useSwipe(handlers: SwipeHandlers, options: SwipeOptions = {}) {
  const { 
    threshold = 50, 
    preventDefaultTouchmove = true,
    velocityMultiplier = 1.0
  } = options;
  
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; time: number } | null>(null);
  const [velocity, setVelocity] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  
  // Handle touch start
  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    });
  }, []);
  
  // Handle touch move
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (preventDefaultTouchmove) {
      e.preventDefault();
    }
    
    // Calculate velocity during move for animation feedback
    if (touchStart) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStart.x;
      const deltaY = touch.clientY - touchStart.y;
      const deltaTime = Date.now() - touchStart.time;
      
      if (deltaTime > 0) {
        setVelocity({
          x: (deltaX / deltaTime) * velocityMultiplier,
          y: (deltaY / deltaTime) * velocityMultiplier
        });
      }
    }
  }, [preventDefaultTouchmove, touchStart, velocityMultiplier]);
  
  // Handle touch end
  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchStart) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    const deltaTime = Date.now() - touchStart.time;
    
    // Minimum velocity required for swipe
    const minVelocity = 0.2;
    const calculatedVelocity = {
      x: deltaTime > 0 ? deltaX / deltaTime : 0,
      y: deltaTime > 0 ? deltaY / deltaTime : 0
    };
    
    // Check if the swipe meets the minimum distance threshold
    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
    const isSignificantMovement = isHorizontalSwipe 
      ? Math.abs(deltaX) > threshold 
      : Math.abs(deltaY) > threshold;
    
    // Fast swipe detection
    const isFastSwipe = Math.abs(calculatedVelocity.x) > minVelocity || 
                        Math.abs(calculatedVelocity.y) > minVelocity;
                        
    if (isSignificantMovement || isFastSwipe) {
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
    
    // Reset touch start and velocity
    setTouchStart(null);
    setVelocity({ x: 0, y: 0 });
  }, [touchStart, handlers, threshold]);
  
  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    velocity
  };
}
