import React from 'react';

const EventsSection: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "MCNAP Laoag Chapter Convention 2025",
      date: "November 15, 2025",
      location: "Laoag City",
      description: "Join us for the annual convention featuring keynote speakers, research presentations, and networking opportunities.",
      registrationFee: "Regular: ₱1,500 | Students: ₱800",
      hashtag: "#MCNAPLaoag2025",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Lactation Management Training Program",
      date: "November 21-22, 24, 2025",
      location: "MCNAP Headquarters",
      description: "Comprehensive training program on lactation management for healthcare professionals.",
      registrationFee: "₱3,500 (Inclusive of materials and certificate)",
      hashtag: "#LactationTraining2025",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for our upcoming events and professional development opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Event Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Event Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-2">
                    {event.date}
                  </span>
                  <h3 className="text-2xl font-bold text-dark mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Location:</span> {event.location}
                  </p>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-3">
                  <div className="bg-light p-3 rounded-lg">
                    <p className="text-sm font-semibold text-dark">Registration Fee:</p>
                    <p className="text-sm text-gray-700">{event.registrationFee}</p>
                  </div>

                  <div className="bg-light p-3 rounded-lg">
                    <p className="text-sm font-semibold text-dark">Social Media:</p>
                    <p className="text-sm text-primary">{event.hashtag}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Promotion Section */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                MCNAP Course Module Now Available!
              </h3>
              <p className="text-lg mb-6">
                Get your copy of the latest MCNAP course module on maternal and child health nursing. 
                Essential resource for all nursing professionals.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold">
                Order Your Copy
              </button>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 inline-block">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
                  alt="MCNAP Course Module"
                  className="w-48 h-64 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;