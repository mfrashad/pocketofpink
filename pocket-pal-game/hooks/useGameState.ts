import { useState, useEffect, useCallback } from 'react';
import type { GameState, ChapterId, JournalEntry } from '../types';

const GAME_STATE_KEY = 'pocketPalGameState';

const initialGameState: GameState = {
  completedChapters: [],
  earnedBadges: [],
  journal: {},
  empowermentTokens: 0,
};

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedState = localStorage.getItem(GAME_STATE_KEY);
      if (savedState) {
        setGameState(JSON.parse(savedState));
      } else {
        setGameState(initialGameState);
      }
    } catch (error) {
      console.error("Failed to load game state:", error);
      setGameState(initialGameState);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
      } catch (error) {
        console.error("Failed to save game state:", error);
      }
    }
  }, [gameState, isLoaded]);

  const completeChapter = useCallback((chapterId: ChapterId) => {
    setGameState(prev => {
      if (prev.completedChapters.includes(chapterId)) return prev;
      return { ...prev, completedChapters: [...prev.completedChapters, chapterId] };
    });
  }, []);

  const earnBadge = useCallback((badgeName: string) => {
    setGameState(prev => {
      if (prev.earnedBadges.includes(badgeName)) return prev;
      return { ...prev, earnedBadges: [...prev.earnedBadges, badgeName] };
    });
  }, []);

  const addJournalEntry = useCallback((chapterId: ChapterId, entry: JournalEntry) => {
    setGameState(prev => ({
      ...prev,
      journal: { ...prev.journal, [chapterId]: entry },
    }));
  }, []);
  
  const addTokens = useCallback((amount: number) => {
    setGameState(prev => ({
      ...prev,
      empowermentTokens: prev.empowermentTokens + amount,
    }));
  }, []);
  
  const resetGame = useCallback(() => {
      localStorage.removeItem(GAME_STATE_KEY);
      setGameState(initialGameState);
  }, []);

  return { gameState, isLoaded, completeChapter, earnBadge, addJournalEntry, addTokens, resetGame };
};