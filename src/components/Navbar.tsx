
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "../utils/smoothScroll";
import { useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // If not on homepage, navigate to homepage first and then scroll to section
      navigate(`/?section=${sectionId}`);
    }
    
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavigation('home')} 
          className="flex items-center"
        >
          <span className="text-2xl font-bold text-drewverse-dark">
            DrewVerse <span className="text-drewverse-primary">Design</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()}
                  onClick={() => handleNavigation('services')}
                >
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()}
                  onClick={() => handleNavigation('experience')}
                >
                  Experience
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()}
                  onClick={() => handleNavigation('portfolio')}
                >
                  Portfolio
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()}
                  onClick={() => handleNavigation('testimonials')}
                >
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()}
                  onClick={() => navigate('/blog')}
                >
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="btn-primary"
                >
                  Let's Talk
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          /* Mobile Menu Button */
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in z-40">
          <div className="container py-5 flex flex-col space-y-4">
            <button
              className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors py-2 text-left"
              onClick={() => handleNavigation('services')}
            >
              Services
            </button>
            <button
              className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors py-2 text-left"
              onClick={() => handleNavigation('experience')}
            >
              Experience
            </button>
            <button
              className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors py-2 text-left"
              onClick={() => handleNavigation('portfolio')}
            >
              Portfolio
            </button>
            <button
              className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors py-2 text-left"
              onClick={() => handleNavigation('testimonials')}
            >
              Testimonials
            </button>
            <button
              className="text-drewverse-dark hover:text-drewverse-primary font-medium transition-colors py-2 text-left"
              onClick={() => navigate('/blog')}
            >
              Blog
            </button>
            <button
              className="btn-primary inline-block text-center"
              onClick={() => handleNavigation('contact')}
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
