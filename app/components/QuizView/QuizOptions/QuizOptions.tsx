'use client';

import React from 'react';
import { QuizOptionTriangle } from './QuizOptionTriangle';

import { AnswerOption } from '@/app/config/types';
import { generateAlphabet } from '@/app/helpers/generateAlphabet';

import '@/app/styles/QuizView/QuizOptions/QuizOptions.scss';

interface QuizOptionsProps {
  options: AnswerOption[]
  handleClick: (option: AnswerOption[]) => void
}

export const QuizOptions: React.FC<QuizOptionsProps> = ({
  options,
  handleClick,
}) => (
  <>
    <div className="QuizOptions">
      {options.map((option, index) => (
          <div id={option.id} className="QuizOption" onClick={() => handleClick([option])}>

            <QuizOptionTriangle />
            <span className="QuizOptionPrefix">{ generateAlphabet()[index] }</span>
              { option.value }
            <QuizOptionTriangle isReversed />
            
          </div>
      ))}
    </div>
  </>
);
