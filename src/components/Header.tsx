import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About MCNAP', href: '#about' },
    { id: 'chapters', label: 'Chapters', href: '#chapters' },
    { id: 'activities', label: 'Activities', href: '#activities' },
    { id: 'membership', label: 'Membership', href: '#membership' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex flex-wrap gap-4">
              <span>+639178340357</span>
              <span>admin@mcnapofficial.com</span>
            </div>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xl">
                f
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xl">
                📷
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-primary font-bold text-xl">
                MCNAP
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Login Button */}
            <div className="hidden lg:block">
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Members LogIn
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <span className="text-2xl">×</span> : <span className="text-2xl">☰</span>}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="py-4 space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 mt-4">
                Members LogIn
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;