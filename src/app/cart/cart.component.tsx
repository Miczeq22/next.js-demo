import React from 'react';
import {
  CartTitle,
  StyledContainer,
  ItemsContainer,
  CheckoutContainer,
  PageContainer,
} from './cart.styles';
import { CartItemList } from './cart-item-list/cart-item-list.component';
import { Checkout } from './checkout/checkout.component';
import { useCart } from '../../hooks/use-cart/use-cart.hook';
import { CartItemProps } from './cart-item/cart-item.component';
import allProducts from '../../content/products.json';

export const Cart = () => {
  const {
    state: { products },
  } = useCart();

  const items = React.useMemo<CartItemProps[]>(() => {
    return products.map(({ id, amount }) => ({
      ...allProducts.find((product) => product.id === id),
      count: amount,
    }));
  }, [products]);

  return (
    <PageContainer>
      <StyledContainer>
        <ItemsContainer>
          <CartTitle>Your Cart</CartTitle>
          <CartItemList items={items} />
        </ItemsContainer>
        <CheckoutContainer>
          <Checkout />
        </CheckoutContainer>
      </StyledContainer>
    </PageContainer>
  );
};
