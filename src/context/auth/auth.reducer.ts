import { AppAction } from '../../../types';

export const LOGIN = 'auth/login';
export const LOGOUT = 'auth/logout';

export type AuthActionTypes =
  | AppAction<typeof LOGIN, { email: string }>
  | AppAction<typeof LOGOUT>;

export interface AuthState {
  isLoggedIn: boolean;
  email: string;
}

export const authReducer = (
  state: AuthState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN: {
      return {
        isLoggedIn: true,
        email: action.email,
      };
    }

    case LOGOUT: {
      return {
        isLoggedIn: false,
        email: '',
      };
    }

    default:
      return state;
  }
};
