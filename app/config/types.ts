export const QuizIconTypeValue = {
  hamburger: "hamburger",
  close: "close",
} as const;

export interface AnswerOption {
  id: string;
  value: string;
}

export interface Question {
  id: string;
  value: string;
  options: AnswerOption[];
  correctAnswer: string[]; // IDs: figure out whether it's safe to keep it here
}

export interface UserAnswer {
  question: Question;
  answer: AnswerOption[];
}

export interface Level {
  score: number;
  question: Question;
}

export interface QuizState {
  currentLevel: number;
  currentScore: number;
  answerLogs: UserAnswer[];
  isOngoing: boolean | null;
  currentAnswer: AnswerOption[] | null;
}

export interface RootState {
  quiz: QuizState;
}
