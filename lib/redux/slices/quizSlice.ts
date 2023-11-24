import { QuizState, UserAnswer } from '@/app/config/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: QuizState = {
  currentLevel: 1,
  currentScore: 500,
  answerLogs: [],
  isOngoing: null,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz(state) {
      state.isOngoing = true
    },
    resetQuiz(state) {
      state.currentLevel = 1
      state.currentScore = 500
      state.answerLogs = []
      state.isOngoing = true
    },
    gameOver(state) {
      state.isOngoing = false
    },
    incrementLevel(state) {
      state.currentLevel += 1
    },
    updateScore(state, action: PayloadAction<number>) {
      state.currentScore = action.payload
    },
    // user answers are logged for a scalling matter.. they can be used in the future versions of the app
    // (ex. to be displayed on the final screen along with correct answers to corresponding questions)
    logAnswer(state, action: PayloadAction<UserAnswer>) {
      state.answerLogs = [...state.answerLogs, action.payload]
    },
  },
})

export const {
  logAnswer,
  gameOver,
  incrementLevel,
  updateScore,
  startQuiz,
  resetQuiz,
} = quizSlice.actions
