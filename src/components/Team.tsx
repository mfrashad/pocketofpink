import React from 'react';
import { Award, Users, MapPin } from 'lucide-react';
import { IMAGES } from '../config/images';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Ain Husniza Saiful Nizam",
      role: "Founder & Executive Director",
      description: "International Relations student, activist, TEDx speaker, and recipient of the KLSCAH Civil Society Award and WikiImpact 100 Changemakers recognition.",
      highlight: true,
      image: IMAGES.team.ainHusniza
    },
    {
      name: "Iqsa Aqilah",
      role: "Core Team Member",
      description: "Passionate advocate focusing on educational outreach and community engagement.",
      image: IMAGES.team.iqsaAqilah
    },
    {
      name: "Adelia Khalid",
      role: "Core Team Member", 
      description: "Specialist in communications and digital advocacy strategies.",
      image: IMAGES.team.adeliaKhalid
    },
    {
      name: "Damia Nourrys Faris",
      role: "Core Team Member",
      description: "Expert in art and creative content development for educational materials.",
      image: IMAGES.team.damiaNourrysFaris
    },
    {
      name: "Kaveesha Thamilarasu",
      role: "Core Team Member",
      description: "Focused on research and policy advocacy for comprehensive sexuality education.",
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
            Meet the passionate young leaders driving change and empowering communities 
            across Malaysia and beyond.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">9</div>
            <div className="text-gray-600">Core Team Members</div>
          </div>
          <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">Multiple</div>
            <div className="text-gray-600">Awards & Recognition</div>
          </div>
          <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">KL</div>
            <div className="text-gray-600">Based in Malaysia</div>
          </div>
        </div>

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