export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Game {
  id: string;
  title: string;
  subject: string;
  educationLevel: string;
  topic: string;
  questions: Question[];
  isLocked: boolean;
  status?: "not_started" | "in_progress" | "completed";
  progress?: number;
  lastPlayed?: string;
  badge?: string;
  isNew?: boolean;
  isComprehensive?: boolean;
  mode?: "singleplayer" | "multiplayer";
  gameType?: string;
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
