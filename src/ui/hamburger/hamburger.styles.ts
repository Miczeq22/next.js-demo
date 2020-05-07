import styled from 'styled-components';
import { ThemeType } from '../../../types';

interface StyledBurgerProps {
  isOpen?: boolean;
  type?: ThemeType;
}

export const StyledBurger = styled.button.attrs(
  ({ isOpen = false, type = 'primary' }: StyledBurgerProps) => ({
    isOpen,
    type,
  })
)`
  width: 32px;
  height: 32px;
  background-color: inherit;
  border: none;
  outline: none;

  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  transform-origin: 1px;
  cursor: pointer;

  & > div {
    width: 32px;
    height: 4px;
    background-color: ${({ theme, type }) =>
      type === 'primary' ? theme.color.primary : theme.color.white};
    border-radius: 10px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
