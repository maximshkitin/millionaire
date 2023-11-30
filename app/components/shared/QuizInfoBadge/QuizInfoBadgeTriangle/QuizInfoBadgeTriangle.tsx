import React from "react";

import "./QuizInfoBadgeTriangle.scss";

interface QuizInfoBadgeTriangleProps {
  isReversed?: boolean;
  isMobile?: boolean;
}

export function QuizInfoBadgeTriangle({
  isReversed = false,
  isMobile = false,
}: QuizInfoBadgeTriangleProps) {
  const reversedPostfix = isReversed ? "reversed" : "";
  const mobilePostfix = isMobile ? "mobile" : "";

  return (
    <div
      className={`QuizInfoBadgeTriangleWrapper ${reversedPostfix} ${mobilePostfix}`}
    >
      <div className="QuizInfoBadgeTriangle" />
      <div className="QuizInfoBadgeTriangleBorder QuizInfoBadgeTriangleBorderTop" />
      <div className="QuizInfoBadgeTriangleBorder QuizInfoBadgeTriangleBorderBottom" />
    </div>
  );
}
