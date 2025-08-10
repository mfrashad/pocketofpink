import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../config/images';

const Projects: React.FC = () => {
  return (
    <section id="initiatives" className="py-20 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Our Initiatives
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From classrooms to digital platforms, we use creative tools and youth leadership to advance gender justice and safety.
          </p>
        </div>

        {/* Full-bleed banners below */}
      </div>

      {/* Express to Empower - Full-bleed Banner */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-72 md:h-96 mb-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.projects.expressToEmpower}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-700/70 via-pink-600/60 to-pink-500/60" />
        <div className="relative h-full">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-3xl text-white">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Express to Empower</h3>
              <p className="text-lg md:text-xl opacity-95 mb-6">Our school-based workshops and Pocket Pal activity book teach young people about bodily autonomy, consent, and identity through creative, stigma-free learning.</p>
              <a href="#/express-to-empower" className="inline-flex items-center bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg">
                Discover How It Works <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Alt//orithm - Full-bleed Black Banner with Logo on Right */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-72 md:h-96">
        <div className="absolute inset-0 bg-black" />
        <div className="relative h-full">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="max-w-3xl text-white py-8">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Alt//orithm</h3>
              <p className="text-lg md:text-xl opacity-95 mb-6">Rewriting the code for a safer digital future. Working with Malaysian youth to expose harmful patterns and build safer, feminist digital spaces.</p>
              <a href="#/altorithm" className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:shadow-lg">
                See How We’re Changing the Code <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
            <div className="hidden sm:block pr-4 md:pr-8">
              <img src={IMAGES.projects.altorithm} alt="Alt//orithm logo" className="h-24 md:h-32 lg:h-48 xl:h-60 w-auto opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;