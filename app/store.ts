import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
})

quizRe

export default store
