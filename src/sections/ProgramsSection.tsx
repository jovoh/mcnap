import React from 'react';

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      id: 1,
      title: "Continuing Education",
      description: "Regular workshops, seminars, and training programs to enhance your nursing knowledge and skills.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Health Advocacy",
      description: "Advocating for policies and programs that promote maternal and child health at national and local levels.",
      image: "https://images.unsplash.com/photo-1559839734-49b02104a698?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Chapter Support",
      description: "Supporting our local chapters across the Philippines with resources, guidance, and networking opportunities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Community Outreach",
      description: "Organizing health camps, awareness campaigns, and community services for mothers and children.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Research & Publications",
      description: "Promoting research in maternal and child health nursing and publishing scholarly works.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Mentorship Program",
      description: "Connecting experienced nurses with new graduates for professional guidance and career development.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive programs designed to advance maternal and child health nursing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image with Overlay */}
              <div className="relative h-64">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-3xl transition-all duration-300">
                  {program.title}
                </h3>
                
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors duration-300 w-32">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Join MCNAP Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Why Join MCNAP?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dark mb-2">Professional Growth</h4>
                    <p className="text-gray-600">Access to exclusive training programs and continuing education opportunities</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dark mb-2">Networking Opportunities</h4>
                    <p className="text-gray-600">Connect with thousands of nursing professionals nationwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dark mb-2">Leadership Development</h4>
                    <p className="text-gray-600">Opportunities to take leadership roles in chapters and committees</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop"
                alt="Professional Development"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1559839734-49b02104a698?w=300&h=200&fit=crop"
                alt="Team Collaboration"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&h=200&fit=crop"
                alt="Community Service"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=200&fit=crop"
                alt="Medical Excellence"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;