import React, { ReactNode } from "react";

interface TextBoxProps {
  className?: string;
  children: ReactNode;
}

export function TextBox({ className = "", children }: TextBoxProps) {
  return <div className={`TextBox ${className}`}>{children}</div>;
}
