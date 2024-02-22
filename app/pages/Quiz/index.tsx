"use client";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { AnswerOption, IconTypeValue } from "@/app/config/types";
import { Score } from "../../components/Score/Score";
import { IconSidebar } from "@/app/components/shared";
import { AnswerOptions, AnswerOptionsMultiselect } from "../../components/AnswerOptions";

import "./index.scss";

interface QuizProps {
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
}: QuizProps) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });

  const toggleSidebar = () => setOpenSidebar(!openSidebar);

  const isMultiselect = correctAnswer?.length > 1;

  return (
    <div className={className}>
      <div className="QuizContent">
        {children}
        {isMultiselect ? (
          <AnswerOptionsMultiselect
            options={answerOptions}
            correctAnswer={correctAnswer}
            handleSubmitAnswer={handleSubmitAnswer}
          />
        ) : (
          <AnswerOptions
            options={answerOptions}
            correctAnswer={correctAnswer}
            handleClick={handleSubmitAnswer}
          />
        )}
      </div>

      {isMobileOrTablet && (
        <IconSidebar
          type={IconTypeValue.hamburger}
          toggleSidebar={toggleSidebar}
        />
      )}
      <Score
        open={openSidebar}
        toggleSidebar={toggleSidebar}
        scoreList={scoreList}
        currentLevelIndex={currentLevelIndex}
      />
    </div>
  );
}
