
import { Check, Clock, Award, Users } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-10 h-10 text-drewverse-primary" />,
    title: "5+ Years Experience",
    description: "More than five years delivering exceptional digital solutions to clients across diverse industries."
  },
  {
    icon: <Check className="w-10 h-10 text-drewverse-primary" />,
    title: "60+ Completed Projects",
    description: "Successfully delivered over sixty projects for clients ranging from startups to established enterprises."
  },
  {
    icon: <Award className="w-10 h-10 text-drewverse-primary" />,
    title: "Attention to Detail",
    description: "Meticulous attention to every pixel, line of code, and user interaction for flawless execution."
  },
  {
    icon: <Users className="w-10 h-10 text-drewverse-primary" />,
    title: "Client Satisfaction",
    description: "Dedicated to exceeding client expectations with personalized service and exceptional results."
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
              We combine creativity, technical expertise, and strategic thinking to deliver
              digital solutions that elevate your brand and drive business results.
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
