import React from 'react';
import { Product } from '../../app/product/product.component';
import { getAllProductIDs, getProduct } from '../../lib/products';

const ProductPage = ({ product }) => {
  return <Product {...product} />;
};

export const getStaticPaths = () => ({
  paths: getAllProductIDs(),
  fallback: false,
});

export const getStaticProps = (id) => {
  const product = getProduct(id);

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
