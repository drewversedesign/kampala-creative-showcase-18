
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "OASIS PURE WATER",
    role: "UI/UX & Web Development",
    period: "2023 - Present",
    description: "Redesigned the company's e-commerce platform resulting in a 40% increase in online sales and improved customer engagement metrics."
  },
  {
    company: "InkMaster Tattoo",
    role: "Brand Identity & Web Design",
    period: "2022 - 2023",
    description: "Created a complete brand overhaul including logo, color scheme, website, and marketing materials, establishing a cohesive brand identity."
  },
  {
    company: "ModernSpace",
    role: "Mobile App Development",
    period: "2021 - 2022",
    description: "Developed a cross-platform mobile application for property browsing and booking, with integrated payment systems and user management."
  },
  {
    company: "GreenLife Market",
    role: "E-commerce Development",
    period: "2020 - 2021",
    description: "Built a custom e-commerce solution with inventory management, analytics dashboard, and responsive design optimized for mobile devices."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-white relative">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Experience</h2>
          <p className="text-drewverse-text/70 max-w-2xl mx-auto">
            We've had the pleasure of working with amazing clients across various industries.
            Here's a glimpse of our journey so far.
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
                      <h4 className="heading-sm mb-4">Client Success Stories</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-drewverse-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>40% increase in online conversions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-drewverse-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>25% reduction in bounce rate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-drewverse-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>3x increase in mobile engagement</span>
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
