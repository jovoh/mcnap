import React from 'react';

const PresidentsMessage: React.FC = () => {
  return (
    <section id="presidents-message" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* President's Photo */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-49b02104a698?w=600&h=700&fit=crop&auto=format"
                alt="President Balbina M. Borneo"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Message Content */}
          <div className="space-y-6 animate-slide-in">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-4">
                President's Message
              </h2>
              <div className="w-20 h-1 bg-primary mb-6" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                Balbina M. Borneo, RN, MAN
              </h3>
              <p className="text-lg text-gray-600 italic">
                President, MCNAP
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Welcome to the Maternal and Child Nurses Association of the Philippines (MCNAP)! 
                It is with great honor and privilege that I serve as your President in this 
                remarkable year of our 45th anniversary.
              </p>
              
              <p className="leading-relaxed">
                For 45 years, MCNAP has been at the forefront of advancing maternal and child 
                health nursing in the Philippines. Our association has grown from a small group 
                of dedicated nurses to a nationwide community of passionate healthcare professionals 
                committed to excellence in maternal and child care.
              </p>

              <p className="leading-relaxed">
                As we continue our mission, we invite you to join us in our various programs, 
                trainings, and advocacy initiatives. Together, we can make a significant impact 
                on the health and well-being of mothers and children across the nation.
              </p>

              <p className="leading-relaxed font-semibold">
                Join MCNAP today and be part of our continuing legacy of excellence in 
                maternal and child health nursing!
              </p>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => {
                  const element = document.querySelector('#membership');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
              >
                Join MCNAP Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentsMessage;