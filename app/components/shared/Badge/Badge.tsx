import React, { ReactNode } from "react";

import { BadgeTriangle } from "./BadgeTriangle/BadgeTriangle";

import "./Badge.scss";

interface BadgeProps {
  className?: string;
  children: ReactNode;
}

export function Badge({
  className = "",
  children,
}: BadgeProps) {
  return (
    <div className={`Badge ${className}`}>
      <BadgeTriangle />

      {children}

      <BadgeTriangle isReversed />
    </div>
  );
}
