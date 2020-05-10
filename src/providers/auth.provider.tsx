import React from 'react';
import { authReducer } from '../context/auth/auth.reducer';
import { authInitialState, AuthContext } from '../context/auth/auth.context';
import { login, logout } from '../context/auth/auth.action-creators';
import { authStorage } from '../context/auth/auth.storage';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(authReducer, authInitialState);

  React.useEffect(() => {
    const accessToken = authStorage.getAccessToken();

    if (accessToken) {
      dispatch(login(accessToken));
    } else {
      dispatch(logout());
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
