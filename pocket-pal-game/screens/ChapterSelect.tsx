
import React, { useContext, useState, useEffect, useCallback, useRef } from 'react';
import { GameContext } from '../context/GameContext';
import { CHAPTERS } from '../constants';
import { Icon } from '../components/Icons';
import type { ChapterId } from '../types';
import InteractiveMapBackground from '../components/InteractiveMapBackground';

// --- MAP & PLAYER CONFIGURATION ---

const ZONE_LAYOUT = [
  { top: 65, left: 5, width: 28, height: 25, z: 10 },   // Chapter 1: identity (Grove)
  { top: 38, left: 42, width: 15, height: 25, z: 20 },  // Chapter 2: bodies (Bridge)
  { top: 42, left: 0, width: 100, height: 15, z: 5 },   // Chapter 3: rights (River)
  { top: 10, left: 65, width: 30, height: 25, z: 10 },  // Chapter 4: safety (Cave)
  { top: 65, left: 68, width: 28, height: 25, z: 10 },  // Chapter 5: support (Village)
  { top: 12, left: 10, width: 28, height: 22, z: 10 },  // Chapter 6: express (Garden)
];

const ZONES = CHAPTERS.map((c, i) => ({
    id: c.id,
    name: c.zone,
    color: c.color,
    ...ZONE_LAYOUT[i]
}));

const PLAYER_SIZE = { width: 6, height: 8 }; // Player size in %
const KEYBOARD_SPEED = 1.5; // Player speed in % per key press for keyboard
const CLICK_MOVE_SPEED = 0.8; // Player speed in % per frame for click movement
const MOVEMENT_THRESHOLD = 0.5; // Distance to target to stop click-based moving

// --- COMPONENT ---

