import React from 'react';
import { Hamburger } from './hamburger.component';
import { AppProvider } from '../../providers/app.provider';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Hamburger',
  component: Hamburger,
  decorators: [withKnobs, (story) => <AppProvider>{story()}</AppProvider>],
};

export const Default = () => (
  <Hamburger isOpen={boolean('isOpen', false)} onClick={action('onClick')} />
);
