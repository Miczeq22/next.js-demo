import React from 'react';
import {
  CheckoutContainer,
  CheckoutLabel,
  CheckoutTile,
  PlaceOrderButton,
  TileLabel,
  TileTitle,
  TotalPrice,
  CheckoutItem,
} from './checkout.styles';
import {
  MailOutlined,
  UserOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';
import { getUSDFormat } from '../../../lib/money';
import { useCart } from '../../../hooks/use-cart/use-cart.hook';
import allProducts from '../../../content/products.json';

export const Checkout = () => {
  const {
    state: { products },
  } = useCart();

  const shppingCost = 1199;
  const productsTotal = React.useMemo(
    () =>
      products.reduce(
        (total, product) =>
          total +
          product.amount *
            allProducts.find(
              (existingProduct) => existingProduct.id === product.id
            ).price,
        0
      ),
    [products]
  );

  return (
    <CheckoutContainer>
      <CheckoutTile>
        <TileTitle>User Checkout</TileTitle>
        <TileLabel>
          <MailOutlined /> john@doe.com
        </TileLabel>
      </CheckoutTile>
      <CheckoutTile>
        <TileTitle>Shipping Information</TileTitle>
        <TileLabel>
          <UserOutlined /> John Doe
        </TileLabel>
        <TileLabel>
          <EnvironmentOutlined /> Privet Drive 4, Little Whinging 4578
        </TileLabel>
        <TileLabel>
          <PhoneOutlined /> 408-341-8172
        </TileLabel>
      </CheckoutTile>
      <CheckoutTile>
        <TileTitle>Payment</TileTitle>
        <TileLabel>
          <CreditCardOutlined /> 1234 5678 9012 3456
        </TileLabel>
      </CheckoutTile>
      <CheckoutItem>
        <CheckoutLabel>Subtotal</CheckoutLabel>
        <CheckoutLabel>{getUSDFormat(productsTotal)}</CheckoutLabel>
      </CheckoutItem>
      <CheckoutItem>
        <CheckoutLabel>Shipping</CheckoutLabel>
        <CheckoutLabel>{getUSDFormat(shppingCost)}</CheckoutLabel>
      </CheckoutItem>
      <CheckoutItem className="special">
        <TotalPrice>Total Price</TotalPrice>
        <TotalPrice>{getUSDFormat(productsTotal + shppingCost)}</TotalPrice>
      </CheckoutItem>
      <PlaceOrderButton type="primary">PLACE YOUR ORDER</PlaceOrderButton>
    </CheckoutContainer>
  );
};
