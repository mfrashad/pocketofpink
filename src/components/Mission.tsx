import React, { useEffect, useRef, useState } from 'react';
import { IMAGES } from '../config/images';
import EditableText from './EditableText';

interface Pillar {
  number: string;
  title: string;
  body: string;
  illustration: string;
  alt: string;
  photo: string;
  photoAlt: string;
}

const pillars: Pillar[] = [
  {
    number: '01',
    title: 'Youth are not the future. They are the now.',
    body:
      'Young people are not a pipeline. We already lead, already know, and already have the power to change things. We believe young people are the hope for a gender just future, not because we will be ready someday, but because we are ready now. That is why youth must lead the work in gender justice, not sit at the edge of it. Every programme, every campaign, every space we build starts from this. We are not waiting for permission. We are paving the way.',
    illustration: IMAGES.illustration.pillarNow,
    alt: 'A pink clock illustration',
    photo: '/images/workshop1.jpg',
    photoAlt: 'Young people leading a Pocket of Pink workshop',
  },
  {
    number: '02',
    title: 'Feminism belongs to everyone.',
    body:
      'Gender justice is not a women\'s issue. It never was. Feminism must be carried by everyone, and it must be applied differently by everyone. For men and boys, it means recognising they have just as much at stake in dismantling systems that harm all of us. For all of us, it means understanding that class, race, and religion shape how inequality and oppression are experienced. The injustice is not the same for everyone. So the justice cannot look the same either.',
    illustration: IMAGES.illustration.pillarEveryone,
    alt: 'A feminist fist illustration',
    photo: '/images/srikdu.jpg',
    photoAlt: 'A diverse group of students at a POP workshop',
  },
  {
    number: '03',
    title: 'Community and joy are acts of resistance.',
    body:
      'The people fighting hardest for change are often the ones most at risk of losing themselves in it. Joy is not a reward for finishing the work. It is part of the work. Real community, genuine friendship, celebration, and rest are not soft additions to a feminist movement. They are what makes it sustainable. A feminism without joy forgets what it is fighting for. A movement without community has nothing to hold it together.',
    illustration: IMAGES.illustration.pillarJoy,
    alt: 'Two figures embracing with hearts',
    photo: '/images/community.jpg',
    photoAlt: 'POP community gathering in celebration',
  },
  {
    number: '04',
    title: 'Innovation and creativity are how we create change.',
    body:
      'Gender inequality is not a new problem. Generations of activists, organisers, and advocates have fought hard and moved things forward. But the work is not done, and the urgency is real. So we build on what came before and we keep experimenting. We work across grassroots community building, art, digital advocacy, and policy because we believe no single approach is enough. Innovation is how we reach young people where they are, make feminism feel alive and relevant and shift deeply held beliefs about gender; this is also work that young people are often best placed to lead. Society must be open to that. Change is urgent. Imagination is how we meet it.',
    illustration: IMAGES.illustration.pillarCreativity,
    alt: 'A paintbrush and palette illustration',
    photo: '/images/srikdu-2.jpg',
    photoAlt: 'Students collaborating with artwork at a POP workshop',
  },
  {
    number: '05',
    title: 'Feminism is not just what we do. It is how we live.',
    body:
      'Feminist values do not stop at the edge of a programme or a campaign. They must shape every space we occupy, every relationship we build, and every community we are part of. Feminism lives in the small moments as much as the big ones. In how we navigate conflict, how we hold power carefully, how we speak to each other when things are hard. It means recognising everyone\'s labour fairly, refusing to make assumptions about what someone needs based on where they come from or how they appear. The same standard of care and accountability we demand from the world must start with us.',
    illustration: IMAGES.illustration.pillarLive,
    alt: 'Two figures praying side by side',
    photo: '/images/workshop5.jpg',
    photoAlt: 'POP team in conversation with young people',
  },
];

// Each pillar's base angle on the wheel (degrees from 12 o'clock, going clockwise)
// 5 pillars evenly spaced: 0, 72, 144, 216, 288. We use -90 offset so 0 ≡ top.
const baseAngles = [0, 72, 144, 216, 288];
const TOP_ANGLE = 0; // the "spotlight" slot
const RADIUS = 38; // percent of container

const polarPos = (angle: number) => {
  // angle is measured clockwise from top (12 o'clock)
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    left: `${50 + RADIUS * Math.cos(rad)}%`,
    top: `${50 + RADIUS * Math.sin(rad)}%`,
  };
};

