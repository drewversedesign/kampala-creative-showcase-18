
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="cta" className="section-padding bg-white relative">
      <div className="container-wide">
        <div className="bg-drewverse-dark rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-drewverse-primary/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-3/4 bg-drewverse-primary/5 blur-2xl"></div>
          
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center relative z-10">
            <div>
              <h2 className="heading-lg text-white mb-4">Have a Project? Let's Discuss</h2>
              <p className="text-white/80 mb-6">
                Ready to take your digital presence to the next level? Get in touch with our team
                to discuss your project needs and discover how we can help you achieve your goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-drewverse-primary text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 hover:shadow-lg transition-all duration-300">
                  Contact Us <ArrowRight size={18} />
                </a>
                <a href="#portfolio" className="bg-transparent border-2 border-white/30 text-white font-semibold py-3 px-6 rounded-full hover:bg-white/10 transition-all duration-300">
                  View Our Work
                </a>
              </div>
            </div>
            
            <div className="relative">
              {/* Stylized form-like element */}
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-white text-xl font-bold mb-6">Quick Project Inquiry</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-white/80 text-sm mb-1 block">What type of project?</label>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-drewverse-primary/50 cursor-pointer transition-colors">
                        Website
                      </span>
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-drewverse-primary/50 cursor-pointer transition-colors">
                        Mobile App
                      </span>
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-drewverse-primary/50 cursor-pointer transition-colors">
                        Branding
                      </span>
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-drewverse-primary/50 cursor-pointer transition-colors">
                        Other
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-white/80 text-sm mb-1 block">Estimated budget?</label>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-drewverse-primary/50 cursor-pointer transition-colors">
                        $1k - $5k
                      </span>
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-drewverse-primary/50 cursor-pointer transition-colors">
                        $5k - $10k
                      </span>
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-drewverse-primary/50 cursor-pointer transition-colors">
                        $10k+
                      </span>
                    </div>
                  </div>
                  
                  <a href="#contact" className="bg-drewverse-primary text-white font-semibold py-3 px-6 rounded-full inline-block w-full text-center hover:shadow-lg transition-all duration-300 mt-4">
                    Start Consultation
                  </a>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-drewverse-primary/30 w-24 h-24 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 bg-drewverse-primary/30 w-24 h-24 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
