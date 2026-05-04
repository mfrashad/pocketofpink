import React from 'react';
import { ArrowRight, Users, BookOpen, Heart } from 'lucide-react';
import { IMAGES } from '../config/images';
import MovingMediaBanner from './MovingMediaBanner';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  onDonateClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDonateClick }) => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and hero image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('${IMAGES.hero.background}')`
          }}
        ></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22grid%22 width=%2220%22 height=%2220%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 20 0 L 0 0 0 20%22 fill=%22none%22 stroke=%22%23ec4899%22 stroke-width=%220.5%22 opacity=%220.1%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23grid)%22/%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-16 sm:py-20">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-5 break-words leading-tight">
            <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent block">
              Creating pockets of safety
            </span>
            <span className="text-gray-800 block">
              and threads of empowerment
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Empowering feminist boys and girls through art, advocacy and education for a safer, more gender empowered world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
            <button
              onClick={() => { trackEvent('donate_button_click', { location: 'hero' }); onDonateClick(); }}
              className="group w-full sm:w-auto bg-gradient-to-r from-pink-500 to-pink-600 text-white px-7 py-3.5 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Heart className="w-5 h-5" fill="currentColor" />
              <span>Support Our Mission</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => { trackEvent('learn_more_click'); scrollToAbout(); }}
              className="group w-full sm:w-auto border-2 border-pink-500 text-pink-600 px-7 py-3.5 rounded-full font-semibold text-base sm:text-lg hover:bg-pink-50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full mx-auto mb-2 sm:mb-3">
                <Users className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-base sm:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-2">220,400</div>
              <div className="text-gray-500 text-xs sm:text-base">Youth Reached</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full mx-auto mb-2 sm:mb-3">
                <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-base sm:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-2">2024</div>
              <div className="text-gray-500 text-xs sm:text-base">Founded</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full mx-auto mb-2 sm:mb-3">
                <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" />
              </div>
              <div className="text-base sm:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-2">Youth-Led</div>
              <div className="text-gray-500 text-xs sm:text-base">Organization</div>
            </div>
          </div>

          {/* Moving Media Banner */}
          <div className="mt-12">
            <MovingMediaBanner />
          </div>
        </div>
      </div>

      {/* Floating shapes for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-8 h-8 bg-pink-300 rounded-full opacity-40 animate-bounce delay-500"></div>
    </section>
  );
};

export default Hero;