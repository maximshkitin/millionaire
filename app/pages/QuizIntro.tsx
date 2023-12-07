import React, { MouseEvent } from "react";

import { QuizLaunch, QuizTextBox } from "@/app/components";
import { buttonText, staticScreenTitle } from "../config/consts";

interface QuizIntroProps {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function QuizIntro({ handleClick }: QuizIntroProps) {
  return (
    <QuizLaunch
      className="QuizStartScreen"
      buttonText={buttonText.start}
      handleClick={handleClick}
    >
      <QuizTextBox className="QuizTitle">{staticScreenTitle.main}</QuizTextBox>
    </QuizLaunch>
  );
}

export default QuizIntro;
