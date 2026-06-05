import React from 'react';

const MovingMediaBanner: React.FC = () => {
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

  const duplicatedLogos = [...mediaLogos, ...mediaLogos];

  return (
    <div className="bg-pop-cream/85 backdrop-blur-sm rounded-full px-3 py-2 shadow-sm overflow-hidden">
      <div className="flex items-center gap-3">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-pop-pink whitespace-nowrap pl-2">
          Featured in
        </span>
        <div className="relative flex-1 overflow-hidden">
          {/* fade edges */}
          <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-r from-pop-cream to-transparent z-10" />
          <div className="absolute right-0 top-0 w-6 h-full bg-gradient-to-l from-pop-cream to-transparent z-10" />
          <div className="flex animate-infinite-scroll hover:pause-animation items-center">
            {duplicatedLogos.map((media, index) => (
              <div
                key={`${media.name}-${index}`}
                className="flex-shrink-0 mx-3 flex items-center justify-center"
              >
                <img
                  src={media.logo}
                  alt={media.name}
                  className="h-5 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const textDiv = document.createElement('div');
                    textDiv.className = 'text-pop-ink/60 font-semibold text-[10px] text-center px-2 py-1';
                    textDiv.textContent = media.name;
                    target.parentElement?.appendChild(textDiv);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingMediaBanner;
