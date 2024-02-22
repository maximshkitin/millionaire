"use client";

import React, { useState } from "react";
import { useSelector } from "@/app/store/redux";

import { IconLoading, Badge } from "@/app/components/shared";

import { AnswerOption, RootState } from "@/app/config/types";
import { generateAlphabet } from "@/app/helpers/generateAlphabet";

import "./AnswerOptions.scss";

interface AnswerOptionsProps {
  options: AnswerOption[];
  correctAnswer: string[];
  multipleSelection?: AnswerOption[] | null;
  handleClick: (option: AnswerOption[]) => void;
}

export function AnswerOptions({
  options,
  correctAnswer,
  multipleSelection = null,
  handleClick,
}: AnswerOptionsProps) {
  const { currentAnswer } = useSelector((state: RootState) => state.quiz);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // For multiselect questions only
  const getSelectedClass =
    (stateTruthyClass: string, stateFalsyClass = "") =>
    (option: AnswerOption): string => {
      if (multipleSelection) {
        return multipleSelection?.map((s) => s.id).includes(option.id)
          ? stateTruthyClass
          : stateFalsyClass;
      }

      return "";
    };

  const getOptionStateClass =
    (stateTruthyClass: string, stateFalsyClass = "") =>
    (option: AnswerOption): string => {
      if (selectedOption) {
        return selectedOption === option.id ? "selected" : "";
      }

      // 1. Merge arrays of correct answers and user answers
      // 2. Filter out options that are not in those lists (unselected options)
      // 3. Check remaining options for correctness and returning it's corresponding class name!
      if (
        currentAnswer &&
        [...correctAnswer, ...currentAnswer.map((a) => a.id)].includes(
          option.id,
        )
      ) {
        return correctAnswer.includes(option.id)
          ? stateTruthyClass
          : stateFalsyClass;
      }

      return "";
    };

  const getIsSelected = getSelectedClass("selected");
  const getIsCorrect = getOptionStateClass("correct", "incorrect");


  const selectAndDispatchAnswer = (option: AnswerOption): void => {
    setSelectedOption(option.id);
  
    setTimeout(() => {
      setSelectedOption(null);
      handleClick([option]);
    }, 1500);
  };

  const selectOption = (option: AnswerOption): void => {
    if (multipleSelection) {
      handleClick([option]);
    } else {
      selectAndDispatchAnswer(option);
    }
  };

  const isAnswered = currentAnswer || selectedOption ? "answered" : "";

  return (
    <div className={`AnswerOptions ${isAnswered}`}>
      {currentAnswer && <IconLoading loading />}

      {options.map((option, index) => (
        <div
          key={option.id}
          role="button"
          tabIndex={index + 1}
          className={`AnswerOption ${
            multipleSelection ? getIsSelected(option) : ""
          } ${getIsCorrect(option)}`}
          onClick={() => selectOption(option)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              selectOption(option);
            }
          }}
        >
          <Badge>
            <div className="AnswerOptionText">
              <span className="AnswerOptionPrefix">
                {generateAlphabet()[index]}
              </span>
              {option.value}
            </div>
          </Badge>
        </div>
      ))}
    </div>
  );
}
