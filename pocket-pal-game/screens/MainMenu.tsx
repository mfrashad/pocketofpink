
import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { CHAPTERS } from '../constants';
import { IMAGES } from '../assets';

const MainMenu: React.FC = () => {
  const context = useContext(GameContext);

  if (!context) return null;
  const { setScreen, resetGame, gameState } = context;

  const { titleCard } = IMAGES;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="text-center mb-4">
        <img src={titleCard.src} alt={titleCard.alt} className={`${titleCard.sizeClasses} ${titleCard.marginClasses || ''}`} />
      </div>

      <div className="space-y-4 w-full max-w-xs">
        <button
          onClick={() => setScreen('chapter-select')}
          className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 px-5 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          🎮 Start Game
        </button>
        <button
          onClick={() => setScreen('journal')}
          className="w-full bg-gradient-to-r from-teal-400 to-blue-400 text-white py-3 px-5 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          📖 My Journal
        </button>
        <button
          onClick={() => setScreen('about')}
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white py-3 px-5 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          ℹ️ About POP
        </button>
      </div>

      <div className="mt-8 bg-white/60 backdrop-blur rounded-xl p-4 w-full max-w-xs">
        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{gameState.empowermentTokens}</div>
            <div className="text-sm text-gray-600">Tokens</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-600">{gameState.earnedBadges.length}</div>
            <div className="text-sm text-gray-600">Badges</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600">{gameState.completedChapters.length}/{CHAPTERS.length}</div>
            <div className="text-sm text-gray-600">Chapters</div>
          </div>
        </div>
      </div>
       <button onClick={resetGame} className="mt-8 text-sm text-gray-500 hover:underline">Reset Game Progress</button>
    </div>
  );
};

export default MainMenu;