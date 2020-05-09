import styled from 'styled-components';
import { Container } from '../container/container.styles';
import { ThemeType } from '../../../types';

export const HeaderContainer = styled.header.attrs(
  ({
    type = 'primary',
    sticky = false,
  }: {
    type?: ThemeType;
    sticky?: boolean;
  }) => ({ type, sticky })
)`
  background-color: ${({ theme, type }) =>
    type === 'primary' ? 'inherit' : theme.color.primary};

  & a {
    color: ${({ theme, type }) =>
      type === 'primary' ? theme.color.font : theme.color.white};
    text-decoration: none;
  }

  ${({ sticky, theme }) =>
    sticky &&
    `
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      background-color: ${theme.color.primary};

      & a {
        color: ${theme.color.white};
      }
    `};
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HamburgerContainer = styled.div`
  padding: 15px 25px;
`;

export const Logo = styled.h1`
  font-weight: 700;
  font-size: 23px;
  margin-left: 25px;
`;

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavigationListItem = styled.li.attrs(
  ({ type = 'primary' }: { type?: ThemeType }) => ({ type })
)`
  padding: 15px 25px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ type }) =>
      type === 'primary' ? 'inherit' : '#3F3F3F'};
  }
`;
