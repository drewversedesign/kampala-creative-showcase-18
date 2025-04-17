
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";

// Portfolio items with company data
const portfolioItems = [
  {
    id: 1,
    title: "Deutsche Bank",
    category: "Finance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Deutsche_Bank_logo_without_wordmark.svg",
    openPositions: 34,
    tags: ["Banking", "Investment", "Fintech"],
  },
  {
    id: 2,
    title: "Siemens",
    category: "Engineering",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg",
    openPositions: 47,
    tags: ["Industrial", "Technology", "Manufacturing"],
  },
  {
    id: 3,
    title: "SAP",
    category: "Technology",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    openPositions: 52,
    tags: ["Software", "Enterprise", "Cloud"],
  },
  {
    id: 4,
    title: "BMW Group",
    category: "Automotive",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    openPositions: 28,
    tags: ["Vehicles", "Luxury", "Manufacturing"],
  },
  {
    id: 5,
    title: "Google",
    category: "Technology",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    openPositions: 63,
    tags: ["Software", "Internet", "Cloud"],
  },
  {
    id: 6,
    title: "Apple",
    category: "Technology",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    openPositions: 41,
    tags: ["Hardware", "Software", "Consumer Electronics"],
  }
];

// Filter categories
const categories = ["All", "Finance", "Engineering", "Technology", "Automotive"];

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
          <h2 className="heading-lg mb-4">Our Clients</h2>
          <p className="text-drewverse-text/70 max-w-2xl mx-auto">
            We've partnered with industry leaders across various sectors,
            delivering exceptional digital solutions tailored to their needs.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group relative overflow-hidden rounded-xl bg-white border hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 flex items-center justify-center mb-6">
                    <img
                      src={item.logo}
                      alt={`${item.title} logo`}
                      className="max-h-full max-w-[180px] object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-drewverse-text mt-2">{item.title}</h3>
                  <p className="text-gray-500 mt-1">{item.category}</p>
                  <p className="text-drewverse-primary font-semibold mt-3 text-lg">
                    {item.openPositions} Open Jobs
                  </p>
                  <button className="mt-6 flex items-center gap-2 text-drewverse-text font-medium hover:text-drewverse-primary transition-colors">
                    View Details <ExternalLink size={16} />
                  </button>
                </div>
              </CardContent>
            </Card>
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
