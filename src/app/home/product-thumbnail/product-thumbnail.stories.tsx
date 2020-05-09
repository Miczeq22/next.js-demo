import React from 'react';
import { ProductThumbnail } from './product-thumbnail.component';
import { AppProvider } from '../../../providers/app.provider';

export default {
  title: 'Product Thumbnail',
  component: ProductThumbnail,
  decorators: [(story) => <AppProvider>{story()}</AppProvider>],
};

export const Default = () => (
  <ProductThumbnail
    title="Product No.1"
    productUrl="#"
    price={19999}
    imageUrl="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  />
);
