import { AuthActionTypes, LOGIN, LOGOUT } from './auth.reducer';

export const login = (email: string): AuthActionTypes => ({
  email,
  type: LOGIN,
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT,
});
