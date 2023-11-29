"use client";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  AnswerOption,
  QuestionType,
  QuestionTypeValue,
  QuizIconTypeValue,
} from "@/app/config/types";
import { QuizScore } from "./QuizScore/QuizScore";
import { QuizOptions, QuizOptionsMultiselect } from "./QuizOptions";
import { QuizIconSidebar } from "../shared";

import "../shared/QuizIconSidebar/QuizIconSidebar.scss";
import "./QuizView.scss";

interface QuizViewProps {
  className: string;
  type: QuestionType;
  answerOptions: AnswerOption[];
  scoreList: number[];
  correctAnswer: string[];
  currentLevelIndex: number;
  handleSubmitAnswer: (answer: AnswerOption[]) => void;
  children: React.ReactNode;
}

export function QuizView({
  className,
  type,
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

  return (
    <div className={className}>
      <div className="QuizContent">
        {children}
        {type === QuestionTypeValue.multiselect ? (
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
        <QuizIconSidebar type={QuizIconTypeValue.hamburger} toggleSidebar={toggleSidebar} />
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
