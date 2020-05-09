import React from 'react';
import { ProductList } from './product-list.component';
import { AppProvider } from '../../../providers/app.provider';

export default {
  title: 'Product List',
  component: ProductList,
  decorators: [(story) => <AppProvider>{story()}</AppProvider>],
};

export const Default = () => (
  <ProductList
    products={[
      {
        title: 'Product No.1',
        price: 19999,
        imageUrl:
          'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        productUrl: '#',
      },
      {
        title: 'Product No.1',
        price: 19999,
        imageUrl:
          'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        productUrl: '#',
      },
      {
        title: 'Product No.1',
        price: 19999,
        imageUrl:
          'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        productUrl: '#',
      },
      {
        title: 'Product No.1',
        price: 19999,
        imageUrl:
          'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        productUrl: '#',
      },
      {
        title: 'Product No.1',
        price: 19999,
        imageUrl:
          'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        productUrl: '#',
      },
    ]}
  />
);

export const Empty = () => <ProductList products={[]} />;
