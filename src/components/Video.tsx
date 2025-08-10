import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { IMAGES, VIDEOS } from '../config/images';

const Video: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <section id="video" className="py-20 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Watch Our Story
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we're making a difference in young people's lives through education, 
            advocacy, and creative empowerment.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
            onClick={openVideo}
          >
            <img
              src={IMAGES.video.getYoutubeThumbnail(VIDEOS.featured.youtubeId)}
              alt="Video thumbnail"
              className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Play className="w-8 h-8 text-pink-600 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{VIDEOS.featured.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              {VIDEOS.featured.description}
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative pt-[56.25%] rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEOS.featured.youtubeId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={VIDEOS.featured.title}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Video; 