import React from 'react';
import {
  HeaderContainer,
  Logo,
  Navigation,
  NavigationList,
  NavigationListItem,
  StyledContainer,
  HamburgerContainer,
} from './header.styles';
import { useDeviceDetect } from '../../hooks/use-device-detect/use-device-detect.hook';
import Link from 'next/link';
import { getLink, AppRoute } from '../../router/app-routes';
import { Hamburger } from '../hamburger/hamburger.component';
import { ThemeType } from '../../../types';

interface HeaderProps {
  themeType?: ThemeType;
}

export const Header = ({ themeType = 'primary' }: HeaderProps) => {
  const { isMobile } = useDeviceDetect();

  // TODO: Implement mobile nav
  const onHamburgerClick = () => {};

  return (
    <HeaderContainer type={themeType}>
      <StyledContainer>
        <Logo>
          <Link href={getLink(AppRoute.HOME)}>the shop.</Link>
        </Logo>
        {isMobile ? (
          <HamburgerContainer>
            <Hamburger
              themeType={themeType}
              isOpen={false}
              onClick={onHamburgerClick}
            />
          </HamburgerContainer>
        ) : (
          <Navigation>
            <NavigationList>
              <NavigationListItem type={themeType}>
                <Link href={getLink(AppRoute.CART)}>Your cart</Link>
              </NavigationListItem>
              <NavigationListItem type={themeType}>
                <Link href={getLink(AppRoute.LOGIN)}>Login</Link>
              </NavigationListItem>
            </NavigationList>
          </Navigation>
        )}
      </StyledContainer>
    </HeaderContainer>
  );
};
