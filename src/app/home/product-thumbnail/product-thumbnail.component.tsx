import React from 'react';
import {
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './product-thumbnail.styles';
import Router from 'next/router';

const productVariants = {
  whileHover: {
    scale: 1.03,
    transition: {
      duration: 0.4,
    },
  },
  whileTap: {
    scale: 0.95,
  },
};

export interface ProductThumbnailProps {
  title: string;
  price: string;
  imageUrl: string;
  productUrl: string;
}

export const ProductThumbnail = ({
  title,
  price,
  imageUrl,
  productUrl,
}: ProductThumbnailProps) => {
  const onClick = () => Router.push(productUrl);

  return (
    <ProductContainer
      whileHover="whileHover"
      whileTap="whileTap"
      variants={productVariants}
      onClick={onClick}
    >
      <ProductImage style={{ backgroundImage: `url("${imageUrl}")` }} />
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>$ {price}</ProductPrice>
    </ProductContainer>
  );
};
