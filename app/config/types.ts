export const QuestionTypeValue = {
  default: "singular",
  multiselect: "multiselect",
} as const;

export const QuizIconTypeValue = {
  hamburger: "hamburger",
  close: "close",
} as const;

export interface AnswerOption {
  id: string;
  value: string;
}

export type QuestionType =
  (typeof QuestionTypeValue)[keyof typeof QuestionTypeValue];

export interface Question {
  id: string;
  type: QuestionType;
  value: string;
  options: AnswerOption[];
  correctAnswer: string[]; // IDs: figure out whether it's safe to keep it here
}

export interface UserAnswer {
  question: Question;
  answer: AnswerOption[];
}

export interface Level {
  level: number;
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
