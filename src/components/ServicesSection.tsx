
import { CreditCard, Layout, Smartphone, Palette, Film } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user experiences that keep your customers coming back for more.",
    image: "/lovable-uploads/9776f2e4-f20a-43ea-a3b6-b4b7d8623c16.png",
    bgColor: "bg-zinc-800",
    buttonColor: "bg-zinc-700"
  },
  {
    title: "Web Design",
    description: "Fast, responsive, and secure websites that drive conversions and grow your business.",
    image: "/lovable-uploads/9776f2e4-f20a-43ea-a3b6-b4b7d8623c16.png",
    bgColor: "bg-drewverse-primary",
    buttonColor: "bg-orange-600"
  },
  {
    title: "Landing Page",
    description: "High-converting landing pages that capture leads and help you achieve your business goals.",
    image: "/lovable-uploads/9776f2e4-f20a-43ea-a3b6-b4b7d8623c16.png",
    bgColor: "bg-zinc-800",
    buttonColor: "bg-zinc-700"
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    image: "/lovable-uploads/cdaf56ff-1e92-469d-9782-8779d8d0b5e3.png",
    bgColor: "bg-zinc-800",
    buttonColor: "bg-zinc-700"
  },
  {
    title: "Brand Identity",
    description: "Memorable and cohesive visual identities that make your brand stand out from the competition.",
    image: "/lovable-uploads/a83133ef-be74-4fb1-a932-d6ec544aca1e.png",
    bgColor: "bg-zinc-800",
    buttonColor: "bg-zinc-700"
  },
  {
    title: "Motion Graphics",
    description: "Eye-catching animations and video content that tell your story in a dynamic way.",
    image: "/lovable-uploads/71afe6c7-556e-4ada-b77b-25668af67c5e.png",
    bgColor: "bg-zinc-800",
    buttonColor: "bg-zinc-700"
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
            <Card 
              key={index} 
              className={`rounded-3xl overflow-hidden border-none ${service.bgColor} text-white shadow-lg group transition-all duration-300 h-full flex flex-col`}
            >
              <div className="p-6 pb-0">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <div className="border-t border-gray-700 my-3"></div>
              </div>
              
              <CardContent className="flex-grow p-6 pt-0 flex flex-col">
                <div className="bg-gray-800 rounded-2xl p-3 mb-6 overflow-hidden relative flex-grow">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden transform group-hover:scale-[1.03] transition-transform duration-300 bg-gray-700">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  <button className={`absolute bottom-5 right-5 ${service.buttonColor} p-2 rounded-full`}>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45">
                      <path d="M3.33398 8.00033H12.6673M12.6673 8.00033L8.00065 3.33366M12.6673 8.00033L8.00065 12.667" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
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
