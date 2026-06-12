import React from 'react';

const supporters = [
  { name: 'Sri KDU Schools', logo: '/images/supporters/srikdu.webp' },
  { name: 'UNICEF Malaysia', logo: '/images/supporters/unicef.webp' },
  { name: 'Architects of Diversity (AOD)', logo: '/images/supporters/aod.webp' },
  { name: "Children's Rights Innovation Fund (CRIF)", logo: '/images/supporters/crif.webp' },
  { name: 'Charisma Movement', logo: '/images/supporters/charismamovement.webp' },
  { name: 'Girl Guides Open Companies of Petaling Utama & Bangsar, Malaysia', logo: '/images/supporters/girlguides.webp' },
];

const Supporters: React.FC = () => {
  return (
    <section id="supporters" className="bg-pop-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-6">
            Our supporters.
          </h2>
          <p className="font-sans text-lg lg:text-xl leading-relaxed text-justify">
            We are grateful to the partners and funders who power the work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {supporters.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl p-6 lg:p-8 text-center bg-pop-creamSoft flex flex-col items-center justify-center"
            >
              {s.logo && (
                <img
                  src={s.logo}
                  alt={`${s.name} logo`}
                  className="h-16 mx-auto mb-4 object-contain"
                />
              )}
              <div className="font-sans font-semibold text-base text-pop-ink">
                {s.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
