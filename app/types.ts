export interface Game {
  id: string;
  title: string;
  subject: string;
  educationLevel: string;
  topic: string;
  questions: Question[];
  isLocked: boolean;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}
