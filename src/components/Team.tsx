import React from 'react';
import { Award } from 'lucide-react';
import { IMAGES } from '../config/images';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Ain Husniza",
      role: "Founder & Executive Director",
      description: "Founder and Executive Director of Pocket of Pink, leading the organisation’s vision and advocacy for gender justice.",
      highlight: true,
      image: IMAGES.team.ainHusniza
    },
    {
      name: "Karyn Ngiam",
      role: "Strategic Director",
      description: "Strategic Director, shaping Pocket of Pink’s direction, partnerships, and long-term impact.",
      image: IMAGES.team.karyn || IMAGES.team.kaveeshaThamilarasu
    },
    {
      name: "Kaveesha Thamilarasu",
      role: "Programmes Director",
      description: "Programmes Director, leading the development and delivery of inclusive, youth-centred educational initiatives.",
      image: IMAGES.team.kaveeshaThamilarasu
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the young leaders at the heart of Pocket of Pink—driving change and reimagining gender justice.
          </p>
        </div>

        {/* Requested: remove stats (9 core members, awards, KL based) */}

        {/* Team Members */}
        <div className="space-y-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`${
                member.highlight 
                  ? 'bg-gradient-to-r from-pink-50 to-pink-100 border-2 border-pink-200' 
                  : 'bg-white border border-gray-200'
              } rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {member.highlight && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-3 ${
                    member.highlight 
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white' 
                      : 'bg-pink-100 text-pink-700'
                  }`}>
                    {member.role}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-pink-50 to-pink-100 rounded-3xl p-12">
          <img 
            src={IMAGES.team.teamCollaboration}
            alt="Team collaboration and youth empowerment"
            className="w-full h-48 object-cover rounded-2xl mb-8"
          />
          <h3 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Join Our Movement
            </span>
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our team and help 
            create positive change in communities across Malaysia and beyond.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;