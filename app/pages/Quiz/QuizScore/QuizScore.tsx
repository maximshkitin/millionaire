import React from "react";
import { useMediaQuery } from "react-responsive";

import { QuizIconSidebar, QuizInfoBadge } from "../../../components/shared";

import { QuizIconTypeValue } from "@/app/config/types";

import "./QuizScore.scss";

interface QuizScoreProps {
  scoreList?: number[];
  currentLevelIndex: number;
  open?: boolean;
  toggleSidebar: () => void;
}

export function QuizScore({
  scoreList,
  currentLevelIndex,
  open = false,
  toggleSidebar,
}: QuizScoreProps) {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });

  const getScoreItemClassName = (score: number, nextScore: number): string => {
    if (score === nextScore) {
      return "QuizScoreItem QuizScoreItem--Active";
    }

    if (score < nextScore) {
      return "QuizScoreItem QuizScoreItem--Inactive";
    }

    return "QuizScoreItem";
  };

  return (
    <div className={`QuizScoreWrapper ${open ? "open" : ""}`}>
      <div className="QuizScore">
        {scoreList
          ?.slice()
          .reverse()
          .map((score) => (
            <QuizInfoBadge
              key={score}
              className={getScoreItemClassName(
                score,
                scoreList[currentLevelIndex],
              )}
            >
              <div className="QuizScoreItemText">
                ${score?.toLocaleString()}
              </div>
            </QuizInfoBadge>
          ))}
      </div>
      {isMobileOrTablet && (
        <QuizIconSidebar
          type={QuizIconTypeValue.close}
          toggleSidebar={toggleSidebar}
        />
      )}
    </div>
  );
}