import React, { MouseEvent } from "react";

import { LaunchScreen, TextBox } from "@/app/components";
import { buttonText, staticScreenTitle } from "../../config/consts";

interface ResultProps {
  currentScore: number;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function Result({ handleClick, currentScore }: ResultProps) {
  return (
    <LaunchScreen
      className="ResultScreen"
      buttonText={buttonText.again}
      handleClick={handleClick}
    >
      <div>
        <TextBox className="Subtitle">
          {staticScreenTitle.totalScore}
        </TextBox>
        <TextBox className="Title">
          ${currentScore?.toLocaleString()} {staticScreenTitle.earned}
        </TextBox>
      </div>
    </LaunchScreen>
  );
}

export default Result;
