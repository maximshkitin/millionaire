'use client';

import React, { useEffect, useState } from 'react';
import {
  gameOver,
  incrementLevel,
  logAnswer,
  resetQuiz,
  startQuiz,
  useDispatch,
  useSelector,
  updateScore,
  showAnswerResult
} from '@/lib/redux';
import {
  RootState, AnswerOption, Question, Level,
} from '@/app/config/types';
import { checkAnswer, fetchMockData } from '@/app/helpers';
import { initialQuestionState } from '@/app/config/consts';
import { QuizView } from './QuizView';
import { QuizStaticView } from './QuizStaticView';
import { QuizTextBox } from './shared';

import '@/app/styles/Quiz.scss';

export const Quiz: React.FC = () => {
  const dispatch = useDispatch();

  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    const fetchDataAndSetLevels = async () => {
      const mockData = await fetchMockData();
      mockData && setLevels(mockData);
    }

    fetchDataAndSetLevels();
  }, []);

  const { currentLevel, currentScore, isOngoing } = useSelector(
    (state: RootState) => state.quiz,
  );

  const isStartScreenClass = isOngoing === null ? 'QuizStartScreenWrapper' : '';
  const isFinalScreenClass = isOngoing !== null && !isOngoing ? 'QuizFinalScreenWrapper' : '';

  // '- 1' is needed because level count statrs from '1' 
  const currentQuestion: Question = levels?.[currentLevel - 1]?.question ?? initialQuestionState;

  const {
    options,
    correctAnswer,
    type: questionType,
    value: questionValue,
  } = currentQuestion;

  const checkIfCorrect = (
    answer: AnswerOption[],
    correctAnswers: string[],
  ): boolean => checkAnswer(answer, correctAnswers);

  const handleStart = () => {
    dispatch(startQuiz());
  };

  const handleReset = () => {
    dispatch(resetQuiz());
  };

  // app flow
  const handleSubmitAnswer = (answer: AnswerOption[]) => {
    dispatch(logAnswer({ question: currentQuestion, answer }));
    dispatch(showAnswerResult(answer));

    // delay for showing answer results
    setTimeout(() => {
      if (checkIfCorrect(answer, correctAnswer)) {

        const currentScore = levels[currentLevel - 1].score;
  
        // avoiding '+ 1' because level count statrs from '1' while arrays do from '0'
        if (levels[currentLevel]?.score) { // next score value.
          dispatch(incrementLevel());
          dispatch(updateScore(currentScore));
          dispatch(showAnswerResult(null));
        } else {
          dispatch(updateScore(currentScore));
          dispatch(gameOver());
        }
      } else {
        dispatch(gameOver());
      }
    }, 2000)

    
  };

  return (
    <div className={`Quiz ${isStartScreenClass} ${isFinalScreenClass}`}>
      {isOngoing === null && ( // intro screen
        <QuizStaticView
          className="QuizStartScreen"
          buttonText="Start"
          handleClick={handleStart}
        >
          <QuizTextBox className="QuizTitle">
            Who wants to be a millionaire?
          </QuizTextBox>
        </QuizStaticView>
      )}

      {isOngoing && ( // quiz screen
        <QuizView
          className="QuizWrapper"
          type={questionType}
          answerOptions={options}
          correctAnswer={correctAnswer}
          currentLevelIndex={currentLevel - 1}
          scoreList={levels?.map((level) => level.score)}
          handleSubmitAnswer={handleSubmitAnswer}
        >
          <QuizTextBox className="QuizQuestion">{questionValue}</QuizTextBox>
        </QuizView>
      )}

      {isOngoing !== null
        && !isOngoing && ( // final screen
          <QuizStaticView
            className="QuizFinalScreen"
            buttonText="Try Again"
            handleClick={handleReset}
          >
            <QuizTextBox className="QuizSubtitle">Total score:</QuizTextBox>
            <QuizTextBox className="QuizTitle">
              ${currentScore?.toLocaleString()}
              {' '}
              earned
            </QuizTextBox>
          </QuizStaticView>
      )}
    </div>
  );
};
