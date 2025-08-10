import React from 'react';
import { Award, Users2, BookHeart, Target } from 'lucide-react';
import { IMAGES } from '../config/images';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              About Pocket of Pink (POP)
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A feminist initiative building safe, empowering spaces for young people to explore gender, identity, and justice. Rooted in care and creativity, we use art, education, and community dialogue to challenge harmful norms and spark change. From classrooms to digital platforms, we empower girls, boys, and all youth to speak up, take up space, and reimagine a world where dignity, safety, and gender justice are a right—not a privilege.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Pocket of Pink began with a girl who refused to stay silent. In 2021, 17-year-old Ain Husniza posted a video calling out rape culture in schools, sparking a national reckoning. Her words ignited the hashtag <strong className="text-pink-600">#MakeSchoolASaferPlace</strong>, which went viral with over 22.4 million views—and transformed outrage into action.
              </p>
              <p>
                From that spark, Ain Husniza founded Pocket of Pink: a platform not just to fight harm, but to build a world where every young person feels safe and confident in their identity and gender.
              </p>
              <p>
                We work at the intersection of education, art, and advocacy—running school workshops, creating resources, and leading digital campaigns that have reached over 220,000 people.
              </p>
              <p>
                Our mission is rooted in gender justice: dismantling the norms and systems that harm all genders, and growing a generation ready to lead with empathy, equality, and courage. And this story is still being written — by every young person, parent, and ally who joins us.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8">
              <img 
                src={IMAGES.about.main}
                alt="Young people learning and engaging in educational activities"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Recognition</h4>
                  <p className="text-sm text-gray-600">KLSCAH Civil Society Award & WikiImpact Top 100 Changemakers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Team</h4>
                  <p className="text-sm text-gray-600">Youth leaders from diverse gender, cultural, and lived experiences</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BookHeart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Approach</h4>
                  <p className="text-sm text-gray-600">Creative strategies through art, storytelling, and education</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Focus</h4>
                  <p className="text-sm text-gray-600">Advancing gender justice and empowerment in communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookHeart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Inclusive Education</h3>
            <p className="text-gray-600">
              We make knowledge about gender, identity, bodies, and boundaries accessible to all young people—through creative, age-appropriate, and culturally sensitive approaches.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Youth Leadership</h3>
            <p className="text-gray-600">
              Empowering young people to lead change in their communities and advocate for their rights and the rights of others.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Social Change</h3>
            <p className="text-gray-600">
              Challenging harmful norms and advocating for systemic changes that promote gender equality and child safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;