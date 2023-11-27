'use client';

import React from 'react';

import { QuizInfoOption } from '../../shared';

import { AnswerOption, RootState } from '@/app/config/types';
import { generateAlphabet } from '@/app/helpers/generateAlphabet';

import '@/app/styles/QuizView/QuizOptions/QuizOptions.scss';
import { useSelector } from '@/lib/redux';

interface QuizOptionsProps {
  options: AnswerOption[]
  correctAnswer: string[]
  currentSelection?: AnswerOption[]
  handleClick: (option: AnswerOption[]) => void
}

export const QuizOptions: React.FC<QuizOptionsProps> = ({
  options,
  correctAnswer,
  currentSelection,
  handleClick,
}) => {

  const { currentAnswer } = useSelector(
    (state: RootState) => state.quiz,
  )

  const getSelectedClass = (stateTruthyClass: string, stateFalsyClass = '') => {

    return (option: AnswerOption): string => {

      // For multiselect questions only
      if (currentSelection) {
        return currentSelection?.map(s => s.id).includes(option.id) ? stateTruthyClass : stateFalsyClass;
      }

      return '';

    }
  }

  const getOptionStateClass = (stateTruthyClass: string, stateFalsyClass = '') => {

    return (option: AnswerOption): string => {

      // 1. Merge arrays of correct answers and user answers
      // 2. Filter out options that are not in those lists (unselected options)
      // 3. Check remaining options for correctness and returning it's corresponding class name!
      if (currentAnswer && [...correctAnswer, ...currentAnswer.map(a => a.id)].includes(option.id)) {
        return correctAnswer.includes(option.id) ? stateTruthyClass : stateFalsyClass;
      }
      
      return '';

    }
  }

  const getIsSelected = getSelectedClass('selected');
  const getIsCorrect = getOptionStateClass('correct', 'incorrect');

  const isAnswered = currentAnswer ? 'answered' : '';
  
    return (
    <>
      <div className={`QuizOptions ${isAnswered}`}>
        {options.map((option, index) => (
            <div 
              id={option.id} 
              className={`QuizOption ${currentSelection ? getIsSelected(option) : ''} ${ getIsCorrect(option) }`} 
              onClick={() => handleClick([ option ])}>
              <QuizInfoOption>
                <span className="QuizOptionPrefix">{ generateAlphabet()[index] }</span>
                { option.value }
              </QuizInfoOption>
            </div>
        ))}
      </div>
    </>
    )
  }
;
