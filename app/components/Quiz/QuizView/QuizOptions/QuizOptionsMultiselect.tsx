'use client';

import React, { useState } from 'react';
import { AnswerOption } from '@/app/config/types';
import { QuizOptions } from './QuizOptions';
import { QuizButton } from '../../shared';

interface QuizOptionsMultiselectProps {
  options: AnswerOption[]
  handleSubmitAnswer: (selectedOptions: AnswerOption[]) => void
}

export const QuizOptionsMultiselect: React.FC<QuizOptionsMultiselectProps> = ({
  options,
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

  return (
    <>
      <QuizOptions options={options} handleClick={toggleSelection} />
      <QuizButton handleClick={() => handleSubmitAnswer(selectedOptions)}>
        Answer
      </QuizButton>
    </>
  );
};
