export interface Game {
  id: string;
  title: string;
  subject: string;
  topic: string;
  educationLevel: string;
  description: string;
  questions: Question[];
  isLocked: boolean;
  status: GameStatus;
  lastPlayed?: string;
  progress: number;
  badge?: string;
  isNew?: boolean;
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
