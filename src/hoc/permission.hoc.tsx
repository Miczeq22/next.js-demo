import React from 'react';
import { AppRoute, getLink } from '../router/app-routes';
import { authStorage } from '../context/auth/auth.storage';
import Router from 'next/router';

export enum PermissionType {
  PUBLIC = 'public',
  PRIVATE = 'private',
  GUEST_ONLY = 'guest-only',
}

interface PermissionProviderProps {
  children: React.ReactNode;
  permission?: PermissionType;
}

export const PermissionProvider = ({
  children,
  permission,
}: PermissionProviderProps) => {
  React.useEffect(() => {
    if (
      permission === PermissionType.PRIVATE &&
      !authStorage.getAccessToken()
    ) {
      Router.push(getLink(AppRoute.LOGIN));
    }

    if (
      permission === PermissionType.GUEST_ONLY &&
      authStorage.getAccessToken()
    ) {
      Router.push(getLink(AppRoute.HOME));
    }
  }, []);

  return <>{children}</>;
};
