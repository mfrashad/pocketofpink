import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES } from '../config/images';
import { trackEvent } from '../utils/analytics';
import Editable from './Editable';

interface HeaderProps {
  onDonateClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDonateClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Pillars', href: '#mission' },
    { name: 'Team', href: '#team' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'Media', href: '#media' },
    { name: 'Get Involved', href: '#get-involved' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const currentPath = window.location.hash;
    const isOnSubpage = currentPath.includes('/express-to-empower') || currentPath.includes('/altorithm');

    if (isOnSubpage) {
      window.location.hash = href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const goHome = () => {
    window.location.hash = '#home';
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 sm:h-24 lg:h-28 overflow-visible">
          <Editable id="header-logo" className="flex">
            <button onClick={goHome} className="flex items-center group" aria-label="Pocket of Pink, home">
              <img
                src={IMAGES.logo.main}
                alt="Pocket of Pink, Pop of Power"
                className="h-14 sm:h-16 lg:h-24 w-auto object-contain [filter:drop-shadow(0_0_30px_rgba(255,255,255,0.85))_drop-shadow(0_0_60px_rgba(255,255,255,0.5))]"
              />
            </button>
          </Editable>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 bg-pop-cream rounded-full py-2 pl-6 pr-2 shadow-md">
            <div className="flex items-center space-x-6 pr-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-pop-ink hover:text-pop-pinkDeep font-sans font-medium text-sm transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <button
              onClick={() => { trackEvent('donate_button_click', { location: 'header_nav' }); onDonateClick(); }}
              className="bg-pop-pink text-pop-cream px-5 py-2 rounded-full font-sans font-semibold text-sm hover:scale-105 transition-transform"
            >
              Donate
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-pop-ink"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-pop-cream rounded-2xl shadow-xl mt-2 mb-3 p-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-2 py-2 text-pop-ink font-sans font-medium hover:text-pop-pinkDeep transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => { trackEvent('donate_button_click', { location: 'mobile_menu' }); onDonateClick(); }}
                className="w-full mt-3 bg-pop-pinkDeep text-pop-cream px-4 py-2 rounded-full font-sans font-semibold"
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
