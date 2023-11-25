import { Question, QuestionTypeValue } from './types';

export const initialQuestionState: Question = {
  id: '',
  type: QuestionTypeValue.default,
  value: '',
  options: [],
  correctAnswer: [],
};