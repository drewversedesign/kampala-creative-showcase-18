
export function initScrollAnimation(): void {
  const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-right, .animate-slide-in-bottom, .animate-scale-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the element is in viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Once it's animated in, we don't need to observe it anymore
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Trigger when at least 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Adjust when animation triggers
  });
  
  // Observe each animated element
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}
