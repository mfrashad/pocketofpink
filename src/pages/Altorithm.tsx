import React from 'react';
import { ArrowRight, Layers, Shield, Users, Megaphone, Globe, Code, Zap } from 'lucide-react';
import { IMAGES } from '../config/images';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${className || ''}`}>{children}</div>
);

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center bg-white/70 backdrop-blur rounded-2xl p-6 shadow">
    <div className="text-3xl font-extrabold text-pink-600">{value}</div>
    <div className="text-gray-700">{label}</div>
  </div>
);

const Altorithm: React.FC = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url('${IMAGES.hero.background}')` }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent">Alt//orithm</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">Rewriting the code for a safer digital future</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://forms.gle/4gK26h2uZDrEe1rk8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-pink-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg">
                  Join the Community <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#donate" className="inline-flex items-center border-2 border-pink-600 text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50">
                  Support the Work <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Stat value="65%" label="Face gendered abuse online" />
              <Stat value="60%" label="Echo-chamber exposure" />
              <Stat value="21.4M" label="#MakeSchoolASaferPlace views" />
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">The Challenge</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">AI-driven algorithms quietly decide what we see, believe, and who gets heard — often amplifying harm.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Amplified Abuse', desc: 'Algorithmic feeds can boost exposure to harassment and hate.' },
              { icon: Layers, title: 'Echo Chambers', desc: 'Feeds reinforce beliefs and normalise harmful norms.' },
              { icon: Megaphone, title: 'Suppressed Activism', desc: 'Opaque moderation deprioritises feminist and activist voices.' },
            ].map((c, i) => {
              const Icon = c.icon as any;
              return (
                <Card key={i} className="p-8 text-center border border-pink-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4"><Icon className="w-8 h-8" /></div>
                  <div className="font-semibold text-gray-800 mb-2">{c.title}</div>
                  <p className="text-gray-600 text-sm">{c.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src={IMAGES.mission.visionChildren} alt="Youth activism" className="w-full h-96 object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">Why We Started Alt//orithm</span>
            </h2>
            <p className="text-gray-700 mb-4">Our team’s activism showed both the power and peril of digital spaces. In 2021, #MakeSchoolASaferPlace reached 21.4M views and helped reignite momentum for Malaysia’s Anti-Sexual Harassment Bill.</p>
            <p className="text-gray-700">Visibility, however, brought targeted harassment and online violence — often algorithmically amplified. We asked: how do algorithms shape gendered, polarised experiences for youth, and how can they be reimagined?</p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">Our Mission</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We combine community research, creative storytelling, and policy advocacy to disrupt harmful algorithmic patterns.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Code, title: 'Map the Code', desc: 'Understand how algorithms reinforce gendered harm and polarisation.' },
              { icon: Users, title: 'Equip Youth', desc: 'Build literacy and tools to take control of feeds and narratives.' },
              { icon: Globe, title: 'Policy Change', desc: 'Push for platform accountability and transparency.' },
            ].map((c, i) => {
              const Icon = c.icon as any;
              return (
                <Card key={i} className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 text-white flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="font-semibold text-gray-800 mb-2">{c.title}</div>
                  <p className="text-gray-600 text-sm">{c.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">How We Work</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-3">Phase 1: Mapping the Code</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Youth workshops exploring algorithmic bias and online harm.</li>
                <li>Focus groups with NGOs to identify barriers to counter-narratives.</li>
                <li>Panel discussions on tactical approaches to algorithmic resistance.</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-3">Phase 2: Writing New Instructions</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Digital campaigns translating research into accessible media.</li>
                <li>Toolkits for algorithmic literacy and safer online engagement.</li>
                <li>Policy recommendations for inclusive moderation and transparency.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 opacity-95" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22grid%22 width=%2220%22 height=%2220%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 20 0 L 0 0 0 20%22 fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%220.5%22 opacity=%220.07%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23grid)%22/%3E%3C/svg%3E')]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg opacity-95 mb-6">Alt//orithm transforms youth from passive algorithm subjects into active shapers of their digital environments. We are creating a blueprint for an internet that liberates — not limits.</p>
              <p className="font-semibold">Take Back the Feed. Rewrite the Code.</p>
            </div>
            <div className="text-center">
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { value: 'Community', label: 'Join the network' },
                  { value: 'Co-create', label: 'Build tools with us' },
                  { value: 'Support', label: 'Fuel youth-led change' },
                ].map((s) => (
                  <div key={s.value} className="bg-white/10 rounded-2xl p-6">
                    <div className="text-2xl font-extrabold">{s.value}</div>
                    <div className="opacity-90">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a href="https://forms.gle/4gK26h2uZDrEe1rk8" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl">Join the Community</a>
                <a href="#donate" className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600">Support the Work</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Altorithm;


