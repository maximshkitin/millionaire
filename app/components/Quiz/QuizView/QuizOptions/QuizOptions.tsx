'use client'
import React from 'react'
import { AnswerOption } from '@/app/config/types'

interface QuizOptionsProps {
  options: AnswerOption[]
  handleClick: (option: AnswerOption[]) => void
}

export const QuizOptions: React.FC<QuizOptionsProps> = ({
  options,
  handleClick,
}) => (
  <>
    {options.map((option) => (
      <div key={option.id}>
        <div id={option.id} onClick={() => handleClick([option])}>
          {option.value}
        </div>
      </div>
    ))}
  </>
)
