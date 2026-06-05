
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
    <div className="flex flex-col items-center justify-center text-center py-2">
      <img
        src={titleCard.src}
        alt={titleCard.alt}
        className="mx-auto w-full max-w-[220px] md:max-w-[280px]"
        style={{ imageRendering: 'pixelated' }}
      />

      <h1 className="text-xs sm:text-sm font-normal text-[#1a0d1f] mt-3 mb-4 tracking-widest">
        ▼ POCKET PAL ▼
      </h1>

      <div className="space-y-3 w-full max-w-xs">
        <button onClick={() => setScreen('chapter-select')} className="pixel-btn w-full">
          ▶ Start Game
        </button>
        <button onClick={() => setScreen('journal')} className="pixel-btn alt w-full">
          ★ My Journal
        </button>
        <button onClick={() => setScreen('about')} className="pixel-btn warn w-full">
          ? About POP
        </button>
      </div>

      <div className="pixel-card mt-5 p-3 w-full max-w-xs">
        <div className="flex justify-between items-center text-[#1a0d1f]">
          <div className="text-center px-2">
            <div className="font-['Press_Start_2P'] text-sm">{gameState.empowermentTokens}</div>
            <div className="text-xs tracking-wider mt-1">TOKENS</div>
          </div>
          <div className="text-center px-2">
            <div className="font-['Press_Start_2P'] text-sm">{gameState.earnedBadges.length}</div>
            <div className="text-xs tracking-wider mt-1">BADGES</div>
          </div>
          <div className="text-center px-2">
            <div className="font-['Press_Start_2P'] text-sm">{gameState.completedChapters.length}/{CHAPTERS.length}</div>
            <div className="text-xs tracking-wider mt-1">CHAPTERS</div>
          </div>
        </div>
      </div>

      <button onClick={resetGame} className="mt-4 text-xs text-[#1a0d1f]/60 underline hover:text-[#1a0d1f]">
        [ Reset Progress ]
      </button>
    </div>
  );
};

export default MainMenu;
