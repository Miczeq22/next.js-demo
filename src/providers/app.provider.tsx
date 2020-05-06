import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme.config';
import { ResetStyles } from '../theme/reset-styles';
import { GlobalStyles } from '../theme/global-styles';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
