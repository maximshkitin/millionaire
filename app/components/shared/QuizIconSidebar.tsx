import React, { FC } from "react";
import '@/app/styles/shared/QuizIconSidebar.scss';

interface QuizIconSidebarProps {
  toggleSidebar: () => void;
  type: 'hamburger' | 'close';
}

export const QuizIconSidebar: FC<QuizIconSidebarProps> = ({ toggleSidebar, type }) => (
  <div
    className={`QuizIconSidebar ${type === 'close' ? 'QuizIconClose' : 'QuizIconHamburger'}`}
    onClick={toggleSidebar}
  >
    <div className="line"></div>
    <div className="line"></div>
    {type === 'hamburger' && <div className="line"></div>}
  </div>
);