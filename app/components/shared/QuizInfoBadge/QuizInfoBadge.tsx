import React, { ReactNode } from "react";

import { QuizInfoBadgeTriangle } from "./QuizInfoBadgeTriangle/QuizInfoBadgeTriangle";

import "./QuizInfoBadge.scss";

interface QuizInfoBadgeProps {
  className?: string;
  children: ReactNode;
}

export function QuizInfoBadge({
  className = "",
  children,
}: QuizInfoBadgeProps) {
  return (
    <div className={`QuizInfoBadge ${className}`}>
      <QuizInfoBadgeTriangle />

      {children}

      <QuizInfoBadgeTriangle isReversed />
    </div>
  );
}
