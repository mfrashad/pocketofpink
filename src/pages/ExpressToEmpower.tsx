import React, { useState } from 'react';
import { ArrowRight, Palette, Shield, BookOpen, Users, Sparkles, Lock, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../config/images';
import Video from '../components/Video';
import DonationModal from '../components/DonationModal';
import PocketPalModal from '../components/PocketPalModal';
import Header from '../components/Header';

const ExpressToEmpower: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isPocketPalModalOpen, setIsPocketPalModalOpen] = useState(false);

  return (
    <>
      <Header onDonateClick={() => setIsDonationModalOpen(true)} />
      <main>
        {/* Hero */}
        <section className="relative bg-pop-pink text-pop-ink overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24">
          {/* photo backdrop with white wash */}
          <div className="absolute inset-0 bg-pop-pink" aria-hidden />
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-40 mix-blend-multiply"
            style={{ backgroundImage: `url('${IMAGES.projects.expressToEmpower}')` }}
          />
          <div aria-hidden className="absolute inset-0 bg-pop-pink/35" />

          {/* decorative top-right sticker */}
          <img
            src={IMAGES.illustration.stickers.popPatriarchy}
            alt=""
            aria-hidden
            className="hidden md:block pointer-events-none absolute -top-4 -right-8 lg:-right-16 w-40 lg:w-60 rotate-[10deg] animate-ambient drop-shadow-xl"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <h1 className="pop-brush text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] text-pop-ink">
                  Express to <span className="text-pop-cream">Empower</span>
                </h1>
                <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-pop-cream mt-5">
                  Drawing courage, colouring change
                </p>
                <div className="flex flex-wrap gap-3 mt-7 justify-center lg:justify-start">
                  <a
                    href="https://forms.gle/KsfLarS8gD5gRrNy9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-pop-pink text-pop-cream px-6 py-3 font-sans font-semibold text-sm sm:text-base rounded-full hover:scale-105 transition-transform shadow-md ring-2 ring-pop-cream"
                  >
                    Bring to my school
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setIsPocketPalModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-pop-cream text-pop-pink px-6 py-3 font-sans font-semibold text-sm sm:text-base rounded-full border-2 border-pop-pink hover:bg-pop-pink hover:text-pop-cream transition-colors shadow-md"
                  >
                    Order Pocket Pal
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center">
                <div className="rounded-3xl overflow-hidden shadow-2xl w-[260px] sm:w-[300px] h-[360px] sm:h-[420px] rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={IMAGES.projects.expressToEmpowerBook}
                    alt="Pocket Pal cover"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="relative bg-pop-cream text-pop-ink py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <h2 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-6">
                  The <span className="text-pop-pink">challenge.</span>
                </h2>
                <p className="font-sans text-lg lg:text-xl leading-relaxed text-justify mb-4">
                  In Malaysia, and much of the world, comprehensive sexuality education (CSE) is still clouded by stigma, misinformation, and cultural taboos.
                </p>
                <p className="font-sans text-lg leading-relaxed text-justify text-pop-ink/85">
                  Conversations about bodily autonomy, gender identity, and sexual health are too often:
                </p>

                <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pop-cream border border-pop-pink/40 text-pop-ink shadow-sm">
                    <Shield className="w-4 h-4 text-pop-pink" />
                    <span className="text-sm font-medium">Avoided or silenced</span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pop-cream border border-pop-pink/40 text-pop-ink shadow-sm">
                    <Users className="w-4 h-4 text-pop-pink" />
                    <span className="text-sm font-medium">Shaped by non-inclusive narratives</span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pop-cream border border-pop-pink/40 text-pop-ink shadow-sm">
                    <Lock className="w-4 h-4 text-pop-pink" />
                    <span className="text-sm font-medium">Restricted by entrenched norms</span>
                  </span>
                </div>

                <p className="font-sans text-base lg:text-lg leading-relaxed text-justify mt-6 text-pop-ink/85">
                  This leaves young people, especially those aged 9–18, without the knowledge, language, or confidence to understand their rights, set boundaries, and explore their identities safely.
                </p>

                {/* Stats */}
                <div className="mt-8 grid sm:grid-cols-3 gap-3">
                  {[
                    { icon: BookOpen, value: '70%', label: 'lack access to inclusive, age-appropriate CSE.' },
                    { icon: Users, value: '60%', label: 'report discomfort or harassment related to gender/sexuality.' },
                    { icon: Palette, value: 'Rigid', label: 'Traditional CSE misses emotional and creative engagement.' },
                  ].map(({ icon: Icon, value, label }) => (
                    <div key={value} className="rounded-2xl bg-pop-cream border border-pop-pink/20 p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-pop-pink text-pop-cream flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="text-2xl font-bold text-pop-pink">{value}</div>
                      </div>
                      <div className="text-xs text-pop-ink/70 text-justify">{label}</div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-pop-ink/60 text-justify">
                  Sources:{' '}
                  <a className="underline hover:text-pop-pink" href="http://arrow.org.my/wp-content/uploads/2018/03/ARROW-RP-CSE-AP-WEB.pdf" target="_blank" rel="noopener noreferrer">ARROW (2018)</a> ·{' '}
                  <a className="underline hover:text-pop-pink" href="https://hkjoss.com/index.php/journal/article/view/458" target="_blank" rel="noopener noreferrer">Chan &amp; Lee (2023)</a> ·{' '}
                  <a className="underline hover:text-pop-pink" href="https://doi.org/10.1186/s41182-023-00508-w" target="_blank" rel="noopener noreferrer">Ng et al. (2023)</a>
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative max-w-md w-full">
                  <img
                    src={IMAGES.mission.visionChildren}
                    alt="Students in workshop"
                    className="relative rounded-3xl shadow-xl w-full h-80 lg:h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Response */}
        <section className="relative bg-pop-pink text-pop-ink py-20 lg:py-28 overflow-hidden">
          {/* hand-drawn anchor */}
          <img
            src={IMAGES.illustration.pillarCreativity}
            alt=""
            aria-hidden
            className="hidden lg:block pointer-events-none absolute top-8 right-8 w-28 rotate-[12deg] animate-ambient drop-shadow"
          />
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <h2 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-6">
                  Our response.
                </h2>
                <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-pop-cream mb-3">
                  Art can open doors that words alone can't
                </p>
                <p className="font-sans text-base lg:text-lg leading-relaxed text-justify mb-6 text-pop-ink/90">
                  Express to Empower blends art therapy and Comprehensive Sexuality Education to create safe, engaging spaces where young people can:
                </p>
                <div className="space-y-3 text-pop-ink/90 font-sans">
                  <div className="flex items-start gap-3 text-justify"><Shield className="w-5 h-5 text-pop-cream mt-1 flex-shrink-0" /><span>Learn about consent, bodily autonomy, and identity.</span></div>
                  <div className="flex items-start gap-3 text-justify"><Palette className="w-5 h-5 text-pop-cream mt-1 flex-shrink-0" /><span>Explore feelings and rights through guided creative activities.</span></div>
                  <div className="flex items-start gap-3 text-justify"><BookOpen className="w-5 h-5 text-pop-cream mt-1 flex-shrink-0" /><span>Talk openly in environments where no question is off-limits.</span></div>
                </div>
                <p className="font-sans text-base mt-6 text-pop-ink/85 text-justify">
                  Since 2024, we've reached 400+ students through schools and community programs, and we're just getting started.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={IMAGES.expressToEmpower.ourResponse} alt="Workshops" className="w-full h-80 lg:h-96 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Video */}
        <Video />

        {/* How It Works */}
        <section className="bg-pop-cream text-pop-ink py-20 lg:py-28" id="workshops">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-12 text-center">
              How it <span className="text-pop-pink">works.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-pop-cream rounded-3xl shadow-xl p-8 flex flex-col border border-pop-pink/15">
                <div className="rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <img src={IMAGES.expressToEmpower.howItWorks.teachersWorkshop} alt="Workshop with students" className="w-full h-48 object-cover" />
                </div>
                <p className="font-sans text-xs uppercase tracking-[0.25em] text-pop-pink mb-2">For teachers &amp; community leaders</p>
                <h3 className="pop-brush text-2xl lg:text-3xl uppercase mb-3 text-pop-ink leading-tight">
                  Host an Express to Empower workshop
                </h3>
                <p className="font-sans text-base text-pop-ink/85 leading-relaxed text-justify mb-6">
                  Bring our youth-led facilitators to your school or community space for a safe, engaging, and interactive learning experience.
                </p>
                <a href="https://forms.gle/KsfLarS8gD5gRrNy9" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 bg-pop-pink text-pop-cream px-6 py-3 font-sans font-semibold text-sm rounded-full hover:scale-105 transition-transform shadow-md self-start">
                  Bring to my school
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-pop-cream rounded-3xl shadow-xl p-8 flex flex-col border border-pop-pink/15" id="pocket-pal">
                <div className="rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <img src={IMAGES.expressToEmpower.howItWorks.pocketPalHome} alt="Pocket Pal at home" className="w-full h-48 object-cover" />
                </div>
                <p className="font-sans text-xs uppercase tracking-[0.25em] text-pop-pink mb-2">For parents &amp; guardians</p>
                <h3 className="pop-brush text-2xl lg:text-3xl uppercase mb-3 text-pop-ink leading-tight">
                  Bring Pocket Pal home
                </h3>
                <p className="font-sans text-base text-pop-ink/85 leading-relaxed text-justify mb-6">
                  Start important conversations right at the kitchen table with our illustrated activity book, a tool designed to make learning about bodies, boundaries, and identity approachable for children aged 9–12.
                </p>
                <button onClick={() => setIsPocketPalModalOpen(true)} className="mt-auto inline-flex items-center gap-2 bg-pop-cream text-pop-pink px-6 py-3 font-sans font-semibold text-sm rounded-full border-2 border-pop-pink hover:bg-pop-pink hover:text-pop-cream transition-colors self-start">
                  Order your Pocket Pal
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Workshops Features */}
        <section className="bg-pop-pink text-pop-ink py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-10">
              <h3 className="pop-brush text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] mb-4">
                Express to Empower <span className="text-pop-cream">workshops.</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-pop-cream mb-3">By youth, for youth, tailored for your school or community</p>
              <p className="font-sans text-base lg:text-lg max-w-3xl mx-auto text-justify text-pop-ink/90">
                Led by trained youth facilitators from Pocket of Pink, our workshops are built with, not just for, the young people we serve.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[IMAGES.mission.creativeEmpowerment, IMAGES.mission.accessibleEducation, IMAGES.mission.challengeNorms].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md">
                  <img src={src} alt={`Workshop photo ${i + 1}`} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: BookOpen, title: 'Age-appropriate CSE', desc: 'Modules based on our Pocket Pal resource.' },
                { icon: Palette, title: 'Guided art', desc: 'Creative sessions to process and express learning.' },
                { icon: Shield, title: 'Safe & inclusive', desc: 'Facilitation that encourages curiosity and honesty.' },
                { icon: Sparkles, title: 'Community feedback', desc: 'Consultations before and after to ensure real impact.' },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="bg-pop-cream rounded-2xl p-6 text-center shadow-md">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-pop-pink text-pop-cream flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="pop-brush text-xl uppercase text-pop-ink mb-2">{f.title}</div>
                    <p className="font-sans text-sm text-pop-ink/80">{f.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <p className="font-sans text-base mb-4 text-pop-ink/90">
                Packages start as low as RM50 per student, with packaged rates tailored to each school or community.
              </p>
              <a href="https://forms.gle/KsfLarS8gD5gRrNy9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-pop-cream text-pop-pink px-7 py-3.5 font-sans font-semibold text-base rounded-full border-2 border-pop-cream hover:scale-105 transition-transform shadow-md">
                Bring Express to Empower to your school
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Pocket Pal */}
        <section className="bg-pop-cream text-pop-ink py-20 lg:py-28" id="pocket-pal-order">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl w-[280px] sm:w-[320px] h-[400px] sm:h-[440px] mx-auto lg:mx-0">
              <img src={IMAGES.projects.expressToEmpowerBook} alt="Pocket Pal" className="w-full h-full object-cover" />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-3">
                Pocket <span className="text-pop-pink">Pal.</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-pop-pink mb-4">
                Bodies, boundaries &amp; identity, learning starts at home
              </p>
              <p className="font-sans text-base lg:text-lg leading-relaxed text-justify mb-4">
                A pocket-sized guide with a big impact, Pocket Pal is our 20-page illustrated activity book designed to spark curiosity, break stigma, and start important conversations at home.
              </p>
              <p className="font-sans text-base leading-relaxed text-justify text-pop-ink/85 mb-6">
                Perfect for parents, guardians, or youth mentors, it brings CSE into everyday spaces in a fun, accessible way.
              </p>
              <div className="space-y-3 font-sans">
                {[
                  'Real anatomical terms, no euphemisms.',
                  'Fun, interactive prompts to spark open conversations.',
                  'Bright, inclusive illustrations that reflect diverse bodies and experiences.',
                  'Culturally sensitive content, created with input from educators and youth.',
                  'Available in English (Bahasa Malaysia, Tamil, and Mandarin in development).',
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3 text-justify">
                    <Sparkles className="w-5 h-5 text-pop-pink mt-1 flex-shrink-0" />
                    <span className="text-pop-ink/85">{t}</span>
                  </div>
                ))}
              </div>
              <p className="font-sans text-base text-pop-ink/85 mt-6">
                RM25 per copy, every purchase funds free distribution to children who need them most.
              </p>
              <button onClick={() => setIsPocketPalModalOpen(true)} className="mt-5 inline-flex items-center gap-2 bg-pop-pink text-pop-cream px-7 py-3.5 font-sans font-semibold text-base rounded-full hover:scale-105 transition-transform shadow-md">
                Order your Pocket Pal
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Play Pocket Pal */}
        <section id="play-pocket-pal" className="bg-pop-pink text-pop-ink pt-20 lg:pt-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-8 lg:mb-10">
            <div className="text-center">
              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-pop-cream mb-4">
                Try it in your browser
              </p>
              <h3 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-5">
                Play <span className="text-pop-cream">Pocket Pal.</span>
              </h3>
              <p className="font-sans text-base lg:text-lg leading-relaxed max-w-3xl mx-auto text-justify text-pop-ink/90">
                The Pocket Pal activity book, reimagined as an interactive game.
                Walk through chapters on identity, bodies, consent and safety, draw and reflect in your own journal.
              </p>
            </div>
          </div>

          {/* Full-viewport iframe so the entire game fits without scrolling */}
          <iframe
            src="/game/index.html"
            title="Pocket Pal — The Game"
            className="block w-full h-screen min-h-[720px] border-0"
            allow="autoplay; fullscreen; clipboard-read; clipboard-write"
          />
        </section>

        {/* Case in Point */}
        <section className="bg-pop-pink text-pop-ink py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <p className="font-sans text-xs uppercase tracking-[0.25em] text-pop-cream mb-3">Case in point</p>
                <h3 className="pop-brush text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] mb-5">
                  When art makes space for <span className="text-pop-cream">courage.</span>
                </h3>
                <p className="font-sans text-base lg:text-lg leading-relaxed text-justify mb-5 text-pop-ink/90">
                  In a recent workshop at Sri KDU International School, students engaged in discussions on safety and empowerment while creating personal art pieces that reflected their boundaries and values.
                </p>
                <div className="space-y-2 font-sans">
                  {["Increased comfort discussing taboo topics.", "Greater confidence in naming and asserting personal boundaries.", "Stronger peer empathy and respect."].map((t) => (
                    <div key={t} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-pop-cream mt-0.5 flex-shrink-0" />
                      <span className="text-pop-ink/90">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {IMAGES.expressToEmpower.caseInPoint.map((src, i) => (
                  <div key={i} className={`rounded-2xl overflow-hidden shadow-md ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                    <img src={src} alt={`Case study ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Art? */}
        <section className="bg-pop-cream text-pop-ink py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl order-last md:order-first">
                <img src={IMAGES.expressToEmpower.whyArt} alt="Why Art" className="w-full h-80 lg:h-96 object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="pop-brush text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] mb-5">
                  Why art? <span className="text-pop-pink">Why now?</span>
                </h3>
                <p className="font-sans text-base lg:text-lg leading-relaxed text-justify text-pop-ink/85">
                  Art is playful, non-threatening, and universal, it invites expression without fear of judgment. By embedding sexuality education in a creative process, we dismantle barriers of shame and silence, making way for honest conversations and lasting understanding. By making sexuality and autonomy education fun, artistic, and culturally sensitive, Express to Empower builds the foundations for empathy, respect, and inclusion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative bg-pop-pink text-pop-ink py-20 lg:py-28 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
            <h3 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-5">
              Be part of <span className="text-pop-cream">the change.</span>
            </h3>
            <p className="font-sans text-lg lg:text-xl text-pop-ink/90 max-w-3xl mx-auto mb-10 text-justify">
              Your support helps us train more youth facilitators, bring Express to Empower workshops to underserved schools, and print and distribute free Pocket Pals.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
              {[
                { tier: 'RM25', text: 'Sponsor 1 Pocket Pal' },
                { tier: 'RM250', text: 'Fund a mini-workshop for 10 students' },
                { tier: 'RM1,000', text: 'Bring E2E to a full classroom' },
              ].map((t) => (
                <div key={t.tier} className="bg-pop-cream rounded-2xl p-6 shadow-md">
                  <div className="pop-brush text-3xl uppercase text-pop-pink mb-1">{t.tier}</div>
                  <div className="font-sans text-sm text-pop-ink/85">{t.text}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => setIsDonationModalOpen(true)} className="inline-flex items-center justify-center gap-2 bg-pop-cream text-pop-pink px-7 py-3.5 font-sans font-semibold text-base rounded-full hover:scale-105 transition-transform shadow-md">
                Donate now
              </button>
              <a href="https://forms.gle/KsfLarS8gD5gRrNy9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-pop-cream text-pop-cream px-7 py-3.5 font-sans font-semibold text-base rounded-full hover:bg-pop-cream hover:text-pop-pink transition-colors shadow-md">
                Book a call
              </a>
            </div>
          </div>
        </section>
      </main>
      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
      <PocketPalModal isOpen={isPocketPalModalOpen} onClose={() => setIsPocketPalModalOpen(false)} />
    </>
  );
};

export default ExpressToEmpower;
