import { AnswerOption } from '@/app/config/types'

// Helper function to check equality of two arrays
export const checkAnswer = (
  answer: AnswerOption[],
  correctAnswer: string[],
): boolean => {
  const answerIds = answer?.map((option) => option.id)

  if (answerIds.length !== correctAnswer.length) {
    return false
  }

  const sortedAnswerIds = answerIds.sort()
  const sortedCorrectAnswer = correctAnswer.sort()

  return sortedAnswerIds.every(
    (value, index) => value === sortedCorrectAnswer[index],
  )
}
