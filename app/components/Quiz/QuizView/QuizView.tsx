'use client';

import React from 'react';
import { AnswerOption, QuestionType, QuestionTypeValue } from '@/app/config/types';
import { QuizScore } from './QuizScore';
import { QuizOptions, QuizOptionsMultiselect } from './QuizOptions';

interface QuizViewProps {
  className: string
  type: QuestionType
  answerOptions: AnswerOption[]
  scoreList: number[]
  currentScore: number
  handleSubmitAnswer: (answer: AnswerOption[]) => void
  children: React.ReactNode
}

export const QuizView: React.FC<QuizViewProps> = ({
  className,
  type,
  answerOptions,
  scoreList,
  currentScore,
  handleSubmitAnswer,
  children
}) => (
  <div className={className}>
    {children}
    {type === QuestionTypeValue.multiselect ? (
      <QuizOptionsMultiselect
        options={answerOptions}
        handleSubmitAnswer={handleSubmitAnswer}
      />
    ) : (
      <QuizOptions options={answerOptions} handleClick={handleSubmitAnswer} />
    )}
    <div className="QuizScore-wrapper">
      <QuizScore scoreList={scoreList} currentScore={currentScore} />
    </div>
  </div>
);
