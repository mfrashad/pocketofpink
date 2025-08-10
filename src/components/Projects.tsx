import React from 'react';
import { BookOpen, Palette, Users, Globe, ArrowRight } from 'lucide-react';
import { IMAGES } from '../config/images';

const Projects: React.FC = () => {
  return (
    <section id="initiatives" className="py-20 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Our Initiatives
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From classrooms to digital platforms, we use creative tools and youth leadership to advance gender justice and safety.
          </p>
        </div>

        {/* Express to Empower */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Express to Empower
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our school-based workshops and Pocket Pal activity book teach young people about bodily autonomy, consent, and identity through creative, stigma-free learning.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Using art to empower—creative, stigma-free learning</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Pocket Pal: 20-page cartoon-based activity book</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Available in English; Bahasa Malaysia in development</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Whether in a classroom or at home, the message is the same: Your body. Your rights. Your voice.</p>
                </div>
              </div>

              <a href="#/express-to-empower" className="group inline-flex items-center bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span>Discover How It Works</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-12 lg:p-16 flex items-center justify-center">
              <div className="text-center">
                <img 
                  src={IMAGES.projects.expressToEmpowerBook}
                  alt="Express to Empower educational book and materials"
                  className="w-full object-cover rounded-2xl shadow-2xl mb-8 mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                <p className="text-gray-600 font-medium">20-Page Activity Book</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Cartoons */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white rounded-3xl p-4 shadow-lg">
            <img 
              src={IMAGES.projects.cartoonIllustrations}
              alt="Colorful cartoon illustrations for children's education"
              className="h-60 mx-auto object-cover rounded-2xl"
            />
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Why Cartoons?</h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Cartoons are engaging and age-appropriate, making them the perfect medium 
                for breaking down complex or taboo topics for young audiences.
              </p>
              <p>
                Visual storytelling makes learning about sensitive issues like bodily autonomy 
                and sexual safety more approachable, memorable, and less intimidating for children.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-pink-50 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="w-6 h-6 text-pink-600" />
                <h4 className="font-semibold text-gray-800">Target Audience</h4>
              </div>
              <p className="text-gray-600">Primary school-aged children, parents, and educators</p>
            </div>
            <div className="bg-pink-50 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <BookOpen className="w-6 h-6 text-pink-600" />
                <h4 className="font-semibold text-gray-800">Content Highlights</h4>
              </div>
              <p className="text-gray-600">Personal safety, body autonomy, and recognizing unsafe situations</p>
            </div>
            <div className="bg-pink-50 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <Globe className="w-6 h-6 text-pink-600" />
                <h4 className="font-semibold text-gray-800">Distribution</h4>
              </div>
              <p className="text-gray-600">Launched at Gen Z Cartoon Festival, school workshops</p>
            </div>
          </div>
        </div>

        {/* Alt//orithm */}
        <div id="altorithm" className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Alt//orithm</h3>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Rewriting the code for a safer digital future. AI-driven algorithms shape what we see online—often amplifying hate, harassment, and polarization. Alt//orithm works with Malaysian youth to expose these harmful patterns and build safer, feminist digital spaces.
              </p>
              <p className="text-gray-700 mb-8">
                Through community research, creative campaigns, and policy advocacy, we turn passive scrolling into active, intentional digital citizenship.
              </p>
              <a href="#/altorithm" className="group inline-flex items-center bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span>See How We’re Changing the Code</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-12 lg:p-16 flex items-center justify-center">
              <div className="text-center">
                <img 
                  src={IMAGES.projects.cartoonIllustrations}
                  alt="Alt//orithm visual"
                  className="w-full object-cover rounded-2xl shadow-2xl mb-8 mx-auto"
                />
                <p className="text-gray-600 font-medium">Youth-led research and creative campaigns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-pink-600 mb-2">220,400</div>
            <div className="text-gray-600 font-medium">Youth Reached</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-pink-600 mb-2">2</div>
            <div className="text-gray-600 font-medium">Languages</div>
            <p className="text-sm text-gray-500 mt-2">English available, Bahasa Malaysia coming soon</p>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-pink-600 mb-2">20</div>
            <div className="text-gray-600 font-medium">Pages</div>
            <p className="text-sm text-gray-500 mt-2">Of engaging, educational content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;