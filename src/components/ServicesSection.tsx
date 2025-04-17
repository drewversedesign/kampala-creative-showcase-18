
import { CreditCard, Layout, Smartphone, Palette, Film } from "lucide-react";

const services = [
  {
    icon: <Layout className="w-10 h-10 text-drewverse-primary" />,
    title: "UI/UX Design",
    description: "Intuitive and engaging user experiences that keep your customers coming back for more."
  },
  {
    icon: <CreditCard className="w-10 h-10 text-drewverse-primary" />,
    title: "Web Development",
    description: "Fast, responsive, and secure websites that drive conversions and grow your business."
  },
  {
    icon: <Palette className="w-10 h-10 text-drewverse-primary" />,
    title: "Brand Identity",
    description: "Memorable and cohesive visual identities that make your brand stand out from the competition."
  },
  {
    icon: <Film className="w-10 h-10 text-drewverse-primary" />,
    title: "Motion Graphics",
    description: "Eye-catching animations and video content that tell your story in a dynamic way."
  },
  {
    icon: <Smartphone className="w-10 h-10 text-drewverse-primary" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-drewverse-gray relative">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="text-drewverse-text/70 max-w-2xl mx-auto">
            We offer a wide range of digital services to help your business thrive in the digital landscape. 
            From design to development, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="bg-drewverse-primary/10 p-4 rounded-xl inline-block mb-6 group-hover:bg-drewverse-primary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="heading-sm mb-3">{service.title}</h3>
              <p className="text-drewverse-text/70">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#portfolio" className="btn-primary inline-flex items-center gap-2">
            See Our Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33398 8.00033H12.6673M12.6673 8.00033L8.00065 3.33366M12.6673 8.00033L8.00065 12.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
