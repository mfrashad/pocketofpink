import React from 'react';
import { Award, Users2, BookHeart, Target } from 'lucide-react';
import { IMAGES } from '../config/images';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              About Pocket of Pink
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A youth-led, intersectional feminist non-profit organization founded in 2024, 
            combining art, advocacy, and education to empower children and youth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded by <strong className="text-pink-600">Ain Husniza Saiful Nizam</strong>, 
                Pocket of Pink (POP) emerged from a vision to create safe spaces where young people, 
                especially girls, can learn about their rights, bodily autonomy, and personal safety.
              </p>
              <p>
                We believe in breaking taboos around sexuality education and fostering inclusive 
                environments for learning and growth. Our approach combines creative storytelling, 
                visual art, and evidence-based education to make complex topics accessible and engaging.
              </p>
              <p>
                Through our innovative programs, we challenge patriarchal norms, promote gender equality, 
                and advocate for Comprehensive Sexuality Education (CSE) as a preventive tool against 
                exploitation and abuse.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8">
              <img 
                src={IMAGES.about.main}
                alt="Young people learning and engaging in educational activities"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Recognition</h4>
                  <p className="text-sm text-gray-600">KLSCAH Civil Society Award & WikiImpact 100 Changemakers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Team</h4>
                  <p className="text-sm text-gray-600">Nine young leaders from diverse backgrounds</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BookHeart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Approach</h4>
                  <p className="text-sm text-gray-600">Art, advocacy, and education combined</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Focus</h4>
                  <p className="text-sm text-gray-600">Children and youth empowerment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookHeart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Inclusive Education</h3>
            <p className="text-gray-600">
              Providing accessible, age-appropriate, and accurate information about bodies, 
              boundaries, and identity for all young people.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Youth Leadership</h3>
            <p className="text-gray-600">
              Empowering young people to lead change in their communities and advocate 
              for their rights and the rights of others.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Social Change</h3>
            <p className="text-gray-600">
              Challenging harmful norms and advocating for systemic changes that promote 
              gender equality and child safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;