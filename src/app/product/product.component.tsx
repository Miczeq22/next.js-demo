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
import { useAuth } from '../../hooks/use-auth/use-auth.hook';
import { useCart } from '../../hooks/use-cart/use-cart.hook';
import { setProductsInCart } from '../../context/cart/cart.action-creators';
import Router from 'next/router';
import { productStorage } from '../../context/cart/cart.storage';

interface ProductProps {
  id: string;
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

export const Product = ({
  id,
  name,
  price,
  imageUrl,
  description,
}: ProductProps) => {
  const [amount, setAmount] = React.useState(1);

  const {
    state: { isLoggedIn },
  } = useAuth();

  const {
    dispatch,
    state: { products },
  } = useCart();

  const onAddToCart = () => {
    const newProducts = [
      ...products.filter((product) => product.id !== id),
      { id, amount },
    ];

    productStorage.setProducts(newProducts);
    dispatch(setProductsInCart(newProducts));
    Router.push(getLink(AppRoute.HOME));
  };

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
          <ProductCounter initialPrice={price} onChange={setAmount} />
        </ProductPrice>
        <ButtonsContainer
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <AddToCartButton
            type="primary"
            disabled={!isLoggedIn}
            onClick={onAddToCart}
          >
            ADD TO CART
          </AddToCartButton>
        </ButtonsContainer>
      </ProductInformation>
    </ProductContainer>
  );
};
