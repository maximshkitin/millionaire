import React, { ReactNode, MouseEvent } from "react";

import "./QuizButton.scss";

interface QuizButtonProps {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  tabIndex?: number;
}

export function QuizButton({
  handleClick,
  className = "",
  children,
  disabled = false,
  ...restProps
}: QuizButtonProps) {
  return (
    <div className="QuizButtonWrapper">
      <button
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...restProps}
        type="button"
        className={`QuizButton ${className}`}
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}
