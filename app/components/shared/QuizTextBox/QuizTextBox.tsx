import React, { ReactNode } from "react";

interface QuizTextPropsProps {
  className?: string;
  children: ReactNode;
}

export function QuizTextBox({ className = "", children }: QuizTextPropsProps) {
  return <div className={`QuizTextBox ${className}`}>{children}</div>;
}
