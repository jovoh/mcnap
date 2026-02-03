import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  location: string;
  content: string;
  image: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Dr. Maria Rodriguez",
      position: "Chief Nurse",
      location: "Manila Medical Center",
      content: "MCNAP has been instrumental in my professional growth. The training programs and networking opportunities have helped me become a better leader in maternal and child health nursing.",
      image: "https://images.unsplash.com/photo-1559839734-49b02104a698?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 2,
      name: "Nurse Ana Santos",
      position: "Staff Nurse",
      location: "Philippine General Hospital",
      content: "Being a member of MCNAP has opened doors I never imagined. The continuing education programs keep me updated with the latest practices in maternal and child care.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 3,
      name: "Prof. Carlos Reyes",
      position: "Nursing Educator",
      location: "University of the Philippines",
      content: "MCNAP's research initiatives and publications have been invaluable resources for my teaching. The collaborative environment has enriched my academic career.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 4,
      name: "Nurse Manager Grace Lim",
      position: "Nurse Manager",
      location: "St. Luke's Medical Center",
      content: "The leadership training and mentorship programs provided by MCNAP have helped me transition from clinical practice to nursing leadership successfully.",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 5,
      name: "Dr. John Martinez",
      position: "Pediatric Nurse",
      location: "Children's Medical Center",
      content: "MCNAP's community outreach programs have allowed me to give back to the community while developing my skills in pediatric nursing. It's truly rewarding.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Member Testimonials
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our members about their MCNAP experience
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className={`relative bg-light rounded-2xl p-8 md:p-12 shadow-lg transition-all duration-500 ${
            isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
          }`}>
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-primary opacity-20 text-5xl">
              "
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="md:col-span-2">
                <div className="mb-6">
                  {renderStars(current.rating)}
                </div>
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{current.content}"
                </blockquote>
                <div>
                  <cite className="text-lg font-bold text-dark not-italic">
                    {current.name}
                  </cite>
                  <div className="text-primary font-semibold">
                    {current.position}
                  </div>
                  <div className="text-gray-600">
                    {current.location}
                  </div>
                </div>
              </div>

              {/* Testimonial Image */}
              <div className="text-center md:text-right">
                <div className="relative inline-block">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">
                    "
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white text-primary w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-primary hover:text-white text-xl"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            {/* Testimonial Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setCurrentTestimonial(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white text-primary w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-primary hover:text-white text-xl"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-dark mb-8">
            More Member Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.content.substring(0, 100)}..."
                </p>
                {renderStars(testimonial.rating)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;