import React, { ReactNode, MouseEvent } from 'react';

import '@/app/styles/shared/QuizButton.scss';

interface QuizButtonProps {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}

export function QuizButton({
  handleClick,
  className = '',
  children,
  disabled = false
}: QuizButtonProps) {
  return (
    <div className="QuizButtonWrapper">
      <button className={`QuizButton ${className}`} onClick={handleClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
