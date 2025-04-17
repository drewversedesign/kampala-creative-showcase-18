import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, Send } from "lucide-react";
import { useState } from "react";

const FooterSection = () => {
  const [email, setEmail] = useState("");
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the subscription logic here
    alert(`Thanks for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <footer id="contact" className="bg-drewverse-dark text-white pt-20 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold">
                DrewVerse <span className="text-drewverse-primary">Design</span>
              </span>
            </div>
            <p className="text-white/70 mb-6">
              Premium digital agency specializing in branding, web development, and UI/UX design for startups and brands seeking standout digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-drewverse-primary transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-drewverse-primary transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-drewverse-primary transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-drewverse-primary transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-drewverse-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-white/70 hover:text-drewverse-primary transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-white/70 hover:text-drewverse-primary transition-colors">About Us</a></li>
              <li><a href="#blog" className="text-white/70 hover:text-drewverse-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-drewverse-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-drewverse-primary flex-shrink-0 mt-1" size={18} />
                <span className="text-white/70">4th Floor, Innovation Hub, Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-drewverse-primary flex-shrink-0" size={18} />
                <span className="text-white/70">+256 (0) 700 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-drewverse-primary flex-shrink-0" size={18} />
                <span className="text-white/70">hello@drewversedesign.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-white/70 mb-6">
              Subscribe to our newsletter to receive updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="bg-white/10 text-white placeholder:text-white/50 rounded-full py-3 px-5 pr-12 w-full focus:outline-none focus:ring-2 focus:ring-drewverse-primary/50"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bg-drewverse-primary text-white p-2 rounded-full hover:bg-drewverse-primary/90 transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="heading-lg mb-4 text-white">Let's Discuss Your Project</h2>
              <p className="text-white/70">
                Ready to create a standout digital presence? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white/70 mb-1 text-sm">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Elena Rodriguez"
                  className="bg-white/10 text-white placeholder:text-white/50 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-drewverse-primary/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/70 mb-1 text-sm">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="elena.rodriguez@professionaldesign.com"
                  className="bg-white/10 text-white placeholder:text-white/50 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-drewverse-primary/50"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="subject" className="block text-white/70 mb-1 text-sm">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  className="bg-white/10 text-white placeholder:text-white/50 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-drewverse-primary/50"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-white/70 mb-1 text-sm">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="bg-white/10 text-white placeholder:text-white/50 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-drewverse-primary/50"
                ></textarea>
              </div>
              
              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-drewverse-primary text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} DrewVerse Design. Founded 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
