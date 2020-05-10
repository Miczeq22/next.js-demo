import React from 'react';
import { authReducer } from '../context/auth/auth.reducer';
import { authInitialState, AuthContext } from '../context/auth/auth.context';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(authReducer, authInitialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
