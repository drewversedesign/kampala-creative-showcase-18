
import { Star } from "lucide-react";
import { useState } from "react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "OASIS Pure Water",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Working with DrewVerse Design was a game-changer for our business. They completely transformed our online presence, resulting in a 40% increase in sales within the first month after launch. Their attention to detail and commitment to quality is unmatched."
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "InkMaster Tattoo",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "DrewVerse took our brand identity to the next level. Their creative approach and strategic thinking helped us stand out in a competitive market. The entire process was smooth, and they were always available to address our concerns."
  },
  {
    id: 3,
    name: "Lisa Keyman",
    company: "ModernSpace",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    rating: 4,
    text: "The mobile app developed by DrewVerse exceeded our expectations. The user experience is intuitive, and the design is sleek and modern. The analytics dashboard they implemented has been invaluable for tracking our KPIs."
  }
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="testimonials" className="section-padding bg-drewverse-gray relative">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-drewverse-text/70 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients
            about their experience working with DrewVerse Design.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Current testimonial */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name}
                  className="rounded-2xl w-20 h-20 object-cover"  
                />
              </div>
              
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, index) => (
                    <Star 
                      key={index} 
                      size={18} 
                      className={index < testimonials[activeTestimonial].rating ? "text-drewverse-primary fill-drewverse-primary" : "text-gray-300"} 
                    />
                  ))}
                </div>
                
                <p className="text-drewverse-text/80 italic mb-6">
                  "{testimonials[activeTestimonial].text}"
                </p>
                
                <div>
                  <h4 className="font-bold text-lg">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-drewverse-primary">{testimonials[activeTestimonial].company}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? "bg-drewverse-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
