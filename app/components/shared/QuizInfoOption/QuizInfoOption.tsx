import React, { ReactNode } from "react";

import { QuizInfoOptionTriangle } from "./QuizInfoOptionTriangle/QuizInfoOptionTriangle";

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
      <QuizInfoOptionTriangle />

      {children}

      <QuizInfoOptionTriangle isReversed />
    </div>
  );
}