const Mission: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [inView, setInView] = useState(false);
  const [pausedUntil, setPausedUntil] = useState(0);
  const radialRef = useRef<HTMLDivElement | null>(null);

  // Auto-expand once + track whether the section is on screen for auto-advance
  useEffect(() => {
    const node = radialRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setExpanded(true);
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setInView(entry.isIntersecting);
          if (entry.isIntersecting) setExpanded(true);
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Auto-advance through the pillars every 5s while the section is on screen
  // and the user hasn't clicked recently (pauses for 12s after a click).
  useEffect(() => {
    if (!inView || !expanded) return;
    const interval = setInterval(() => {
      if (Date.now() < pausedUntil) return;
      setActiveIdx((i) => (i + 1) % pillars.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [inView, expanded, pausedUntil]);

  const selectPillar = (i: number) => {
    setActiveIdx(i);
    setPausedUntil(Date.now() + 12000);
  };

  // Rotation needed to bring the active pillar to the top slot.
  // We accumulate a continuous rotation so the wheel always turns the "short way" forward
  // (or backward as Tailwind allows — here we just use raw delta; users can click any side).
  const wheelRotation = TOP_ANGLE - baseAngles[activeIdx];

  const active = pillars[activeIdx];

  return (
    <section id="mission" className="bg-pop-cream">
      {/* Intro */}
      <div className="bg-pop-cream text-pop-ink py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-8">
            <EditableText id="mission-headline-main" defaultText="What we believe" />
            <br />
            <EditableText
              id="mission-headline-accent"
              className="text-pop-pink"
              defaultText="to be true."
            />
          </h2>
          <EditableText
            as="p"
            id="mission-intro"
            className="font-sans text-lg leading-relaxed max-w-3xl mx-auto text-justify"
            defaultText="The pillars are POP's account of what we believe to be true about the world we are working in and the work we are doing within it. They are not goals or aspirations. They are positions, held with conviction, that precede every decision POP makes about how to design a programme, who to partner with, what kind of space to create, and what kind of organisation to be. Every action POP takes, every space it enters, every relationship it builds is guided by these pillars."
          />
        </div>
      </div>

      {/* Rotating wheel + side-by-side description (desktop / tablet) */}
      <div
        ref={radialRef}
        className="relative hidden md:block overflow-hidden py-16 lg:py-24"
      >
        {/* Active pillar photo as full-section background — all photos stay mounted,
            only the active one is opaque so the browser crossfades them smoothly. */}
        {pillars.map((p, i) => (
          <img
            key={p.number}
            src={p.photo}
            alt=""
            aria-hidden
            decoding="async"
            loading="eager"
            className={`absolute inset-0 w-full h-full object-cover object-center duration-[1800ms] ${
              i === activeIdx ? 'opacity-55 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{
              transitionProperty: 'opacity, transform',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDuration: '1800ms',
              willChange: 'opacity, transform',
            }}
          />
        ))}
        {/* Soft cream wash so wheel + text stay readable, but light enough to see the photo */}
        <div
          aria-hidden
          className="absolute inset-0 bg-pop-cream/45"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 min-h-[640px] flex items-center">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
            {/* Wheel column */}
            <div className="lg:col-span-7 relative w-full aspect-square max-w-[640px] mx-auto">
              {/* The wheel — rotates as a single unit */}
              <div
                className="absolute inset-0 transition-transform duration-[1100ms] ease-in-out"
                style={{ transform: `rotate(${wheelRotation}deg)` }}
              >
                {pillars.map((p, i) => {
                  const pos = polarPos(baseAngles[i]);
                  const isActive = activeIdx === i;
                  return (
                    <button
                      key={p.number}
                      type="button"
                      onClick={() => selectPillar(i)}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center
                        transition-all ease-out
                        ${expanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                      `}
                      style={{
                        left: expanded ? pos.left : '50%',
                        top: expanded ? pos.top : '50%',
                        transitionDuration: '900ms',
                        transitionDelay: expanded ? `${i * 110}ms` : '0ms',
                      }}
                      aria-label={p.title}
                      aria-pressed={isActive}
                    >
                      {/* Counter-rotate the contents so the icon stays upright */}
                      <span
                        className="block transition-transform duration-[1100ms] ease-in-out"
                        style={{ transform: `rotate(${-wheelRotation}deg)` }}
                      >
                        <span
                          className={`block transition-transform duration-500 ${
                            isActive ? 'scale-150' : 'scale-100 hover:scale-110'
                          }`}
                        >
                          <img
                            src={p.illustration}
                            alt={p.alt}
                            className="w-36 lg:w-44 h-auto mx-auto drop-shadow-md"
                          />
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Center heart — stays put while wheel rotates around it */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44%] max-w-[16rem] pointer-events-none">
                {/* radial glow gradient behind the heart */}
                <span
                  aria-hidden
                  className="absolute inset-0 -m-12 rounded-full animate-breathe"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(236,148,204,0.55), rgba(236,148,204,0.18) 55%, transparent 75%)',
                  }}
                />
                <img
                  src={IMAGES.logo.heart}
                  alt="Pocket of Pink heart logo"
                  className="relative w-full h-auto animate-ambient"
                />
              </div>
            </div>

            {/* Description column */}
            <div className="lg:col-span-5">
              <div
                key={active.number}
                className="animate-[ambient_0.9s_ease-out]"
              >
                <h3 className="pop-brush text-3xl lg:text-4xl xl:text-5xl uppercase leading-[0.95] mb-6 text-pop-ink">
                  {active.title}
                </h3>
                <p className="font-sans text-base lg:text-lg leading-relaxed text-pop-ink/85 text-justify">
                  {active.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fallback: stacked compact pillars */}
      <div className="md:hidden bg-pop-cream pb-16">
        <div className="max-w-md mx-auto px-5">
          <div className="flex justify-center mb-6">
            <img
              src={IMAGES.logo.heart}
              alt="Pocket of Pink heart logo"
              className="w-40 h-auto animate-ambient"
            />
          </div>
          <div className="space-y-4">
            {pillars.map((p, i) => {
              const isOpen = activeIdx === i;
              return (
                <div key={p.number} className="bg-pop-cream rounded-2xl p-5 shadow-sm">
                  <button
                    type="button"
                    onClick={() => {
                      selectPillar(isOpen ? -1 : i);
                    }}
                    className="w-full flex items-center gap-4 text-left"
                  >
                    <img src={p.illustration} alt="" className="w-16 h-auto flex-shrink-0" />
                    <div className="flex-1">
                      <p className="pop-brush text-lg uppercase leading-tight">
                        {p.title}
                      </p>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-pop-ink/10">
                      <img
                        src={p.photo}
                        alt={p.photoAlt}
                        className="w-full h-40 object-cover rounded-xl mb-4 shadow-md"
                      />
                      <p className="font-sans text-base leading-relaxed text-pop-ink/85 text-justify">
                        {p.body}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
