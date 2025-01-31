export interface Game {
  id: string;
  title: string;
  subject: string;
  topic: string;
  educationLevel: string;
  description: string;
  questions: any[];
  isLocked: boolean;
  status: 'not_started' | 'in_progress' | 'completed';
  progress: number;
  lastPlayed?: string;
  badge?: string;
  isNew?: boolean;
  isComprehensive?: boolean;
  mode: 'singleplayer' | 'multiplayer';
  gameType?: 'logarithm' | string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

export type GameStatus = 'not_started' | 'in_progress' | 'completed';

export interface UserProgress {
  gamesPlayed: number;
  averageScore: number;
  favoriteSubject: string;
  recentGames: string[];
  completedGames: string[];
}
