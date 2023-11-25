import { AnswerOption } from '@/app/config/types';

// Helper function to check equality of two arrays
export const checkAnswer = (
  answer: AnswerOption[],
  correctAnswer: string[],
): boolean => {
  const answerIds = answer?.map((option) => option.id);

  console.log(answerIds);

  if (answerIds.length !== correctAnswer.length) {
    return false;
  }

  // slice method is needed to prevent the original array from mutating
  const sortedAnswerIds = answerIds.slice().sort();
  const sortedCorrectAnswer = correctAnswer.slice().sort();

  return sortedAnswerIds.every(
    (value, index) => value === sortedCorrectAnswer[index],
  );
};
