'use client';

import React from 'react';

import { QuizInfoOption } from '../../shared';

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
            <QuizInfoOption>
              <span className="QuizOptionPrefix">{ generateAlphabet()[index] }</span>
              { option.value }
            </QuizInfoOption>
            
          </div>
      ))}
    </div>
  </>
);
