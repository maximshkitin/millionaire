import React, { ReactNode, MouseEvent } from "react";
import { QuizButton, QuizIcon } from "../shared";

import "./QuizLaunch.scss";

interface QuizLaunchProps {
  className: string;
  buttonText: string;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export function QuizLaunch({
  className,
  handleClick,
  buttonText,
  children,
}: QuizLaunchProps) {
  return (
    <div className={`QuizLaunch ${className}`}>
      <QuizIcon />

      <div className="QuizLaunchAction">
        {children}
        <QuizButton className="QuizButton" handleClick={handleClick}>
          {buttonText}
        </QuizButton>
      </div>
    </div>
  );
}

export default QuizLaunch;
