import React from 'react';

interface QuizScoreProps {
  scoreList?: number[];
  currentScore?: number;
}

export function QuizScore({ scoreList, currentScore }: QuizScoreProps) {
  return <div>d{ scoreList?.join(' ') }, { currentScore } </div>;
}
