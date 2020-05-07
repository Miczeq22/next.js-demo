import 'styled-components';
import { theme } from './src/theme/theme.config';

type Theme = typeof theme;

export type ThemeType = 'primary' | 'secondary';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
