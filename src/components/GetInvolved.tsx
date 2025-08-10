import React from 'react';
import { Users, PenTool, Video, Megaphone, Heart, Mail, ArrowRight } from 'lucide-react';
import { IMAGES } from '../config/images';

interface GetInvolvedProps {
  onDonateClick: () => void;
}

const GetInvolved: React.FC<GetInvolvedProps> = ({ onDonateClick }) => {
  const volunteerOpportunities = [
    {
      icon: PenTool,
      title: "Writers",
      description: "Help create engaging, age-appropriate content for our educational materials and advocacy campaigns.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: PenTool,
      title: "Illustrators",
      description: "Design colorful, inclusive illustrations that make learning about sensitive topics accessible and engaging.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Video,
      title: "Videographers",
      description: "Document our workshops, create educational content, and help share our story through visual media.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Megaphone,
      title: "Advocacy Campaigners",
      description: "Lead outreach efforts, organize events, and help amplify our message in communities across Malaysia.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const supportWays = [
    {
      title: "Purchase Our Module",
      description: "Buy the Express to Empower activity book for RM25 and help fund free distribution to children in need.",
      action: "Order Now"
    },
    {
      title: "Make a Donation",
      description: "Support our mission with a financial contribution that helps us reach more children and communities.",
      action: "Donate"
    },
    {
      title: "Partner with Us",
      description: "Collaborate for wider distribution, sponsor workshops, or help us reach underserved communities.",
      action: "Partner"
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Get Involved
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our movement to empower youth and create safer communities. 
            There are many ways to make a difference with Pocket of Pink.
          </p>
        </div>

        {/* Volunteer Opportunities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Volunteer Opportunities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${opportunity.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{opportunity.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Join the Team */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Join the Team</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're always recruiting passionate committee members who share our vision 
                for education, art, and advocacy. If you're dedicated to creating positive 
                change and empowering young people, we'd love to hear from you.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-pink-600" />
                  <span className="text-gray-700">Collaborative team environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-pink-600" />
                  <span className="text-gray-700">Meaningful impact on communities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Megaphone className="w-6 h-6 text-pink-600" />
                  <span className="text-gray-700">Leadership and advocacy experience</span>
                </div>
              </div>
              <button className="group bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Apply to Join</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="text-center">
              <img 
                src={IMAGES.getInvolved.joinTeam}
                alt="Team collaboration and youth empowerment activities"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Growing Team</h4>
                <p className="text-gray-600">
                  Join our diverse group of young leaders from various backgrounds, 
                  all united in our mission to create positive change.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Us */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Support Our Mission
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {supportWays.map((way, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-4">{way.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">{way.description}</p>
                <button 
                  onClick={way.action === 'Donate' ? onDonateClick : undefined}
                  className="group w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>{way.action}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('${IMAGES.getInvolved.callToActionBackground}')`
            }}
          ></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you want to volunteer, join our team, or support our work, 
              every contribution helps us create safer, more empowering spaces for young people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Contact Us Today
              </button>
              <button 
                onClick={onDonateClick}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300"
              >
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;