import React from "react";
import { ClipLoader } from "react-spinners";

import "./QuizIconLoading.scss";

interface QuizIconLoadingProps {
  loading: boolean;
}

export function QuizIconLoading({ loading }: QuizIconLoadingProps) {
  return (
    <div className={`QuizIconLoading ${loading ? "visible" : ""}`}>
      <ClipLoader color="#D0D0D8" loading={loading} size={50} />
    </div>
  );
}
