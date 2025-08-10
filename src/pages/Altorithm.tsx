import React, { useState } from 'react';
import DonationModal from '../components/DonationModal';

const Altorithm: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <>
      <div className="bg-black text-white font-sans">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative bg-[radial-gradient(ellipse_at_center,rgba(255,107,157,0.1)_0%,rgba(0,0,0,0.8)_70%)]">
          <div className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-5" style={{backgroundImage: 'url(/images/altorithm-transparent.png)'}}></div>
          <div className="container max-w-7xl mx-auto px-5 relative">
            <div className="max-w-4xl z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-5">
                Rewriting the code for a safer digital future
              </h1>
              <p className="text-2xl text-designPink font-semibold mb-7">
                Take Back the Feed. Rewrite the Code.
              </p>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                Alt//orithm transforms youth from passive algorithm subjects into active shapers of their digital environments. By centring gender justice, amplifying diverse youth voices, and building cross-sector coalitions, we are creating a blueprint for an internet that liberates — not limits.
              </p>
              <div className="flex gap-5 flex-wrap">
                <a href="https://forms.gle/4gK26h2uZDrEe1rk8" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-designPink to-designCyan transition-transform hover:scale-105">
                  Join the Community →
                </a>
                <a href="#mission" className="px-8 py-4 rounded-full font-semibold border-2 border-white transition hover:bg-white hover:text-black">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="absolute top-1/4 left-[10%] text-designCyan/30 font-mono text-sm animate-float pointer-events-none">
            if (algorithm == harmful) {'{'} rewrite(); {'}'}
          </div>
          <div className="absolute top-3/5 right-[15%] text-designCyan/30 font-mono text-sm animate-float [animation-delay:-2s] pointer-events-none">
            function amplify(youth_voices) {'{'} return liberation; {'}'}
          </div>
          <div className="absolute bottom-1/3 left-[20%] text-designCyan/30 font-mono text-sm animate-float [animation-delay:-4s] pointer-events-none">
            const future = inclusive && safe;
          </div>
        </section>

        {/* Challenge Section */}
        <section id="challenge" className="py-24 bg-gradient-to-b from-black to-[#111]">
          <div className="container max-w-7xl mx-auto px-5">
            <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-designPink to-designCyan text-transparent bg-clip-text">
              The Challenge
            </h2>
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
                <h3 className="text-2xl text-designPink font-bold mb-4">Amplify harassment & hate</h3>
                <span className="text-5xl font-black text-designCyan block mb-3">65%</span>
                <p className="text-gray-300">of young women in Malaysia face gendered abuse online, with algorithmic feeds boosting hate speech exposure by up to 70%.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
                <h3 className="text-2xl text-designPink font-bold mb-4">Lock youth into echo chambers</h3>
                <span className="text-5xl font-black text-designCyan block mb-3">60%</span>
                <p className="text-gray-300">say their feeds mostly reinforce existing beliefs, normalising harmful norms.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
                <h3 className="text-2xl text-designPink font-bold mb-4">Suppress activism</h3>
                <span className="text-5xl font-black text-designCyan block mb-3">∞</span>
                <p className="text-gray-300">Opaque moderation "shadow bans" or deprioritises feminist and activist voices.</p>
              </div>
            </div>
            <p className="text-center text-lg text-gray-300 max-w-4xl mx-auto">
              For young people — regardless of gender — this creates a double bind: the same platforms that spark movements also become arenas of relentless abuse, shaping identities and beliefs in ways few can see, but all can feel.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-24 bg-black">
          <div className="container max-w-7xl mx-auto px-5">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-extrabold mb-8">Why We Started Alt//orithm</h2>
                <p className="text-gray-300 mb-5">In 2021, the youth-led hashtag #MakeSchoolASaferPlace became a nationwide rallying cry for safer, more respectful schools. Mobilised almost entirely online, it reached over 21.4 million views and helped reignite a 30-year push for Malaysia's Anti-Sexual Harassment Bill, which was tabled in 2022.</p>
                <p className="text-gray-300 mb-8">It was proof that digital advocacy can drive real policy change — but it also exposed a darker reality. As visibility grew, so did targeted harassment, threats, and online violence, especially towards young activists.</p>
                <h3 className="text-designPink text-2xl font-bold mt-8 mb-5">Our Mission</h3>
                <p className="text-gray-300 mb-5">Alt//orithm exists to interrupt harmful algorithmic patterns and redirect digital systems toward gender justice, civic participation, and youth empowerment.</p>
                <ul className="space-y-4">
                  <li className="pl-6 border-l-4 border-designPink font-medium">Map how algorithms reinforce gendered harm and polarisation</li>
                  <li className="pl-6 border-l-4 border-designPink font-medium">Equip youth to take control of their digital feeds and narratives</li>
                  <li className="pl-6 border-l-4 border-designPink font-medium">Push for platform accountability without sacrificing freedom of expression</li>
                </ul>
              </div>
              <div>
                <img src="/images/altorithm-why.jpg" alt="Youth activists working on laptops" className="rounded-3xl shadow-2xl object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section id="work" className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
          <div className="container max-w-7xl mx-auto px-5">
            <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-designPink to-designCyan text-transparent bg-clip-text">
              How We Work
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white/[.03] p-10 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-designPink to-designCyan" />
                <h3 className="text-3xl font-bold text-designPink mb-5">Phase 1: Mapping the Code</h3>
                <ul className="space-y-3">
                  <li className="pl-7 relative text-gray-300 before:content-['→'] before:absolute before:left-0 before:text-designCyan before:font-bold">Youth workshops exploring algorithmic bias and online harm</li>
                  <li className="pl-7 relative text-gray-300 before:content-['→'] before:absolute before:left-0 before:text-designCyan before:font-bold">Focus groups with NGOs to identify barriers to counter-narratives</li>
                  <li className="pl-7 relative text-gray-300 before:content-['→'] before:absolute before:left-0 before:text-designCyan before:font-bold">Panel discussions on tactical approaches to algorithmic resistance</li>
                </ul>
              </div>
              <div className="bg-white/[.03] p-10 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-designPink to-designCyan" />
                <h3 className="text-3xl font-bold text-designPink mb-5">Phase 2: Writing New Instructions</h3>
                <ul className="space-y-3">
                  <li className="pl-7 relative text-gray-300 before:content-['→'] before:absolute before:left-0 before:text-designCyan before:font-bold">Digital campaigns translating research into accessible media</li>
                  <li className="pl-7 relative text-gray-300 before:content-['→'] before:absolute before:left-0 before:text-designCyan before:font-bold">Toolkits for algorithmic literacy and safer online engagement</li>
                  <li className="pl-7 relative text-gray-300 before:content-['→'] before:absolute before:left-0 before:text-designCyan before:font-bold">Policy recommendations for inclusive moderation and platform transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section id="join" className="py-24 text-center bg-[linear-gradient(135deg,rgba(255,107,157,0.1),rgba(78,205,196,0.1))]">
          <div className="container max-w-7xl mx-auto px-5">
            <h2 className="text-5xl font-black mb-7">Take Back the Feed</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              The future of the internet is being written right now — in lines of code, in invisible rules that decide who gets heard and who gets hurt. We don't have to accept an algorithm that thrives on outrage, silences activists, and normalises abuse.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
              <div className="bg-black/50 p-8 rounded-2xl border border-white/10 transition-all hover:-translate-y-1 hover:border-designPink">
                <h3 className="text-xl font-bold text-designCyan mb-3">Join our founding network</h3>
                <p className="text-gray-400">Share your experiences, contribute ideas, and help us map how algorithms impact youth in Malaysia.</p>
              </div>
              <div className="bg-black/50 p-8 rounded-2xl border border-white/10 transition-all hover:-translate-y-1 hover:border-designPink">
                <h3 className="text-xl font-bold text-designCyan mb-3">Be part of the build</h3>
                <p className="text-gray-400">Get early access to workshops and be among the first to test our algorithmic literacy tools.</p>
              </div>
              <div className="bg-black/50 p-8 rounded-2xl border border-white/10 transition-all hover:-translate-y-1 hover:border-designPink">
                <h3 className="text-xl font-bold text-designCyan mb-3">Fuel the movement</h3>
                <p className="text-gray-400">Donation & support powers youth-led research, creative activism, and policy advocacy for safer digital spaces.</p>
              </div>
            </div>
            <div className="flex gap-5 flex-wrap justify-center">
              <a href="https://forms.gle/4gK26h2uZDrEe1rk8" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-designPink to-designCyan transition-transform hover:scale-105">
                Join the Community →
              </a>
              <button onClick={() => setIsDonationModalOpen(true)} className="px-8 py-4 rounded-full font-semibold border-2 border-white transition hover:bg-white hover:text-black">
                Support the Work
              </button>
            </div>
          </div>
        </section>
      </div>
      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </>
  );
};

export default Altorithm;

