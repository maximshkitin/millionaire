import React from 'react';

import '@/app/styles/QuizView/QuizOptions/QuizOptionTriangle.scss';

interface QuizInfoOptionTriangleProps {
  isReversed?: boolean;
  isMobile?: boolean
}

export function QuizOptionTriangle({ isReversed = false, isMobile = false }: QuizInfoOptionTriangleProps) {

    const reversedPostfix = isReversed ? 'reversed' : '';
    const mobilePostfix = isMobile ? 'mobile' : '';

    return (
        <div className={`QuizOptionTriangleWrapper ${reversedPostfix} ${mobilePostfix}`}>
            <div className="QuizOptionTriangle"></div>
            <div className="QuizOptionTriangleBorder QuizOptionTriangleBorderTop"></div>
            <div className="QuizOptionTriangleBorder QuizOptionTriangleBorderBottom"></div>
        </div>
    );
}
