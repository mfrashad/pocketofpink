import React, { useState } from 'react';
import { ArrowRight, Palette, Shield, BookOpen, Users, Sparkles, Lock, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../config/images';
import Video from '../components/Video';
import DonationModal from '../components/DonationModal';
import PocketPalModal from '../components/PocketPalModal';
import Header from '../components/Header';

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => (
  <div {...rest} className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${className || ''}`}>{children}</div>
);

const ExpressToEmpower: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isPocketPalModalOpen, setIsPocketPalModalOpen] = useState(false);

  return (
    <>
      <Header onDonateClick={() => setIsDonationModalOpen(true)} />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200" />
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url('${IMAGES.projects.expressToEmpower}')` }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                  <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent">Express to Empower</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8">Drawing courage, colouring change</p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://forms.gle/KsfLarS8gD5gRrNy9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-pink-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg">
                    Bring to My School <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <button onClick={() => setIsPocketPalModalOpen(true)} className="inline-flex items-center border-2 border-pink-600 text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50">
                    Order Pocket Pal <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl w-[300px] h-[420px] mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img src={IMAGES.projects.expressToEmpowerBook} alt="Express to Empower" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-16 relative overflow-hidden bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">The Challenge</span>
                </h2>
                <p className="text-gray-700">In Malaysia — and much of the world — comprehensive sexuality education (CSE) is still clouded by stigma, misinformation, and cultural taboos.</p>
                <p className="text-gray-700 mt-4">Conversations about bodily autonomy, gender identity, and sexual health are too often:</p>

                {/* Compact chips */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 border border-pink-100 text-gray-800">
                    <Shield className="w-4 h-4 text-pink-600" />
                    <span className="text-sm">Avoided or silenced</span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 border border-pink-100 text-gray-800">
                    <Users className="w-4 h-4 text-pink-600" />
                    <span className="text-sm">Shaped by non-inclusive narratives</span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 border border-pink-100 text-gray-800">
                    <Lock className="w-4 h-4 text-pink-600" />
                    <span className="text-sm">Restricted by entrenched norms</span>
                  </span>
                </div>

                <p className="text-gray-700 mt-6">This leaves young people — especially those aged 9–18 — without the knowledge, language, or confidence to understand their rights, set boundaries, and explore their identities safely.</p>

                {/* Minimal stat items */}
                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl backdrop-blur bg-white/70 border border-pink-100 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white flex items-center justify-center">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-500">70%</div>
                    </div>
                    <div className="text-xs text-gray-600">lack access to inclusive, age-appropriate CSE.</div>
                  </div>
                  <div className="rounded-2xl backdrop-blur bg-white/70 border border-pink-100 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white flex items-center justify-center">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-500">60%</div>
                    </div>
                    <div className="text-xs text-gray-600">report discomfort or harassment related to gender/sexuality.</div>
                  </div>
                  <div className="rounded-2xl backdrop-blur bg-white/70 border border-pink-100 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white flex items-center justify-center">
                        <Palette className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-500">Rigid methods</div>
                    </div>
                    <div className="text-xs text-gray-600">Traditional CSE misses emotional and creative engagement.</div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-gray-600">Sources: <a className="underline" href="http://arrow.org.my/wp-content/uploads/2018/03/ARROW-RP-CSE-AP-WEB.pdf" target="_blank" rel="noopener noreferrer">ARROW (2018)</a> • <a className="underline" href="https://hkjoss.com/index.php/journal/article/view/458" target="_blank" rel="noopener noreferrer">Chan & Lee (2023)</a> • <a className="underline" href="https://doi.org/10.1186/s41182-023-00508-w" target="_blank" rel="noopener noreferrer">Ng et al. (2023)</a></p>
              </div>

              {/* Visual */}
              <div>
                <div className="relative max-w-md lg:ml-auto">
                  <div className="absolute -inset-x-6 -inset-y-6 bg-gradient-to-tr from-pink-200 via-pink-100 to-transparent rounded-[2rem] blur-2xl opacity-70" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-pink-200">
                    <img src={IMAGES.mission.visionChildren} alt="Students in workshop" className="w-full h-96 object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Response */}
        <section className="py-16 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">Our Response: Express to Empower</span>
                </h2>
                <p className="text-gray-700 mb-2">Art can open doors that words alone can’t.</p>
                <p className="text-gray-700 mb-6">Express to Empower blends art therapy and Comprehensive Sexuality Education to create safe, engaging spaces where young people can:</p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3"><Shield className="w-5 h-5 text-pink-600 mt-1" /><span>Learn about consent, bodily autonomy, and identity.</span></div>
                  <div className="flex items-start gap-3"><Palette className="w-5 h-5 text-pink-600 mt-1" /><span>Explore feelings and rights through guided creative activities.</span></div>
                  <div className="flex items-start gap-3"><BookOpen className="w-5 h-5 text-pink-600 mt-1" /><span>Talk openly in environments where no question is off-limits.</span></div>
                </div>
                <p className="text-gray-600 mt-6">Since 2024, we’ve reached 400+ students through schools and community programs — and we’re just getting started.</p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={IMAGES.expressToEmpower.ourResponse} alt="Workshops" className="w-full h-96 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Video For E2E */}
        <Video />

        {/* How It Works (side by side sections) */}
        <section className="py-16 bg-white" id="workshops">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">How It Works</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <Card className="p-8 flex flex-col">
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img src={IMAGES.expressToEmpower.howItWorks.teachersWorkshop} alt="Workshop with students" className="w-full h-44 object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. For Teachers & Community Leaders → Host an Express to Empower Workshop</h3>
                <p className="text-gray-700 mb-6">Bring our youth-led facilitators to your school or community space for a safe, engaging, and interactive learning experience.</p>
                <a href="https://forms.gle/KsfLarS8gD5gRrNy9" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center bg-gradient-to-r from-pink-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg">Bring to My School <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Card>
              <Card className="p-8 flex flex-col" id="pocket-pal">
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img src={IMAGES.expressToEmpower.howItWorks.pocketPalHome} alt="Pocket Pal at home" className="w-full h-44 object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. For Parents & Guardians → Bring Pocket Pal Home</h3>
                <p className="text-gray-700 mb-6">Start important conversations right at the kitchen table with our illustrated activity book — a tool designed to make learning about bodies, boundaries, and identity approachable for children aged 9–12.</p>
                <button onClick={() => setIsPocketPalModalOpen(true)} className="mt-auto inline-flex items-center border-2 border-pink-600 text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50">Order Your Pocket Pal <ArrowRight className="w-4 h-4 ml-2" /></button>
              </Card>
            </div>
          </div>
        </section>

        {/* Workshops Features */}
        <section className="py-16 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold">Express to Empower Workshops</h3>
              <p className="text-gray-700">By Youth, For Youth — Tailored for Your School or Community</p>
              <p className="text-gray-700 mt-2">Led by trained youth facilitators from Pocket of Pink, our workshops are built with — not just for — the young people we serve.</p>
            </div>
            {/* Workshop photos */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[IMAGES.mission.creativeEmpowerment, IMAGES.mission.accessibleEducation, IMAGES.mission.challengeNorms].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow">
                  <img src={src} alt={`Workshop photo ${i + 1}`} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, title: 'Age-appropriate CSE', desc: 'Modules based on our Pocket Pal resource.' },
                { icon: Palette, title: 'Guided Art', desc: 'Creative sessions to process and express learning.' },
                { icon: Shield, title: 'Safe & Inclusive', desc: 'Facilitation that encourages curiosity and honesty.' },
                { icon: Sparkles, title: 'Community Feedback', desc: 'Consultations before and after to ensure real impact.' },
              ].map((f, i) => {
                const Icon = f.icon as any;
                return (
                  <Card key={i} className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 text-white flex items-center justify-center">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="font-semibold text-gray-800 mb-2">{f.title}</div>
                    <p className="text-gray-600 text-sm">{f.desc}</p>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <p className="text-gray-700 mb-2">💡 Packages start as low as RM50 per student, with packaged rates tailored to each school or community.</p>
              <a href="https://forms.gle/KsfLarS8gD5gRrNy9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg">Bring Express to Empower to Your School<ArrowRight className="w-5 h-5 ml-2" /></a>
            </div>
          </div>
        </section>

        {/* Pocket Pal */}
        <section className="py-16 bg-white" id="pocket-pal-order">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl w-[320px] h-[440px] mx-auto lg:mx-0">
              <img src={IMAGES.projects.expressToEmpowerBook} alt="Pocket Pal" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">Pocket Pal</span>
              </h3>
              <p className="text-gray-700 font-medium mb-4">Bodies, Boundaries & Identity — Learning Starts at Home</p>
              <p className="text-gray-700 mb-4">A pocket-sized guide with a big impact, Pocket Pal is our 20-page illustrated activity book designed to spark curiosity, break stigma, and start important conversations at home.</p>
              <p className="text-gray-700 mb-4">Perfect for parents, guardians, or youth mentors, it brings CSE into everyday spaces in a fun, accessible way.</p>
              <div className="space-y-3 text-gray-700">
                {[
                  'Real anatomical terms — no euphemisms.',
                  'Fun, interactive prompts to spark open conversations.',
                  'Bright, inclusive illustrations that reflect diverse bodies and experiences.',
                  'Culturally sensitive content, created with input from educators and youth.',
                  'Available in English (Bahasa Malaysia, Tamil, and Mandarin in development).',
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3"><Sparkles className="w-5 h-5 text-pink-600 mt-1" /><span>{t}</span></div>
                ))}
              </div>
              <p className="text-gray-700 mt-6">📚 RM25 per copy — every purchase funds free distribution to children who need them most.</p>
              <button onClick={() => setIsPocketPalModalOpen(true)} className="mt-4 inline-flex items-center border-2 border-pink-600 text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50">Order Your Pocket Pal <ArrowRight className="w-4 h-4 ml-2" /></button>
            </div>
          </div>
        </section>

        {/* Case in Point */}
        <section className="py-16 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">Case in Point: When Art Makes Space for Courage</h3>
                <p className="text-gray-700 mb-4">In a recent workshop at Sri KDU International School, students engaged in discussions on safety and empowerment while creating personal art pieces that reflected their boundaries and values.</p>
                <div className="space-y-2">
                  {["Increased comfort discussing taboo topics.", "Greater confidence in naming and asserting personal boundaries.", "Stronger peer empathy and respect."].map((t) => (
                    <div key={t} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5" />
                      <span className="text-gray-800">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {IMAGES.expressToEmpower.caseInPoint.map((src, i) => (
                  <div key={i} className={`rounded-2xl overflow-hidden shadow ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                    <img src={src} alt={`Case study ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Art? Why Now? */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl order-last md:order-first">
                <img src={IMAGES.expressToEmpower.whyArt} alt="Why Art" className="w-full h-80 object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Why Art? Why Now?</h3>
                <p className="text-gray-700">Art is playful, non-threatening, and universal — it invites expression without fear of judgment. By embedding sexuality education in a creative process, we dismantle barriers of shame and silence, making way for honest conversations and lasting understanding. By making sexuality and autonomy education fun, artistic, and culturally sensitive, Express to Empower builds the foundations for empathy, respect, and inclusion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 opacity-95" />
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url('${IMAGES.getInvolved.callToActionBackground}')` }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Be Part of the Change</h3>
            <p className="text-lg opacity-95 max-w-3xl mx-auto mb-8">Your support helps us train more youth facilitators, bring Express to Empower workshops to underserved schools, and print and distribute free Pocket Pals.</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {[
                { tier: 'RM25', text: 'Sponsor 1 Pocket Pal' },
                { tier: 'RM250', text: 'Fund a mini-workshop for 10 students' },
                { tier: 'RM1,000', text: 'Bring E2E to a full classroom' },
              ].map((t) => (
                <div key={t.tier} className="bg-white/10 rounded-2xl p-6">
                  <div className="text-2xl font-extrabold">{t.tier}</div>
                  <div className="opacity-90">{t.text}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsDonationModalOpen(true)} className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl">Donate Now</button>
              <a href="https://forms.gle/KsfLarS8gD5gRrNy9" target="_blank" rel="noopener noreferrer" className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600">Book a Call</a>
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


