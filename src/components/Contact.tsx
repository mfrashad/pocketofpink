import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V9a5 5 0 0 0 5-5" />
  </svg>
);

const faqs = [
  {
    q: 'Is the module suitable for all children?',
    a: 'Yes, it is designed for primary school-aged children, with plans for expansion to other age groups.',
  },
  {
    q: 'Is POP affiliated with any political or religious group?',
    a: 'No, POP is an independent, youth-led non-profit organisation.',
  },
  {
    q: 'How can I bring POP to my school?',
    a: 'Contact us via email or social media to arrange workshops or order modules for your institution.',
  },
  {
    q: 'What languages is the module available in?',
    a: 'Currently available in English, with a Bahasa Malaysia version in development.',
  },
];

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-pop-creamSoft py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left: contact */}
          <div>
            <h2 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-8">
              Say hi.
            </h2>
            <p className="font-sans text-lg lg:text-xl leading-relaxed mb-10 text-justify">
              Ready to get involved, bring our workshops to your community, or
              just want to talk? We'd love to hear from you.
            </p>

            <a
              href="mailto:kaveesha@pocketofpink.com"
              onClick={() => trackEvent('contact_email_click')}
              className="inline-flex items-center gap-3 pop-link font-sans font-semibold text-lg lg:text-xl mb-10"
            >
              <Mail className="w-5 h-5" />
              kaveesha@pocketofpink.com
            </a>

            <div className="border-t border-pop-ink/10 pt-8">
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/pocketofpink/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('social_link_click', { platform: 'instagram' })}
                  className="w-12 h-12 rounded-full bg-pop-cream flex items-center justify-center hover:bg-pop-ink hover:text-pop-cream transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/pocket-of-pink-pop"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('social_link_click', { platform: 'linkedin' })}
                  className="w-12 h-12 rounded-full bg-pop-cream flex items-center justify-center hover:bg-pop-ink hover:text-pop-cream transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/mypocketofpink"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('social_link_click', { platform: 'twitter' })}
                  className="w-12 h-12 rounded-full bg-pop-cream flex items-center justify-center hover:bg-pop-ink hover:text-pop-cream transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@pocketofpink"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('social_link_click', { platform: 'tiktok' })}
                  className="w-12 h-12 rounded-full bg-pop-cream flex items-center justify-center hover:bg-pop-ink hover:text-pop-cream transition-colors"
                  aria-label="TikTok"
                >
                  <TiktokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: quick info */}
          <div className="rounded-2xl p-8 bg-pop-cream">
            <h3 className="pop-brush text-3xl uppercase text-pop-ink mb-6">
              Quick info
            </h3>
            <dl className="divide-y-2 divide-pop-ink/15">
              <div className="py-3 flex justify-between gap-4">
                <dt className="font-sans font-semibold text-pop-ink">Organisation</dt>
                <dd className="font-sans text-pop-ink/80 text-right">Non-profit, youth-led</dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="font-sans font-semibold text-pop-ink">Founded</dt>
                <dd className="font-sans text-pop-ink/80 text-right">2024</dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="font-sans font-semibold text-pop-ink">Based in</dt>
                <dd className="font-sans text-pop-ink/80 text-right">Kuala Lumpur, Malaysia</dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="font-sans font-semibold text-pop-ink">Focus</dt>
                <dd className="font-sans text-pop-ink/80 text-right">
                  Gender justice, youth empowerment, education
                </dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="font-sans font-semibold text-pop-ink">Workshops</dt>
                <dd className="font-sans text-pop-ink/80 text-right">Contact for pricing</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="pop-brush text-4xl lg:text-5xl uppercase text-pop-ink mb-10">
            Questions we get a lot.
          </h3>
          <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-t border-pop-ink/15 pt-5">
                <h4 className="font-display font-semibold text-xl text-pop-ink mb-3">
                  {faq.q}
                </h4>
                <p className="font-sans text-base leading-relaxed text-pop-ink/80 text-justify">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
