import React from 'react';
import { Lightbulb, Shield, Users, BookOpen } from 'lucide-react';
import { IMAGES } from '../config/images';

const Mission: React.FC = () => {
  const missions = [
    {
      icon: Lightbulb,
      title: "Creative Empowerment",
      description: "To empower youth through creative education, advocacy, and art that makes learning engaging and memorable.",
      image: IMAGES.mission.creativeEmpowerment
    },
    {
      icon: BookOpen,
      title: "Accessible Education",
      description: "To provide accessible, age-appropriate, and accurate information about bodies, boundaries, and identity.",
      image: IMAGES.mission.accessibleEducation
    },
    {
      icon: Shield,
      title: "Challenge Norms",
      description: "To challenge patriarchal norms and promote gender equality and child safety in all communities.",
      image: IMAGES.mission.challengeNorms
    },
    {
      icon: Users,
      title: "Advocacy for CSE",
      description: "To advocate for Comprehensive Sexuality Education (CSE) as a preventive tool against exploitation and abuse.",
      image: IMAGES.mission.advocacyCSE
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Our Mission
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to creating lasting change through four core pillars 
            that guide everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {missions.map((mission, index) => {
            const IconComponent = mission.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={mission.image}
                    alt={mission.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{mission.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{mission.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="absolute inset-0">
            <img
              src={IMAGES.mission.visionBackground}
              alt="Vision background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
                    Our Vision
                  </span>
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  We envision a world where every child and young person has access to comprehensive, 
                  inclusive education about their bodies, rights, and identity. A world where young 
                  people are empowered to make informed decisions, protect themselves and others, 
                  and contribute to building safer, more equitable communities.
                </p>
                <div className="flex justify-start">
                  <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={IMAGES.mission.visionChildren}
                    alt="Children learning and growing"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;