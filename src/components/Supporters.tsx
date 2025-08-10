import React from 'react';

const supporters = [
  { name: 'Sri KDU Schools', logo: '/images/supporters/srikdu.png' },
  { name: 'UNICEF Malaysia', logo: '/images/supporters/unicef.png' },
  { name: 'Architects of Diversity (AOD)', logo: '/images/supporters/aod.png' },
  { name: "Children’s Rights Innovation Fund (CRIF)", logo: '/images/supporters/crif.webp' },
  { name: 'Charisma Movement', logo: '/images/supporters/charismamovement.png' },
  { name: 'Girl Guides Open Companies of Petaling Utama & Bangsar, Malaysia', logo: '/images/supporters/girlguides.jpeg' },
];

const Supporters: React.FC = () => {
  return (
    <section id="supporters" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Our Supporters
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are grateful to the partners and supporters who power our mission.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {supporters.map((s) => (
            <div key={s.name} className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              {s.logo && (
                <img src={s.logo} alt={`${s.name} logo`} className="h-16 mx-auto mb-4 object-contain" />
              )}
              <div className="text-lg font-semibold text-gray-800">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;


