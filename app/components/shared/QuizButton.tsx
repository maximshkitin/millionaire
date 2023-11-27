import React, { ReactNode, MouseEvent } from 'react';

interface QuizButtonProps {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: ReactNode;
}

export function QuizButton({
  handleClick,
  className = '',
  children,
}: QuizButtonProps) {
  return (
    <div className="QuizButtonWrapper">
      <button className={`QuizButton ${className}`} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
}
