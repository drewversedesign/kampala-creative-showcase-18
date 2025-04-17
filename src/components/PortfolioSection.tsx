
import { useState } from "react";
import { ExternalLink } from "lucide-react";

// Portfolio items with mock data
const portfolioItems = [
  {
    id: 1,
    title: "OASIS Pure Water",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["E-commerce", "UI/UX", "Web"],
  },
  {
    id: 2,
    title: "InkMaster Mobile App",
    category: "Apps",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Mobile", "UI/UX", "Apps"],
  },
  {
    id: 3,
    title: "ModernSpace Branding",
    category: "Brand",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Logo", "Identity", "Brand"],
  },
  {
    id: 4,
    title: "GreenLife Market",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["E-commerce", "UI/UX", "Web"],
  },
  {
    id: 5,
    title: "TechHub Animation",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Animation", "Video", "Motion"],
  },
  {
    id: 6,
    title: "FitLife Mobile App",
    category: "Apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Mobile", "UI/UX", "Apps"],
  }
];

// Filter categories
const categories = ["All", "Web Design", "Apps", "Brand", "Motion"];

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
            Take a look at some of our recent work. We pride ourselves on delivering
            high-quality results that exceed our clients' expectations.
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
              <div className="relative overflow-hidden aspect-[4/3]">
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
