import React from 'react';
import { EmptyContainer } from './empty-container.component';
import { AppProvider } from '../../providers/app.provider';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Empty Container',
  component: EmptyContainer,
  decorators: [withKnobs, (story) => <AppProvider>{story()}</AppProvider>],
};

export const Default = () => (
  <EmptyContainer label={text('label', 'There is no data...')} />
);
