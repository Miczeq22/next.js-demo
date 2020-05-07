import React from 'react';
import { StyledBurger } from './hamburger.styles';

interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Hamburger = ({ isOpen, onClick }: HamburgerProps) => {
  return (
    <StyledBurger onClick={onClick} isOpen={isOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
