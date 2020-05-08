import React from 'react';
import { Home } from '../app/home/home.component';
import products from '../content/products.json';
import { ProductThumbnailProps } from '../app/home/product-thumbnail/product-thumbnail.component';
import { getProductLink } from '../router/app-routes';

const HomePage = () => {
  const allProducts = React.useMemo<ProductThumbnailProps[]>(
    () =>
      products.map(({ name, price, imageUrl, id }) => ({
        price,
        imageUrl,
        title: name,
        productUrl: getProductLink(id),
      })),
    []
  );

  return <Home products={allProducts} />;
};

export default HomePage;
