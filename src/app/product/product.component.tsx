import React from 'react';
import {
  ProductContainer,
  ProductImage,
  ProductInformation,
  ProductName,
  ProductDescription,
  ProductPrice,
  ButtonsContainer,
  AddToCartButton,
  BackToProductsLink,
} from './product.styles';
import ReactMarkdown from 'react-markdown';
import { ProductCounter } from '../../ui/product-counter/product-counter.component';
import Link from 'next/link';
import { getLink, AppRoute } from '../../router/app-routes';
import { LeftOutlined } from '@ant-design/icons';

interface ProductProps {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const onProductChange = (amount: number) => {};

export const Product = ({
  name,
  price,
  imageUrl,
  description,
}: ProductProps) => {
  return (
    <ProductContainer
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <ProductImage
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 200, opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, ease: easing }}
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      <ProductInformation variants={stagger} animate="animate">
        <Link href={getLink(AppRoute.HOME)}>
          <BackToProductsLink
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <LeftOutlined />
            Back to products
          </BackToProductsLink>
        </Link>
        <ProductName variants={fadeInUp} initial="initial" animate="animate">
          {name}
        </ProductName>
        <ProductDescription
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <ReactMarkdown source={description} />
        </ProductDescription>
        <ProductPrice variants={fadeInUp} initial="initial" animate="animate">
          <ProductCounter initialPrice={price} onChange={onProductChange} />
        </ProductPrice>
        <ButtonsContainer
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <AddToCartButton type="primary">ADD TO CART</AddToCartButton>
        </ButtonsContainer>
      </ProductInformation>
    </ProductContainer>
  );
};
