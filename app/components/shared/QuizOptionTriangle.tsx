import React from 'react';

import '@/app/styles/shared/QuizOptionTriangle.scss';

interface QuizOptionTriangleProps {
  isReversed?: boolean;
  isMobile?: boolean
}

export function QuizOptionTriangle({ isReversed = false, isMobile = false }: QuizOptionTriangleProps) {

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
