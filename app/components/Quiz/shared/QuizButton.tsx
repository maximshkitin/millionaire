import React from 'react'

export const QuizButton = ({
  handleClick,
  className = '',
  children,
  ...restProps
}: any) => (
  <div className="button-wrapper">
    <button className={className} onClick={handleClick} {...restProps}>
      {children}
    </button>
  </div>
)
