import React from "react";
import { useMediaQuery } from "react-responsive";

import { IconSidebar, Badge } from "@/app/components/shared";

import { IconTypeValue } from "@/app/config/types";

import "./Score.scss";

interface ScoreProps {
  scoreList?: number[];
  currentLevelIndex: number;
  open?: boolean;
  toggleSidebar: () => void;
}

export function Score({
  scoreList,
  currentLevelIndex,
  open = false,
  toggleSidebar,
}: ScoreProps) {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });

  const getScoreItemClassName = (score: number, nextScore: number): string => {
    if (score === nextScore) {
      return "ScoreItem ScoreItem--Active";
    }

    if (score < nextScore) {
      return "ScoreItem ScoreItem--Inactive";
    }

    return "ScoreItem";
  };

  return (
    <div className={`ScoreWrapper ${open ? "open" : ""}`}>
      <div className="Score">
        {scoreList
          ?.slice()
          .reverse()
          .map((score) => (
            <Badge
              key={score}
              className={getScoreItemClassName(
                score,
                scoreList[currentLevelIndex],
              )}
            >
              <div className="ScoreItemText">
                ${score?.toLocaleString()}
              </div>
            </Badge>
          ))}
      </div>
      {isMobileOrTablet && (
        <IconSidebar
          type={IconTypeValue.close}
          toggleSidebar={toggleSidebar}
        />
      )}
    </div>
  );
}
