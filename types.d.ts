import 'styled-components';
import { theme } from './src/theme/theme.config';

type Theme = typeof theme;

export type ThemeType = 'primary' | 'secondary';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type AppAction<K, V = void> = V extends void
  ? { type: K }
  : { type: K } & V;
