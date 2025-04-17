import { useState } from "react";
import { ExternalLink } from "lucide-react";

// Updated portfolio items with new projects
const portfolioItems = [
  {
    id: 1,
    title: "Hamburg Super Card Platform",
    category: "FinTech",
    image: "/lovable-uploads/0d1a6abc-90e2-490e-b4fc-58e22ada6ed5.png",
    tags: ["Banking", "UI/UX", "Web"],
  },
  {
    id: 2,
    title: "Analyx Social Media Management",
    category: "SaaS",
    image: "/lovable-uploads/62920dc8-a08c-4442-b51d-8abd00536d86.png",
    tags: ["Analytics", "Social Media", "Dashboard"],
  },
  {
    id: 3,
    title: "QuickStore E-commerce Platform",
    category: "E-commerce",
    image: "/lovable-uploads/926452ab-8918-4e6c-afb4-b660355cdd32.png",
    tags: ["Retail", "E-commerce", "Mobile"],
  },
  {
    id: 4,
    title: "Modern Furniture Collection",
    category: "E-commerce",
    image: "/lovable-uploads/81d44eec-a494-4957-9289-2369e6d4e20e.png",
    tags: ["Furniture", "UI/UX", "Web"],
  },
  {
    id: 5,
    title: "Create Software Solutions",
    category: "Web Design",
    image: "/lovable-uploads/a5b1a9f8-ad49-4740-ae2b-577bde8ac532.png",
    tags: ["Corporate", "Software", "Modern"],
  }
];

// Updated categories based on the new portfolio items
const categories = ["All", "Web Design", "E-commerce", "FinTech", "SaaS"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter portfolio items based on active category
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Portfolio</h2>
          <p className="text-drewverse-text/70 max-w-2xl mx-auto">
            Explore our diverse portfolio of successful projects across multiple industries. 
            Each project represents our commitment to innovation, quality craftsmanship, and 
            delivering measurable results for our clients.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-drewverse-primary text-white"
                    : "bg-gray-100 text-drewverse-text hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl bg-drewverse-gray shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <span className="text-xs text-drewverse-primary font-semibold uppercase tracking-wider bg-white/90 rounded-full px-3 py-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="text-xs text-white/70">
                          {tag}
                          {index < item.tags.length - 1 && " •"}
                        </span>
                      ))}
                    </div>
                    <button className="mt-4 flex items-center gap-2 text-white font-medium">
                      View Project <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-outline">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
