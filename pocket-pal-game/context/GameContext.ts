
import React, { createContext } from 'react';
import type { GameState, ChapterId, JournalEntry } from '../types';

export type Screen = 'main-menu' | 'chapter-select' | 'journal' | 'about' | { screen: 'chapter', id: ChapterId };

export interface GameContextType {
  gameState: GameState;
  completeChapter: (id: ChapterId) => void;
  earnBadge: (badgeName: string) => void;
  addJournalEntry: (chapterId: ChapterId, entry: JournalEntry) => void;
  addTokens: (amount: number) => void;
  resetGame: () => void;
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
  triggerConfetti: () => void;
}

export const GameContext = createContext<GameContextType | null>(null);
