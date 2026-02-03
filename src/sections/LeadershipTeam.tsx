import React, { useState } from 'react';

const LeadershipTeam: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const teamMembers = [
    {
      id: '1',
      name: 'Balbina M. Borneo',
      position: 'President',
      credentials: 'RN, MAN',
      image: 'https://images.unsplash.com/photo-1559839734-49b02104a698?w=300&h=350&fit=crop'
    },
    {
      id: '2',
      name: 'Maria Santos',
      position: 'Vice President',
      credentials: 'RN, PhD',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=350&fit=crop'
    },
    {
      id: '3',
      name: 'Cruz Reyes',
      position: 'Secretary',
      credentials: 'RN, MAN',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=350&fit=crop'
    },
    {
      id: '4',
      name: 'Diana Garcia',
      position: 'Treasurer',
      credentials: 'RN, MBA',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=350&fit=crop'
    },
    {
      id: '5',
      name: 'Elena Rodriguez',
      position: 'Board Member',
      credentials: 'RN, DrPH',
      image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=350&fit=crop'
    },
    {
      id: '6',
      name: 'Francis Lim',
      position: 'Board Member',
      credentials: 'RN, MSN',
      image: 'https://images.unsplash.com/photo-1559839734-49b02104a698?w=300&h=350&fit=crop'
    },
    {
      id: '7',
      name: 'Grace Martinez',
      position: 'Board Member',
      credentials: 'RN, PhD',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=350&fit=crop'
    },
    {
      id: '8',
      name: 'Henry Chan',
      position: 'Board Member',
      credentials: 'RN, MPH',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=350&fit=crop'
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Leadership Team
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated Board of Trustees who lead MCNAP with vision and commitment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setSelectedMember(member.id)}
              onMouseLeave={() => setSelectedMember(null)}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent transition-opacity duration-300 ${
                  selectedMember === member.id ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* Social Links */}
                <div className={`absolute bottom-4 left-0 right-0 flex justify-center space-x-3 transition-transform duration-300 ${
                  selectedMember === member.id ? 'translate-y-0' : 'translate-y-10'
                }`}>
                  <button className="bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                    in
                  </button>
                  <button className="bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                    𝕏
                  </button>
                  <button className="bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                    @
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.credentials}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Excellence Awards
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognizing outstanding achievements in maternal and child health nursing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark">Outstanding Nurse Award</h3>
                  <p className="text-gray-600">Recognizing excellence in nursing practice</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                This prestigious award recognizes nurses who have demonstrated exceptional 
                clinical expertise, leadership, and dedication to maternal and child health.
              </p>
              <button className="text-primary font-semibold hover:text-blue-700 transition-colors duration-300">
                Nominate a Nurse →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-3xl">🌟</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark">Outstanding Chapter Award</h3>
                  <p className="text-gray-600">Celebrating chapter excellence</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Awarded to chapters that have shown remarkable growth, community impact, 
                and member engagement throughout the year.
              </p>
              <button className="text-primary font-semibold hover:text-blue-700 transition-colors duration-300">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;