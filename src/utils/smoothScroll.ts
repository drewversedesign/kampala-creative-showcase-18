
export const scrollToSection = (elementId: string): void => {
  const element = document.getElementById(elementId);
  
  if (element) {
    // Add offset for fixed header
    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
