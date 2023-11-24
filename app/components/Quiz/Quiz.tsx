'use client'
import React, { useEffect, useState } from 'react'
import {
  gameOver,
  incrementLevel,
  logAnswer,
  resetQuiz,
  startQuiz,
  useDispatch,
  useSelector,
  updateScore,
} from '@/lib/redux'
import { RootState, AnswerOption, Question, Level } from '@/app/config/types'
import { checkAnswer, fetchMockData, getNextScore } from '@/app/helpers'
import { QuizView } from './QuizView'
import { QuizStaticView } from './QuizStaticView'
import { QuizTextBox } from './shared'
import { initialQuestionState } from '@/app/config/consts'

export const Quiz: React.FC = () => {
  const dispatch = useDispatch()

  const [levels, setLevels] = useState<Level[]>([])

  useEffect(() => {
    const fetchDataAndSetLevels = async () => {
      const mockData = await fetchMockData()
      mockData && setLevels(mockData)
    }

    fetchDataAndSetLevels()
  }, [])

  const { currentLevel, currentScore, isOngoing } = useSelector(
    (state: RootState) => state.quiz,
  )

  const currentQuestion: Question =
    levels?.[currentLevel]?.question ?? initialQuestionState

  const {
    options,
    correctAnswer,
    type: questionType,
    value: questionValue,
  } = currentQuestion

  const checkIfCorrect = (
    answer: AnswerOption[],
    correctAnswers: string[],
  ): boolean => {
    return checkAnswer(answer, correctAnswers)
  }

  const handleStart = () => {
    dispatch(startQuiz())
  }

  const handleReset = () => {
    dispatch(resetQuiz())
  }

  // app flow
  const handleSubmitAnswer = (answer: AnswerOption[]) => {
    dispatch(logAnswer({ question: currentQuestion, answer }))

    if (checkIfCorrect(answer, correctAnswer)) {
      const nextScore = getNextScore(levels, currentLevel)

      if (nextScore) {
        dispatch(incrementLevel())
        dispatch(updateScore(nextScore))
      } else {
        dispatch(gameOver())
      }
    } else {
      dispatch(gameOver())
    }
  }

  return (
    <div className="content-wrapper">
      {isOngoing === null && ( // intro screen
        <QuizStaticView
          className={'kek'}
          buttonText={'Start!'}
          handleClick={handleStart}
        >
          <QuizTextBox className="QuizTitle">Who wants to be?</QuizTextBox>
        </QuizStaticView>
      )}

      {isOngoing && ( // quiz screen
        <QuizView
          className="QuizView"
          type={questionType}
          answerOptions={options}
          currentScore={currentScore}
          scoreList={levels?.map((level) => level.score)}
          handleSubmitAnswer={handleSubmitAnswer}
        >
          <QuizTextBox className="QuizQuestion">{questionValue}</QuizTextBox>
        </QuizView>
      )}

      {isOngoing !== null &&
        !isOngoing && ( // final screen
          <QuizStaticView
            className={'kek'}
            buttonText={'Try Again'}
            handleClick={handleReset}
          >
            <QuizTextBox className="QuizSubtitle">Total score:</QuizTextBox>
            <QuizTextBox className="QuizTitle">
              {currentScore} earned.
            </QuizTextBox>
          </QuizStaticView>
        )}
    </div>
  )
}
