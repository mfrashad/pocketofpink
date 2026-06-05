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
            <div className="flex items-center justify-between mb-5 w-full">
                <button
                    onClick={() => setScreen('main-menu')}
                    className="pixel-btn ghost !p-2 !text-[10px]"
                    title="Back to menu"
                >
                    ← HOME
                </button>
                <h1 className="text-sm sm:text-base font-['Press_Start_2P'] text-[#1a0d1f] tracking-widest">
                    ◆ SELECT STAGE ◆
                </h1>
                <div className="w-16" />
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
                            className={`pixel-card text-left p-5 ${
                                isLocked
                                    ? 'opacity-60 cursor-not-allowed'
                                    : 'hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer'
                            }`}
                            style={{
                                background: '#fefefe',
                                borderLeft: `8px solid ${chapter.color}`,
                                transition: 'transform 0.1s ease, box-shadow 0.1s ease',
                            }}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <span className="text-4xl leading-none" aria-hidden style={{ imageRendering: 'pixelated' }}>{chapter.emoji}</span>
                                {isLocked ? (
                                    <span className="border-[3px] border-[#1a0d1f] bg-[#efe5d2] p-1.5">
                                        <Icon name="Lock" className="w-4 h-4 text-[#1a0d1f]" />
                                    </span>
                                ) : isCompleted ? (
                                    <span className="border-[3px] border-[#1a0d1f] bg-[#6be8c5] p-1.5">
                                        <Icon name="Check" className="w-4 h-4 text-[#1a0d1f]" />
                                    </span>
                                ) : (
                                    <span className="border-[3px] border-[#1a0d1f] bg-[#ec94cc] text-[#1a0d1f] text-[9px] font-['Press_Start_2P'] uppercase px-2 py-1.5">
                                        Play
                                    </span>
                                )}
                            </div>

                            <p className="font-['Press_Start_2P'] text-[9px] uppercase tracking-widest text-[#1a0d1f]/70 mb-1">
                                Stage {String(index + 1).padStart(2, '0')}
                            </p>
                            <h3 className="font-['Press_Start_2P'] text-xs sm:text-sm text-[#1a0d1f] leading-tight mb-2">
                                {chapter.zone}
                            </h3>
                            <p className="text-base text-[#1a0d1f]/85 leading-snug">
                                {chapter.title}
                            </p>

                            {isLocked && (
                                <p className="mt-3 text-xs font-['Press_Start_2P'] uppercase text-[#1a0d1f]/60 leading-relaxed">
                                    Finish previous to unlock
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
