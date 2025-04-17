
import { useState, useEffect, useRef } from 'react';
import { springAnimation } from '../utils/cardAnimation';

export function useCardStack(itemCount: number, initialIndex = 0) {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(initialIndex);
  const [positions, setPositions] = useState<number[]>([]);
  const [velocities, setVelocities] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const animationRef = useRef<number | null>(null);
  
  // Initialize positions and velocities
  useEffect(() => {
    setPositions(Array(itemCount).fill(0).map((_, i) => i - activeCardIndex));
    setVelocities(Array(itemCount).fill(0));
    
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [itemCount]);

  // Update positions when active card changes with enhanced animation
  useEffect(() => {
    setVelocities(Array(itemCount).fill(0)); // Reset velocities
    setIsAnimating(true);
    
    // Start spring animation loop
    const animate = () => {
      let stillAnimating = false;
      
      setPositions(prevPositions => 
        prevPositions.map((pos, i) => {
          const targetPosition = i - activeCardIndex;
          const newPos = springAnimation(pos, targetPosition, velocities[i]);
          
          // Check if this card is still animating
          if (Math.abs(newPos - targetPosition) > 0.01) {
            stillAnimating = true;
          }
          
          return newPos;
        })
      );
      
      setVelocities(prevVelocities => 
        prevVelocities.map((vel, i) => {
          const targetPosition = i - activeCardIndex;
          const force = (targetPosition - positions[i]) * 0.12; // Increased spring strength
          return (vel + force) * 0.8; // Apply damping
        })
      );
      
      if (stillAnimating) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeCardIndex, itemCount]);

  const goToNextCard = () => {
    if (!isAnimating) {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % itemCount);
    }
  };

  const goToPrevCard = () => {
    if (!isAnimating) {
      setActiveCardIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount);
    }
  };

  const goToCard = (index: number) => {
    if (!isAnimating && index >= 0 && index < itemCount) {
      setActiveCardIndex(index);
    }
  };

  return {
    activeCardIndex,
    positions,
    velocities,
    isAnimating,
    goToNextCard,
    goToPrevCard,
    goToCard
  };
}
