import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { CHAPTERS } from '../constants';
import { Icon } from '../components/Icons';

const ChapterSelect: React.FC = () => {
    const context = useContext(GameContext);
    if (!context) return null;
    const { setScreen, gameState } = context;

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center justify-between mb-6 w-full">
                <button
                    onClick={() => setScreen('main-menu')}
                    className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                    <Icon name="Home" className="w-6 h-6 text-gray-600" />
                </button>
                <h1 className="text-2xl md:text-3xl font-black text-gray-800">Choose Your Adventure</h1>
                <div className="w-10" />
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {CHAPTERS.map((chapter, index) => {
                    const isLocked = index > 0 && !gameState.completedChapters.includes(CHAPTERS[index - 1].id);
                    const isCompleted = gameState.completedChapters.includes(chapter.id);

                    return (
                        <button
                            key={chapter.id}
                            type="button"
                            disabled={isLocked}
                            onClick={() => !isLocked && setScreen({ screen: 'chapter', id: chapter.id })}
                            className={`relative text-left rounded-3xl p-6 shadow-xl transition-all duration-200
                                ${isLocked
                                    ? 'bg-gray-100 cursor-not-allowed opacity-70'
                                    : 'bg-white hover:-translate-y-1 hover:shadow-2xl cursor-pointer'}
                            `}
                            style={{
                                borderTop: `8px solid ${chapter.color}`,
                            }}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <span className="text-5xl" aria-hidden>{chapter.emoji}</span>
                                {isLocked ? (
                                    <span className="bg-gray-200 p-2 rounded-full">
                                        <Icon name="Lock" className="w-5 h-5 text-gray-500" />
                                    </span>
                                ) : isCompleted ? (
                                    <span className="bg-green-100 p-2 rounded-full">
                                        <Icon name="Check" className="w-5 h-5 text-green-600" />
                                    </span>
                                ) : (
                                    <span className="bg-pink-100 text-pink-600 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full">
                                        Play
                                    </span>
                                )}
                            </div>

                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                                Chapter {index + 1}
                            </p>
                            <h3 className="font-black text-lg text-gray-800 leading-tight mb-1">
                                {chapter.zone}
                            </h3>
                            <p className="text-sm text-gray-600 font-medium leading-snug">
                                {chapter.title}
                            </p>

                            {isLocked && (
                                <p className="mt-3 text-xs text-gray-500 font-semibold">
                                    Finish the previous chapter to unlock
                                </p>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ChapterSelect;
