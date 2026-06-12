import React, { useEffect, useState } from 'react';
import { ArrowRight, Users, BookOpen, Heart } from 'lucide-react';
import { IMAGES } from '../config/images';
import MovingMediaBanner from './MovingMediaBanner';
import Editable from './Editable';
import EditableText from './EditableText';
import { trackEvent } from '../utils/analytics';
import { useEditMode, useLayoutItem } from '../utils/editableLayout';

interface HeroProps {
  onDonateClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDonateClick }) => {
  const editMode = useEditMode();
  // Draggable hero photo background: y = vertical offset in px (negative = up)
  const [bgItem, setBgItem] = useLayoutItem('hero-bg-photo');
  const [bgDrag, setBgDrag] = useState<{ startY: number; baseY: number } | null>(null);
  // Mouse parallax: -0.5..0.5 from hero center, eased via CSS transitions
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const onHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (editMode) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setParallax({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };
  const onHeroMouseLeave = () => setParallax({ x: 0, y: 0 });

  useEffect(() => {
    if (!bgDrag) return;
    const onMove = (e: MouseEvent) => {
      setBgItem({ ...bgItem, y: bgDrag.baseY + (e.clientY - bgDrag.startY) });
    };
    const onUp = () => setBgDrag(null);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [bgDrag, bgItem, setBgItem]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative text-pop-ink overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-10 lg:pb-14"
      onMouseMove={onHeroMouseMove}
      onMouseLeave={onHeroMouseLeave}
    >
      {/* photo background with pink wash for headline contrast */}
      <div className="absolute inset-0 bg-pop-pink" aria-hidden />
      <div
        aria-hidden={!editMode}
        onMouseDown={
          editMode
            ? (e) => {
                if ((e.target as HTMLElement).closest('[data-handle]')) return;
                e.preventDefault();
                setBgDrag({ startY: e.clientY, baseY: bgItem.y });
              }
            : undefined
        }
        className={`absolute inset-0 bg-cover bg-no-repeat opacity-55 mix-blend-multiply ${
          editMode ? 'cursor-ns-resize outline outline-2 outline-pop-pink/40' : ''
        }`}
        style={{
          backgroundImage: `url('${IMAGES.hero.background}')`,
          backgroundPosition: `calc(50% + ${parallax.x * -10}px) calc(0% + ${bgItem.y + parallax.y * -8}px)`,
          transition: 'background-position 0.4s ease-out',
        }}
      >
        {editMode && (
          <div
            data-handle
            className="pointer-events-none absolute top-2 left-2 bg-pop-pink text-pop-cream font-sans text-xs uppercase tracking-wider px-2 py-1 rounded-sm select-none"
          >
            hero photo · drag up/down · y={Math.round(bgItem.y)}
          </div>
        )}
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-pop-pink/45 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-2 sm:gap-8 lg:gap-12 items-center">
          {/* Left: headline + buttons */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <Editable id="hero-headline-block" className="block" textControls>
              <h1 className="pop-brush text-pop-ink text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl uppercase leading-[0.95]">
                <EditableText
                  id="hero-headline-main"
                  defaultText="Pocket of Pink is building the generation that owns "
                />
                <EditableText
                  id="hero-headline-accent"
                  defaultText="gender justice."
                  className="text-pop-cream"
                />
              </h1>
            </Editable>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6 justify-center lg:justify-start">
              <button
                onClick={() => { trackEvent('donate_button_click', { location: 'hero' }); onDonateClick(); }}
                className="group inline-flex items-center gap-2 bg-pop-pink text-pop-cream px-4 py-2 lg:px-5 lg:py-2.5 font-sans font-semibold text-xs lg:text-sm rounded-full hover:scale-105 transition-transform shadow-md"
              >
                Support the work
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => { trackEvent('learn_more_click'); scrollToAbout(); }}
                className="group inline-flex items-center gap-2 bg-pop-cream text-pop-pink px-4 py-2 lg:px-5 lg:py-2.5 font-sans font-semibold text-xs lg:text-sm rounded-full border-2 border-pop-pink hover:bg-pop-pink hover:text-pop-cream transition-colors shadow-md"
              >
                Read what we believe
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: art (position fine-tuned via the layout editor) */}
          <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-start">
            <Editable
              id="hero-illustration"
              className="block mx-auto lg:mx-0 w-64 sm:w-80 md:w-[28rem] lg:w-[43rem] xl:w-[48rem] max-w-full"
            >
              <div
                style={{
                  transform: `translate3d(${parallax.x * 24}px, ${parallax.y * 16}px, 0)`,
                  transition: 'transform 0.3s ease-out',
                  willChange: 'transform',
                }}
              >
                <img
                  src={IMAGES.illustration.heroGroup}
                  alt="Three young people sitting together with art supplies"
                  className="block mx-auto w-full h-auto animate-ambient origin-center will-change-transform drop-shadow-xl"
                />
              </div>
            </Editable>
          </div>
        </div>

        {/* Stats — compact, aligned aesthetically */}
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mx-auto">
          <div className="bg-pop-cream/85 backdrop-blur-sm rounded-full px-2.5 sm:px-3 h-7 sm:h-9 inline-flex items-center whitespace-nowrap gap-1.5 sm:gap-2 shadow-sm">
            <Users className="w-3 h-3 text-pop-pink" />
            <span className="font-bold text-pop-ink text-[11px] sm:text-xs leading-none">220,400</span>
            <span className="text-pop-ink/60 text-[9px] sm:text-[10px] leading-none">Youth Reached</span>
          </div>
          <div className="bg-pop-cream/85 backdrop-blur-sm rounded-full px-2.5 sm:px-3 h-7 sm:h-9 inline-flex items-center whitespace-nowrap gap-1.5 sm:gap-2 shadow-sm">
            <BookOpen className="w-3 h-3 text-pop-pink" />
            <span className="font-bold text-pop-ink text-[11px] sm:text-xs leading-none">2024</span>
            <span className="text-pop-ink/60 text-[9px] sm:text-[10px] leading-none">Founded</span>
          </div>
          <div className="bg-pop-cream/85 backdrop-blur-sm rounded-full px-2.5 sm:px-3 h-7 sm:h-9 inline-flex items-center whitespace-nowrap gap-1.5 sm:gap-2 shadow-sm">
            <Heart className="w-3 h-3 text-pop-pink" fill="currentColor" />
            <span className="font-bold text-pop-ink text-[11px] sm:text-xs leading-none">Youth-Led</span>
          </div>
        </div>

        {/* Featured-in band — compact, fits within hero */}
        <div className="w-full mt-3 sm:mt-4 lg:mt-6 max-w-xs sm:max-w-3xl mx-auto">
          <MovingMediaBanner />
        </div>
      </div>
    </section>
  );
};

export default Hero;
