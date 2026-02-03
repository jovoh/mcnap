import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 flex items-center justify-center hover:scale-110"
          aria-label="Back to top"
        >
          <i className="text-2xl">↑</i>
        </button>
      )}
    </>
  );
};

export default BackToTop;