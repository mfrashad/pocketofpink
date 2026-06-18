import React from 'react';
import { Mail, Instagram, Linkedin, MapPin } from 'lucide-react';
import { IMAGES } from '../config/images';

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

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-pop-pinkDeep text-pop-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 lg:py-12">
        {/* Big sign-off */}
        <div className="mb-8 lg:mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="pop-brush text-pop-cream text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95]">
              Pocket of Pink
            </p>
            <p className="font-display font-semibold text-2xl sm:text-3xl text-pop-cream mt-4 max-w-3xl">
              Building the generation that owns gender justice.
            </p>
          </div>
          <img
            src={IMAGES.illustration.stickers.feminismFits}
            alt="Feminism fits in every pocket"
            className="h-28 sm:h-36 lg:h-44 w-auto object-contain rotate-[-4deg] animate-ambient drop-shadow-xl flex-shrink-0"
            style={{ animationDelay: '1.2s' }}
          />
        </div>

        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <p className="font-sans text-base leading-relaxed text-pop-cream/85 mb-6 max-w-md">
              A youth-led feminist organisation working through art,
              education, and community to advance gender justice in Malaysia.
            </p>
            <div className="flex items-center gap-2 font-sans text-pop-cream/80">
              <MapPin className="w-4 h-4" />
              <span>Kuala Lumpur, Malaysia</span>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-pop-pinkSoft mb-4">
              The site
            </h4>
            <div className="space-y-2 font-sans">
              <a href="#about" className="block text-pop-cream/85 hover:text-pop-pink transition-colors">
                About
              </a>
              <a href="#mission" className="block text-pop-cream/85 hover:text-pop-pink transition-colors">
                Pillars
              </a>
              <a href="#team" className="block text-pop-cream/85 hover:text-pop-pink transition-colors">
                Team
              </a>
              <a href="#initiatives" className="block text-pop-cream/85 hover:text-pop-pink transition-colors">
                Initiatives
              </a>
              <a href="#get-involved" className="block text-pop-cream/85 hover:text-pop-pink transition-colors">
                Get involved
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-pop-pinkSoft mb-4">
              Contact
            </h4>
            <a
              href="mailto:karyn@pocketofpink.com"
              className="inline-flex items-center gap-2 text-pop-cream/85 hover:text-pop-pink transition-colors font-sans mb-5 break-all"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>karyn@pocketofpink.com</span>
            </a>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/pocketofpink/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-pop-cream/40 flex items-center justify-center hover:bg-pop-pink hover:text-pop-ink hover:border-pop-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/pocket-of-pink-pop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-pop-cream/40 flex items-center justify-center hover:bg-pop-pink hover:text-pop-ink hover:border-pop-pink transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/mypocketofpink"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-pop-cream/40 flex items-center justify-center hover:bg-pop-pink hover:text-pop-ink hover:border-pop-pink transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
                className="w-9 h-9 border border-pop-cream/40 flex items-center justify-center hover:bg-pop-pink hover:text-pop-ink hover:border-pop-pink transition-colors"
                aria-label="TikTok"
              >
                <TiktokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-pop-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 font-sans text-sm text-pop-cream/60">
          <div>© {currentYear} Pocket of Pink (POP). Non-profit organisation.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pop-pink transition-colors">Privacy</a>
            <span aria-hidden>•</span>
            <a href="#" className="hover:text-pop-pink transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
