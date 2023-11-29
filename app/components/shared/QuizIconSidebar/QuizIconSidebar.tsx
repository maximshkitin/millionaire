import React from "react";

import "./QuizIconSidebar.scss";

interface QuizIconSidebarProps {
  toggleSidebar: () => void;
  type: "hamburger" | "close";
}

export function QuizIconSidebar({ toggleSidebar, type }: QuizIconSidebarProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={`QuizIconSidebar ${
        type === "close" ? "QuizIconClose" : "QuizIconHamburger"
      }`}
      onClick={toggleSidebar}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          toggleSidebar();
        }
      }}
    >
      <div className="line" />
      <div className="line" />
      {type === "hamburger" && <div className="line" />}
    </div>
  );
}
