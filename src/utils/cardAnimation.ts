
// Card animation utility functions for smoother interactions

// Calculate the spring animation based on position and velocity
export function springAnimation(
  position: number, 
  targetPosition: number, 
  velocity: number, 
  spring = 0.1, 
  damping = 0.8
): number {
  // Calculate force based on distance from target
  const force = (targetPosition - position) * spring;
  // Apply force to velocity with damping
  const newVelocity = (velocity + force) * damping;
  // Calculate new position
  const newPosition = position + newVelocity;
  
  return newPosition;
}

// Get opacity based on distance from center for card stack effect
export function getCardOpacity(distance: number): number {
  return Math.max(0, 1 - Math.abs(distance) * 0.3);
}

// Get scale based on distance from center for card stack effect
export function getCardScale(distance: number): number {
  return Math.max(0.8, 1 - Math.abs(distance) * 0.1);
}

// Get z-index based on active state and position for proper stacking
export function getCardZIndex(isActive: boolean, position: number): number {
  if (isActive) return 50;
  return 40 - Math.abs(position);
}
