import React, { ReactNode, MouseEvent } from "react";
import { QuizButton, QuizIcon } from "../../shared";

import "./QuizStaticView.scss";

interface QuizStaticViewProps {
  className: string;
  buttonText: string;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export function QuizStaticView({
  className,
  handleClick,
  buttonText,
  children,
}: QuizStaticViewProps) {
  return (
    <div className={`QuizStaticView ${className}`}>
      <QuizIcon />

      <div className="QuizStaticViewAction">
        {children}
        <QuizButton className="QuizButton" handleClick={handleClick}>
          {buttonText}
        </QuizButton>
      </div>
    </div>
  );
}

export default QuizStaticView;
