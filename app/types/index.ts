export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface Game {
  id: string;
  title: string;
  subject: string;
  educationLevel: string;
  topic: string;
  questions: Question[];
  isLocked: boolean;
}

export interface GameProgress {
  gameId: string;
  completed: boolean;
  score: number;
  attempts: number;
  lastAttemptDate: string;
}

export interface UserProgress {
  userId: string;
  completedGames: GameProgress[];
  totalScore: number;
  currentLevel: number;
}
