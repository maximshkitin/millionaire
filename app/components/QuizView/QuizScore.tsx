import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { QuizIconSidebar, QuizInfoOption } from '../shared';

import '@/app/styles/QuizView/QuizScore.scss';
import '@/app/styles/shared/QuizIconSidebar.scss'

interface QuizScoreProps {
  scoreList?: number[];
  currentLevelIndex: number;
  open?: boolean
  toggleSidebar: () => void
}

export function QuizScore({ scoreList, currentLevelIndex, open = false, toggleSidebar }: QuizScoreProps) {

  const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 });

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
    <div className={`QuizScoreWrapper ${open ? 'open' : ''}`}>
        <div className="QuizScore">
           { scoreList?.slice().reverse().map(score => (
              <QuizInfoOption key={score} className={getScoreItemClassName(score, scoreList[currentLevelIndex])}>
                 <div className='QuizScoreItem--Text'>${score?.toLocaleString()}</div>
              </QuizInfoOption>
            )
          )}
        </div>
        { isMobileOrTablet && <QuizIconSidebar type={'close'} toggleSidebar={toggleSidebar} /> }
    </div>
  );
}
