import React, { ReactNode } from "react";

import { QuizOptionTriangle } from "../QuizOptionTriangle/QuizOptionTriangle";

import "./QuizInfoOption.scss";

interface QuizInfoOptionProps {
  className?: string;
  children: ReactNode;
}

export function QuizInfoOption({
  className = "",
  children,
}: QuizInfoOptionProps) {
  return (
    <div className={`QuizInfoOption ${className}`}>
      <QuizOptionTriangle />

      {children}

      <QuizOptionTriangle isReversed />
    </div>
  );
}
