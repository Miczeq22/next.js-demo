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
import { useAuth } from '../../hooks/use-auth/use-auth.hook';
import { logout } from '../../context/auth/auth.action-creators';
import { authStorage } from '../../context/auth/auth.storage';
import Router from 'next/router';

interface HeaderProps {
  themeType?: ThemeType;
  sticky?: boolean;
}

export const Header = ({
  themeType = 'primary',
  sticky = false,
}: HeaderProps) => {
  const { isMobile } = useDeviceDetect();
  const {
    state: { isLoggedIn },
    dispatch,
  } = useAuth();

  // TODO: Implement mobile nav
  const onHamburgerClick = () => {};

  const onLogout = () => {
    dispatch(logout());
    authStorage.setAccessToken(null);
    Router.push(getLink(AppRoute.HOME));
  };

  return (
    <HeaderContainer type={themeType} sticky={sticky}>
      <StyledContainer>
        <Logo>
          <Link href={getLink(AppRoute.HOME)}>
            <a>the shop.</a>
          </Link>
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
                {isLoggedIn && (
                  <Link href={getLink(AppRoute.CART)}>
                    <a>Your cart</a>
                  </Link>
                )}
              </NavigationListItem>
              <NavigationListItem type={themeType}>
                {isLoggedIn ? (
                  <a onClick={onLogout}>Logout</a>
                ) : (
                  <Link href={getLink(AppRoute.LOGIN)}>
                    <a>Login</a>
                  </Link>
                )}
              </NavigationListItem>
            </NavigationList>
          </Navigation>
        )}
      </StyledContainer>
    </HeaderContainer>
  );
};
