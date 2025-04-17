
import { useState } from "react";
import { ExternalLink } from "lucide-react";

// Updated portfolio items with descriptive names
const portfolioItems = [
  {
    id: 1,
    title: "Skyline Technologies Website Redesign",
    category: "Web Design",
    image: "/lovable-uploads/57ad8728-a549-49bd-b575-6f0b556c02c2.png",
    tags: ["Corporate", "UI/UX", "CMS"],
  },
  {
    id: 2,
    title: "FitTrack Pro Mobile Application",
    category: "Mobile App",
    image: "/lovable-uploads/c3cc1a29-7e8d-4ae4-9f21-1f6ea7df82c9.png",
    tags: ["Health", "UI/UX", "Mobile"],
  },
  {
    id: 3,
    title: "Urban Brew Coffee House Branding",
    category: "Branding",
    image: "/lovable-uploads/9bb5f335-3cd6-4e63-8267-8ff59e757076.png",
    tags: ["Food", "Branding", "Web"],
  },
  {
    id: 4,
    title: "GreenLife Marketplace Platform",
    category: "E-commerce",
    image: "/lovable-uploads/cdaf56ff-1e92-469d-9782-8779d8d0b5e3.png",
    tags: ["Sustainability", "E-commerce", "Web"],
  },
  {
    id: 5,
    title: "WealthWise Digital Banking",
    category: "FinTech",
    image: "/lovable-uploads/ecbe49bd-89c8-45a2-9567-8cb19574cc14.png",
    tags: ["Banking", "UI/UX", "Mobile"],
  },
  {
    id: 6,
    title: "MetricMind Business Analytics",
    category: "SaaS",
    image: "/lovable-uploads/3b30dfc1-f5e0-4da4-9bab-b2dc5e20b50d.png",
    tags: ["Analytics", "Dashboard", "Web"],
  },
  {
    id: 7,
    title: "GadgetGuru E-commerce Platform",
    category: "E-commerce",
    image: "/lovable-uploads/81439078-5641-41e3-ab47-9bd3397ff27b.png",
    tags: ["Electronics", "Shop", "UI/UX"],
  },
  {
    id: 8,
    title: "InnovateHub Corporate Website",
    category: "Web Design",
    image: "/lovable-uploads/71afe6c7-556e-4ada-b77b-25668af67c5e.png",
    tags: ["Corporate", "Software", "Business"],
  },
  {
    id: 9,
    title: "SmartVision AI Dashboard",
    category: "Tech",
    image: "/lovable-uploads/ef8c0c76-6a09-4725-bb0b-3d8e56d1f47c.png",
    tags: ["AI", "Technology", "SaaS"],
  },
  {
    id: 10,
    title: "BlockChain Exchange Platform",
    category: "Web3",
    image: "/lovable-uploads/a83133ef-be74-4fb1-a932-d6ec544aca1e.png",
    tags: ["Web3", "Blockchain", "Modern"],
  }
];

// Filter categories based on the new portfolio items
const categories = ["All", "Web Design", "E-commerce", "Mobile App", "FinTech", "SaaS", "Tech", "Branding", "Web3"];

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
