import React from 'react';

const MovingMediaBanner: React.FC = () => {
  // Media logos with their names
  const mediaLogos = [
    { name: 'Malaysiakini', logo: '/images/media/malaysiakini.png' },
    { name: 'Astro Awani', logo: '/images/media/awani.png' },
    { name: 'Bernama', logo: '/images/media/bernama.png' },
    { name: 'SAYS', logo: '/images/media/says.png' },
    { name: 'Sinar Daily', logo: '/images/media/sinardaily.png' },
    { name: 'Sinar Harian', logo: '/images/media/sinarharian.webp' },
    { name: 'BBC', logo: '/images/media/bbc.jpg' },
    { name: 'Vice', logo: '/images/media/vice.png' },
    { name: 'Al-Jazeera', logo: '/images/media/aljazeera.png' },
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedLogos = [...mediaLogos, ...mediaLogos];

  return (
    <section className="py-12 bg-gray-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Featured In
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our work has been recognized and covered by leading media organizations
          </p>
        </div>

        {/* Moving Banner */}
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-infinite-scroll hover:pause-animation">
            {duplicatedLogos.map((media, index) => (
              <div
                key={`${media.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ minWidth: '200px' }}
              >
                <img
                  src={media.logo}
                  alt={media.name}
                  className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const textDiv = document.createElement('div');
                    textDiv.className = 'text-gray-500 font-semibold text-sm text-center px-4 py-2 border border-gray-300 rounded';
                    textDiv.textContent = media.name;
                    target.parentElement?.appendChild(textDiv);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingMediaBanner; 