const ChapterSelect: React.FC = () => {
    const context = useContext(GameContext);
    if (!context) return null;
    const { setScreen, gameState } = context;

    const mapRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number | null>(null);

    const [playerPosition, setPlayerPosition] = useState({ top: 80, left: 48 });
    const [targetPosition, setTargetPosition] = useState<{ top: number; left: number } | null>(null);
    const [clickMarker, setClickMarker] = useState<{ top: number; left: number; key: number } | null>(null);
    const [activeZoneId, setActiveZoneId] = useState<ChapterId | null>(null);
    const [isMoving, setIsMoving] = useState(false);

    const handleInteraction = useCallback(() => {
        if (activeZoneId) {
            const chapterIndex = CHAPTERS.findIndex(c => c.id === activeZoneId);
            const isLocked = chapterIndex > 0 && !gameState.completedChapters.includes(CHAPTERS[chapterIndex - 1].id);
            if (!isLocked) {
                setScreen({ screen: 'chapter', id: activeZoneId });
            }
        }
    }, [activeZoneId, gameState.completedChapters, setScreen]);

    const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!mapRef.current) return;

        const rect = mapRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        const targetLeft = (clickX / rect.width) * 100 - PLAYER_SIZE.width / 2;
        const targetTop = (clickY / rect.height) * 100 - PLAYER_SIZE.height / 2;

        const clampedLeft = Math.max(0, Math.min(100 - PLAYER_SIZE.width, targetLeft));
        const clampedTop = Math.max(0, Math.min(100 - PLAYER_SIZE.height, targetTop));

        setTargetPosition({ top: clampedTop, left: clampedLeft });
        setClickMarker({ top: (clickY / rect.height) * 100, left: (clickX / rect.width) * 100, key: Date.now() });
        setIsMoving(true);
    };

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        // Only prevent default if it's a movement key
        if (['w', 's', 'a', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'e'].includes(e.key)) {
            e.preventDefault();
        }
        
        if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
        setTargetPosition(null);
        setClickMarker(null);
        
        let newPos = { ...playerPosition };
        switch (e.key) {
            case 'w': case 'ArrowUp':
                newPos.top = Math.max(0, newPos.top - KEYBOARD_SPEED);
                break;
            case 's': case 'ArrowDown':
                newPos.top = Math.min(100 - PLAYER_SIZE.height, newPos.top + KEYBOARD_SPEED);
                break;
            case 'a': case 'ArrowLeft':
                newPos.left = Math.max(0, newPos.left - KEYBOARD_SPEED);
                break;
            case 'd': case 'ArrowRight':
                newPos.left = Math.min(100 - PLAYER_SIZE.width, newPos.left + KEYBOARD_SPEED);
                break;
            case 'e': case 'Enter':
                handleInteraction();
                return;
            default:
                return;
        }
        setPlayerPosition(newPos);
        setIsMoving(true);
    }, [playerPosition, handleInteraction]);
    
    const handleKeyUp = useCallback(() => {
        setIsMoving(false);
    }, []);
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [handleKeyDown, handleKeyUp]);

    useEffect(() => {
        if (!targetPosition) return;

        const movePlayer = () => {
            setPlayerPosition(currentPos => {
                const dx = targetPosition.left - currentPos.left;
                const dy = targetPosition.top - currentPos.top;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < MOVEMENT_THRESHOLD) {
                    setTargetPosition(null);
                    setClickMarker(null);
                    setIsMoving(false);
                    return currentPos;
                }
                
                const newLeft = currentPos.left + (dx / distance) * CLICK_MOVE_SPEED;
                const newTop = currentPos.top + (dy / distance) * CLICK_MOVE_SPEED;
                return { top: newTop, left: newLeft };
            });

            animationFrameRef.current = requestAnimationFrame(movePlayer);
        };
        
        animationFrameRef.current = requestAnimationFrame(movePlayer);

        return () => {
            if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [targetPosition]);

    useEffect(() => {
        const p = { x: playerPosition.left, y: playerPosition.top, w: PLAYER_SIZE.width, h: PLAYER_SIZE.height };
        
        let currentZone: ChapterId | null = null;
        
        // Check "Bridge" first since it's small and overlapping
        const bridgeZone = ZONES.find(z => z.id === 'bodies')!;
        const bz = { x: bridgeZone.left, y: bridgeZone.top, w: bridgeZone.width, h: bridgeZone.height };
        if (p.x < bz.x + bz.w && p.x + p.w > bz.x && p.y < bz.y + bz.h && p.y + p.h > bz.y) {
             setActiveZoneId('bodies');
             return;
        }

        for (const zone of ZONES) {
            if (zone.id === 'bodies') continue;
            const z = { x: zone.left, y: zone.top, w: zone.width, h: zone.height };
            if (p.x < z.x + z.w && p.x + p.w > z.x && p.y < z.y + z.h && p.y + p.h > z.y) {
                currentZone = zone.id;
                break;
            }
        }
        setActiveZoneId(currentZone);
    }, [playerPosition]);
    
    const activeZone = activeZoneId ? CHAPTERS.find(c => c.id === activeZoneId) : null;
    const isZoneLocked = activeZone ? (CHAPTERS.findIndex(c => c.id === activeZone.id) > 0 && !gameState.completedChapters.includes(CHAPTERS[CHAPTERS.findIndex(c => c.id === activeZone.id) - 1].id)) : false;

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center justify-between mb-4 w-full">
                <button onClick={() => setScreen('main-menu')} className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all z-20">
                    <Icon name="Home" className="w-6 h-6 text-gray-600" />
                </button>
                <h1 className="text-2xl font-bold text-gray-800">Choose Your Adventure</h1>
                <div className="w-10"></div>
            </div>

            <div 
              ref={mapRef}
              onClick={handleMapClick}
              className="w-full aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden relative border-8 border-white/50 cursor-pointer touch-none bg-white"
            >
                <InteractiveMapBackground />

                {/* --- Chapter Zones --- */}
                {ZONES.map((zoneData, index) => {
                    const chapter = CHAPTERS[index];
                    const isLocked = index > 0 && !gameState.completedChapters.includes(CHAPTERS[index - 1].id);
                    const isCompleted = gameState.completedChapters.includes(zoneData.id);
                    const isActive = activeZoneId === zoneData.id;
                    const isRiver = chapter.id === 'rights';
                    
                    const zoneStyle: React.CSSProperties = {
                        top: `${zoneData.top}%`, left: `${zoneData.left}%`,
                        width: `${zoneData.width}%`, height: `${zoneData.height}%`,
                        zIndex: zoneData.z,
                    };

                    return (
                        <div key={zoneData.id} className="absolute" style={zoneStyle}>
                           <div className={`w-full h-full relative transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
                                <div
                                  onClick={(e) => {
                                      e.stopPropagation();
                                      if (!isLocked) {
                                          setScreen({ screen: 'chapter', id: chapter.id });
                                      }
                                  }}
                                  className={`absolute -top-10 ${isRiver ? 'left-[15%]' : 'left-1/2'} -translate-x-1/2 bg-white/90 backdrop-blur-md text-gray-800 font-black px-4 py-2 rounded-2xl text-sm whitespace-nowrap shadow-xl transition-all border-b-4 border-gray-200 ${!isLocked ? 'cursor-pointer hover:-translate-y-1 hover:bg-white' : 'cursor-not-allowed opacity-80'}`}>
                                    <span className="mr-2">{chapter.emoji}</span>
                                    {chapter.zone}
                                </div>
                                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                    {isLocked && (
                                        <div className="bg-black/20 p-2 rounded-full backdrop-blur-sm">
                                            <Icon name="Lock" className="w-8 h-8 text-white drop-shadow-lg" />
                                        </div>
                                    )}
                                    {isCompleted && !isLocked && (
                                        <div className="bg-green-500/20 p-2 rounded-full backdrop-blur-sm animate-pulse">
                                            <Icon name="Check" className="w-10 h-10 text-green-500 drop-shadow-lg" />
                                        </div>
                                    )}
                                </div>
                           </div>
                        </div>
                    );
                })}
                
                 {/* --- Click Marker --- */}
                {clickMarker && (
                    <div
                        key={clickMarker.key}
                        className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none animate-ripple"
                        style={{ top: `${clickMarker.top}%`, left: `${clickMarker.left}%`, zIndex: 40, }}
                    />
                )}

                {/* --- Player Character --- */}
                <div
                    className="absolute transition-transform duration-100"
                    style={{
                        top: `${playerPosition.top}%`, left: `${playerPosition.left}%`,
                        width: `${PLAYER_SIZE.width}%`, height: `${PLAYER_SIZE.height}%`,
                        zIndex: 100,
                        animation: isMoving ? 'bounce 0.4s infinite' : 'float-subtle 3s ease-in-out infinite',
                        backgroundImage: `url('https://i.imgur.com/Vdw7QHo.png')`,
                        backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
                    }}
                >
                </div>

                <style>{`
                    @keyframes bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-8px); }
                    }
                    @keyframes float-subtle {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-3px); }
                    }
                    @keyframes ripple {
                        0% { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
                        100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
                    }
                    .animate-ripple {
                        border: 4px solid #fff;
                        animation: ripple 0.6s ease-out forwards;
                    }
                `}</style>
            </div>

            {/* --- Info Panel --- */}
            <div className="w-full mt-6 h-20 bg-white/90 backdrop-blur-md rounded-2xl p-4 flex items-center justify-center text-center shadow-xl border-t-4 border-pink-100">
                {activeZone ? (
                    <div>
                        <p className="font-black text-lg text-gray-800 tracking-tight">{activeZone.zone}</p>
                        {isZoneLocked ? (
                            <p className="text-sm text-red-500 font-bold flex items-center justify-center gap-1">
                                <Icon name="Lock" className="w-4 h-4" /> Finish previous chapter first!
                            </p>
                        ) : (
                            <p className="text-sm text-pink-500 font-bold animate-pulse">Press 'E' or 'Enter' to explore!</p>
                        )}
                    </div>
                ) : (
                    <p className="text-gray-400 font-medium">Use keys or click to move around your world!</p>
                )}
            </div>
        </div>
    );
};

export default ChapterSelect;
