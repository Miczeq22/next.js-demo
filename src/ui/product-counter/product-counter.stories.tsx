import React from 'react';
import { ProductCounter } from './product-counter.component';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { AppProvider } from '../../providers/app.provider';

export default {
  title: 'Product Counter',
  component: ProductCounter,
  decorators: [withKnobs, (story) => <AppProvider>{story()}</AppProvider>],
};

export const Default = () => (
  <ProductCounter
    initialPrice={number('initialPrice', 1, {
      min: 1,
    })}
    onChange={action('onChange')}
  />
);
