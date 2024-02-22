"use client";

import React, { useState } from "react";
import { AnswerOption } from "@/app/config/types";
import { QuizButton } from "@/app/components/shared";
import { QuizOptions } from "../QuizOptions";

import { buttonText } from "@/app/config/consts";

import "./QuizOptionsMultiselect.scss";

interface QuizOptionsMultiselectProps {
  options: AnswerOption[];
  correctAnswer: string[];
  handleSubmitAnswer: (selectedOptions: AnswerOption[]) => void;
}

export function QuizOptionsMultiselect({
  options,
  correctAnswer,
  handleSubmitAnswer,
}: QuizOptionsMultiselectProps) {
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

  const handleSubmitAndResetSelected = () => {
    handleSubmitAnswer(selectedOptions);
    setSelectedOptions([]);
  };

  return (
    <div className="QuizOptionsMultiselect">
      <QuizOptions
        options={options}
        multipleSelection={selectedOptions}
        correctAnswer={correctAnswer}
        handleClick={toggleSelection}
      />
      <QuizButton
        handleClick={handleSubmitAndResetSelected}
        disabled={!selectedOptions.length}
        tabIndex={options.length}
      >
        {buttonText.answer}
      </QuizButton>
    </div>
  );
}
