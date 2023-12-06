import React from "react";

import { QuizLaunch, QuizLaunchProps } from "@/app/components";

export function QuizIntro({ children, ...restProps }: QuizLaunchProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <QuizLaunch {...restProps}>{children}</QuizLaunch>
  );
}

export default QuizIntro;
