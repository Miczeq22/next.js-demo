import React from 'react';
import { CartItemList } from './cart-item-list.component';
import { AppProvider } from '../../../providers/app.provider';

export default {
  title: 'Cart Item List',
  component: CartItemList,
  decorators: [(story) => <AppProvider>{story()}</AppProvider>],
};

export const EmptyList = () => <CartItemList items={[]} />;

export const Default = () => (
  <CartItemList
    items={[
      {
        id: '1',
        count: 2,
        price: 19999,
        imageUrl:
          'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        name: 'Product No.1',
      },
      {
        id: '2',
        count: 5,
        price: 199999,
        imageUrl:
          'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        name: 'Product No.2',
      },
      {
        id: '3',
        count: 1,
        price: 1999999,
        imageUrl:
          'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        name: 'Product No.3',
      },
    ]}
  />
);
