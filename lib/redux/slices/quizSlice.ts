/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnswerOption, QuizState, UserAnswer } from "@/app/config/types";

const initialState: QuizState = {
  currentLevel: 1,
  currentScore: 0,
  currentAnswer: null,
  answerLogs: [],
  isOngoing: null,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz(state) {
      state.isOngoing = true;
    },
    resetQuiz(state) {
      state.currentLevel = 1;
      state.currentScore = 0;
      state.answerLogs = [];
      state.isOngoing = true;
      state.currentAnswer = null;
    },
    gameOver(state) {
      state.isOngoing = false;
    },
    incrementLevel(state) {
      state.currentLevel += 1;
    },
    updateScore(state, action: PayloadAction<number>) {
      state.currentScore = action.payload;
    },
    // user answers are logged for a scalling matter.. they can be used in the future versions of the app
    // (ex. to be displayed on the final screen along with correct answers to corresponding questions)
    logAnswer(state, action: PayloadAction<UserAnswer>) {
      state.answerLogs = [...state.answerLogs, action.payload];
    },
    showAnswerResult(state, action: PayloadAction<AnswerOption[] | null>) {
      state.currentAnswer = action.payload;
    },
  },
});

export const {
  logAnswer,
  gameOver,
  incrementLevel,
  updateScore,
  startQuiz,
  resetQuiz,
  showAnswerResult,
} = quizSlice.actions;
