'use client';

import React from 'react';
import { AnswerOption, QuestionType, QuestionTypeValue } from '@/app/config/types';
import { QuizScore } from './QuizScore';
import { QuizOptions, QuizOptionsMultiselect } from './QuizOptions';

import '@/app/styles/QuizView/QuizView.scss';

interface QuizViewProps {
  className: string
  type: QuestionType
  answerOptions: AnswerOption[]
  scoreList: number[]
  currentLevelIndex: number
  handleSubmitAnswer: (answer: AnswerOption[]) => void
  children: React.ReactNode
}

export const QuizView: React.FC<QuizViewProps> = ({
  className,
  type,
  answerOptions,
  scoreList,
  currentLevelIndex,
  handleSubmitAnswer,
  children
}) => (
  <div className={className}>
    <div className="QuizContent">
      {children}
      {type === QuestionTypeValue.multiselect ? (
        <QuizOptionsMultiselect
          options={answerOptions}
          handleSubmitAnswer={handleSubmitAnswer}
        />
      ) : (
        <QuizOptions options={answerOptions} handleClick={handleSubmitAnswer} />
      )}
    </div>
    
    <QuizScore scoreList={scoreList} currentLevelIndex={currentLevelIndex} />
  </div>
);
