
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Skyline Tech Solutions",
    role: "Enterprise Website Redesign",
    period: "2023 - Present",
    description: "Completely transformed a legacy corporate website into a modern digital platform with interactive elements, optimized user flows, and a custom CMS that increased lead generation by 45% within three months."
  },
  {
    company: "Pulse Fitness App",
    role: "Mobile App Development & UI/UX",
    period: "2023",
    description: "Designed and developed a fitness tracking mobile application with personalized workout plans, nutrition tracking, and social features that achieved over 15,000 downloads in its first month after launch."
  },
  {
    company: "Artisan Café Chain",
    role: "Brand Identity & Digital Strategy",
    period: "2023",
    description: "Created a comprehensive rebrand for a local café chain, including new visual identity, packaging design, responsive website with online ordering system, and digital marketing strategy that boosted online orders by 73%."
  },
  {
    company: "EcoSmart Home",
    role: "E-commerce Platform Development",
    period: "2023",
    description: "Built a full-featured e-commerce platform for sustainable home products with custom product filtering, review system, and subscription service integration, resulting in a 60% increase in average order value."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-white relative">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Experience</h2>
          <p className="text-drewverse-text/70 max-w-2xl mx-auto">
            Since our founding in 2023, we've delivered impactful solutions across diverse industries.
            Here's a glimpse of our successful collaborations and what we can do for your brand.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-drewverse-primary/20 hidden md:block"></div>

          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 md:text-right">
                  <div 
                    className={`
                      flex items-center gap-4 mb-3
                      ${index % 2 === 0 ? "md:justify-end" : "md:justify-start md:flex-row-reverse"}
                    `}
                  >
                    <h3 className="heading-md font-bold">{exp.company}</h3>
                    <div className="hidden md:flex h-3 w-3 rounded-full bg-drewverse-primary"></div>
                  </div>
                  <p className="text-drewverse-primary font-medium mb-2">{exp.role}</p>
                  <p className="text-sm text-drewverse-text/60 mb-4">{exp.period}</p>
                  <p className="text-drewverse-text/80">{exp.description}</p>
                </div>
                
                <div className="md:hidden flex items-center justify-center">
                  <div className="h-12 w-0.5 bg-drewverse-primary/20"></div>
                </div>
                
                <div className="flex-1">
                  {index === 0 && (
                    <div className="bg-drewverse-gray p-6 rounded-2xl shadow-sm relative">
                      <div className="absolute -top-3 -right-3 bg-drewverse-primary text-white p-2 rounded-xl">
                        <Briefcase size={20} />
                      </div>
                      <h4 className="heading-sm mb-4">Our Success Methodology</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-drewverse-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Data-driven design decisions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-drewverse-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>ROI-focused development strategy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-drewverse-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Agile implementation process</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
