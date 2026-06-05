import React from 'react';
import { IMAGES } from '../config/images';
import Editable from './Editable';
import EditableText from './EditableText';

const breakdown = [
  {
    word: 'Building',
    body:
      'Because the work is active and constructive rather than rhetorical, and because infrastructure, not just intention, is what makes movements last.',
  },
  {
    word: 'The generation',
    body:
      'Because the young people POP works with are not one of several possible constituencies for this work but the central and most consequential one, the people who will carry its outcomes longest and feel its failures most acutely.',
  },
  {
    word: 'Owns',
    body:
      'Because the relationship between youth and gender justice at POP is not one of passive reception or distant advocacy, but of full claim, full agency, and full responsibility for the work and its direction.',
  },
  {
    word: 'Gender justice',
    body:
      'Rather than gender equality, because equality as a frame suggests a symmetry of outcome that can be achieved without confronting the structural conditions that produce inequality in the first place, while justice demands accountability, repair, and the kind of systemic change that does not stop at representation.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative isolate bg-pop-cream text-pop-ink py-20 lg:py-28 overflow-hidden">
      {/* Flying books animation — sit behind everything so they don't cover stickers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <img
          src={IMAGES.illustration.aboutBook}
          alt=""
          className="absolute top-[6%] left-0 w-40 sm:w-52 lg:w-60 animate-fly-across"
        />
        <img
          src={IMAGES.illustration.aboutBook}
          alt=""
          className="absolute top-[38%] left-0 w-28 sm:w-36 lg:w-44 animate-fly-back opacity-90"
          style={{ animationDelay: '-9s' }}
        />
        <img
          src={IMAGES.illustration.aboutBook}
          alt=""
          className="absolute top-[72%] left-0 w-32 sm:w-40 lg:w-52 animate-fly-across opacity-95"
          style={{ animationDelay: '-14s' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        {/* Intro — big sticker overlapping the headline */}
        <div className="relative mb-20 min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] xl:min-h-[520px] flex items-center justify-center">
          <Editable
            id="about-future-equality"
            className="hidden md:block absolute top-1/2 right-0 lg:-right-10 xl:-right-20 -translate-y-1/2 w-[36rem] lg:w-[46rem] xl:w-[56rem] max-w-none h-auto z-0"
          >
            <img
              src={IMAGES.illustration.stickers.futureEquality}
              alt="The future is equality"
              aria-hidden
              className="w-full h-auto animate-ambient drop-shadow-xl rotate-[-3deg] pointer-events-none"
            />
          </Editable>
          <Editable id="about-headline-block" className="relative z-10 block max-w-4xl mx-auto" textControls>
            <h2 className="pop-brush text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase leading-[0.95] text-center">
              <EditableText
                id="about-headline-main"
                defaultText="Pocket of Pink is building the generation that owns "
              />
              <EditableText
                id="about-headline-accent"
                defaultText="gender justice."
                className="text-pop-pink"
              />
            </h2>
          </Editable>
        </div>

        {/* Why this sentence */}
        <div className="space-y-12 lg:space-y-16">
          <EditableText
            as="p"
            id="about-intro-1"
            className="font-sans text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-justify"
            defaultText="Gender inequality remains one of the most persistent and unresolved issues of our time, not for lack of evidence, not for lack of advocacy, and not for lack of political will in isolated pockets of the world, but because the conditions that produce it are reproduced faster than the movements working to dismantle them. In Malaysia, young people are coming of age in a landscape where gendered norms are reinforced by institutions, amplified by social media algorithms, and rarely interrogated in formal education settings. Comprehensive sexuality education is absent from most school curricula. The feminist organising that does exist has historically centred adult voices, legal frameworks, and crisis-response work, leaving young people, and particularly boys, without meaningful or accessible entry points into the broader conversation about gender, power, and justice."
          />

          <div className="flex flex-col items-center">
            <EditableText
              as="p"
              id="about-intro-2"
              className="font-sans text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-4 text-justify"
              defaultText="Pocket of Pink was founded on the conviction that this gap is not incidental but structural, and that a movement which does not bring in the next generation, in its entirety and on its own terms, does not sustain itself beyond the people who built it."
            />

            {/* Photo from the original design */}
            <img
              src={IMAGES.about.main}
              alt="Pocket of Pink team at work"
              className="w-full max-w-2xl h-48 lg:h-64 object-cover rounded-2xl shadow-md"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-y-12 gap-x-10 lg:gap-x-16 pt-4">
            {breakdown.map((item, i) => (
              <div key={item.word} className="border-t border-pop-ink/15 pt-6">
                <EditableText
                  as="p"
                  id={`about-breakdown-${i}-word`}
                  className="pop-brush text-4xl sm:text-5xl text-pop-pink uppercase mb-4 text-center"
                  defaultText={item.word}
                />
                <EditableText
                  as="p"
                  id={`about-breakdown-${i}-body`}
                  className="font-sans text-base lg:text-lg leading-relaxed text-justify"
                  defaultText={item.body}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
