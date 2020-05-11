import React from 'react';
import { Checkout } from './checkout.component';
import { AppProvider } from '../../../providers/app.provider';

export default {
  title: 'Checkout',
  component: Checkout,
  decorators: [(story) => <AppProvider>{story()}</AppProvider>],
};

export const Default = () => <Checkout />;
