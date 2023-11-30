import React from "react";

import "./QuizInfoOptionTriangle.scss";

interface QuizInfoOptionTriangleProps {
  isReversed?: boolean;
  isMobile?: boolean;
}

export function QuizInfoOptionTriangle({
  isReversed = false,
  isMobile = false,
}: QuizInfoOptionTriangleProps) {
  const reversedPostfix = isReversed ? "reversed" : "";
  const mobilePostfix = isMobile ? "mobile" : "";

  return (
    <div
      className={`QuizInfoOptionTriangleWrapper ${reversedPostfix} ${mobilePostfix}`}
    >
      <div className="QuizInfoOptionTriangle" />
      <div className="QuizInfoOptionTriangleBorder QuizInfoOptionTriangleBorderTop" />
      <div className="QuizInfoOptionTriangleBorder QuizInfoOptionTriangleBorderBottom" />
    </div>
  );
}
