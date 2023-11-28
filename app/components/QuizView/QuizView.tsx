'use client';

import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AnswerOption, QuestionType, QuestionTypeValue } from '@/app/config/types';
import { QuizScore } from './QuizScore';
import { QuizOptions, QuizOptionsMultiselect } from './QuizOptions';
import { QuizIconSidebar } from '../shared';

import '@/app/styles/QuizView/QuizView.scss';
import '@/app/styles/shared/QuizIconSidebar.scss'

interface QuizViewProps {
  className: string
  type: QuestionType
  answerOptions: AnswerOption[]
  scoreList: number[]
  correctAnswer: string[]
  currentLevelIndex: number
  handleSubmitAnswer: (answer: AnswerOption[]) => void
  children: React.ReactNode
}

export const QuizView: React.FC<QuizViewProps> = ({
  className,
  type,
  answerOptions,
  scoreList,
  correctAnswer,
  currentLevelIndex,
  handleSubmitAnswer,
  children
}) => {
  
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 });

  const toggleSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <div className={className}>
      <div className="QuizContent">
        {children}
        {type === QuestionTypeValue.multiselect ? (
          <QuizOptionsMultiselect
            options={answerOptions}
            correctAnswer={correctAnswer}
            handleSubmitAnswer={handleSubmitAnswer}
          />
        ) : (
          <QuizOptions options={answerOptions} correctAnswer={correctAnswer} handleClick={handleSubmitAnswer} />
        )}
      </div>
      
      { isMobileOrTablet && <QuizIconSidebar type={'hamburger'} toggleSidebar={toggleSidebar} /> }
      <QuizScore open={openSidebar} toggleSidebar={toggleSidebar} scoreList={scoreList} currentLevelIndex={currentLevelIndex} />
    </div>
  )
};
