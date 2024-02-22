"use client";

import React, { useState } from "react";
import { useSelector } from "@/app/store/redux";

import { QuizIconLoading, QuizInfoBadge } from "@/app/components/shared";

import { AnswerOption, RootState } from "@/app/config/types";
import { generateAlphabet } from "@/app/helpers/generateAlphabet";

import "./QuizOptions.scss";

interface QuizOptionsProps {
  options: AnswerOption[];
  correctAnswer: string[];
  multipleSelection?: AnswerOption[] | null;
  handleClick: (option: AnswerOption[]) => void;
}

export function QuizOptions({
  options,
  correctAnswer,
  multipleSelection = null,
  handleClick,
}: QuizOptionsProps) {
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
    <div className={`QuizOptions ${isAnswered}`}>
      {currentAnswer && <QuizIconLoading loading />}

      {options.map((option, index) => (
        <div
          key={option.id}
          role="button"
          tabIndex={index + 1}
          className={`QuizOption ${
            multipleSelection ? getIsSelected(option) : ""
          } ${getIsCorrect(option)}`}
          onClick={() => selectOption(option)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              selectOption(option);
            }
          }}
        >
          <QuizInfoBadge>
            <div className="QuizOptionText">
              <span className="QuizOptionPrefix">
                {generateAlphabet()[index]}
              </span>
              {option.value}
            </div>
          </QuizInfoBadge>
        </div>
      ))}
    </div>
  );
}
