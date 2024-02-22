import React, { MouseEvent } from "react";

import { LaunchScreen, TextBox } from "@/app/components";
import { buttonText, staticScreenTitle } from "../../config/consts";

interface IntroProps {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function Intro({ handleClick }: IntroProps) {
  return (
    <LaunchScreen
      className="IntroScreen"
      buttonText={buttonText.start}
      handleClick={handleClick}
    >
      <TextBox className="Title">{staticScreenTitle.main}</TextBox>
    </LaunchScreen>
  );
}

export default Intro;
