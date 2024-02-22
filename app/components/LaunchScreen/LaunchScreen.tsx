import React, { ReactNode, MouseEvent } from "react";
import { Button, IconLogo } from "../shared";

import "./LaunchScreen.scss";

interface LaunchScreenProps {
  className: string;
  buttonText: string;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export function LaunchScreen({
  className,
  handleClick,
  buttonText,
  children,
}: LaunchScreenProps) {
  return (
    <div className={`LaunchScreen ${className}`}>
      <IconLogo />

      <div className="LaunchScreenAction">
        {children}
        <Button className="Button" handleClick={handleClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default LaunchScreen;
