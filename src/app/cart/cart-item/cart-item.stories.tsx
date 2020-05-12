import React from 'react';
import { CartItem } from './cart-item.component';
import { AppProvider } from '../../../providers/app.provider';
import { withKnobs, number, text } from '@storybook/addon-knobs';

export default {
  title: 'Cart Item',
  component: CartItem,
  decorators: [withKnobs, (story) => <AppProvider>{story()}</AppProvider>],
};

export const Default = () => (
  <CartItem
    id="1"
    count={number('count', 1, {
      min: 1,
    })}
    price={number('price', 29999, {
      min: 1,
    })}
    imageUrl="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    name={text('name', 'Product No.1')}
  />
);
