import React, { useState } from 'react';
import DonationModal from '../components/DonationModal';
import Header from '../components/Header';

const Altorithm: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <>
      <Header onDonateClick={() => setIsDonationModalOpen(true)} />
      <main className="bg-black text-pop-cream font-sans">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center bg-[radial-gradient(ellipse_at_center,rgba(236,148,204,0.12)_0%,rgba(0,0,0,0.85)_70%)] overflow-hidden">
          <div className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-5" style={{ backgroundImage: 'url(/images/altorithm-transparent.webp)' }} />
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24">
            <div className="max-w-4xl relative z-10">
              <h1 className="pop-brush text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] mb-5">
                Rewriting the code for a <span className="text-designPink">safer digital future.</span>
              </h1>
              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-designPink mb-6">
                Take back the feed. Rewrite the code.
              </p>
              <p className="font-sans text-base lg:text-lg leading-relaxed text-pop-cream/80 mb-10 max-w-3xl text-justify">
                Alt//orithm transforms youth from passive algorithm subjects into active shapers of their digital environments. By centring gender justice, amplifying diverse youth voices, and building cross-sector coalitions, we are creating a blueprint for an internet that liberates, not limits.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://forms.gle/4gK26h2uZDrEe1rk8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-designPink text-black px-6 py-3 font-sans font-semibold text-sm sm:text-base rounded-full hover:scale-105 transition-transform shadow-md">
                  Join the community
                </a>
                <a href="#mission" className="inline-flex items-center gap-2 border-2 border-pop-cream text-pop-cream px-6 py-3 font-sans font-semibold text-sm sm:text-base rounded-full hover:bg-pop-cream hover:text-black transition-colors">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* code snippets — keep mono for code aesthetic */}
          <div className="absolute top-1/4 left-[10%] text-designCyan/30 font-mono text-sm animate-float pointer-events-none">
            if (algorithm == harmful) {'{'} rewrite(); {'}'}
          </div>
          <div className="absolute top-3/5 right-[15%] text-designCyan/30 font-mono text-sm animate-float [animation-delay:-2s] pointer-events-none">
            function amplify(youth_voices) {'{'} return liberation; {'}'}
          </div>
          <div className="absolute bottom-1/3 left-[20%] text-designCyan/30 font-mono text-sm animate-float [animation-delay:-4s] pointer-events-none">
            const future = inclusive &amp;&amp; safe;
          </div>
        </section>

        {/* Challenge */}
        <section id="challenge" className="py-20 lg:py-28 bg-gradient-to-b from-black to-[#111]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-12 text-center">
              The <span className="text-designPink">challenge.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {[
                { title: 'Amplify harassment & hate', value: '65%', body: 'of young women in Malaysia face gendered abuse online, with algorithmic feeds boosting hate speech exposure by up to 70%.' },
                { title: 'Lock youth into echo chambers', value: '60%', body: 'say their feeds mostly reinforce existing beliefs, normalising harmful norms.' },
                { title: 'Suppress activism', value: '∞', body: 'Opaque moderation "shadow bans" or deprioritises feminist and activist voices.' },
              ].map((c) => (
                <div key={c.title} className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
                  <p className="font-sans text-xs uppercase tracking-[0.25em] text-designPink mb-3">{c.title}</p>
                  <span className="pop-brush text-5xl text-designCyan block mb-3">{c.value}</span>
                  <p className="font-sans text-sm text-pop-cream/80 text-justify">{c.body}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-center text-base lg:text-lg text-pop-cream/80 max-w-4xl mx-auto text-justify">
              For young people, regardless of gender, this creates a double bind: the same platforms that spark movements also become arenas of relentless abuse, shaping identities and beliefs in ways few can see, but all can feel.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="py-20 lg:py-28 bg-black">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="pop-brush text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] mb-6">
                  Why we started <span className="text-designPink">Alt//orithm.</span>
                </h2>
                <p className="font-sans text-base lg:text-lg leading-relaxed text-pop-cream/80 mb-5 text-justify">
                  In 2021, the youth-led hashtag #MakeSchoolASaferPlace became a nationwide rallying cry for safer, more respectful schools. Mobilised almost entirely online, it reached over 21.4 million views and helped reignite a 30-year push for Malaysia's Anti-Sexual Harassment Bill, which was tabled in 2022.
                </p>
                <p className="font-sans text-base lg:text-lg leading-relaxed text-pop-cream/80 mb-8 text-justify">
                  It was proof that digital advocacy can drive real policy change, but it also exposed a darker reality. As visibility grew, so did targeted harassment, threats, and online violence, especially towards young activists.
                </p>
                <p className="font-sans text-xs uppercase tracking-[0.25em] text-designPink mb-3">Our mission</p>
                <h3 className="pop-brush text-2xl sm:text-3xl uppercase leading-tight mb-5">
                  Interrupt the patterns, redirect the system.
                </h3>
                <p className="font-sans text-base leading-relaxed text-pop-cream/80 mb-5 text-justify">
                  Alt//orithm exists to interrupt harmful algorithmic patterns and redirect digital systems toward gender justice, civic participation, and youth empowerment.
                </p>
                <ul className="space-y-4 font-sans">
                  <li className="pl-6 border-l-4 border-designPink font-medium text-pop-cream/85">Map how algorithms reinforce gendered harm and polarisation</li>
                  <li className="pl-6 border-l-4 border-designPink font-medium text-pop-cream/85">Equip youth to take control of their digital feeds and narratives</li>
                  <li className="pl-6 border-l-4 border-designPink font-medium text-pop-cream/85">Push for platform accountability without sacrificing freedom of expression</li>
                </ul>
              </div>
              <div>
                <img src="/images/altorithm-why.webp" alt="Youth activists working on laptops" className="rounded-3xl shadow-2xl object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section id="work" className="py-20 lg:py-28 bg-gradient-to-b from-black to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-12 text-center">
              How we <span className="text-designPink">work.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {[
                { phase: 'Phase 1', title: 'Mapping the code', items: [
                  'Youth workshops exploring algorithmic bias and online harm',
                  'Focus groups with NGOs to identify barriers to counter-narratives',
                  'Panel discussions on tactical approaches to algorithmic resistance',
                ] },
                { phase: 'Phase 2', title: 'Writing new instructions', items: [
                  'Digital campaigns translating research into accessible media',
                  'Toolkits for algorithmic literacy and safer online engagement',
                  'Policy recommendations for inclusive moderation and platform transparency',
                ] },
              ].map((p) => (
                <div key={p.phase} className="relative bg-white/[.03] p-8 lg:p-10 rounded-3xl border border-white/10 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-designPink to-designCyan" />
                  <p className="font-sans text-xs uppercase tracking-[0.25em] text-designCyan mb-3">{p.phase}</p>
                  <h3 className="pop-brush text-3xl lg:text-4xl uppercase text-designPink mb-5 leading-tight">{p.title}</h3>
                  <ul className="space-y-3 font-sans">
                    {p.items.map((item) => (
                      <li key={item} className="pl-7 relative text-pop-cream/80 before:content-['→'] before:absolute before:left-0 before:text-designCyan before:font-bold">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join */}
        <section id="join" className="py-20 lg:py-28 text-center bg-[linear-gradient(135deg,rgba(236,148,204,0.1),rgba(78,205,196,0.1))]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-6">
              Take back <span className="text-designPink">the feed.</span>
            </h2>
            <p className="font-sans text-base lg:text-lg text-pop-cream/85 max-w-4xl mx-auto mb-12 text-justify">
              The future of the internet is being written right now, in lines of code, in invisible rules that decide who gets heard and who gets hurt. We don't have to accept an algorithm that thrives on outrage, silences activists, and normalises abuse.
            </p>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 text-left">
              {[
                { title: 'Join our founding network', body: 'Share your experiences, contribute ideas, and help us map how algorithms impact youth in Malaysia.' },
                { title: 'Be part of the build', body: 'Get early access to workshops and be among the first to test our algorithmic literacy tools.' },
                { title: 'Fuel the movement', body: 'Donations & support power youth-led research, creative activism, and policy advocacy for safer digital spaces.' },
              ].map((c) => (
                <div key={c.title} className="bg-black/50 p-8 rounded-2xl border border-white/10 transition-all hover:-translate-y-1 hover:border-designPink">
                  <p className="font-sans text-xs uppercase tracking-[0.25em] text-designCyan mb-3">Join</p>
                  <h3 className="pop-brush text-2xl uppercase text-pop-cream mb-3 leading-tight">{c.title}</h3>
                  <p className="font-sans text-sm text-pop-cream/70 text-justify">{c.body}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://forms.gle/4gK26h2uZDrEe1rk8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-designPink text-black px-7 py-3.5 font-sans font-semibold text-base rounded-full hover:scale-105 transition-transform shadow-md">
                Join the community
              </a>
              <button onClick={() => setIsDonationModalOpen(true)} className="inline-flex items-center gap-2 border-2 border-pop-cream text-pop-cream px-7 py-3.5 font-sans font-semibold text-base rounded-full hover:bg-pop-cream hover:text-black transition-colors">
                Support the work
              </button>
            </div>
          </div>
        </section>
      </main>
      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </>
  );
};

export default Altorithm;
