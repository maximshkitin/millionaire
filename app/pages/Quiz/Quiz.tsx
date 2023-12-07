"use client";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { AnswerOption, QuizIconTypeValue } from "@/app/config/types";
import { QuizScore } from "./QuizScore/QuizScore";
import { QuizIconSidebar } from "@/app/components/shared";
import { QuizOptions, QuizOptionsMultiselect } from "./QuizOptions";

import "./Quiz.scss";

interface QuizViewProps {
  className: string;
  answerOptions: AnswerOption[];
  scoreList: number[];
  correctAnswer: string[];
  currentLevelIndex: number;
  handleSubmitAnswer: (answer: AnswerOption[]) => void;
  children: React.ReactNode;
}

export function Quiz({
  className,
  answerOptions,
  scoreList,
  correctAnswer,
  currentLevelIndex,
  handleSubmitAnswer,
  children,
}: QuizViewProps) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });

  const toggleSidebar = () => setOpenSidebar(!openSidebar);

  const isMultiselect = correctAnswer?.length > 1;

  return (
    <div className={className}>
      <div className="QuizContent">
        {children}
        {isMultiselect ? (
          <QuizOptionsMultiselect
            options={answerOptions}
            correctAnswer={correctAnswer}
            handleSubmitAnswer={handleSubmitAnswer}
          />
        ) : (
          <QuizOptions
            options={answerOptions}
            correctAnswer={correctAnswer}
            handleClick={handleSubmitAnswer}
          />
        )}
      </div>

      {isMobileOrTablet && (
        <QuizIconSidebar
          type={QuizIconTypeValue.hamburger}
          toggleSidebar={toggleSidebar}
        />
      )}
      <QuizScore
        open={openSidebar}
        toggleSidebar={toggleSidebar}
        scoreList={scoreList}
        currentLevelIndex={currentLevelIndex}
      />
    </div>
  );
}
