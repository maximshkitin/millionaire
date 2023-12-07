import React, { MouseEvent } from "react";

import { QuizLaunch, QuizTextBox } from "@/app/components";
import { buttonText, staticScreenTitle } from "../config/consts";

interface QuizResultProps {
  currentScore: number;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function QuizResult({ handleClick, currentScore }: QuizResultProps) {
  return (
    <QuizLaunch
      className="QuizFinalScreen"
      buttonText={buttonText.again}
      handleClick={handleClick}
    >
      <div>
        <QuizTextBox className="QuizSubtitle">
          {staticScreenTitle.totalScore}
        </QuizTextBox>
        <QuizTextBox className="QuizTitle">
          ${currentScore?.toLocaleString()} {staticScreenTitle.earned}
        </QuizTextBox>
      </div>
    </QuizLaunch>
  );
}

export default QuizResult;
