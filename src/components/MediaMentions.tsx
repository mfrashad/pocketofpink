import React from 'react';
import { ExternalLink } from 'lucide-react';
import { MEDIA_MENTIONS, MEDIA_SECTION } from '../config/media';
import { trackEvent } from '../utils/analytics';
import { IMAGES } from '../config/images';

const MediaMentions: React.FC = () => {
  const sortedMentions = [...MEDIA_MENTIONS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getMediaLogo = (publication: string) => {
    const logoMap: { [key: string]: string } = {
      Malaysiakini: '/images/media/malaysiakini.png',
      'Sinar Daily': '/images/media/sinardaily.png',
      'Malay Mail': '/images/media/malaysiakini.png',
      SAYS: '/images/media/says.png',
      'Astro Awani': '/images/media/awani.png',
      'Sinar Harian': '/images/media/sinarharian.webp',
      Bernama: '/images/media/bernama.png',
    };
    return logoMap[publication] || '/images/media/malaysiakini.png';
  };

  return (
    <section id="media" className="bg-pop-creamSoft py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <h2 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-6">
              {MEDIA_SECTION.title}
            </h2>
            <p className="font-sans text-lg lg:text-xl leading-relaxed">
              {MEDIA_SECTION.subtitle}
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src={IMAGES.illustration.media}
              alt="A pink laptop illustration"
              className="w-48 sm:w-56"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedMentions.map((mention) => (
            <article
              key={mention.id}
              className="bg-pop-cream rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="h-24 flex items-center justify-center px-4 bg-pop-creamSoft">
                <img
                  src={getMediaLogo(mention.publication)}
                  alt={`${mention.publication} logo`}
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const textDiv = document.createElement('div');
                    textDiv.className =
                      'font-sans font-semibold text-sm text-pop-ink';
                    textDiv.textContent = mention.publication;
                    target.parentElement?.appendChild(textDiv);
                  }}
                />
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3 font-sans text-xs text-pop-ink/70">
                  <span className="uppercase tracking-[0.15em]">
                    {mention.category}
                  </span>
                  <span>{formatDate(mention.date)}</span>
                </div>

                <h3 className="font-display font-semibold text-lg leading-snug text-pop-ink mb-3 line-clamp-3">
                  {mention.title}
                </h3>

                <p className="font-sans text-sm leading-relaxed text-pop-ink/70 line-clamp-2 mb-4">
                  {mention.description}
                </p>

                <a
                  href={mention.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent('media_article_click', {
                      publication: mention.publication,
                      title: mention.title,
                    })
                  }
                  className="mt-auto inline-flex items-center gap-2 pop-link font-sans font-semibold text-sm"
                >
                  Read article
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-2xl p-8 lg:p-12 max-w-3xl mx-auto text-center bg-pop-cream">
          <h3 className="pop-brush text-4xl lg:text-5xl uppercase text-pop-ink mb-4">
            Want to feature our work?
          </h3>
          <p className="font-sans text-base lg:text-lg leading-relaxed text-pop-ink/80 mb-6">
            We're always happy to share our story and discuss our mission of
            empowering youth through education and advocacy.
          </p>
          <a
            href="https://forms.gle/KsfLarS8gD5gRrNy9"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('media_inquiry_click')}
            className="inline-flex items-center gap-2 bg-pop-ink text-pop-cream px-7 py-4 font-sans font-semibold text-base rounded-full hover:bg-pop-pinkDeep transition-colors"
          >
            Contact us for media inquiries
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediaMentions;
