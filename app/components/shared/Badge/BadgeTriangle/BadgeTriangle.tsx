import React from "react";

import "./BadgeTriangle.scss";

interface BadgeTriangleProps {
  isReversed?: boolean;
  isMobile?: boolean;
}

export function BadgeTriangle({
  isReversed = false,
  isMobile = false,
}: BadgeTriangleProps) {
  const reversedPostfix = isReversed ? "reversed" : "";
  const mobilePostfix = isMobile ? "mobile" : "";

  return (
    <div
      className={`BadgeTriangleWrapper ${reversedPostfix} ${mobilePostfix}`}
    >
      <div className="BadgeTriangle" />
      <div className="BadgeTriangleBorder BadgeTriangleBorderTop" />
      <div className="BadgeTriangleBorder BadgeTriangleBorderBottom" />
    </div>
  );
}
