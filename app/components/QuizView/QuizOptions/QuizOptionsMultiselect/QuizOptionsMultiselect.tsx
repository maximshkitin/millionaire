'use client';

import React, { useState } from 'react';
import { AnswerOption } from '@/app/config/types';
import { QuizOptions } from '../QuizOptions';
import { QuizButton } from '../../../shared';

import './QuizOptionsMultiselect.scss';

interface QuizOptionsMultiselectProps {
  options: AnswerOption[]
  correctAnswer: string[]
  handleSubmitAnswer: (selectedOptions: AnswerOption[]) => void
}

export const QuizOptionsMultiselect: React.FC<QuizOptionsMultiselectProps> = ({
  options,
  correctAnswer,
  handleSubmitAnswer,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<AnswerOption[]>([]);

  const toggleSelection = (currentSelectionArray: AnswerOption[]) => {
    const newSelectedOptions: AnswerOption[] = [...selectedOptions];
    const index = newSelectedOptions.findIndex(
      (option) => option.id === currentSelectionArray[0].id,
    );

    if (index !== -1) {
      newSelectedOptions.splice(index, 1);
    } else {
      newSelectedOptions.push(...currentSelectionArray);
    }

    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmitAndReset = () => {
    handleSubmitAnswer(selectedOptions);
    setSelectedOptions([]);
  }

  return (
    <div className='QuizOptionsMultiselect'>
      <QuizOptions 
        options={options} 
        currentSelection={selectedOptions} 
        correctAnswer={correctAnswer}
        handleClick={toggleSelection} />
      <QuizButton handleClick={handleSubmitAndReset} disabled={!selectedOptions.length}>
        Answer
      </QuizButton>
    </div>
  );
};
