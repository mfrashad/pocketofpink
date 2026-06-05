
import type React from 'react';
import { type ICONS } from './components/Icons';

// --- CORE GAME DATA STRUCTURES ---

export interface BaseActivity {
  type: string;
  title: string;
  prompt: string;
  info?: string;
}

export interface TextInputActivity extends BaseActivity {
  type: 'text-input';
  fields: { label: string; key: string }[];
}

export interface DrawingActivity extends BaseActivity {
  type: 'drawing';
  hasTemplate: boolean;
}

export interface ReflectionActivity extends BaseActivity {
  type: 'reflection';
  reflection: true;
}

export interface ConsentAcronymActivity extends BaseActivity {
    type: 'consent-acronym';
    acronym: Record<string, string>;
}

export interface ConsentColorsActivity extends BaseActivity {
    type: 'consent-colors';
    categories: string[];
    colors: Record<string, string>;
    questions: string[];
}

export interface CyberSafetyActivity extends BaseActivity {
    type: 'cyber-safety';
    items: { text: string; safe: boolean }[];
}

export interface CrosswordActivity extends BaseActivity {
    type: 'crossword';
    words: string[];
    definitions: Record<string, string>;
}

export interface EmergencyInfoActivity extends BaseActivity {
    type: 'emergency-info';
    fields: string[];
}

export interface EmotionFacesActivity extends BaseActivity {
    type: 'emotion-faces';
}

export interface ProtectPeopleActivity extends BaseActivity {
    type: 'protect-people';
    questions: string[];
}

export interface ColoringCompetitionActivity extends BaseActivity {
    type: 'coloring-competition';
}

export interface BodyPart {
  name: string;
  coords: [number, number]; // [x%, y%]
}

export interface BodyPartsSection {
  title: string;
  imageKey: string;
  parts: BodyPart[];
  aspectRatio?: number;
}

export interface BodyPartsConnectActivity extends BaseActivity {
  type: 'body-parts';
  sections: BodyPartsSection[];
}

export interface InformationalContentBlock {
  text: string;
  imageKeys?: string[];
}

export interface InformationalActivity extends BaseActivity {
  type: 'informational';
  content: InformationalContentBlock[];
}

interface QuizOption {
  text: string;
  isCorrect: boolean;
}

interface BodyPartQuiz {
  imageKey: string;
  prompt: string;
  options: QuizOption[];
  correctFeedback: string;
  incorrectFeedback: string;
}

export interface BodyPartsQuizActivity extends BaseActivity {
  type: 'body-parts-quiz';
  introText: string;
  transitionText: string;
  quizzes: BodyPartQuiz[];
}

export interface HairHotspot {
  coords: [number, number]; // [x%, y%] center of hotspot
  radius: number; // radius in % of image width
  feedback: string;
}

export interface SafetyScenario {
  text: string;
  isSafe: boolean;
}

export interface PubertyTimelineActivity extends BaseActivity {
  type: 'puberty-timeline';
  hairHotspots: HairHotspot[];
  safetyScenarios: SafetyScenario[];
}

export interface RelationshipWebScenario {
  text: string;
  isGood: boolean;
}

export interface RelationshipWebGameActivity extends BaseActivity {
  type: 'relationship-web-game';
  scenarios: RelationshipWebScenario[];
}


export type Activity =
  | TextInputActivity
  | DrawingActivity
  | ReflectionActivity
  | ConsentAcronymActivity
  | ConsentColorsActivity
  | CyberSafetyActivity
  | CrosswordActivity
  | EmergencyInfoActivity
  | EmotionFacesActivity
  | ProtectPeopleActivity
  | ColoringCompetitionActivity
  | BodyPartsConnectActivity
  | InformationalActivity
  | BodyPartsQuizActivity
  | PubertyTimelineActivity
  | RelationshipWebGameActivity
  // Add other activity types here as they are created
  | (BaseActivity & { type: 'maze' });

// Fix: Define ChapterId type
export type ChapterId = 'identity' | 'bodies' | 'rights' | 'safety' | 'support' | 'express';

export interface Chapter {
  id: ChapterId;
  title: string;
  subtitle?: string;
  emoji: string;
  zone: string;
  badge: string;
  color: string;
  activities: Activity[];
}

// --- GAME STATE & JOURNAL ---

export interface Badge {
  id: string; // The badge name
  name: string;
  description: string;
  icon: keyof typeof ICONS;
}

export interface JournalChapter1Entry {
  type: 'journal-chapter1';
  chapterTitle: string;
  name: string;
  like: string;
  love: string;
  hate: string;
  am: string;
  drawingUrl: string;
  reflection: string;
}

export interface JournalChapter3Entry {
    type: 'journal-chapter3';
    chapterTitle: string;
    drawingUrl: string; // for consent-colors
    q1: string;
    q2: string;
    q3: string;
}

export interface JournalChapter4Entry {
    type: 'journal-chapter4';
    chapterTitle: string;
    cyberSafetyAnswers: Record<string, boolean>;
    emergencyInfo: Record<string, string>;
}

export interface JournalChapter5Entry {
    type: 'journal-chapter5';
    chapterTitle: string;
    emotionAnswers: Record<string, string>;
    protectionList: string;
    q1: string;
    q2: string;
}

export interface JournalChapter6Entry {
    type: 'journal-chapter6';
    chapterTitle: string;
    drawingUrl: string;
}

export interface JournalPlaceholderEntry {
  type: 'journal-placeholder';
  chapterTitle: string;
  content: string;
}

export type JournalEntry =
  | JournalChapter1Entry
  | JournalChapter3Entry
  | JournalChapter4Entry
  | JournalChapter5Entry
  | JournalChapter6Entry
  | JournalPlaceholderEntry;

export interface GameState {
  completedChapters: ChapterId[];
  earnedBadges: string[];
  journal: { [key in ChapterId]?: JournalEntry };
  empowermentTokens: number;
}