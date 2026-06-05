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
          backgroundPosition: `center calc(0% + ${bgItem.y}px)`,
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

      {/* Floating POP word-stickers — editable via ?edit=1 */}
      <div className="absolute inset-0 select-none z-0 overflow-hidden">
        <Editable
          id="hero-sticker-pop-patriarchy"
          className="absolute -top-2 -right-6 md:-top-4 md:-right-10 lg:-right-16 w-28 sm:w-40 md:w-52 lg:w-[22rem] xl:w-96"
        >
          <img
            src={IMAGES.illustration.stickers.popPatriarchy}
            alt=""
            aria-hidden
            className="w-full h-auto rotate-[12deg] animate-ambient drop-shadow-xl pointer-events-none"
            style={{ animationDelay: '0s' }}
          />
        </Editable>

        <Editable
          id="hero-sticker-feminism-fits-top"
          className="absolute top-0 -left-4 sm:-left-6 lg:top-2 lg:-left-10 w-24 sm:w-32 md:w-40 lg:w-[17rem]"
        >
          <img
            src={IMAGES.illustration.stickers.feminismFits}
            alt=""
            aria-hidden
            className="w-full h-auto rotate-[-10deg] animate-ambient drop-shadow-lg pointer-events-none"
            style={{ animationDelay: '1.4s' }}
          />
        </Editable>

        <Editable
          id="hero-sticker-face-bun"
          className="hidden md:block absolute top-[48%] -left-2 w-14 lg:w-[5rem]"
        >
          <img
            src={IMAGES.illustration.stickers.faceBun}
            alt=""
            aria-hidden
            className="w-full h-auto rotate-[-22deg] animate-ambient drop-shadow pointer-events-none"
            style={{ animationDelay: '2.3s' }}
          />
        </Editable>

        <Editable
          id="hero-sticker-face-bob"
          className="hidden md:block absolute top-[55%] -right-2 w-16 lg:w-24"
        >
          <img
            src={IMAGES.illustration.stickers.faceBob}
            alt=""
            aria-hidden
            className="w-full h-auto rotate-[18deg] animate-ambient drop-shadow pointer-events-none"
            style={{ animationDelay: '0.7s' }}
          />
        </Editable>

        <Editable
          id="hero-sticker-justice-equality"
          className="hidden lg:block absolute bottom-2 -left-12 w-[15.5rem] lg:w-[22rem] xl:w-96"
        >
          <img
            src={IMAGES.illustration.stickers.justiceEquality}
            alt=""
            aria-hidden
            className="w-full h-auto rotate-[-6deg] animate-ambient drop-shadow-xl pointer-events-none"
            style={{ animationDelay: '0.4s' }}
          />
        </Editable>

        <Editable
          id="hero-sticker-feminism-fits-bottom"
          className="hidden xl:block absolute bottom-4 -right-6 w-28"
        >
          <img
            src={IMAGES.illustration.stickers.feminismFits}
            alt=""
            aria-hidden
            className="w-full h-auto rotate-[8deg] animate-ambient drop-shadow pointer-events-none"
            style={{ animationDelay: '1.9s' }}
          />
        </Editable>
      </div>


      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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

            <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
              <button
                onClick={() => { trackEvent('donate_button_click', { location: 'hero' }); onDonateClick(); }}
                className="group inline-flex items-center gap-2 bg-pop-pink text-pop-cream px-5 py-2.5 font-sans font-semibold text-sm rounded-full hover:scale-105 transition-transform shadow-md"
              >
                Support the work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => { trackEvent('learn_more_click'); scrollToAbout(); }}
                className="group inline-flex items-center gap-2 bg-pop-cream text-pop-pink px-5 py-2.5 font-sans font-semibold text-sm rounded-full border-2 border-pop-pink hover:bg-pop-pink hover:text-pop-cream transition-colors shadow-md"
              >
                Read what we believe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: art (position fine-tuned via the layout editor) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
            <Editable
              id="hero-illustration"
              className="w-72 sm:w-[28rem] md:w-[34rem] lg:w-[43rem] xl:w-[48rem] max-w-full"
            >
              <img
                src={IMAGES.illustration.heroGroup}
                alt="Three young people sitting together with art supplies"
                className="w-full h-auto animate-ambient origin-center will-change-transform drop-shadow-xl"
              />
            </Editable>
          </div>
        </div>

        {/* Stats — compact, aligned aesthetically */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-md mx-auto">
          <div className="bg-pop-cream/85 backdrop-blur-sm rounded-full px-3 py-1.5 inline-flex items-center gap-2 shadow-sm">
            <Users className="w-3 h-3 text-pop-pink" />
            <span className="font-bold text-pop-ink text-xs leading-none">220,400</span>
            <span className="text-pop-ink/60 text-[10px] leading-none">Youth Reached</span>
          </div>
          <div className="bg-pop-cream/85 backdrop-blur-sm rounded-full px-3 py-1.5 inline-flex items-center gap-2 shadow-sm">
            <BookOpen className="w-3 h-3 text-pop-pink" />
            <span className="font-bold text-pop-ink text-xs leading-none">2024</span>
            <span className="text-pop-ink/60 text-[10px] leading-none">Founded</span>
          </div>
          <div className="bg-pop-cream/85 backdrop-blur-sm rounded-full px-3 py-1.5 inline-flex items-center gap-2 shadow-sm">
            <Heart className="w-3 h-3 text-pop-pink" fill="currentColor" />
            <span className="font-bold text-pop-ink text-xs leading-none">Youth-Led</span>
          </div>
        </div>

        {/* Featured-in band — compact, fits within hero */}
        <div className="w-full mt-4 lg:mt-6 max-w-3xl mx-auto">
          <MovingMediaBanner />
        </div>
      </div>
    </section>
  );
};

export default Hero;
