import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const footerLinks = {
    about: [
      { label: 'About MCNAP', href: '#about' },
      { label: 'Our Mission', href: '#about' },
      { label: 'Leadership Team', href: '#leadership' },
      { label: 'Awards', href: '#leadership' }
    ],
    resources: [
      { label: 'Chapters', href: '#chapters' },
      { label: 'Activities', href: '#activities' },
      { label: 'Membership', href: '#membership' },
      { label: 'Publications', href: '#programs' }
    ],
    quickLinks: [
      { label: 'Home', href: '#home' },
      { label: 'Events', href: '#events' },
      { label: 'Programs', href: '#programs' },
      { label: 'Contact', href: '#membership' }
    ]
  };

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About MCNAP */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MCNAP</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The Maternal and Child Nurses Association of the Philippines is dedicated to advancing 
              maternal and child health nursing excellence through education, research, and professional development.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                f
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
              >
                📷
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
              >
                𝕏
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                in
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-primary">@</span>
                <span className="text-gray-300 text-sm">admin@mcnapofficial.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">📞</span>
                <span className="text-gray-300 text-sm">+639178340357</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary">📍</span>
                <span className="text-gray-300 text-sm">
                  Manila, Philippines<br />
                  Office Hours: 9:00 AM - 5:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates on MCNAP events, programs, and news.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-2 md:mb-0">
              <p>&copy; 2025 MCNAP - Maternal and Child Nurses Association of the Philippines. All rights reserved.</p>
            </div>
            <div className="text-center">
              <p>Designed with ❤️ for Filipino Nurses</p>
              <p className="text-xs mt-1">Est. 1980 • 45 Years of Service</p>
            </div>
            <div className="text-center md:text-right">
              <button className="hover:text-primary transition-colors duration-300 bg-none border-none cursor-pointer p-0">Privacy Policy</button>
              <span className="mx-2">|</span>
              <button className="hover:text-primary transition-colors duration-300 bg-none border-none cursor-pointer p-0">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;