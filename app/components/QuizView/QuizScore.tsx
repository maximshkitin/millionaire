import React from 'react';

import '@/app/styles/QuizView/QuizScore.scss';

interface QuizScoreProps {
  scoreList?: number[];
  currentLevelIndex: number;
}

export function QuizScore({ scoreList, currentLevelIndex }: QuizScoreProps) {

  const getScoreItemClassName = (score: number, nextScore: number): string => {

    if (score === nextScore) {
      return "QuizScoreItem QuizScoreItemActive";
    }

    if (score < nextScore) {
      return "QuizScoreItem QuizScoreItemInactive";
    }

    return "QuizScoreItem";
  }

  return (
    <div className="QuizScoreWrapper">
        <div className="QuizScore">
           { scoreList?.slice().reverse().map(score => (
              <div key={score} className={getScoreItemClassName(score, scoreList[currentLevelIndex])}>${score}</div>
            )
          ) }
        </div>
    </div>
  );
}
