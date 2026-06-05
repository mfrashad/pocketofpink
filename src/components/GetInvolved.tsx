import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../config/images';
import { trackEvent } from '../utils/analytics';

interface GetInvolvedProps {
  onDonateClick: () => void;
}

const supportWays = [
  {
    title: 'Donate',
    description:
      'A financial contribution helps us reach more young people and run more programmes.',
    action: 'Make a donation',
    kind: 'donate' as const,
  },
  {
    title: 'Partner',
    description:
      'Collaborate on workshops, fund a programme, or help us reach communities we can\'t reach alone.',
    action: 'Get in touch',
    kind: 'partner' as const,
  },
  {
    title: 'Volunteer',
    description:
      'Join our team of young writers, illustrators, videographers, and advocates building this work.',
    action: 'Apply to join',
    kind: 'join' as const,
  },
];

type FallItem = {
  src: string;
  left: string;
  width: string;
  rotate: string;
  duration: string;
  delay: string;
  drift: string;
};

const fallingItems: FallItem[] = [
  { src: IMAGES.illustration.pillarNow,        left: '2%',  width: 'w-20 lg:w-28', rotate: '-14deg', duration: '1.7s',  delay: '0.0s',  drift: '12px'  },
  { src: IMAGES.illustration.aboutBook,        left: '12%', width: 'w-16 lg:w-24', rotate: '8deg',   duration: '1.5s',  delay: '0.35s', drift: '-10px' },
  { src: IMAGES.illustration.pillarCreativity, left: '22%', width: 'w-24 lg:w-32', rotate: '-6deg',  duration: '2.0s',  delay: '0.1s',  drift: '14px'  },
  { src: IMAGES.illustration.pillarJoy,        left: '34%', width: 'w-20 lg:w-28', rotate: '12deg',  duration: '1.85s', delay: '0.55s', drift: '-12px' },
  { src: IMAGES.illustration.support,          left: '46%', width: 'w-16 lg:w-24', rotate: '-10deg', duration: '1.55s', delay: '0.2s',  drift: '10px'  },
  { src: IMAGES.illustration.pillarEveryone,   left: '58%', width: 'w-24 lg:w-32', rotate: '6deg',   duration: '2.1s',  delay: '0.4s',  drift: '-16px' },
  { src: IMAGES.illustration.pillarLive,       left: '70%', width: 'w-20 lg:w-28', rotate: '-8deg',  duration: '1.8s',  delay: '0.15s', drift: '14px'  },
  { src: IMAGES.illustration.media,            left: '82%', width: 'w-16 lg:w-24', rotate: '14deg',  duration: '1.65s', delay: '0.5s',  drift: '-10px' },
  { src: IMAGES.illustration.pillarNow,        left: '92%', width: 'w-20 lg:w-28', rotate: '-4deg',  duration: '1.9s',  delay: '0.25s', drift: '12px'  },
];

const GetInvolved: React.FC<GetInvolvedProps> = ({ onDonateClick }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [fallen, setFallen] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setFallen(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setFallen(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="get-involved"
      className="relative bg-pop-pink text-pop-ink py-20 lg:py-28 pb-32 lg:pb-48 overflow-hidden"
    >
      {/* Falling illustrations along the bottom edge — triggered on scroll-into-view */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-2 select-none">
        {fallingItems.map((item, i) => (
          <img
            key={`${item.src}-${i}`}
            src={item.src}
            alt=""
            className={`absolute bottom-0 ${item.width} h-auto drop-shadow-lg ${fallen ? 'animate-fall' : 'opacity-0'}`}
            style={
              {
                left: item.left,
                animationDuration: item.duration,
                animationDelay: item.delay,
                '--rest-rot': item.rotate,
                '--drift': item.drift,
                transform: !fallen ? `rotate(${item.rotate})` : undefined,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <h2 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-6">
              The movement only
              <br />
              <span className="text-pop-cream">moves with you.</span>
            </h2>
            <p className="font-sans text-lg lg:text-xl leading-relaxed max-w-2xl text-justify">
              POP exists because young people, parents, partners, and allies
              keep showing up for it. There are three ways to be part of it.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src={IMAGES.illustration.support}
              alt="A bundle of pink donations"
              className="w-56 sm:w-64 drop-shadow-md"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {supportWays.map((way) => (
            <div
              key={way.title}
              className="rounded-2xl p-7 lg:p-8 bg-pop-cream flex flex-col"
            >
              <h3 className="pop-brush text-4xl uppercase text-pop-ink mb-4">
                {way.title}
              </h3>
              <p className="font-sans text-base leading-relaxed text-pop-ink/80 mb-8 text-justify">
                {way.description}
              </p>
              {way.kind === 'donate' ? (
                <button
                  onClick={() => {
                    trackEvent('donate_button_click', { location: 'get_involved' });
                    onDonateClick();
                  }}
                  className="mt-auto group inline-flex items-center justify-center gap-2 bg-pop-ink text-pop-cream px-6 py-3 rounded-full font-sans font-semibold hover:bg-pop-pinkDeep transition-colors"
                >
                  {way.action}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : way.kind === 'partner' ? (
                <a
                  href="https://forms.gle/KsfLarS8gD5gRrNy9"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('partner_click')}
                  className="mt-auto group inline-flex items-center justify-center gap-2 bg-pop-ink text-pop-cream px-6 py-3 rounded-full font-sans font-semibold hover:bg-pop-pinkDeep transition-colors"
                >
                  {way.action}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <a
                  href="https://forms.gle/XdPUsSk6yzqZAtsw9"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent('apply_to_join_click', { location: 'support_ways' })
                  }
                  className="mt-auto group inline-flex items-center justify-center gap-2 bg-pop-ink text-pop-cream px-6 py-3 rounded-full font-sans font-semibold hover:bg-pop-pinkDeep transition-colors"
                >
                  {way.action}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
