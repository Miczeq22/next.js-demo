import React from 'react';
import {
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './product-thumbnail.styles';
import Link from 'next/link';
import { getUSDFormat } from '../../../lib/money';

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
  price: number;
  imageUrl: string;
  productUrl: string;
}

export const ProductThumbnail = ({
  title,
  price,
  imageUrl,
  productUrl,
}: ProductThumbnailProps) => {
  return (
    <Link href={productUrl}>
      <ProductContainer
        whileHover="whileHover"
        whileTap="whileTap"
        variants={productVariants}
        href={productUrl}
      >
        <ProductImage style={{ backgroundImage: `url("${imageUrl}")` }} />
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{getUSDFormat(price)}</ProductPrice>
      </ProductContainer>
    </Link>
  );
};
