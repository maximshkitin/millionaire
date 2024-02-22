import React, { ReactNode, MouseEvent } from "react";

import "./Button.scss";

interface ButtonProps {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  tabIndex?: number;
}

export function Button({
  handleClick,
  className = "",
  children,
  disabled = false,
  ...restProps
}: ButtonProps) {
  return (
    <div className="ButtonWrapper">
      <button
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...restProps}
        type="button"
        className={`Button ${className}`}
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}
