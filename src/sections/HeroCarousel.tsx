import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  image: string;
  title?: string;
  subtitle?: string;
}

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop',
      title: 'MCNAP Convention 2025',
      subtitle: 'Join us for the biggest nursing event of the year'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=800&fit=crop',
      title: 'Professional Development',
      subtitle: 'Advancing nursing excellence through education'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              alt={slide.title || `Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            {slide.title && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl animate-slide-in">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full transition-all duration-300 text-2xl"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full transition-all duration-300 text-2xl"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;