import React from 'react';

import '@/app/styles/QuizView/QuizScore.scss';
import { QuizInfoOption } from '../shared';

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
              <QuizInfoOption key={score} className={getScoreItemClassName(score, scoreList[currentLevelIndex])}>
                 <span>${score?.toLocaleString()}</span>
              </QuizInfoOption>
            )
          )}
        </div>
    </div>
  );
}
