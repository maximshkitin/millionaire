export interface QuizState {
  currentLevel: number
  currentScore: number
  answerLogs: UserAnswer[]
  isOngoing: boolean | null
}

export interface UserAnswer {
  question: Question
  answer: AnswerOption[]
}

export interface AnswerOption {
  id: string
  value: string
}

export interface Question {
  id: string
  type: string
  value: string
  options: AnswerOption[]
  correctAnswer: string[] // IDs: figure out whether it's safe to keep it here
}

export interface Level {
  level: number
  score: number
  question: Question
}

export interface RootState {
  quiz: QuizState
}
