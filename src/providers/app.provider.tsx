import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme.config';
import { ResetStyles } from '../theme/reset-styles';
import { GlobalStyles } from '../theme/global-styles';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './auth.provider';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider theme={theme}>
        <ResetStyles />
        <GlobalStyles />
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </AnimatePresence>
  );
};
