
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "../utils/smoothScroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center"
        >
          <span className="text-2xl font-bold text-drewverse-dark">
            Drew<span className="text-drewverse-primary">Verse</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('blog')} 
            className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors"
          >
            Blog
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="btn-primary"
          >
            Let's Talk
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in z-40">
          <div className="container py-5 flex flex-col space-y-4">
            <button
              className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors py-2 text-left"
              onClick={() => {
                scrollToSection('services');
                setIsMenuOpen(false);
              }}
            >
              Services
            </button>
            <button
              className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors py-2 text-left"
              onClick={() => {
                scrollToSection('experience');
                setIsMenuOpen(false);
              }}
            >
              Experience
            </button>
            <button
              className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors py-2 text-left"
              onClick={() => {
                scrollToSection('portfolio');
                setIsMenuOpen(false);
              }}
            >
              Portfolio
            </button>
            <button
              className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors py-2 text-left"
              onClick={() => {
                scrollToSection('testimonials');
                setIsMenuOpen(false);
              }}
            >
              Testimonials
            </button>
            <button
              className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors py-2 text-left"
              onClick={() => {
                scrollToSection('blog');
                setIsMenuOpen(false);
              }}
            >
              Blog
            </button>
            <button
              className="btn-primary inline-block text-center"
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
