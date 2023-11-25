import { Question, QuestionTypeValue } from './types';

export const initialQuestionState: Question = {
  id: '',
  type: QuestionTypeValue.default,
  value: '',
  options: [],
  correctAnswer: [],
};

// consists of ['A', 'B', 'C', ..., 'Z'] -> char code 65 = 'A'
export const ALPHABET = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));