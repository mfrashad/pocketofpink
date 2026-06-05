import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../config/images';
import { trackEvent } from '../utils/analytics';

const Projects: React.FC = () => {
  const trackExpress = () => trackEvent('initiative_click', { initiative: 'express_to_empower' });
  const trackAltorithm = () => trackEvent('initiative_click', { initiative: 'altorithm' });

  return (
    <section id="initiatives" className="relative bg-pop-pink text-pop-ink overflow-hidden">
      {/* decorative floating sticker (top right, peeks past edge) */}
      <img
        src={IMAGES.illustration.stickers.popPatriarchy}
        alt=""
        aria-hidden
        className="hidden md:block pointer-events-none absolute -top-6 -right-8 lg:-right-16 w-44 lg:w-72 xl:w-80 rotate-[10deg] animate-ambient drop-shadow-xl"
      />
      {/* decorative tiny face peeking on the left edge */}
      <img
        src={IMAGES.illustration.stickers.faceBun}
        alt=""
        aria-hidden
        className="hidden lg:block pointer-events-none absolute top-[34%] -left-2 w-16 rotate-[-18deg] animate-ambient drop-shadow"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 lg:pt-28 pb-12 lg:pb-16 text-center">
        <div className="mb-12 lg:mb-16 max-w-3xl mx-auto">
          <h2 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-6">
            Our initiatives.
          </h2>
          <p className="font-sans text-lg lg:text-xl leading-relaxed text-justify">
            From classrooms to digital platforms, we use creative tools and
            youth leadership to advance gender justice and safety.
          </p>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {/* Express to Empower — white card on pink */}
          <article className="relative bg-pop-cream text-pop-ink rounded-3xl shadow-xl overflow-hidden">
            {/* small hand-drawn illustration anchor — top right of card */}
            <img
              src={IMAGES.illustration.pillarCreativity}
              alt=""
              aria-hidden
              className="hidden md:block pointer-events-none absolute -top-4 right-4 lg:right-8 w-24 lg:w-32 rotate-[8deg] animate-ambient drop-shadow"
            />

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center p-6 sm:p-10 lg:p-14">
              <div className="lg:col-span-7 text-center lg:text-left">
                <p className="font-sans text-xs uppercase tracking-[0.25em] mb-3 text-pop-pink">
                  Flagship programme
                </p>
                <h3 className="pop-brush text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] mb-5 text-pop-ink">
                  Express to Empower
                </h3>
                <p className="font-sans text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 text-justify text-pop-ink/85">
                  Our school-based workshops and Pocket Pal activity book teach
                  young people about bodily autonomy, consent, and identity
                  through creative, stigma-free learning.
                </p>
                <a
                  href="#/express-to-empower"
                  onClick={trackExpress}
                  className="inline-flex items-center gap-3 bg-pop-pink text-pop-cream px-7 py-3.5 font-sans font-semibold text-base rounded-full hover:scale-105 transition-transform shadow-md"
                >
                  See how it works
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="lg:col-span-5">
                <img
                  src={IMAGES.projects.expressToEmpower}
                  alt="Express to Empower workshop"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </article>

          {/* Alt//orithm — dark card with pink accents */}
          <article className="relative bg-pop-ink text-pop-cream rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center p-6 sm:p-10 lg:p-14">
              <div className="lg:col-span-7 text-center lg:text-left">
                <p className="font-sans text-xs uppercase tracking-[0.25em] mb-3 text-pop-pink">
                  Flagship programme
                </p>
                <h3 className="pop-brush text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] mb-5">
                  Alt//orithm
                </h3>
                <p className="font-sans text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 text-justify text-pop-cream/85">
                  Rewriting the code for a safer digital future. Working with
                  Malaysian youth to expose harmful patterns and build safer,
                  feminist digital spaces.
                </p>
                <a
                  href="#/altorithm"
                  onClick={trackAltorithm}
                  className="inline-flex items-center gap-3 bg-pop-pink text-pop-cream px-7 py-3.5 font-sans font-semibold text-base rounded-full hover:scale-105 transition-transform shadow-md"
                >
                  See how we're changing the code
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <img
                  src={IMAGES.projects.altorithm}
                  alt="Alt//orithm logo"
                  className="h-40 lg:h-56 w-auto drop-shadow-md"
                />
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Bottom strip of scattered illustrations like the rest of the site */}
      <div aria-hidden className="pointer-events-none relative h-20 lg:h-24 select-none">
        <img src={IMAGES.illustration.aboutBook}        alt="" className="absolute bottom-0 left-[6%]  w-14 lg:w-20 rotate-[-12deg] drop-shadow-md" />
        <img src={IMAGES.illustration.pillarNow}        alt="" className="absolute bottom-0 left-[22%] w-16 lg:w-24 rotate-[8deg]   drop-shadow-md" />
        <img src={IMAGES.illustration.pillarJoy}        alt="" className="absolute bottom-0 left-[40%] w-20 lg:w-28 rotate-[-6deg]  drop-shadow-md" />
        <img src={IMAGES.illustration.support}          alt="" className="absolute bottom-0 left-[58%] w-14 lg:w-20 rotate-[10deg]  drop-shadow-md" />
        <img src={IMAGES.illustration.pillarCreativity} alt="" className="absolute bottom-0 left-[74%] w-16 lg:w-24 rotate-[-8deg]  drop-shadow-md" />
        <img src={IMAGES.illustration.media}            alt="" className="absolute bottom-0 right-[4%] w-14 lg:w-20 rotate-[14deg]  drop-shadow-md" />
      </div>
    </section>
  );
};

export default Projects;
