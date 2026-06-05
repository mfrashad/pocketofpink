import React from 'react';
import { IMAGES } from '../config/images';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ain Husniza',
      role: 'Founder & Executive Director',
      description:
        'Founder and Executive Director of Pocket of Pink, leading the organisation\'s vision and advocacy for gender justice.',
      image: IMAGES.team.ainHusniza,
    },
    {
      name: 'Karyn Ngiam',
      role: 'Strategic Director',
      description:
        'Strategic Director, shaping Pocket of Pink\'s direction, partnerships, and long-term impact.',
      image: IMAGES.team.karyn || IMAGES.team.kaveeshaThamilarasu,
    },
    {
      name: 'Kaveesha Thamilarasu',
      role: 'Programmes Director',
      description:
        'Programmes Director, leading the development and delivery of inclusive, youth-centred educational initiatives.',
      image: IMAGES.team.kaveeshaThamilarasu,
    },
  ];

  return (
    <section id="team" className="bg-pop-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="pop-brush text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-6">
            Built by youth.
            <br />
            <span className="text-pop-pink">Led by youth.</span>
          </h2>
          <p className="font-sans text-lg lg:text-xl leading-relaxed text-justify">
            Pocket of Pink is run by a team of young people who are doing the
            work because it is theirs to do, not because they are waiting to
            inherit it later.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="p-6 lg:p-8 bg-pop-creamSoft rounded-2xl flex flex-col"
            >
              <div className="w-full aspect-square overflow-hidden mb-6 rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-pop-pinkDeep mb-2">
                {member.role}
              </p>
              <h3 className="pop-brush text-3xl uppercase text-pop-ink mb-4">
                {member.name}
              </h3>
              <p className="font-sans text-base leading-relaxed text-pop-ink/80 text-justify">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
