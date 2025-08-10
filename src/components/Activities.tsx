import React from 'react';
import { GraduationCap, Calendar, Users, Megaphone, ArrowRight } from 'lucide-react';
import { IMAGES } from '../config/images';

const Activities: React.FC = () => {
  const activities = [
    {
      icon: GraduationCap,
      title: "School Workshops",
      description: "Interactive sessions using our cartoon module to educate children about bodies, boundaries, and identity in safe, supportive environments.",
      highlight: "Over 400 students engaged at Sri KDU International School",
      color: "from-pink-500 to-pink-600",
      image: IMAGES.activities.schoolWorkshops
    },
    {
      icon: Calendar,
      title: "Community Events",
      description: "Participation in festivals, advocacy campaigns, and outreach programs to raise awareness and connect with families.",
      highlight: "Featured at Festival Kartun Gen Z in Kuala Lumpur",
      color: "from-pink-500 to-pink-600",
      image: IMAGES.activities.communityEvents
    },
    {
      icon: Megaphone,
      title: "Advocacy Campaigns",
      description: "Leading efforts to promote Comprehensive Sexuality Education (CSE) and challenge harmful societal norms.",
      highlight: "Media recognition across major Malaysian outlets",
      color: "from-pink-500 to-pink-600",
      image: IMAGES.activities.advocacyCampaigns
    }
  ];

  const upcomingPlans = [
    "Expand the book series with modules on safe touch and school safety",
    "Launch nationwide outreach tours for greater accessibility",
    "Develop digital resources and online workshops",
    "Create teacher training programs",
    "Establish partnerships with more schools and communities"
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Our Activities
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We reach communities through diverse programs that educate, advocate, 
            and empower young people across Malaysia.
          </p>
        </div>

        {/* Current Activities */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group border border-gray-100"
              >
                <img 
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                <div className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{activity.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{activity.description}</p>
                <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-4">
                  <div className="flex items-start space-x-2">
                    <Users className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-gray-700">{activity.highlight}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workshop Showcase */}
        <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-3xl p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive School Workshops
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our workshops create safe spaces where children can learn about their bodies, 
                understand boundaries, and recognize both safe and unsafe situations. We use 
                our cartoon-based materials to make these important conversations engaging 
                and age-appropriate.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Age-appropriate content delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Interactive activities and discussions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Safe space for questions and learning</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src={IMAGES.activities.workshopShowcase}
                alt="Children engaged in educational workshop activities"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-6xl font-bold text-pink-600 mb-2">400+</div>
                <div className="text-xl font-semibold text-gray-800 mb-4">Students Reached</div>
                <p className="text-gray-600">
                  Recent successful workshop at Sri KDU International School, 
                  engaging students in meaningful conversations about safety and empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Plans */}
        <div className="bg-white rounded-3xl border-2 border-pink-100 p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
                Future Plans
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're constantly expanding our reach and impact. Here's what's coming next:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {upcomingPlans.map((plan, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{plan}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8">
              <img 
                src={IMAGES.activities.futurePlans}
                alt="Future educational initiatives and community outreach"
                className="w-full h-32 object-cover rounded-xl mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800 mb-4">Get Involved</h4>
              <p className="text-gray-600 mb-6">
                Want to bring our workshops to your school or community? 
                We're always looking for new partnerships and opportunities to expand our impact.
              </p>
              <button className="group bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;