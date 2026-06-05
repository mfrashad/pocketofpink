
import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { CHAPTERS, BADGES } from '../constants';
import type { JournalEntry } from '../types';
import { Icon } from '../components/Icons';

const JournalEntryDisplay: React.FC<{ entry: JournalEntry }> = ({ entry }) => {
    switch (entry.type) {
        case 'journal-chapter1':
            return (
                <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2 text-pink-800">My Self-Portrait</h4>
                        <img src={entry.drawingUrl} alt="Self-Portrait" className="rounded-md border-2 border-pink-200 mx-auto" />
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2 text-yellow-800">Things About Me</h4>
                        <ul className="list-inside space-y-1">
                            <li><strong>My name is:</strong> {entry.name}</li>
                            <li><strong>I like to:</strong> {entry.like}</li>
                            <li><strong>I love:</strong> {entry.love}</li>
                            <li><strong>I hate:</strong> {entry.hate}</li>
                            <li><strong>I am:</strong> {entry.am}</li>
                        </ul>
                    </div>
                     <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2 text-purple-800">My Reflection</h4>
                        <p className="italic">"{entry.reflection || 'No reflection written.'}"</p>
                    </div>
                </div>
            );
        case 'journal-chapter3':
            return (
                 <div className="space-y-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2 text-teal-800">My Colours of Consent</h4>
                        <img src={entry.drawingUrl} alt="Colours of Consent" className="rounded-md border-2 border-teal-200 mx-auto" />
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2 text-yellow-800">My Reflections</h4>
                         <ul className="list-inside space-y-2">
                            <li><strong>Why are there differences for each type of person?</strong><p className="italic pl-4">"{entry.q1 || 'Not answered'}"</p></li>
                            <li><strong>Why did you choose to colour certain areas green, yellow or red?</strong><p className="italic pl-4">"{entry.q2 || 'Not answered'}"</p></li>
                            <li><strong>Do people you know often respect the boundaries you have?</strong><p className="italic pl-4">"{entry.q3 || 'Not answered'}"</p></li>
                        </ul>
                    </div>
                </div>
            );
        case 'journal-chapter4':
             return (
                 <div className="space-y-4">
                    <div className="bg-lavender-50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2 text-purple-800">My Cyber Safety Answers</h4>
                         <ul className="list-inside space-y-1">
                           {Object.entries(entry.cyberSafetyAnswers).map(([item, answer]) => (
                               <li key={item}><strong>{item}:</strong> <span className={answer ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{answer ? 'YES' : 'NO'}</span></li>
                           ))}
                        </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2 text-red-800">My Emergency Info</h4>
                        <ul className="list-inside space-y-1">
                           {Object.entries(entry.emergencyInfo).map(([field, value]) => (
                               <li key={field}><strong>{field}:</strong> {value || "Not filled"}</li>
                           ))}
                        </ul>
                    </div>
                </div>
            );
        case 'journal-chapter5':
             return (
                 <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2 text-pink-800">My Emotion Answers</h4>
                         <ul className="list-inside space-y-1">
                           {Object.entries(entry.emotionAnswers).map(([emoji, answer]) => (
                               <li key={emoji}>{emoji} is <strong>{answer || 'Not answered'}</strong></li>
                           ))}
                        </ul>
                    </div>
                    <div className="bg-lavender-50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2 text-purple-800">People I Want to Protect</h4>
                         <p className="italic">"{entry.protectionList || 'Not answered'}"</p>
                    </div>
                     <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2 text-yellow-800">My Reflections</h4>
                         <ul className="list-inside space-y-2">
                            <li><strong>What does it mean to support a friend?</strong><p className="italic pl-4">"{entry.q1 || 'Not answered'}"</p></li>
                            <li><strong>Why is it important to speak up?</strong><p className="italic pl-4">"{entry.q2 || 'Not answered'}"</p></li>
                        </ul>
                    </div>
                </div>
            );
        case 'journal-chapter6':
            return (
                 <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2 text-purple-800">My Express to Empower Artwork</h4>
                    <img src={entry.drawingUrl} alt="Coloring Competition" className="rounded-md border-2 border-purple-200 mx-auto" />
                </div>
            );
        case 'journal-placeholder':
            return (
                <div className="bg-gray-100 p-4 rounded-lg">
                    <p>{entry.content}</p>
                </div>
            )
        default:
            return null;
    }
};

const JournalScreen: React.FC = () => {
  const context = useContext(GameContext);
  if (!context) return null;
  const { setScreen, gameState } = context;

  const entries = CHAPTERS
    .map(chapter => gameState.journal[chapter.id])
    .filter((entry): entry is JournalEntry => entry !== undefined);

  const handlePrint = () => {
    window.print();
  }

  return (
    <div className="print-container">
      <div className="w-full flex justify-between items-center mb-6 no-print">
            <button
              // FIX: Changed 'menu' to 'main-menu' to match the Screen type definition.
              onClick={() => setScreen('main-menu')}
              className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Icon name="ArrowLeft" className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">My Empowerment Journal</h1>
            <div className="w-10"></div>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg">
        <div className="text-center border-b-2 border-dashed pb-4 mb-6">
          <div className="text-4xl mb-2">📖</div>
          <h2 className="text-xl font-bold text-gray-800">Bodies, Boundaries & Identity</h2>
        </div>

        {entries.length === 0 ? (
            <p className="text-gray-600 text-center py-10">Complete chapters to see your journal entries here!</p>
        ) : (
            <div className="space-y-8">
            {CHAPTERS.map(chapter => {
                const entry = gameState.journal[chapter.id];
                if (!entry) return null;
                return (
                <div key={chapter.id} className="border-2 border-pink-200 rounded-lg p-4 print-page-break">
                    <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{chapter.emoji}</span>
                    <h3 className="font-bold text-xl text-gray-800">{chapter.title}</h3>
                    </div>
                    <JournalEntryDisplay entry={entry} />
                </div>
                );
            })}
            </div>
        )}

        {gameState.earnedBadges.length > 0 && (
            <div className="mt-6 pt-6 border-t-2 border-pink-200">
            <h3 className="font-bold text-gray-800 mb-4 text-center">My Badges:</h3>
            <div className="flex flex-wrap gap-2 justify-center">
                {gameState.earnedBadges.map((badge, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-300 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Icon name="Award" /> {badge}
                </div>
                ))}
            </div>
            </div>
        )}

        <div className="text-center border-t-2 border-dashed pt-4 mt-10">
            <p className="text-sm text-gray-700 text-center italic">"Together, we can create safe, inclusive spaces where every child feels respected and empowered!"</p>
        </div>
      </div>
       {entries.length > 0 && (
            <button onClick={handlePrint} className="no-print w-full mt-6 bg-gradient-to-r from-blue-400 to-cyan-500 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              📥 Export Complete Journal
            </button>
       )}
    </div>
  );
};

export default JournalScreen;