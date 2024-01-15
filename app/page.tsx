"use client";

import React, { useEffect, useState } from "react";
import {
  gameOver,
  incrementLevel,
  logAnswer,
  resetQuiz,
  startQuiz,
  useDispatch,
  useSelector,
  updateScore,
  showAnswerResult,
  resetAnswerResult,
} from "@/app/store/redux/index";
import { RootState, AnswerOption, Question, Level } from "@/app/config/types";
import { checkAnswer, fetchMockData } from "@/app/helpers";
import { initialQuestionState } from "@/app/config/consts";
import { QuizIntro, Quiz, QuizResult } from "./pages";
import { QuizTextBox } from "./components/shared";

import "./page.scss";

export default function IndexPage() {
  const dispatch = useDispatch();

  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    const fetchAndSetLevels = async () => {
      const mockLevels = await fetchMockData();

      if (mockLevels) {
        setLevels(mockLevels);
      }
    };

    fetchAndSetLevels();
  }, []);

  const { currentLevel, currentScore, isOngoing } = useSelector(
    (state: RootState) => state.quiz,
  );

  const isStartScreenClass = isOngoing === null ? "QuizStartScreenWrapper" : "";
  const isFinalScreenClass =
    isOngoing !== null && !isOngoing ? "QuizFinalScreenWrapper" : "";

  const currentQuestion: Question =
    levels?.[currentLevel]?.question ?? initialQuestionState;

  const { options, correctAnswer, value: questionValue } = currentQuestion;

  const [shuffledAnswerOptions, setShuffledAnswerOptions] =
    useState<AnswerOption[]>(options);

  useEffect(() => {
    setShuffledAnswerOptions(
      options
        .slice() // to keep the original array unchanged
        .sort(() => Math.random() - 0.5), // shuffle array!
    );
  }, [options, isOngoing]); // added isOngoing dependency to run setter on "Try Again" case

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

    // emulating asyncrosity. this is a delay for showing answer results
    setTimeout(() => {
      if (checkIfCorrect(answer, correctAnswer)) {
        const currentScoreValue = levels[currentLevel].score;

        if (levels[currentLevel + 1]?.score) {
          dispatch(incrementLevel());
          dispatch(updateScore(currentScoreValue));
          dispatch(resetAnswerResult());
        } else {
          dispatch(updateScore(currentScoreValue));
          dispatch(gameOver());
        }
      } else {
        dispatch(gameOver());
      }
    }, 1500);
  };

  return (
    <div className={`Quiz ${isStartScreenClass} ${isFinalScreenClass}`}>
      {isOngoing === null && <QuizIntro handleClick={handleStart} />}

      {isOngoing && (
        <Quiz
          className="QuizWrapper"
          answerOptions={shuffledAnswerOptions}
          correctAnswer={correctAnswer}
          currentLevelIndex={currentLevel}
          scoreList={levels?.map((level) => level.score)}
          handleSubmitAnswer={handleSubmitAnswer}
        >
          <QuizTextBox className="QuizQuestion">{questionValue}</QuizTextBox>
        </Quiz>
      )}

      {isOngoing === false && (
        <QuizResult handleClick={handleReset} currentScore={currentScore} />
      )}
    </div>
  );
}
