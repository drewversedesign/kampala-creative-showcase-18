
import { Check, Clock, Award, Users } from "lucide-react";

const features = [
  {
    icon: <Award className="w-10 h-10 text-drewverse-primary" />,
    title: "Visionary Approach",
    description: "Fresh perspective with innovative design thinking tailored for the digital age."
  },
  {
    icon: <Check className="w-10 h-10 text-drewverse-primary" />,
    title: "High-Quality Concepts",
    description: "Showcase portfolio demonstrating our capabilities in branding, web development, and UI/UX design."
  },
  {
    icon: <Clock className="w-10 h-10 text-drewverse-primary" />,
    title: "Founded in 2023",
    description: "Young, dynamic team bringing fresh ideas and modern approaches to digital design challenges."
  },
  {
    icon: <Users className="w-10 h-10 text-drewverse-primary" />,
    title: "Client-Focused",
    description: "Dedicated to understanding your unique needs and delivering personalized digital solutions."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-drewverse-dark relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-white"></div>
      <div className="container-wide relative">
        <div className="bg-drewverse-primary/95 text-white py-16 px-8 md:p-16 rounded-3xl shadow-xl overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="heading-lg mb-4 text-white">Why Choose Us</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              As a premium digital agency in Uganda, we combine creativity, technical expertise, and strategic thinking to deliver
              standout digital solutions that elevate your brand and help startups make their mark.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-colors duration-300">
                <div className="bg-white/20 p-3 rounded-xl inline-block mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center relative z-10">
            <a href="#contact" className="bg-white text-drewverse-primary font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-block">
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
