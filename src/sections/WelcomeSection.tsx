import React from 'react';

const WelcomeSection: React.FC = () => {
  const features = [
    {
      id: 1,
      iconEmoji: "🏥",
      title: "Professional Development",
      description: "Enhance your skills through our comprehensive training programs, workshops, and continuing education opportunities designed for maternal and child health nurses.",
      color: "text-blue-600"
    },
    {
      id: 2,
      iconEmoji: "🤝",
      title: "Community Outreach",
      description: "Make a difference in communities through our various outreach programs, health campaigns, and volunteer initiatives focused on maternal and child health.",
      color: "text-green-600"
    },
    {
      id: 3,
      iconEmoji: "👥",
      title: "Networking & Support",
      description: "Connect with fellow nurses, share experiences, and build lasting professional relationships within our supportive MCNAP community.",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="welcome" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Welcome to MCNAP
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your gateway to excellence in maternal and child health nursing
          </p>
        </div>

        {/* Counter Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white rounded-2xl shadow-lg px-12 py-8">
            <div className="text-6xl font-bold text-primary mb-2">
              45
            </div>
            <div className="text-xl text-gray-600 font-semibold">
              Years of Excellence
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Serving Filipino nurses since 1980
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
              <div 
                key={feature.id} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-light flex items-center justify-center mb-6 mx-auto text-3xl ${feature.color}`}>
                  {feature.iconEmoji}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-dark mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Become part of the leading professional association for maternal and child health nurses in the Philippines.
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector('#membership');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
          >
            Join MCNAP Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;