'use client';

import React from 'react';
import { AnswerOption } from '@/app/config/types';
import { ALPHABET } from '@/app/config/consts';

interface QuizOptionsProps {
  options: AnswerOption[]
  handleClick: (option: AnswerOption[]) => void
}

export const QuizOptions: React.FC<QuizOptionsProps> = ({
  options,
  handleClick,
}) => (
  <>
    {options.map((option, index) => (
      <div key={option.id}>
        <div id={option.id} onClick={() => handleClick([option])}>
          <span className='QuizOptionChar'>
            { ALPHABET[index] }
          </span>
          { option.value }
        </div>
      </div>
    ))}
  </>
);
