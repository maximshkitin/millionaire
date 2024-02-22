"use client";

import React, { useState } from "react";
import { AnswerOption } from "@/app/config/types";
import { Button } from "@/app/components/shared";
import { AnswerOptions } from "../AnswerOptions";

import { buttonText } from "@/app/config/consts";

import "./AnswerOptionsMultiselect.scss";

interface AnswerOptionsMultiselectProps {
  options: AnswerOption[];
  correctAnswer: string[];
  handleSubmitAnswer: (selectedOptions: AnswerOption[]) => void;
}

export function AnswerOptionsMultiselect({
  options,
  correctAnswer,
  handleSubmitAnswer,
}: AnswerOptionsMultiselectProps) {
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
    <div className="AnswerOptionsMultiselect">
      <AnswerOptions
        options={options}
        multipleSelection={selectedOptions}
        correctAnswer={correctAnswer}
        handleClick={toggleSelection}
      />
      <Button
        handleClick={handleSubmitAndResetSelected}
        disabled={!selectedOptions.length}
        tabIndex={options.length}
      >
        {buttonText.answer}
      </Button>
    </div>
  );
}
