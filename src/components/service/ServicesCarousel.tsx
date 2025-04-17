
import React from 'react';
import { ServiceCard } from './ServiceCard';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  buttonColor: string;
}

interface ServicesCarouselProps {
  services: Service[];
}

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  return (
    <div className="relative px-4 sm:px-8 md:px-12 py-8">
      <Carousel 
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {services.map((service, index) => (
            <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3 h-full">
              <div className="h-full flex">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  bgColor={service.bgColor}
                  buttonColor={service.buttonColor}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 bg-white text-drewverse-dark hover:bg-orange-500 hover:text-white -translate-x-1/2 border-none shadow-lg" />
        <CarouselNext className="absolute right-0 bg-white text-drewverse-dark hover:bg-orange-500 hover:text-white translate-x-1/2 border-none shadow-lg" />
      </Carousel>
    </div>
  );
}
