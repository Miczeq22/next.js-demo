import React from 'react';
import { AuthStateApi, AuthContext } from '../../context/auth/auth.context';

export const useAuth = (): AuthStateApi => {
  const context = React.useContext(AuthContext) as AuthStateApi;

  if (!context) {
    throw new Error('useAuth should be used within AuthStateProvider');
  }

  return context;
};
