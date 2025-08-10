import React from 'react';
import { Lightbulb, Shield, Users, BookOpen } from 'lucide-react';
import { IMAGES } from '../config/images';

const Mission: React.FC = () => {
  const missions = [
    {
      icon: Shield,
      title: "Gender Justice",
      description: "We challenge harmful norms and systems to build a world where all genders—especially girls and marginalized youth—can live with dignity, equality, and freedom.",
      image: IMAGES.mission.challengeNorms
    },
    {
      icon: Lightbulb,
      title: "Creative Expression",
      description: "We use art, storytelling, and design to make complex topics like gender, power, and sexuality accessible, engaging, and rooted in joy.",
      image: IMAGES.mission.creativeEmpowerment
    },
    {
      icon: BookOpen,
      title: "Education for Empowerment",
      description: "Through evidence-based programs like Comprehensive Sexuality Education (CSE), we equip young people with knowledge to protect their rights and navigate the world safely.",
      image: IMAGES.mission.accessibleEducation
    },
    {
      icon: Users,
      title: "Safe, Inclusive Spaces",
      description: "We create physical and digital pockets where youth feel safe to express themselves, be heard, and grow—regardless of identity or background.",
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
            We are committed to creating lasting change through four core pillars that guide everything we do.
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
                  We envision a world where every child and young person—regardless of gender—feels safe, empowered, and free to grow into who they are. A world where education is inclusive, creativity is a tool for justice, and every voice has the power to challenge harmful norms. Through pockets of safety and threads of empowerment, we imagine a future where feminist girls and boys lead the way—transforming their communities with courage, care, and creativity.
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