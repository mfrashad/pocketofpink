import React from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { MEDIA_MENTIONS, MEDIA_SECTION } from '../config/media';

const MediaMentions: React.FC = () => {
  // Sort media mentions by date (newest first)
  const sortedMentions = [...MEDIA_MENTIONS].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'News Coverage': 'bg-blue-100 text-blue-800',
      'Profile Feature': 'bg-pink-100 text-pink-800',
      'Professional Profile': 'bg-green-100 text-green-800',
      'Interview': 'bg-orange-100 text-orange-800',
      'Opinion Piece': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  // Map publications to their logo files
  const getMediaLogo = (publication: string) => {
    const logoMap: { [key: string]: string } = {
      'Malaysiakini': '/images/media/malaysiakini.png',
      'Sinar Daily': '/images/media/sinardaily.png',
      'Malay Mail': '/images/media/malaysiakini.png', // fallback to similar logo
      'SAYS': '/images/media/says.png',
      'Astro Awani': '/images/media/awani.png',
      'Sinar Harian': '/images/media/sinarharian.webp',
      'Bernama': '/images/media/bernama.png'
    };
    return logoMap[publication] || '/images/media/malaysiakini.png'; // default fallback
  };

  return (
    <section id="media" className="py-20 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              {MEDIA_SECTION.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            {MEDIA_SECTION.subtitle}
          </p>
          <p className="text-gray-600 max-w-4xl mx-auto">
            {MEDIA_SECTION.description}
          </p>
        </div>

        {/* Media Mentions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedMentions.map((mention) => (
            <div
              key={mention.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-pink-200 group"
            >
              {/* Media Logo */}
              <div className="h-24 w-full bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={getMediaLogo(mention.publication)}
                  alt={`${mention.publication} logo`}
                  className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    // Fallback to text if logo fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const textDiv = document.createElement('div');
                    textDiv.className = 'text-gray-600 font-semibold text-sm';
                    textDiv.textContent = mention.publication;
                    target.parentElement?.appendChild(textDiv);
                  }}
                />
              </div>

              <div className="p-4">
                {/* Category Badge and Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(mention.category)}`}>
                    <Tag className="w-3 h-3 mr-1" />
                    {mention.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(mention.date)}
                  </div>
                </div>

                {/* Publication */}
                <div className="mb-2">
                  <span className="text-xs font-semibold text-pink-600 uppercase tracking-wide">
                    {mention.publication}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                  {mention.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {mention.description}
                </p>

                {/* Read More Link */}
                <a
                  href={mention.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold text-xs transition-colors duration-300 group-hover:translate-x-1 transform"
                >
                  Read Article
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to Feature Our Work?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always happy to share our story and discuss our mission of empowering youth through education and advocacy.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us for Media Inquiries
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaMentions; 