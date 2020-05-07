import React from 'react';
import { Header } from './header.component';
import { AppProvider } from '../../providers/app.provider';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Header',
  component: Header,
  decorators: [withKnobs, (story) => <AppProvider>{story()}</AppProvider>],
};

export const Default = () => (
  <Header
    themeType={select('themeType', ['primary', 'secondary'], 'primary')}
  />
);
