import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { Icon } from '../components/Icons';

const AboutScreen: React.FC = () => {
    const context = useContext(GameContext);
    if (!context) return null;
    const { setScreen } = context;

    return (
    <div>
        <div className="flex items-center justify-between mb-6">
        <button
            // FIX: Changed 'menu' to 'main-menu' to match the Screen type definition.
            onClick={() => setScreen('main-menu')}
            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
        >
            <Icon name="ArrowLeft" className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">About POP</h1>
        <div className="w-10"></div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg space-y-6">
            <img 
                src="https://www.sinarharian.com.my/uploads/images/2024/11/04/2873543.jpg" 
                alt="Pocket of Pink team" 
                className="w-full rounded-lg shadow-md mb-6 object-cover h-48"
            />
            
            <div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">About Pocket of Pink (POP)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    A feminist initiative building safe, empowering spaces for young people to explore gender, identity, and justice. Rooted in care and creativity, we use art, education, and community dialogue to challenge harmful norms and spark change. From classrooms to digital platforms, we empower girls, boys, and all youth to speak up, take up space, and reimagine a world where dignity, safety, and gender justice are a right—not a privilege.
                </p>
            </div>

            <div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Our Story</h3>
                <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                    <p>
                        Pocket of Pink began with a girl who refused to stay silent. In 2021, 17-year-old Ain Husniza posted a video calling out rape culture in schools, sparking a national reckoning. Her words ignited the hashtag #MakeSchoolASaferPlace, which went viral with over 22.4 million views—and transformed outrage into action.
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

            <div className="border-t pt-4">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Contact Us</h3>
                <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                        <Icon name="Mail" className="w-4 h-4 mr-2" />
                        <span className="text-sm">pocketofpink@gmail.com</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Icon name="Phone" className="w-4 h-4 mr-2" />
                        <span className="text-sm">+60 10-825 6393 (Kaveesha)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Icon name="Globe" className="w-4 h-4 mr-2" />
                        <a href="https://pocketofpink.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                            pocketofpink.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 text-center italic">
                "Together, we can create safe, inclusive spaces where every child feels respected and empowered!"
                </p>
            </div>
        </div>
    </div>
    );
};

export default AboutScreen;
