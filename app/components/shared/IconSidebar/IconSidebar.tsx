import React from "react";

import "./IconSidebar.scss";

interface IconSidebarProps {
  toggleSidebar: () => void;
  type: "hamburger" | "close";
}

export function IconSidebar({ toggleSidebar, type }: IconSidebarProps) {
  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      role="button"
      className={`IconSidebar ${
        type === "close" ? "IconClose" : "IconHamburger"
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
