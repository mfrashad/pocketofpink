
import React, { useState, createContext, useMemo, useEffect } from 'react';
import MainMenu from './screens/MainMenu';
import ChapterSelect from './screens/ChapterSelect';
import JournalScreen from './screens/JournalScreen';
import ChapterContainer from './screens/ChapterContainer';
import AboutScreen from './screens/AboutScreen';
import { useGameState } from './hooks/useGameState';
import { loadSounds, toggleMuteAll } from './services/soundService';
import Confetti from './components/Confetti';
import { Icon } from './components/Icons';
import { GameContext, type Screen } from './context/GameContext';


function App() {
  const [screen, setScreen] = useState<Screen>('main-menu');
  const { gameState, isLoaded, completeChapter, earnBadge, addJournalEntry, addTokens, resetGame } = useGameState();
  const [showConfetti, setShowConfetti] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    loadSounds();
  }, []);


  const triggerConfetti = () => {
    setShowConfetti(true);
  };

  const handleMuteToggle = () => {
    const newMuteState = toggleMuteAll();
    setIsMuted(newMuteState);
  };

  const contextValue = useMemo(() => ({
    gameState,
    completeChapter,
    earnBadge,
    addJournalEntry,
    addTokens,
    resetGame,
    setScreen,
    triggerConfetti,
  }), [gameState, completeChapter, earnBadge, addJournalEntry, addTokens, resetGame, setScreen]);

  const backgroundStyle = useMemo(() => ({
    // Solid pixel-grid background instead of the photo, for a retro feel
  }), []);

  const renderScreen = () => {
    if (!isLoaded) {
      return <div className="flex items-center justify-center h-screen text-2xl">Loading...</div>;
    }

    if (typeof screen === 'object' && screen.screen === 'chapter') {
      return <ChapterContainer chapterId={screen.id} />;
    }

    switch (screen) {
      case 'main-menu':
        return <MainMenu />;
      case 'chapter-select':
        return <ChapterSelect />;
      case 'journal':
        return <JournalScreen />;
      case 'about':
        return <AboutScreen />;
      default:
        return <MainMenu />;
    }
  };

  return (
    <GameContext.Provider value={contextValue}>
      <div className="min-h-screen text-[#1a0d1f] pixel-bg scanlines" style={backgroundStyle}>
        <main className={`mx-auto p-4 md:p-6 ${screen === 'main-menu' ? 'max-w-4xl' : 'max-w-5xl'}`}>
          {renderScreen()}
        </main>
        {showConfetti && <Confetti onComplete={() => setShowConfetti(false)} />}

        {/* Mute Button */}
        <button
            onClick={handleMuteToggle}
            className="no-print fixed bottom-6 left-6 w-12 h-12 bg-[#fefefe] border-[3px] border-[#1a0d1f] flex items-center justify-center hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform z-40"
            style={{ boxShadow: '4px 4px 0 0 #1a0d1f' }}
            aria-label="Toggle Sound"
        >
            <Icon name={isMuted ? 'VolumeOff' : 'VolumeOn'} className="w-6 h-6" />
        </button>
      </div>
    </GameContext.Provider>
  );
}

export default App;