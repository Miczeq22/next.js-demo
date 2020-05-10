import React from 'react';
import { Product } from '../../app/product/product.component';
import { getAllProductIDs, getProduct } from '../../lib/products';
import { useRouter } from 'next/router';

const ProductPage = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>This product does not exist</h2>;
  }

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
