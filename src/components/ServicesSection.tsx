
import { CreditCard, Layout, Smartphone, Palette, Film, Code, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const services = [
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user experiences that keep your customers coming back for more.",
    icon: <Palette className="w-6 h-6 text-white" />,
    bgColor: "bg-zinc-800",
    buttonColor: "bg-zinc-700"
  },
  {
    title: "Web Design",
    description: "Fast, responsive, and secure websites that drive conversions and grow your business.",
    icon: <Layout className="w-6 h-6 text-white" />,
    bgColor: "bg-drewverse-primary",
    buttonColor: "bg-orange-600"
  },
  {
    title: "Landing Page",
    description: "High-converting landing pages that capture leads and help you achieve your business goals.",
    icon: <Code className="w-6 h-6 text-white" />,
    bgColor: "bg-zinc-800",
    buttonColor: "bg-zinc-700"
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: <Smartphone className="w-6 h-6 text-white" />,
    bgColor: "bg-zinc-800",
    buttonColor: "bg-zinc-700"
  },
  {
    title: "Brand Identity",
    description: "Memorable and cohesive visual identities that make your brand stand out from the competition.",
    icon: <Palette className="w-6 h-6 text-white" />,
    bgColor: "bg-zinc-800",
    buttonColor: "bg-zinc-700"
  },
  {
    title: "Motion Graphics",
    description: "Eye-catching animations and video content that tell your story in a dynamic way.",
    icon: <Film className="w-6 h-6 text-white" />,
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

        <div className="relative px-4 sm:px-8 md:px-12">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className={`rounded-3xl overflow-hidden border-none ${service.bgColor} text-white shadow-lg group transition-all duration-300 h-full flex flex-col`}
                  >
                    <CardContent className="flex-grow p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        {service.icon}
                      </div>
                      
                      <div className="border-t border-gray-700 my-3"></div>
                      
                      <p className="mt-4 text-gray-300">{service.description}</p>
                      
                      <div className="mt-auto pt-6 flex justify-end">
                        <button className={`${service.buttonColor} p-2 rounded-full`}>
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 bg-white text-drewverse-dark hover:bg-drewverse-primary hover:text-white -translate-x-1/2 border-none" />
            <CarouselNext className="absolute right-0 bg-white text-drewverse-dark hover:bg-drewverse-primary hover:text-white translate-x-1/2 border-none" />
          </Carousel>
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
