import React, { ReactNode, MouseEvent } from 'react';
import { QuizButton, QuizIcon } from '../shared';
import styles from '@/app/styles/Quiz/QuizView/shared/QuizButton.module.scss';

interface QuizStaticViewProps {
  className: string
  buttonText: string
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}

export const QuizStaticView: React.FC<QuizStaticViewProps> = ({
  className,
  handleClick,
  buttonText,
  children,
}) => (
  <div className={className}>
    <QuizIcon />

    {children}

    <QuizButton className={styles.QuizButton} handleClick={handleClick}>{buttonText}</QuizButton>
  </div>
);
