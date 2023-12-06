import { Question } from "./types";

export const initialQuestionState: Question = {
  id: "",
  value: "",
  options: [],
  correctAnswer: [],
};

export const buttonText = {
  start: "Start",
  answer: "Answer",
  again: "Try Again",
};

export const staticScreenTitle = {
  main: "Who wants to be a millionaire?",
  totalScore: "Total Score:",
  earned: "earned",
};
