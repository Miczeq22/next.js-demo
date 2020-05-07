import React from 'react';
import { StyledBurger } from './hamburger.styles';
import { ThemeType } from '../../../types';

interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  themeType?: ThemeType;
}

export const Hamburger = ({
  isOpen,
  onClick,
  themeType = 'primary',
}: HamburgerProps) => {
  return (
    <StyledBurger
      className="hamburger"
      onClick={onClick}
      isOpen={isOpen}
      type={themeType}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
