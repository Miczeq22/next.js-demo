import React from 'react';
import { Product } from '../../app/product/product.component';
import { getAllProductIDs, getProduct } from '../../lib/products';
import { useRouter } from 'next/router';
import { ProductNotFound } from '../../app/home/product-not-found/product-not-found.component';

const ProductPage = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <ProductNotFound />;
  }

  return <Product {...product} />;
};

export const getStaticPaths = () => ({
  paths: getAllProductIDs(),
  fallback: true,
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
